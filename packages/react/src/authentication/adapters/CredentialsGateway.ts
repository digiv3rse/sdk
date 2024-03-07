import {
  RevokeAuthenticationData,
  RevokeAuthenticationDocument,
  RevokeAuthenticationVariables,
  SafeApolloClient,
} from '@digiv3rse/api-bindings';
import {
  ICredentialsReader,
  ICredentialsWriter,
  IResettableCredentialsGateway,
  LogoutReason,
} from '@digiv3rse/domain/use-cases/authentication';
import { never } from '@digiv3rse/shared-kernel';
import { IStorage } from '@digiv3rse/storage';

import { JwtCredentials } from './JwtCredentials';

type RevokeSessionRequest = {
  authorizationId: string;
};

export class CredentialsGateway
  implements ICredentialsWriter, ICredentialsReader, IResettableCredentialsGateway
{
  constructor(
    private readonly credentialsStorage: IStorage<JwtCredentials>,
    private apolloClient: SafeApolloClient,
  ) {}

  async getCredentials() {
    return this.credentialsStorage.get();
  }

  async save(credentials: JwtCredentials) {
    await this.credentialsStorage.set(credentials);
  }

  async invalidate(reason: LogoutReason) {
    const credentials = await this.getCredentials();

    if (!credentials) {
      never('User is not authenticated');
    }

    if (reason === LogoutReason.USER_INITIATED) {
      await this.revoke({ authorizationId: credentials.authorizationId });
    }

    await this.credentialsStorage.reset();
  }

  private async revoke(request: RevokeSessionRequest): Promise<void> {
    await this.apolloClient.mutate<RevokeAuthenticationData, RevokeAuthenticationVariables>({
      mutation: RevokeAuthenticationDocument,
      variables: {
        request,
      },
    });
  }
}
