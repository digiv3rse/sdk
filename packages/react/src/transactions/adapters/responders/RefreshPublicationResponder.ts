import { OpenActionRequest } from '@digiv3rse/domain/use-cases/publications';
import {
  ITransactionResponder,
  TransactionData,
} from '@digiv3rse/domain/use-cases/transactions';

import { IPublicationCacheManager } from '../../../publication/adapters/IPublicationCacheManager';

export class RefreshPublicationResponder implements ITransactionResponder<OpenActionRequest> {
  constructor(private readonly publicationCacheManage: IPublicationCacheManager) {}

  async commit({ request }: TransactionData<OpenActionRequest>) {
    await this.publicationCacheManage.refresh(request.publicationId);
  }
}
