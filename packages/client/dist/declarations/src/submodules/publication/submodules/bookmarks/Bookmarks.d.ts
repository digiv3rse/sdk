import type { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../../../authentication/index.js";
import { DiGiContext } from "../../../../context.js";
import type { CredentialsExpiredError, NotAuthenticatedError } from "../../../../errors.js";
import type { AnyPublicationFragment } from "../../../../graphql/types.js";
import type { PublicationBookmarkRequest, PublicationBookmarksRequest } from "../../../../graphql/types.generated.js";
import { PaginatedResult } from "../../../../helpers/index.js";
/**
 * Bookmarks are the posts, comments and mirrors saved in a dedicated list private to each profile.
 *
 * @group DiGiClient Modules
 */
export declare class Bookmarks {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch all publications bookmarked by authenticated profile.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the query
     * @returns Publications wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.publication.bookmarks.fetch();
     * ```
     */
    fetch(request?: PublicationBookmarksRequest): PromiseResult<PaginatedResult<AnyPublicationFragment>, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Adds a publication to the profile's bookmarks.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * const result = await client.publication.bookmarks.add({
     *   on: '0x123-0x456',
     * });
     * ```
     */
    add(request: PublicationBookmarkRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Removes a publication from the profile's bookmarks.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * const result = await client.publication.bookmarks.remove({
     *   on: '0x123-0x456',
     * });
     * ```
     */
    remove(request: PublicationBookmarkRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
}
