import {
  SafeApolloClient,
  WalletAuthenticationToProfileAuthenticationData,
  WalletAuthenticationToProfileAuthenticationDocument,
  WalletAuthenticationToProfileAuthenticationVariables,
} from '@digiv3rse/api-bindings';
import { ProfileId } from '@digiv3rse/domain/entities';
import { ICredentialsUpgrader } from '@digiv3rse/domain/use-cases/authentication';

import { JwtCredentials } from './JwtCredentials';

export class CredentialsUpgrader implements ICredentialsUpgrader {
  constructor(private apolloClient: SafeApolloClient) {}

  async upgradeCredentials(profileId: ProfileId): Promise<JwtCredentials> {
    const result = await this.apolloClient.mutate<
      WalletAuthenticationToProfileAuthenticationData,
      WalletAuthenticationToProfileAuthenticationVariables
    >({
      mutation: WalletAuthenticationToProfileAuthenticationDocument,
      variables: {
        request: {
          profileId,
        },
      },
    });

    const { accessToken, refreshToken } = result.data.result;

    return new JwtCredentials(accessToken, refreshToken);
  }
}
