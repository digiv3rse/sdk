import { PublicationId } from '@digiv3rse/domain/entities';
import { HidePublication } from '@digiv3rse/domain/use-cases/publications';

import { useSharedDependencies } from '../../shared';
import { HidePublicationGateway } from './HidePublicationGateway';
import { HidePublicationPresenter } from './HidePublicationPresenter';

export type HidePublicationControllerRequest = {
  publicationId: PublicationId;
};

export function useHidePublicationController() {
  const { apolloClient, publicationCacheManager } = useSharedDependencies();

  return async ({ publicationId }: HidePublicationControllerRequest) => {
    const presenter = new HidePublicationPresenter(publicationCacheManager);
    const gateway = new HidePublicationGateway(apolloClient);
    const hidePublication = new HidePublication(gateway, presenter);

    await hidePublication.hide({ publicationId });
  };
}
