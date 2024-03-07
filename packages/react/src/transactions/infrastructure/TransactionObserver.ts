import {
  SafeApolloClient,
  DiGiTransactionStatusDocument,
  DiGiTransactionStatusData,
  DiGiTransactionStatusVariables,
  DiGiTransactionFailureType,
  DiGiTransactionStatusType,
} from '@digiv3rse/api-bindings';
import { TransactionError, TransactionErrorReason } from '@digiv3rse/domain/entities';
import { failure, never, PromiseResult, Result, success } from '@digiv3rse/shared-kernel';

import { IProviderFactory } from '../../wallet/adapters/IProviderFactory';
import {
  ConfirmationRequest,
  IndexingEvent,
  IndexingEventRequest,
  ITransactionObserver,
} from './TransactionFactory';

const ONE_SECOND = 1000; // ms

/**
 * The transaction observer timings
 *
 * @internal
 */
export type TransactionObserverTimings = {
  pollingInterval: number; // ms // TODO move this definition closer to EnvironmentConfig, not used by TransactionObserver
  maxMiningWaitTime: number; // ms
  maxIndexingWaitTime: number; // ms
};

function delay(waitInMs: number) {
  return new Promise((resolve) => setTimeout(resolve, waitInMs));
}

function resolveTransactionErrorReason(reason: DiGiTransactionFailureType) {
  switch (reason) {
    case DiGiTransactionFailureType.Reverted:
      return TransactionErrorReason.REVERTED;
    default:
      return TransactionErrorReason.UNKNOWN;
  }
}

export class TransactionObserver implements ITransactionObserver {
  constructor(
    private readonly providerFactory: IProviderFactory,
    private readonly apolloClient: SafeApolloClient,
    private readonly timings: TransactionObserverTimings,
  ) {}

  async waitForConfirmation(request: ConfirmationRequest): PromiseResult<void, TransactionError> {
    const provider = await this.providerFactory.createProvider({ chainType: request.chainType });
    const startedAt = Date.now();

    while (Date.now() - startedAt <= this.timings.maxMiningWaitTime) {
      const txResponse = await provider.getTransaction(request.txHash);

      if (txResponse === null) {
        await delay(ONE_SECOND);
        continue;
      }
      try {
        await Promise.race([
          txResponse.wait(1),

          delay(this.timings.maxMiningWaitTime).then(() => {
            throw new TransactionError(TransactionErrorReason.MINING_TIMEOUT);
          }),
        ]);
        return success();
      } catch (e) {
        if (e instanceof TransactionError) {
          return failure(e);
        }
        throw e;
      }
    }
    return failure(new TransactionError(TransactionErrorReason.MINING_TIMEOUT));
  }

  async waitForNextIndexingEvent(
    request: IndexingEventRequest,
  ): PromiseResult<IndexingEvent, TransactionError> {
    const startedAt = Date.now();
    const observable = this.apolloClient.poll<
      DiGiTransactionStatusData,
      DiGiTransactionStatusVariables
    >({
      query: DiGiTransactionStatusDocument,
      variables: {
        request: request.relayerTxId
          ? {
              forTxId: request.relayerTxId,
            }
          : {
              forTxHash: request.txHash,
            },
      },
    });
    let previousTxHash: string | null = null;

    return new Promise<Result<IndexingEvent, TransactionError>>((resolve, reject) => {
      const subscription = observable.subscribe({
        next: async ({ result }) => {
          // keep trying for now until API race condition is solved
          if (result === null) {
            return;
          }

          if (result.status === DiGiTransactionStatusType.Failed) {
            subscription.unsubscribe();
            resolve(
              failure(
                new TransactionError(
                  resolveTransactionErrorReason(result.reason ?? never(`Missing reason`)),
                ),
              ),
            );
            return;
          }

          if (previousTxHash === null) {
            previousTxHash = result.txHash;
          }

          if (
            previousTxHash !== result.txHash ||
            result.status === DiGiTransactionStatusType.Complete
          ) {
            subscription.unsubscribe();
            resolve(
              success({
                indexed: result.status === DiGiTransactionStatusType.Complete,
                txHash: result.txHash,
              }),
            );
            return;
          }

          if (Date.now() - startedAt > this.timings.maxIndexingWaitTime) {
            subscription.unsubscribe();

            resolve(failure(new TransactionError(TransactionErrorReason.INDEXING_TIMEOUT)));
          }
        },
        error: reject,
      });
    });
  }
}
