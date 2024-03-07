import {
  HidePublicationDocument,
  HidePublicationData,
  HidePublicationVariables,
  SafeApolloClient,
} from '@digiv3rse/api-bindings';
import {
  HidePublicationRequest,
  IHidePublicationGateway,
} from '@digiv3rse/domain/use-cases/publications';

export class HidePublicationGateway implements IHidePublicationGateway {
  constructor(private apolloClient: SafeApolloClient) {}

  async hide(request: HidePublicationRequest) {
    await this.apolloClient.mutate<HidePublicationData, HidePublicationVariables>({
      mutation: HidePublicationDocument,
      variables: {
        request: {
          for: request.publicationId,
        },
      },
    });
  }
}
