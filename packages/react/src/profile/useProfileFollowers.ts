import {
  Profile,
  FollowersRequest,
  useFollowers as useFollowersHook,
} from '@digiv3rse/api-bindings';

import { useDiGiApolloClient } from '../helpers/arguments';
import { PaginatedArgs, PaginatedReadResult, usePaginatedReadResult } from '../helpers/reads';
import { useFragmentVariables } from '../helpers/variables';

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
export function useProfileFollowers(args: UseProfileFollowersArgs): PaginatedReadResult<Profile[]> {
  return usePaginatedReadResult(
    useFollowersHook(
      useDiGiApolloClient({
        variables: useFragmentVariables(args),
      }),
    ),
  );
}
