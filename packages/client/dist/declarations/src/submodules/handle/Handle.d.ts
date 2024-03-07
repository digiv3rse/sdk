import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { HandleToAddressRequest } from "../../graphql/types.generated.js";
/**
 * Handle is one of the DiGi primitives.
 *
 * Handle can be used to identify an DiGi Profile or standalone.
 *
 * @group DiGiClient Modules
 */
export declare class Handle {
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Resolve a Handle to the owner address.
     * @param request - The request object
     * @returns The address or null
     *
     * @example
     * ```ts
     * const address = await client.handle.resolveAddress({ handle: 'digi/wagmi' });
     * ```
     */
    resolveAddress(request: HandleToAddressRequest): Promise<string | null>;
}
