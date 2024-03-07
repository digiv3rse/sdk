import { UnfollowRequest } from '@digiv3rse/domain/use-cases/profile';
import {
  TransactionData,
  ITransactionResponder,
} from '@digiv3rse/domain/use-cases/transactions';

import { IProfileCacheManager } from '../../../profile/adapters/IProfileCacheManager';

export class UnfollowProfileResponder implements ITransactionResponder<UnfollowRequest> {
  constructor(private readonly profileCacheManager: IProfileCacheManager) {}

  async commit({ request }: TransactionData<UnfollowRequest>) {
    await this.profileCacheManager.fetchProfileById(request.profileId);
  }
}
