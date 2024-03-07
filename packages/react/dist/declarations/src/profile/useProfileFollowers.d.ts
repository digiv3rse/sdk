import { Profile, FollowersRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useProfileFollowers} hook arguments
 */
export type UseProfileFollowersArgs = PaginatedArgs<FollowersRequest>;
/**
 * `useProfileFollowers` is a paginated hook that lets you fetch profiles that follow a requested profile.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useProfileFollowers({
 *   of: '0x123',
 * });
 * ```
 */
export declare function useProfileFollowers(args: UseProfileFollowersArgs): PaginatedReadResult<Profile[]>;
