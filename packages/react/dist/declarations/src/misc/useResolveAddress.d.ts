import { HandleToAddressRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { EvmAddress } from '@digiv3rse/shared-kernel';
import { UseDeferredTask } from "../helpers/tasks.js";
/**
 * `useResolveAddress` is a hook that resolves n EVM address from a DiGi Handle.
 *
 * This hook will not execute until the returned function is called.
 *
 * @example
 * ```ts
 * const { called,  error, loading, execute } = useResolveAddress();
 * ```
 *
 * Simple example:
 * ```ts
 * const { called, error, loading, execute } = useResolveAddress();
 *
 * const callback = async () => {
 *   const address = await execute({ handle: 'digi/wagmi' });
 *
 *   console.log(address);
 * }
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 * @category Handle
 * @group Hooks
 */
export declare function useResolveAddress(): UseDeferredTask<EvmAddress | null, UnspecifiedError, HandleToAddressRequest>;
