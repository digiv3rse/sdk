import { InvitedProfilesDocument, SafeApolloClient } from '@digiv3rse/api-bindings';
import { IGenericResultPresenter } from '@digiv3rse/domain/use-cases/transactions';
import { WalletAlreadyInvitedError } from '@digiv3rse/domain/use-cases/wallets';
import { Deferred, PromiseResult, Result, success } from '@digiv3rse/shared-kernel';

import { IProfileCacheManager } from '../../profile/adapters/IProfileCacheManager';

export class InviteWalletsPresenter
  implements IGenericResultPresenter<void, WalletAlreadyInvitedError>
{
  constructor(
    private readonly apolloClient: SafeApolloClient,
    private readonly profileCacheManager: IProfileCacheManager,
  ) {}

  private deferredResult = new Deferred<Result<void, WalletAlreadyInvitedError>>();

  async present(
    result: Result<void, WalletAlreadyInvitedError>,
  ): PromiseResult<void, WalletAlreadyInvitedError> {
    this.deferredResult.resolve(result);

    if (result.isFailure()) {
      return result;
    }

    await Promise.all([
      this.profileCacheManager.refreshCurrentProfile(),
      this.apolloClient.refetchQueries({
        include: [InvitedProfilesDocument],
      }),
    ]);

    return success();
  }

  asResult(): PromiseResult<void, WalletAlreadyInvitedError> {
    return this.deferredResult.promise;
  }
}
