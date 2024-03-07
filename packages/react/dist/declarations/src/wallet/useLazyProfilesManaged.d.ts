import { Profile, ProfilesManagedRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { PaginatedArgs } from "../helpers/reads.js";
import { UseDeferredTask } from "../helpers/tasks.js";
/**
 * {@link useLazyProfilesManaged} callback hook arguments
 */
export type ProfilesManagedArgs = PaginatedArgs<ProfilesManagedRequest>;
/**
 * `useLazyProfilesManaged` is a lazy version of {@link useProfilesManaged} React Hook.
 *
 * This version doesn't support pagination!
 *
 * This hook will not fetch profiles until the returned function is called.
 *
 * @experimental This hook is experimental and may change in the future.
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyProfilesManaged();
 *
 * const callback = async () => {
 *   const result = await execute({
 *     for: '0x1234567890123456789012345678901234567890',
 *   });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const profiles = result.value;
 *
 *   // do something with the profiles
 * }
 * ```
 *
 * @category Wallet
 * @group Hooks
 */
export declare function useLazyProfilesManaged(): UseDeferredTask<Profile[], UnspecifiedError, ProfilesManagedArgs>;
