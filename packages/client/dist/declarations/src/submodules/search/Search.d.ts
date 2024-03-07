import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import type { ProfileFragment } from "../../graphql/fragments.generated.js";
import { PrimaryPublicationFragment } from "../../graphql/types.js";
import { ProfileSearchRequest, PublicationSearchRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
/**
 * Search for profiles and publications.
 *
 * @group DiGiClient Modules
 */
export declare class Search {
    private readonly context;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Search for profiles.
     *
     * @param request - Request object for the query
     * @returns Array of profiles wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.search.profiles({
     *   query: 'digi',
     * });
     * ```
     */
    profiles(request: ProfileSearchRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Search for publications.
     *
     * @param request - Request object for the query
     * @returns Array of publications wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.search.publications({
     *   query: 'digi',
     * });
     * ```
     */
    publications(request: PublicationSearchRequest): Promise<PaginatedResult<PrimaryPublicationFragment>>;
}
