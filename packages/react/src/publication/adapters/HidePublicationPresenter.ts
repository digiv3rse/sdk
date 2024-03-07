import { PublicationId } from '@digiv3rse/domain/entities';
import { IHidePublicationPresenter } from '@digiv3rse/domain/use-cases/publications';

import { IPublicationCacheManager } from './IPublicationCacheManager';

export class HidePublicationPresenter implements IHidePublicationPresenter {
  constructor(private readonly publicationCacheManager: IPublicationCacheManager) {}

  present(publicationId: PublicationId) {
    this.publicationCacheManager.update(publicationId, (current) => ({
      ...current,
      isHidden: true,
    }));
  }
}
