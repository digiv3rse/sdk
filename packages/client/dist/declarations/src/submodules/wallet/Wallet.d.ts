import { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import type { HandleInfoFragment, ProfileFragment, RelaySuccessFragment } from "../../graphql/fragments.generated.js";
import type { ClaimProfileWithHandleRequest, CreateProfileRequest, CreateProfileWithHandleRequest, LastLoggedInProfileRequest, OwnedHandlesRequest, ProfilesManagedRequest, UserCurrentRateLimitRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { ClaimableProfilesResultFragment, ClaimProfileWithHandleErrorResultFragment, CreateProfileWithHandleErrorResultFragment, UserCurrentRateLimitResultFragment, UserSigNoncesFragment } from "./graphql/wallet.generated.js";
/**
 * @group DiGiClient Modules
 */
export declare class Wallet {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch all owned handles by a wallet address.
     *
     * @param request - Request object for the query
     * @returns Handles wrapped with {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.wallet.ownedHandles({
     *   for: '0xa5653e88D9c352387deDdC79bcf99f0ada62e9c6',
     * });
     * ```
     */
    ownedHandles(request: OwnedHandlesRequest): Promise<PaginatedResult<HandleInfoFragment>>;
    /**
     * Fetch all profiles managed by a wallet address.
     *
     * @param request - Request object for the query
     * @returns Profiles wrapped with {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.wallet.profilesManaged({
     *   for: '0xa5653e88D9c352387deDdC79bcf99f0ada62e9c6',
     * });
     * ```
     */
    profilesManaged(request: ProfilesManagedRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Fetch user nonces.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @returns {@link PromiseResult} with {@link UserSigNoncesFragment}
     *
     * @example
     * ```ts
     * const result = await client.wallet.sigNonces();
     * ```
     */
    sigNonces(): PromiseResult<UserSigNoncesFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch claimable profiles result for currently authenticated wallet.
     * Use it to know if the wallet can claim a new profile.
     *
     * ⚠️ Requires DiGiClient authenticated with a wallet only.
     *
     * @returns {@link PromiseResult} with {@link ClaimableProfilesResultFragment}
     */
    claimableProfiles(): PromiseResult<ClaimableProfilesResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Claim a profile. Use result of {@link claimableProfiles} query to claim a handle for a wallet.
     *
     * ⚠️ Requires DiGiClient authenticated with a wallet only.
     *
     * @param request - Request object for the mutation
     * @returns Status of the transaction
     */
    claimProfile(request: ClaimProfileWithHandleRequest): PromiseResult<RelaySuccessFragment | ClaimProfileWithHandleErrorResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a new profile with a handle.
     *
     * ⚠️ Only available in development environment.
     *
     * @param request - Request object for the mutation
     * @returns Status of the transaction
     *
     * @example
     * ```ts
     * const result = await client.wallet.createProfileWithHandle({
     *   handle: 'handle',
     *   to: '0x1234567890123456789012345678901234567890',
     * });
     * ```
     */
    createProfileWithHandle(request: CreateProfileWithHandleRequest): Promise<RelaySuccessFragment | CreateProfileWithHandleErrorResultFragment>;
    /**
     * Create a new profile only. No handle is created.
     *
     * ⚠️ Only available in development environment.
     *
     * @param request - Request object for the mutation
     * @returns Status of the transaction
     *
     * @example
     * ```ts
     * const result = await client.wallet.createProfile({
     *   to: '0x1234567890123456789012345678901234567890',
     * });
     * ```
     */
    createProfile(request: CreateProfileRequest): Promise<RelaySuccessFragment>;
    /**
     * Fetch the last logged in profile for a wallet address.
     *
     * @param request - Request object for the query
     * @returns Profile
     *
     * @example
     * ```ts
     * const result = await client.wallet.lastLoggedInProfile({
     *   for: '0xa5653e88D9c352387deDdC79bcf99f0ada62e9c6',
     * });
     * ```
     */
    lastLoggedInProfile(request: LastLoggedInProfileRequest): Promise<ProfileFragment | null>;
    /**
     * Fetch the current sponsored transaction limits for the requested address and profile.
     *
     * @param request - Request object for the query
     * @returns Current rate limits
     *
     * @example
     * ```ts
     * const result = await client.wallet.rateLimits({
     *   userAddress: '0xa5653e88D9c352387deDdC79bcf99f0ada62e9c6',
     * });
     * ```
     */
    rateLimits(request: UserCurrentRateLimitRequest): Promise<UserCurrentRateLimitResultFragment>;
}
