import {
  Profile,
  ProfileRecommendationsRequest,
  useProfileRecommendations as useProfileRecommendationsHook,
} from '@digiv3rse/api-bindings';

import { useDiGiApolloClient } from '../helpers/arguments';
import { PaginatedArgs, PaginatedReadResult, usePaginatedReadResult } from '../helpers/reads';
import { useFragmentVariables } from '../helpers/variables';

/**
 * {@link useRecommendedProfiles} hook arguments
 */
export type UseRecommendedProfilesArgs = PaginatedArgs<ProfileRecommendationsRequest>;

/**
 * `useRecommendedProfiles` is a paginated hook that lets you fetch recommended profiles.
 *
 * @category Discovery
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useRecommendedProfiles({
 *   for: '0x123',
 * });
 * ```
 */
export function useRecommendedProfiles(
  args: UseRecommendedProfilesArgs,
): PaginatedReadResult<Profile[]> {
  return usePaginatedReadResult(
    useProfileRecommendationsHook(
      useDiGiApolloClient({
        variables: useFragmentVariables(args),
      }),
    ),
  );
}
