import { ProfileId, Wallet } from '@digiv3rse/domain/entities';
import {
  CredentialsExpiredError,
  ICredentialsIssuer,
  ICredentialsRenewer,
  LoginError,
} from '@digiv3rse/domain/use-cases/authentication';
import { PromiseResult, failure, success } from '@digiv3rse/shared-kernel';

import { AuthApi } from './AuthApi';
import { JwtCredentials } from './JwtCredentials';

export class CredentialsFactory implements ICredentialsIssuer, ICredentialsRenewer {
  constructor(private auth: AuthApi) {}

  async renewCredentials(
    credentials: JwtCredentials,
  ): PromiseResult<JwtCredentials, CredentialsExpiredError> {
    if (!credentials.canRefresh()) {
      return failure(new CredentialsExpiredError());
    }
    try {
      const newCredentials = await this.auth.refreshCredentials(credentials.refreshToken);
      return success(newCredentials);
    } catch (error) {
      return failure(new CredentialsExpiredError());
    }
  }

  async issueCredentials(
    signer: Wallet,
    using?: ProfileId,
  ): PromiseResult<JwtCredentials, LoginError> {
    const challenge = await this.auth.generateChallenge({
      for: using,
      signedBy: signer.address,
    });

    const result = await signer.signMessage(challenge.text);

    if (result.isFailure()) {
      return result;
    }

    const credentials = await this.auth.generateCredentials({
      id: challenge.id,
      signature: result.value,
    });

    return success(credentials);
  }
}
