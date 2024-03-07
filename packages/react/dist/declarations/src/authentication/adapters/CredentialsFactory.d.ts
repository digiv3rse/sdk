import { ProfileId, Wallet } from '@digiv3rse/domain/entities';
import { CredentialsExpiredError, ICredentialsIssuer, ICredentialsRenewer, LoginError } from '@digiv3rse/domain/use-cases/authentication';
import { PromiseResult } from '@digiv3rse/shared-kernel';
import { AuthApi } from "./AuthApi.js";
import { JwtCredentials } from "./JwtCredentials.js";
export declare class CredentialsFactory implements ICredentialsIssuer, ICredentialsRenewer {
    private auth;
    constructor(auth: AuthApi);
    renewCredentials(credentials: JwtCredentials): PromiseResult<JwtCredentials, CredentialsExpiredError>;
    issueCredentials(signer: Wallet, using?: ProfileId): PromiseResult<JwtCredentials, LoginError>;
}
