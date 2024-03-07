import { UnspecifiedError } from '@digiv3rse/api-bindings';
import { UseDeferredTask } from "../helpers/tasks.js";
export declare class HandleNotAvailableError extends Error {
    name: "HandleNotAvailableError";
    constructor(handle: string);
}
export declare class InvalidHandleError extends Error {
    name: "InvalidHandleError";
    constructor(localName: string);
}
export type ValidateHandleRequest = {
    /**
     * Just the local-name portion of the desired Handle.
     *
     * @example
     * ```ts
     * // digi/wagmi
     *
     * const localName = 'wagmi';
     * ```
     */
    localName: string;
};
/**
 * Validate the proposed new handle, its format and availability.
 *
 * This hook will not execute until the returned function is called.
 *
 * @example
 * ```ts
 * const { called,  error, loading, execute } = useValidateHandle();
 * ```
 *
 * Simple example:
 * ```ts
 * const { called, error, loading, execute } = useValidateHandle();
 *
 * const callback = async () => {
 *   const result = await execute({ localName: 'wagmi' });
 *
 *   if (result.isFailure()) {
 *     console.error(result.error.message); // handle not valid or already taken
 *     return;
 *   }
 *
 *   if (result.value === true) {
 *     // success - handle is available
 *   }
 * }
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 * @category Handle
 * @group Hooks
 */
export declare function useValidateHandle(): UseDeferredTask<void, UnspecifiedError | HandleNotAvailableError | InvalidHandleError, ValidateHandleRequest>;
