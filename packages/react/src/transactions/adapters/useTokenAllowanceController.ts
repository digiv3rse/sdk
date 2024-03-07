import {
  InsufficientGasError,
  PendingSigningRequestError,
  TransactionError,
  UserRejectedError,
  WalletConnectionError,
} from '@digiv3rse/domain/entities';
import {
  TokenAllowance,
  TokenAllowanceRequest,
} from '@digiv3rse/domain/use-cases/transactions';
import { PromiseResult } from '@digiv3rse/shared-kernel';

import { useSharedDependencies } from '../../shared';
import { ApproveTransactionGateway } from './ApproveTransactionGateway';
import { TransactionResultPresenter } from './TransactionResultPresenter';

export function useTokenAllowanceController() {
  const { activeWallet, config, providerFactory, transactionQueue } = useSharedDependencies();

  return async (
    request: TokenAllowanceRequest,
  ): PromiseResult<
    void,
    | InsufficientGasError
    | PendingSigningRequestError
    | TransactionError
    | UserRejectedError
    | WalletConnectionError
  > => {
    const presenter = new TransactionResultPresenter<
      TokenAllowanceRequest,
      InsufficientGasError | PendingSigningRequestError | UserRejectedError | WalletConnectionError
    >();
    const approveTransactionGateway = new ApproveTransactionGateway(config, providerFactory);

    const tokenAllowance = new TokenAllowance(
      activeWallet,
      approveTransactionGateway,
      presenter,
      transactionQueue,
    );

    await tokenAllowance.execute(request);

    const result = presenter.asResult();

    if (result.isFailure()) {
      return result;
    }

    return result.value.waitForCompletion();
  };
}
