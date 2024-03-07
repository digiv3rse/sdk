import type { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../../../authentication/index.js";
import { DiGiContext } from "../../../../context.js";
import type { CredentialsExpiredError, NotAuthenticatedError } from "../../../../errors.js";
import { DiGiProfileManagerRelayErrorFragment, RelaySuccessFragment } from "../../../../graphql/fragments.generated.js";
import type { ActOnOpenActionRequest, TypedDataOptions } from "../../../../graphql/types.generated.js";
import { CreateActOnOpenActionBroadcastItemResultFragment } from "./graphql/actions.generated.js";
/**
 * @group DiGiClient Modules
 */
export declare class Actions {
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Act on open action.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link DiGiProfileManagerRelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.publication.actions.actOn({
     *   actOn: {
     *     simpleCollectOpenAction: true,
     *   },
     *   for: '0x123-0x456',
     * });
     * ```
     */
    actOn(request: ActOnOpenActionRequest): PromiseResult<RelaySuccessFragment | DiGiProfileManagerRelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Fetch typed data to act on open action.
     *
     * Typed data has to be signed by the profile's wallet and broadcasted with {@link Transaction.broadcastOnchain}.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @param options - Configure returned typed data
     * @returns Typed data
     *
     * @example
     * ```ts
     * const result = await client.publication.actions.createActOnTypedData({
     *   actOn: {
     *     simpleCollectOpenAction: true,
     *   },
     *   for: '0x123-0x456',
     * });
     * ```
     */
    createActOnTypedData(request: ActOnOpenActionRequest, options?: TypedDataOptions): PromiseResult<CreateActOnOpenActionBroadcastItemResultFragment, CredentialsExpiredError | NotAuthenticatedError>;
}
