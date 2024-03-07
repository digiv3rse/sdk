import { Profile, ProfilesRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { PaginatedArgs } from "../helpers/reads.js";
import { UseDeferredTask } from "../helpers/tasks.js";
/**
 * {@link useLazyProfiles} callback hook arguments
 */
export type FetchProfilesArgs = PaginatedArgs<ProfilesRequest>;
/**
 * `useLazyProfiles` is a lazy version of {@link useProfiles} React Hook.
 *
 * This version doesn't support pagination!
 *
 * This hook will not fetch profiles until the returned function is called.
 *
 * @experimental This hook is experimental and may change in the future.
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyProfiles();
 *
 * const callback = async () => {
 *   const result = await execute({
 *     where: {
 *       profileIds: ['0x01', '0x02'],
 *     },
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
 * @category Profiles
 * @group Hooks
 */
export declare function useLazyProfiles(): UseDeferredTask<Profile[], UnspecifiedError, FetchProfilesArgs>;
