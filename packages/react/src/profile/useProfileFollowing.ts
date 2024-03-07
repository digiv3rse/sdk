import {
  Profile,
  FollowingRequest,
  useFollowing as useFollowingHook,
} from '@digiv3rse/api-bindings';

import { useDiGiApolloClient } from '../helpers/arguments';
import { PaginatedArgs, PaginatedReadResult, usePaginatedReadResult } from '../helpers/reads';
import { useFragmentVariables } from '../helpers/variables';

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
export function useProfileFollowing(args: UseProfileFollowingArgs): PaginatedReadResult<Profile[]> {
  return usePaginatedReadResult(
    useFollowingHook(
      useDiGiApolloClient({
        variables: useFragmentVariables(args),
      }),
    ),
  );
}
