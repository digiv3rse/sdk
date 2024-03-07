import { AlreadyInvitedCheckRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { ReadResult } from "../helpers/reads.js";
import { UseDeferredTask } from "../helpers/tasks.js";
/**
 * {@link useWasWalletInvited} hook arguments
 */
export type UseWasWalletInvitedArgs = AlreadyInvitedCheckRequest;
/**
 * Check if a wallet was already invited.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useWasWalletInvited({
 *   for: '0x1234567890123456789012345678901234567890',
 * });
 * ```
 *
 * @category Wallet
 * @group Hooks
 */
export declare function useWasWalletInvited(args: UseWasWalletInvitedArgs): ReadResult<boolean>;
/**
 * Check if a wallet was already invited in a lazy way.
 *
 * This hook will not execute until the returned function is called.
 *
 * @experimental This hook is experimental and may change in the future.
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyWasWalletInvited();
 *
 * const callback = async () => {
 *   const result = await execute({ for: '0x1234567890123456789012345678901234567890' });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const wasInvited = result.value;
 *
 *   // continue
 * }
 * ```
 *
 * @category Wallet
 * @group Hooks
 */
export declare function useLazyWasWalletInvited(): UseDeferredTask<boolean, UnspecifiedError, UseWasWalletInvitedArgs>;
