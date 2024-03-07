import { ProfileManagersDocument, SafeApolloClient } from '@digiv3rse/api-bindings';
import { UpdateProfileManagersRequest } from '@digiv3rse/domain/use-cases/profile';
import { ITransactionResponder } from '@digiv3rse/domain/use-cases/transactions';

import { IProfileCacheManager } from '../../../profile/adapters/IProfileCacheManager';

export class UpdateProfileManagersResponder
  implements ITransactionResponder<UpdateProfileManagersRequest>
{
  constructor(
    private readonly apolloClient: SafeApolloClient,
    private readonly profileCacheManager: IProfileCacheManager,
  ) {}

  async commit() {
    await Promise.all([
      this.profileCacheManager.refreshCurrentProfile(),
      this.apolloClient.refetchQueries({
        include: [ProfileManagersDocument],
      }),
    ]);
  }
}
