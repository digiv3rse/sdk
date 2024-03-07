import { UnblockProfilesRequest } from '@digiv3rse/domain/use-cases/profile';
import {
  ITransactionResponder,
  TransactionData,
} from '@digiv3rse/domain/use-cases/transactions';

import { IProfileCacheManager } from '../../../profile/adapters/IProfileCacheManager';

export class UnblockProfilesResponder implements ITransactionResponder<UnblockProfilesRequest> {
  constructor(private readonly profileCacheManager: IProfileCacheManager) {}

  async commit({ request }: TransactionData<UnblockProfilesRequest>) {
    await Promise.all(
      request.profileIds.map((profileId) => this.profileCacheManager.fetchProfileById(profileId)),
    );
  }
}
