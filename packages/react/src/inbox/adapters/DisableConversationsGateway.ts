import { IConversationsGateway } from '@digiv3rse/domain/use-cases/authentication';
import { IStorage } from '@digiv3rse/storage';

export class DisableConversationsGateway implements IConversationsGateway {
  constructor(private readonly storage: IStorage<string>) {}

  async reset(): Promise<void> {
    return this.storage.reset();
  }
}
