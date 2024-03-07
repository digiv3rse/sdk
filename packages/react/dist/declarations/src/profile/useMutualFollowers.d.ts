import { Profile, MutualFollowersRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useMutualFollowers} hook arguments
 */
export type UseMutualFollowersArgs = PaginatedArgs<MutualFollowersRequest>;
/**
 * `useMutualFollowers` is a paginated hook that lets you fetch mutual followers between two profiles.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useMutualFollowers({
 *   observer: '0x123',
 *   viewing: '0x456',
 * });
 * ```
 */
export declare function useMutualFollowers(args: UseMutualFollowersArgs): PaginatedReadResult<Profile[]>;
