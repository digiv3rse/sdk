import type { PromiseResult } from '@digiv3rse/shared-kernel';
import { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import { AlreadyInvitedCheckRequest, InviteRequest } from "../../graphql/types.generated.js";
import { InvitedResultFragment } from "./graphql/invites.generated.js";
/**
 * Invite new users to join DiGi Protocol.
 *
 * @group DiGiClient Modules
 */
export declare class Invites {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch all invited profiles.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @returns {@link PromiseResult} with array of {@link InvitedResultFragment}
     *
     * @example
     * ```ts
     * const result = await client.invites.invitedProfiles();
     * ```
     */
    invitedProfiles(): PromiseResult<InvitedResultFragment[], CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Check if a wallet was already invited.
     *
     * @param request - Request object for the query
     * @returns boolean
     *
     * @example
     * ```
     * const result = await client.invites.profileAlreadyInvited({
     *   for: '0x1234567890123456789012345678901234567890',
     * });
     * ```
     */
    profileAlreadyInvited(request: AlreadyInvitedCheckRequest): Promise<boolean>;
    /**
     * Invite one or many wallet addresses to join DiGi Protocol.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     *
     * @example
     * ```ts
     * const result = await client.invites.inviteProfile({
     *   invites: ['0x1234567890123456789012345678901234567890'],
     * });
     * ```
     */
    inviteProfile(request: InviteRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
}
