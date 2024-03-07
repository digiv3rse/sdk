import { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import type { DiGiProfileManagerRelayErrorFragment, ProfileFragment, RelaySuccessFragment } from "../../graphql/fragments.generated.js";
import type { BlockRequest, ChangeProfileManagersRequest, DefaultProfileRequest, DismissRecommendedProfilesRequest, FollowersRequest, FollowingRequest, FollowRequest, FollowStatusBulkRequest, LinkHandleToProfileRequest, MutualFollowersRequest, OnchainSetProfileMetadataRequest, PeerToPeerRecommendRequest, ProfileActionHistoryRequest, ProfileInterestsRequest, ProfileManagersRequest, ProfileRecommendationsRequest, ProfileRequest, ProfilesRequest, ReportProfileRequest, SetDefaultProfileRequest, SetFollowModuleRequest, TypedDataOptions, UnblockRequest, UnfollowRequest, UnlinkHandleFromProfileRequest, WhoActedOnPublicationRequest, WhoHaveBlockedRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { CreateBlockProfilesBroadcastItemResultFragment, CreateChangeProfileManagersBroadcastItemResultFragment, CreateFollowBroadcastItemResultFragment, CreateLinkHandleToProfileBroadcastItemResultFragment, CreateUnlinkHandleFromProfileBroadcastItemResultFragment, CreateOnchainSetProfileMetadataBroadcastItemResultFragment, CreateSetFollowModuleBroadcastItemResultFragment, CreateUnblockProfilesBroadcastItemResultFragment, CreateUnfollowBroadcastItemResultFragment, ProfileActionHistoryFragment, ProfileManagerFragment, FollowStatusBulkResultFragment } from "./graphql/profile.generated.js";
import { FetchProfileOptions } from "./types.js";
/**
 * Profiles are the accounts that create publications and are owned by wallets
 *
 * @group DiGiClient Modules
 */
export declare class Profile {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch a single profile.
     *
     * @param request - Request object for the query
     * @param options - Additional options for the query
     * @returns Profile or null if not found
     *
     * @example
     * ```ts
     * const result = await client.profile.fetch({
     *   forProfileId: '0x01',
     * });
     * ```
     */
    fetch(request: ProfileRequest, options?: FetchProfileOptions): Promise<ProfileFragment | null>;
    /**
     * Fetch all profiles by requested criteria.
     *
     * @param request - Request object for the query
     * @param options - Additional options for the query
     * @returns Profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.fetchAll({
     *   where: {
     *     ownedBy: ['0xe3D871d389BF78c091E29deCe83200E9d6B2B0C2'],
     *   },
     * });
     * ```
     */
    fetchAll(request: ProfilesRequest, options?: FetchProfileOptions): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Fetch addresses of profile managers.
     *
     * @param request - Request object for the query
     * @returns Profile managers wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.managers({
     *   for: '0x01',
     * });
     * ```
     */
    managers(request: ProfileManagersRequest): Promise<PaginatedResult<ProfileManagerFragment>>;
    /**
     * Fetch recommended profiles.
     *
     * @param request - Request object for the query
     * @returns Array of recommended profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.recommendations({
     *   for: '0x01',
     * });
     * ```
     */
    recommendations(request: ProfileRecommendationsRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Dismiss profiles from the recommended list.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * const result = await client.profile.dismissRecommended({
     *   dismiss: ['0x01', '0x02', '0x03'],
     * });
     * ```
     */
    dismissRecommended(request: DismissRecommendedProfilesRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Recommend a profile.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * const result = await client.profile.recommend({
     *   profileId: '0x01',
     * });
     * ```
     */
    recommend(request: PeerToPeerRecommendRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Remove a recommendation from a previously recommended profile.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * const result = await client.profile.unrecommend({
     *   profileId: '0x01',
     * });
     * ```
     */
    unrecommend(request: PeerToPeerRecommendRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch the default profile for a given address.
     * If no default is explicitly set, it returns the oldest profile owned by the address.
     *
     * @param request - Request object for the query
     * @returns Profile or null if not found
     *
     * @example
     * ```ts
     * const result = await client.profile.fetchDefault({
     *   for: '0x1234567890123456789012345678901234567890',
     * });
     * ```
     */
    fetchDefault(request: DefaultProfileRequest): Promise<ProfileFragment | null>;
    /**
     * Set default profile for authenticated address.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * const result = await client.profile.setDefault({
     *   profileId: '0x123',
     * });
     * ```
     */
    setDefault(request: SetDefaultProfileRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch profiles that are followed by a requested profile.
     *
     * @param request - Request object for the query
     * @returns Profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.following({
     *   for: '0x01',
     * });
     * ```
     */
    following(request: FollowingRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Fetch profiles that follow a requested profile.
     *
     * @param request - Request object for the query
     * @returns Profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.followers({
     *   of: '0x01',
     * });
     * ```
     */
    followers(request: FollowersRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Fetch mutual followers between two profiles.
     *
     * @param request - Request object for the query
     * @returns Profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.mutualFollowers({
     *   observer: '0x01',
     *   viewing: '0x02',
     * });
     * ```
     */
    mutualFollowers(request: MutualFollowersRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Check follow status between multiple profiles.
     *
     * @param request - Request object for the query
     * @returns follow status bulk result
     *
     * @example
     * ```ts
     * const result = await client.profile.followStatusBulk({
     *   followInfos: [
     *     {
     *       follower: '0x06', // is 0x06 following 0x38?
     *       profileId: '0x38',
     *     },
     *     {
     *       follower: '0x38', // is 0x38 following 0x06?
     *       profileId: '0x06',
     *     },
     *   ],
     * });
     * ```
     */
    followStatusBulk(request: FollowStatusBulkRequest): Promise<FollowStatusBulkResultFragment[]>;
    /**
     * Fetch profiles that acted on a publication.
     *
     * @param request - Request object for the query
     * @returns Profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.whoActedOnPublication({
     *  on: '0x0635-0x0f',
     * });
     * ```
     */
    whoActedOnPublication(request: WhoActedOnPublicationRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Fetch profiles that the authenticated profile has blocked.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the query
     * @returns Profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.whoHaveBeenBlocked();
     * ```
     */
    whoHaveBeenBlocked(request?: WhoHaveBlockedRequest): PromiseResult<PaginatedResult<ProfileFragment>, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch profile action history.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the query
     * @returns Profile action history item wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.profile.actionHistory();
     * ```
     */
    actionHistory(request?: ProfileActionHistoryRequest): PromiseResult<PaginatedResult<ProfileActionHistoryFragment>, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Set profile metadata using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.profile.setProfileMetadata({
     *   metadataURI: 'ipfs://Qm...',
     * });
     * ```
     */
    setProfileMetadata(request: OnchainSetProfileMetadataRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for setting the profile metadata.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for setting the profile metadata
     *
     * @example
     * ```ts
     * const result = await client.profile.createSetProfileMetadataTypedData({
     *   metadataURI: 'ipfs://Qm...',
     * });
     * ```
     */
    createSetProfileMetadataTypedData(request: OnchainSetProfileMetadataRequest, options?: TypedDataOptions): PromiseResult<CreateOnchainSetProfileMetadataBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for changing profile managers.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for changing profile managers
     *
     * @example
     * ```ts
     * const result = await client.profile.createChangeProfileManagersTypedData({
     *   approveSignless: true,
     * });
     * ```
     */
    createChangeProfileManagersTypedData(request: ChangeProfileManagersRequest, options?: TypedDataOptions): PromiseResult<CreateChangeProfileManagersBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Set profile follow module using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.profile.setFollowModule({
     *   followModule: {
     *     freeFollowModule: true,
     *   },
     * });
     * ```
     */
    setFollowModule(request: SetFollowModuleRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for setting a profile follow module.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for setting a profile follow module
     *
     * @example
     * ```ts
     * const result = await client.profile.createSetFollowModuleTypedData({
     *   followModule: {
     *     freeFollowModule: true,
     *   },
     * });
     * ```
     */
    createSetFollowModuleTypedData(request: SetFollowModuleRequest, options?: TypedDataOptions): PromiseResult<CreateSetFollowModuleBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Block a profile using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.profile.block({
     *   profiles: ['0x01'],
     * });
     * ```
     */
    block(request: BlockRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for blocking a profile.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for requested transaction
     *
     * @example
     * ```ts
     * const result = await client.profile.createBlockProfilesTypedData({
     *   profiles: ['0x01'],
     * });
     * ```
     */
    createBlockProfilesTypedData(request: BlockRequest, options?: TypedDataOptions): PromiseResult<CreateBlockProfilesBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Unblock a profile using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.profile.unblock({
     *   profiles: ['0x01'],
     * });
     * ```
     */
    unblock(request: UnblockRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for unblocking a profile.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for requested transaction
     *
     * @example
     * ```ts
     * const result = await client.profile.createUnblockProfilesTypedData({
     *   profiles: ['0x01'],
     * });
     * ```
     */
    createUnblockProfilesTypedData(request: UnblockRequest, options?: TypedDataOptions): PromiseResult<CreateUnblockProfilesBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Follow a profile using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.profile.follow({
     *   follow: [
     *     {
     *       profileId: '0x01',
     *     },
     *   ],
     * });
     * ```
     */
    follow(request: FollowRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for following a profile.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for requested transaction
     *
     * @example
     * ```ts
     * const result = await client.profile.createFollowTypedData({
     *   follow: [
     *     {
     *       profileId: '0x01',
     *     },
     *   ],
     * });
     * ```
     */
    createFollowTypedData(request: FollowRequest, options?: TypedDataOptions): PromiseResult<CreateFollowBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Unfollow a profile using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.profile.unfollow({
     *   unfollow: ['0x01'],
     * });
     * ```
     */
    unfollow(request: UnfollowRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for unfollowing a profile.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for requested transaction
     *
     * @example
     * ```ts
     * const result = await client.profile.createUnfollowTypedData({
     *   unfollow: ['0x01'],
     * });
     * ```
     */
    createUnfollowTypedData(request: UnfollowRequest, options?: TypedDataOptions): PromiseResult<CreateUnfollowBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Link a profile to a handle using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.profile.linkHandle({
     *   handle: 'my-handle',
     * });
     * ```
     */
    linkHandle(request: LinkHandleToProfileRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for linking a profile to a handle.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for requested transaction
     *
     * @example
     * ```ts
     * const result = await client.profile.createLinkHandleTypedData({
     *   handle: 'my-handle',
     * });
     * ```
     */
    createLinkHandleTypedData(request: LinkHandleToProfileRequest, options?: TypedDataOptions): PromiseResult<CreateLinkHandleToProfileBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Unlink a profile from a handle using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.profile.unlinkHandle({
     *   handle: 'my-handle',
     * });
     * ```
     */
    unlinkHandle(request: UnlinkHandleFromProfileRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create typed data for unlinking a profile from a handle.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for requested transaction
     *
     * @example
     * ```ts
     * const result = await client.profile.createUnlinkHandleTypedData({
     *   handle: 'my-handle',
     * });
     * ```
     */
    createUnlinkHandleTypedData(request: UnlinkHandleFromProfileRequest, options?: TypedDataOptions): PromiseResult<CreateUnlinkHandleFromProfileBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Add interests to a profile.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * import { ProfileInterestTypes } from '@digiv3rse/client';
     *
     * await client.profile.addInterests({
     *   interests: [ProfileInterestTypes.Technology],
     * });
     * ```
     */
    addInterests(request: ProfileInterestsRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Remove interests from a profile.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * import { ProfileInterestTypes } from '@digiv3rse/client';
     *
     * await client.profile.removeInterests({
     *   interests: [ProfileInterestTypes.Technology],
     * });
     * ```
     */
    removeInterests(request: ProfileInterestsRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Report a profile with a reason
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * import { ProfileReportingReason, ProfileReportingSpamSubreason } from '@digiv3rse/client';
     *
     * await client.profile.report({
     *   for: '0x014e',
     *   reason: {
     *     spamReason: {
     *       reason: ProfileReportingReason.Spam,
     *       subreason: ProfileReportingSpamSubreason.Repetitive,
     *     },
     *   },
     *   additionalComments: 'Human readable comments, if any.',
     * });
     * ```
     */
    report(request: ReportProfileRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
}
