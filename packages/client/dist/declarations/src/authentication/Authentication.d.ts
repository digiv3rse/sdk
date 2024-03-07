import { IEquatableError, PromiseResult, Result } from '@digiv3rse/shared-kernel';
import type { DiGiContext } from "../context.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../errors.js";
import type { ApprovedAuthenticationRequest, ChallengeRequest, RevokeAuthenticationRequest, SignedAuthChallenge, WalletAuthenticationToProfileAuthenticationRequest } from "../graphql/types.generated.js";
import type { IAuthentication } from "./IAuthentication.js";
import type { AuthChallengeFragment } from "./graphql/auth.generated.js";
/**
 * Authentication for DiGi API. Request challenge, authenticate, manage credentials.
 */
export declare class Authentication implements IAuthentication {
    private readonly api;
    private readonly credentials;
    /**
     * @internal
     */
    constructor(context: DiGiContext);
    authenticateWith({ refreshToken }: {
        refreshToken: string;
    }): Promise<void>;
    generateChallenge(request: ChallengeRequest): Promise<AuthChallengeFragment>;
    authenticate(request: SignedAuthChallenge): Promise<void>;
    upgradeCredentials(request: WalletAuthenticationToProfileAuthenticationRequest): Promise<Result<void, CredentialsExpiredError | NotAuthenticatedError>>;
    verify(accessToken: string): Promise<boolean>;
    isAuthenticated(): Promise<boolean>;
    getAccessToken(): PromiseResult<string, CredentialsExpiredError | NotAuthenticatedError>;
    getProfileId(): Promise<string | null>;
    getWalletAddress(): Promise<string | null>;
    getAuthorizationId(): Promise<string | null>;
    logout(): Promise<void>;
    fetch(): Promise<Result<import("./graphql/auth.generated.js").ApprovedAuthenticationFragment, CredentialsExpiredError | NotAuthenticatedError>>;
    fetchAll(request?: ApprovedAuthenticationRequest): Promise<Result<import("../index.js").PaginatedResult<import("./graphql/auth.generated.js").ApprovedAuthenticationFragment>, CredentialsExpiredError | NotAuthenticatedError>>;
    revoke(request: RevokeAuthenticationRequest): Promise<Result<void, CredentialsExpiredError | NotAuthenticatedError>>;
    /**
     * @internal
     */
    requireAuthentication<TResult extends Result<TValue, TError>, TValue, TError extends IEquatableError>(handler: (profileId: string) => Promise<TResult>): PromiseResult<TValue, TError | CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * @internal
     */
    requireAtLeastWalletAuthentication<TResult extends Result<TValue, TError>, TValue, TError extends IEquatableError>(handler: (profileId: string | null) => Promise<TResult>): PromiseResult<TValue, TError | CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * @internal
     */
    getRequestHeader(): PromiseResult<Record<string, string>, CredentialsExpiredError | NotAuthenticatedError>;
    private getCredentials;
}
