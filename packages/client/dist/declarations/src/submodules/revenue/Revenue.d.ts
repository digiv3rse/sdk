import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import type { FollowRevenueRequest, RevenueFromPublicationRequest, RevenueFromPublicationsRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { PublicationRevenueFragment, RevenueAggregateFragment } from "./graphql/revenue.generated.js";
/**
 * Fetch a profile or publications revenue.
 *
 * @group DiGiClient Modules
 */
export declare class Revenue {
    private readonly context;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch a revenue from all follow actions.
     *
     * @param request - Request object for the query
     * @returns Aggregated revenue
     *
     * @example
     * ```ts
     * const result = await client.revenue.fromFollow({
     *   for: '0x123',
     * });
     * ```
     */
    fromFollow(request: FollowRevenueRequest): Promise<RevenueAggregateFragment[]>;
    /**
     * Fetch a profile's revenue from a single publication.
     *
     * @param request - Request object for the query
     * @returns Publication revenue
     *
     * @example
     * ```ts
     * const result = await client.revenue.fromPublication({
     *   for: '0x123-0x456',
     * });
     * ```
     */
    fromPublication(request: RevenueFromPublicationRequest): Promise<PublicationRevenueFragment | null>;
    /**
     * Fetch a profile's revenue for all their publications.
     *
     * @param request - Request object for the query
     * @returns {@link PublicationRevenueFragment} wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.revenue.fromPublications({
     *   for: '0x123',
     * });
     * ```
     */
    fromPublications(request: RevenueFromPublicationsRequest): Promise<PaginatedResult<PublicationRevenueFragment>>;
}
