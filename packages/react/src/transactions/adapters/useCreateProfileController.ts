import { Profile } from '@digiv3rse/api-bindings';
import {
  InsufficientGasError,
  PendingSigningRequestError,
  TransactionError,
  UserRejectedError,
  WalletConnectionError,
} from '@digiv3rse/domain/entities';
import { CreateProfile, CreateProfileRequest } from '@digiv3rse/domain/use-cases/profile';
import { PromiseResult } from '@digiv3rse/shared-kernel';

import { useSharedDependencies } from '../../shared';
import { CreateProfilePresenter } from './CreateProfilePresenter';
import { CreateProfileTransactionGateway } from './CreateProfileTransactionGateway';

export function useCreateProfileController() {
  const {
    apolloClient,
    config,
    profileCacheManager,
    providerFactory,
    transactionQueue,
    walletGateway,
  } = useSharedDependencies();

  return async (
    request: CreateProfileRequest,
  ): PromiseResult<
    Profile,
    | PendingSigningRequestError
    | InsufficientGasError
    | UserRejectedError
    | WalletConnectionError
    | TransactionError
  > => {
    const gateway = new CreateProfileTransactionGateway(apolloClient, config, providerFactory);
    const presenter = new CreateProfilePresenter(
      profileCacheManager,
      config.environment.handleResolver,
    );

    const createProfile = new CreateProfile(walletGateway, gateway, presenter, transactionQueue);

    await createProfile.execute(request);

    const result = presenter.asResult();

    if (result.isSuccess()) {
      return result.value.waitForCompletion();
    }
    return result;
  };
}
