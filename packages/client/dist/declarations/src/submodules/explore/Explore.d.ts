import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import type { PostFragment, ProfileFragment, QuoteFragment } from "../../graphql/fragments.generated.js";
import type { ExploreProfilesRequest, ExplorePublicationRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
/**
 * Explore DiGi Protocol.
 *
 * @group DiGiClient Modules
 */
export declare class Explore {
    private readonly context;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Explore publications
     *
     * @param request - Request object for the query
     * @returns Publications wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * import { ExplorePublicationsOrderByType } from '@digiv3rse/client';
     *
     * const result = await client.explore.publications({
     *   orderBy: ExplorePublicationsOrderByType.Latest,
     * });
     * ```
     */
    publications(request: ExplorePublicationRequest): Promise<PaginatedResult<PostFragment | QuoteFragment>>;
    /**
     * Explore profiles
     *
     * @param request - Request object for the query
     * @returns Profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * import { ExploreProfilesOrderByType } from '@digiv3rse/client';
     *
     * const result = await client.explore.profiles({
     *   orderBy: ExploreProfilesOrderByType.MostFollowers,
     * });
     * ```
     */
    profiles(request: ExploreProfilesRequest): Promise<PaginatedResult<ProfileFragment>>;
}
