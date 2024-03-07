import {
  BroadcastOnchainData,
  BroadcastOnchainDocument,
  BroadcastOnchainVariables,
  RelaySuccess,
  SafeApolloClient,
} from '@digiv3rse/api-bindings';
import { MetaTransaction } from '@digiv3rse/domain/entities';
import {
  IOnChainRelayer,
  BroadcastingError,
  ProtocolTransactionRequest,
  BroadcastingErrorReason,
} from '@digiv3rse/domain/use-cases/transactions';
import {
  assertError,
  ChainType,
  failure,
  ILogger,
  PromiseResult,
  success,
} from '@digiv3rse/shared-kernel';

import { SignedProtocolCall } from '../../wallet/adapters/ConcreteWallet';
import { ITransactionFactory } from './ITransactionFactory';
import { handleRelayError } from './relayer';

export class OnChainRelayer implements IOnChainRelayer<ProtocolTransactionRequest> {
  constructor(
    private apolloClient: SafeApolloClient,
    private factory: ITransactionFactory<ProtocolTransactionRequest>,
    private logger: ILogger,
  ) {}

  async relayProtocolCall<T extends ProtocolTransactionRequest>(
    signedCall: SignedProtocolCall<T>,
  ): PromiseResult<MetaTransaction<T>, BroadcastingError> {
    const result = await this.relayWithProfileManager(signedCall);

    if (result.isFailure()) return result;

    const receipt = result.value;

    const transaction = this.factory.createMetaTransaction({
      chainType: ChainType.POLYGON,
      id: signedCall.id,
      request: signedCall.request,
      nonce: signedCall.nonce,
      relayerTxId: receipt.txId,
      txHash: receipt.txHash,
    });

    return success(transaction);
  }

  private async relayWithProfileManager<T extends ProtocolTransactionRequest>(
    signedCall: SignedProtocolCall<T>,
  ): PromiseResult<RelaySuccess, BroadcastingError> {
    try {
      const { data } = await this.apolloClient.mutate<
        BroadcastOnchainData,
        BroadcastOnchainVariables
      >({
        mutation: BroadcastOnchainDocument,
        variables: {
          request: {
            id: signedCall.id,
            signature: signedCall.signature,
          },
        },
      });

      if (data.result.__typename === 'RelayError') {
        return handleRelayError(data.result);
      }

      return success(data.result);
    } catch (err) {
      assertError(err);
      this.logger.error(err, `It was not possible to relay the transaction for ${signedCall.id}`);
      return failure(new BroadcastingError(BroadcastingErrorReason.UNKNOWN, { cause: err }));
    }
  }
}
