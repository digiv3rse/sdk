import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { ProfileFragment } from "../../graphql/fragments.generated.js";
import type { MutualPoapsQueryRequest, PoapEventQueryRequest, PoapHoldersQueryRequest, UserPoapsQueryRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { PoapEventFragment, PoapTokenFragment } from "./graphql/poap.generated.js";
/**
 * POAP is a protocol for the preservation of memories as digital records.
 *
 * @experimental This module is not stable and may be removed in a future release
 * @group DiGiClient Modules
 */
export declare class Poaps {
    private readonly context;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Get profile POAP tokens.
     *
     * @param request - The request object.
     * @returns POAP tokens wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.poaps.fetch({
     *   for: '0x04',
     * });
     * ```
     */
    fetch(request: UserPoapsQueryRequest): Promise<PaginatedResult<PoapTokenFragment>>;
    /**
     * Get profiles holding a POAP token from a specific event.
     *
     * @param request - The request object.
     * @returns Profiles wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.poaps.holders({
     *   eventId: '0x04',
     * });
     * ```
     */
    holders(request: PoapHoldersQueryRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Fetch mutual POAP events between two profiles.
     *
     * @param request - The request object.
     * @returns POAP events wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.poaps.mutualEvents({
     *   observer: '0x04',
     *   viewing: '0x01',
     * });
     * ```
     */
    mutualEvents(request: MutualPoapsQueryRequest): Promise<PaginatedResult<PoapEventFragment>>;
    /**
     * Fetch a POAP event.
     *
     * @param request - The request object.
     * @returns POAP event.
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.poaps.event({
     *   eventId: '0x04',
     * });
     * ```
     */
    event(request: PoapEventQueryRequest): Promise<PoapEventFragment | null>;
}
