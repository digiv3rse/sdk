import { Profile, FollowingRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useProfileFollowing} hook arguments
 */
export type UseProfileFollowingArgs = PaginatedArgs<FollowingRequest>;
/**
 * `useProfileFollowing` is a paginated hook that lets you fetch profiles that are followed by a requested profile.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useProfileFollowing({
 *   for: '0x123',
 * });
 * ```
 */
export declare function useProfileFollowing(args: UseProfileFollowingArgs): PaginatedReadResult<Profile[]>;
