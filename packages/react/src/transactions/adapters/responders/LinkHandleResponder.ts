import { OwnedHandlesDocument, SafeApolloClient } from '@digiv3rse/api-bindings';
import { AnyTransactionRequestModel } from '@digiv3rse/domain/entities';
import { ITransactionResponder } from '@digiv3rse/domain/use-cases/transactions';

import { IProfileCacheManager } from '../../../profile/adapters/IProfileCacheManager';

export class LinkHandleResponder implements ITransactionResponder<AnyTransactionRequestModel> {
  constructor(
    private readonly apolloClient: SafeApolloClient,
    private readonly profileCacheManager: IProfileCacheManager,
  ) {}

  async commit() {
    await Promise.all([
      this.profileCacheManager.refreshCurrentProfile(),
      this.apolloClient.refetchQueries({
        include: [OwnedHandlesDocument],
      }),
    ]);
  }
}
