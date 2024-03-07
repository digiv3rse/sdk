import { AnyTransactionRequestModel } from '@digiv3rse/domain/entities';
import { ITransactionResponder } from '@digiv3rse/domain/use-cases/transactions';

import { IProfileCacheManager } from '../../../profile/adapters/IProfileCacheManager';

export class RefreshCurrentProfileResponder
  implements ITransactionResponder<AnyTransactionRequestModel>
{
  constructor(private readonly profileCacheManager: IProfileCacheManager) {}

  async commit() {
    await this.profileCacheManager.refreshCurrentProfile();
  }
}
