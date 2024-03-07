import { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import { CreateMomokaPublicationResultFragment, DiGiProfileManagerRelayErrorFragment, RelaySuccessFragment } from "../../graphql/fragments.generated.js";
import { AnyPublicationFragment } from "../../graphql/types.js";
import { HideCommentRequest, HidePublicationRequest, LegacyCollectRequest, MomokaCommentRequest, MomokaMirrorRequest, MomokaPostRequest, MomokaQuoteRequest, OnchainCommentRequest, OnchainMirrorRequest, OnchainPostRequest, OnchainQuoteRequest, PublicationRequest, PublicationsRequest, PublicationsTagsRequest, RefreshPublicationMetadataRequest, RefreshPublicationMetadataResultType, ReportPublicationRequest, Scalars, TypedDataOptions, UnhideCommentRequest, ValidatePublicationMetadataRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { CreateLegacyCollectBroadcastItemResultFragment, CreateMomokaCommentBroadcastItemResultFragment, CreateMomokaMirrorBroadcastItemResultFragment, CreateMomokaPostBroadcastItemResultFragment, CreateMomokaQuoteBroadcastItemResultFragment, CreateOnchainCommentBroadcastItemResultFragment, CreateOnchainMirrorBroadcastItemResultFragment, CreateOnchainPostBroadcastItemResultFragment, CreateOnchainQuoteBroadcastItemResultFragment, PublicationValidateMetadataResultFragment, TagResultFragment } from "./graphql/publication.generated.js";
import { Bookmarks, Reactions, NotInterested, Actions } from "./submodules/index.js";
import { FetchPublicationOptions, RequestOverwrites } from "./types.js";
/**
 * Publications are the posts, comments, mirrors and quotes that a profile creates.
 *
 * @group DiGiClient Modules
 */
export declare class Publication {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * The Bookmarks module
     */
    get bookmarks(): Bookmarks;
    /**
     * The Reactions module
     */
    get reactions(): Reactions;
    /**
     * The NotInterested module
     */
    get notInterested(): NotInterested;
    /**
     * The Actions module
     */
    get actions(): Actions;
    /**
     * Fetch a publication
     *
     * @param request - Request object for the query
     * @param options - Additional options for the query
     * @returns {@link AnyPublicationFragment} or null if not found
     *
     * @example
     * ```ts
     * const result = await client.publication.fetch({
     *   forId: '0x123-0x456',
     * });
     * ```
     */
    fetch(request: PublicationRequest, options?: FetchPublicationOptions): Promise<AnyPublicationFragment | null>;
    /**
     * Fetch all publications by requested criteria
     *
     * @param request - Request object for the query
     * @param options - Additional options for the query
     * @returns {@link AnyPublicationFragment} wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.publication.fetchAll({
     *   where: {
     *     from: ['0x123'],
     *   },
     * });
     * ```
     */
    fetchAll(request: PublicationsRequest, options?: FetchPublicationOptions): Promise<PaginatedResult<AnyPublicationFragment>>;
    /**
     * Fetch tags
     *
     * @param request - Request object for the query
     * @returns {@link TagResultFragment} wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.publication.tags({});
     * ```
     */
    tags(request?: PublicationsTagsRequest): Promise<PaginatedResult<TagResultFragment>>;
    /**
     * Validate a publication metadata before creating it
     *
     * @param request - Request object for the query
     * @returns Validation result
     *
     * @example
     * ```ts
     * const result = await client.publication.validateMetadata({
     *   json: JSON.stringify(metadata),
     * });
     *
     * if (!result.valid) {
     *   throw new Error(`Metadata is not valid because of ${result.reason}`);
     * }
     * ```
     */
    validateMetadata(request: ValidatePublicationMetadataRequest): Promise<PublicationValidateMetadataResultFragment>;
    /**
     * Refresh a publication metadata stored by the API
     *
     * @param request - Request object for the mutation
     * @returns Refresh mutation result
     *
     * @example
     * ```ts
     * const result = await client.publication.refreshMetadata({
     *   for: '0x123-0x456',
     * });
     * ```
     */
    refreshMetadata(request: RefreshPublicationMetadataRequest): Promise<RefreshPublicationMetadataResultType>;
    /**
     * Hide a publication
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * await client.publication.hide({
     *   for: '0x014e-0x0a',
     * });
     * ```
     */
    hide(request: HidePublicationRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Hide a comment that exists under a publication made by the authenticated profile.
     * If already hidden, does nothing.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * await client.publication.hideComment({
     *   for: '0x014e-0x0a',
     * });
     * ```
     */
    hideComment(request: HideCommentRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Unhide a comment that exists under a publication made by the authenticated profile.
     * If not hidden, does nothing.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * await client.publication.unhideComment({
     *   for: '0x014e-0x0a',
     * });
     * ```
     */
    unhideComment(request: UnhideCommentRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Report a publication with a reason
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * import { PublicationReportingReason, PublicationReportingSpamSubreason } from '@digiv3rse/client';
     *
     * await client.publication.report({
     *   for: '0x014e-0x0a',
     *   reason: {
     *     spamReason: {
     *       reason: PublicationReportingReason.Spam,
     *       subreason: PublicationReportingSpamSubreason.FakeEngagement,
     *     },
     *   },
     *   additionalComments: 'Human readable comments, if any.',
     * });
     * ```
     */
    report(request: ReportPublicationRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a post onchain using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.postOnchain({
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    postOnchain(request: OnchainPostRequest, overwrites?: RequestOverwrites): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a comment onchain using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.commentOnchain({
     *   commentOn: '0x123-0x456',
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    commentOnchain(request: OnchainCommentRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a mirror onchain using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.mirrorOnchain({
     *   mirrorOn: '0x123-0x456',
     * });
     * ```
     */
    mirrorOnchain(request: OnchainMirrorRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a quote onchain using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.quoteOnchain({
     *   quoteOn: '0x123-0x456',
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    quoteOnchain(request: OnchainQuoteRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a post on Momoka.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link CreateMomokaPublicationResultFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.postOnMomoka({
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    postOnMomoka(request: MomokaPostRequest): PromiseResult<CreateMomokaPublicationResultFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a comment on Momoka.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link CreateMomokaPublicationResultFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.commentOnMomoka({
     *   commentOn: '0x123-0x456',
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    commentOnMomoka(request: MomokaCommentRequest): PromiseResult<CreateMomokaPublicationResultFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a mirror on Momoka.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link CreateMomokaPublicationResultFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.mirrorOnMomoka({
     *   mirrorOn: '0x123-0x456',
     * });
     * ```
     */
    mirrorOnMomoka(request: MomokaMirrorRequest): PromiseResult<CreateMomokaPublicationResultFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Create a quote on Momoka.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link CreateMomokaPublicationResultFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.quoteOnMomoka({
     *   quoteOn: '0x123-0x456',
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    quoteOnMomoka(request: MomokaQuoteRequest): PromiseResult<CreateMomokaPublicationResultFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to create a post onchain.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for creating a post
     *
     * @example
     * ```ts
     * const result = await client.publication.createOnchainPostTypedData({
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    createOnchainPostTypedData(request: OnchainPostRequest, options?: TypedDataOptions): PromiseResult<CreateOnchainPostBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to create a comment onchain.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for creating a post
     *
     * @example
     * ```ts
     * const result = await client.publication.createOnchainCommentTypedData({
     *   commentOn: '0x123-0x456',
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    createOnchainCommentTypedData(request: OnchainCommentRequest, options?: TypedDataOptions): PromiseResult<CreateOnchainCommentBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to create a mirror onchain.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for creating a post
     *
     * @example
     * ```ts
     * const result = await client.publication.createOnchainMirrorTypedData({
     *   mirrorOn: '0x123-0x456',
     * });
     * ```
     */
    createOnchainMirrorTypedData(request: OnchainMirrorRequest, options?: TypedDataOptions): PromiseResult<CreateOnchainMirrorBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to create a quote onchain.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for creating a post
     *
     * @example
     * ```ts
     * const result = await client.publication.createOnchainQuoteTypedData({
     *   quoteOn: '0x123-0x456',
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    createOnchainQuoteTypedData(request: OnchainQuoteRequest, options?: TypedDataOptions): PromiseResult<CreateOnchainQuoteBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to create a post on Momoka.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnMomoka}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns Typed data for creating a post
     *
     * @example
     * ```ts
     * const result = await client.publication.createMomokaPostTypedData({
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    createMomokaPostTypedData(request: MomokaPostRequest): PromiseResult<CreateMomokaPostBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to create a comment on Momoka.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnMomoka}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns Typed data for creating a post
     *
     * @example
     * ```ts
     * const result = await client.publication.createMomokaCommentTypedData({
     *   commentOn: '0x123-0x456',
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    createMomokaCommentTypedData(request: MomokaCommentRequest): PromiseResult<CreateMomokaCommentBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to create a mirror on Momoka.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnMomoka}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns Typed data for creating a post
     *
     * @example
     * ```ts
     * const result = await client.publication.createMomokaMirrorTypedData({
     *   mirrorOn: '0x123-0x456',
     * });
     * ```
     */
    createMomokaMirrorTypedData(request: MomokaMirrorRequest): PromiseResult<CreateMomokaMirrorBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to create a quote on Momoka.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnMomoka}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns Typed data for creating a post
     *
     * @example
     * ```ts
     * const result = await client.publication.createMomokaQuoteTypedData({
     *   quoteOn: '0x123-0x456',
     *   contentURI: 'ipfs://Qm...', // or arweave
     * });
     * ```
     */
    createMomokaQuoteTypedData(request: MomokaQuoteRequest): PromiseResult<CreateMomokaQuoteBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Collect a publication using Profile Manager. Profile has to have a Profile Manager enabled.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.legacyCollect({
     *   on: '0x123-0x456',
     * });
     * ```
     */
    legacyCollect(request: LegacyCollectRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to collect a publication.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data for collecting a publication
     *
     * @example
     * ```ts
     * const result = await client.publication.createLegacyCollectTypedData({
     *   on: '0x123-0x456',
     * });
     * ```
     */
    createLegacyCollectTypedData(request: LegacyCollectRequest, options?: TypedDataOptions): PromiseResult<CreateLegacyCollectBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Predict the next onchain Publication id for a Profile.
     *
     * @param request - Request object for the method
     * @returns Publication Id
     */
    predictNextOnChainPublicationId({ from, }: {
        /**
         * Profile Id of the profile to predict the next onchain Publication Id for
         */
        from: Scalars['ProfileId']['input'];
    }): Promise<Scalars['PublicationId']['output']>;
}
