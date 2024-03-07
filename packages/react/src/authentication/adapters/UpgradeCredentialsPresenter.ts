import { Profile, updateSessionData } from '@digiv3rse/api-bindings';
import {
  IUpgradeCredentialsPresenter,
  SessionData,
  SessionType,
} from '@digiv3rse/domain/use-cases/authentication';
import { Deferred, invariant, PromiseResult, Result, success } from '@digiv3rse/shared-kernel';

import { IProfileCacheManager } from '../../profile/adapters/IProfileCacheManager';

export class UpgradeCredentialsPresenter implements IUpgradeCredentialsPresenter {
  private deferredResult = new Deferred<Result<Profile, never>>();

  constructor(private readonly profileCacheManager: IProfileCacheManager) {}

  async present(result: Result<SessionData, never>) {
    if (result.isFailure()) {
      this.deferredResult.resolve(result);
      return;
    }

    invariant(
      result.value.type === SessionType.WithProfile,
      `You can only upgrade to session with profile`,
    );

    const { profileId } = result.value;
    const profile = await this.profileCacheManager.fetchProfileById(profileId);

    invariant(profile, 'Profile not found');

    updateSessionData(result.value);

    this.deferredResult.resolve(success(profile));
    return;
  }

  asResult(): PromiseResult<Profile, never> {
    return this.deferredResult.promise;
  }
}
