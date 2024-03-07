import { Profile, ProfileRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { OneOf } from '@digiv3rse/shared-kernel';
import { NotFoundError } from "../NotFoundError.js";
import { UseDeferredTask } from "../helpers/tasks.js";
/**
 * {@link useLazyProfile} callback hook arguments
 */
export type FetchProfileArgs = OneOf<ProfileRequest>;
/**
 * `useLazyProfile` is a lazy version of {@link useProfile} React Hook.
 *
 * This hook will not fetch the profile until the returned function is called.
 *
 * This hook is intended to enable more complex use cases, the vast majority of
 * use cases should use {@link useProfile} instead.
 *
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyProfile();
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 *
 * ```ts
 * const { called, data, error, loading, execute } = useLazyProfile();
 *
 * const callback = async () => {
 *   const result = await execute({ forProfileId: profileId });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const profile = result.value;
 *
 *   // do something with profile
 * }
 * ```
 *
 * @category Profiles
 * @group Hooks
 */
export declare function useLazyProfile(): UseDeferredTask<Profile, NotFoundError | UnspecifiedError, FetchProfileArgs>;
