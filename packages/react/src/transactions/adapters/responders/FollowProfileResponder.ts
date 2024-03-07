import { FollowRequest } from '@digiv3rse/domain/use-cases/profile';
import {
  ITransactionResponder,
  TransactionData,
} from '@digiv3rse/domain/use-cases/transactions';

import { IProfileCacheManager } from '../../../profile/adapters/IProfileCacheManager';

export class FollowProfileResponder implements ITransactionResponder<FollowRequest> {
  constructor(private readonly profileCacheManager: IProfileCacheManager) {}

  async commit({ request }: TransactionData<FollowRequest>) {
    await this.profileCacheManager.fetchProfileById(request.profileId);
  }
}
