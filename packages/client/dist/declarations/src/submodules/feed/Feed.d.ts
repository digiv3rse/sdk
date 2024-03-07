import type { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import type { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import type { PostFragment, QuoteFragment } from "../../graphql/fragments.generated.js";
import type { FeedHighlightsRequest, FeedRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { FeedItemFragment, FollowPaidActionFragment, OpenActionPaidActionFragment } from "./graphql/feed.generated.js";
/**
 * Feed is one of the most fundamental element to create a successful social media site.
 *
 * @group DiGiClient Modules
 */
export declare class Feed {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch feed items.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the query
     * @returns Array of {@link FeedItemFragment} wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.feed.fetch({
     *   where: {
     *     for: '0x123',
     *   },
     * });
     * ```
     */
    fetch(request: FeedRequest): PromiseResult<PaginatedResult<FeedItemFragment>, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch feed highlights.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the query
     * @returns Array of publications wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.feed.highlights({
     *   where: {
     *     for: '0x123',
     *   },
     * });
     * ```
     */
    highlights(request: FeedHighlightsRequest): PromiseResult<PaginatedResult<PostFragment | QuoteFragment>, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch latest paid actions.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @returns Array of paid actions wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.feed.latestPaidActions();
     * ```
     */
    latestPaidActions(): PromiseResult<PaginatedResult<FollowPaidActionFragment | OpenActionPaidActionFragment>, CredentialsExpiredError | NotAuthenticatedError>;
}
