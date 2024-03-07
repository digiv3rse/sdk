import { ProfileRecommendationsDocument, SafeApolloClient } from '@digiv3rse/api-bindings';
import { IDismissRecommendedProfilesPresenter } from '@digiv3rse/domain/use-cases/profile';

export class DismissRecommendedProfilesPresenter implements IDismissRecommendedProfilesPresenter {
  constructor(private readonly apolloClient: SafeApolloClient) {}

  async present() {
    await this.apolloClient.refetchQueries({
      include: [ProfileRecommendationsDocument],
    });
  }
}
