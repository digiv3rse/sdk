import type { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../../../authentication/index.js";
import { DiGiContext } from "../../../../context.js";
import type { CredentialsExpiredError, NotAuthenticatedError } from "../../../../errors.js";
import type { ReactionRequest, WhoReactedPublicationRequest } from "../../../../graphql/types.generated.js";
import { PaginatedResult } from "../../../../helpers/index.js";
import { ProfileWhoReactedResultFragment } from "./graphql/reactions.generated.js";
/**
 * React to publications off-chain.
 *
 * @group DiGiClient Modules
 */
export declare class Reactions {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Add a reaction to a publication.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * import { PublicationReactionType } from '@digiv3rse/client';
     *
     * await client.publication.reactions.add({
     *   for: '0x02-0x01',
     *   reaction: PublicationReactionType.Upvote,
     * });
     * ```
     */
    add(request: ReactionRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Remove a reaction from a publication.
     * If the reaction does not exist, this will return an error.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * import { PublicationReactionType } from '@digiv3rse/client';
     *
     * await client.publication.reactions.remove({
     *   for: '0x02-0x01',
     *   reaction: PublicationReactionType.Upvote,
     * });
     * ```
     */
    remove(request: ReactionRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch who reacted to a publication.
     *
     * @param request - Request object for the query
     * @returns Array of {@link ProfileFragment} wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.publication.reactions.fetch({
     *   for: '0x01-0x02',
     * });
     * ```
     */
    fetch(request: WhoReactedPublicationRequest): Promise<PaginatedResult<ProfileWhoReactedResultFragment>>;
}
