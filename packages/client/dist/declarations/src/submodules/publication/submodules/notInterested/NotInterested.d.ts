import type { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../../../authentication/index.js";
import { DiGiContext } from "../../../../context.js";
import type { CredentialsExpiredError, NotAuthenticatedError } from "../../../../errors.js";
import type { PublicationNotInterestedRequest } from "../../../../graphql/types.generated.js";
/**
 * @group DiGiClient Modules
 */
export declare class NotInterested {
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Mark a publication as "not interested".
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * await client.publication.notInterested.add({
     *   on: '0x02-0x01',
     * });
     * ```
     */
    add(request: PublicationNotInterestedRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Undo marking a publication as "not interested".
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * await client.publication.notInterested.undo({
     *   on: '0x02-0x01',
     * });
     * ```
     */
    undo(request: PublicationNotInterestedRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
}
