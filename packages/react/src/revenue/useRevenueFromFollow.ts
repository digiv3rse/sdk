import {
  FollowRevenueRequest,
  RevenueAggregate,
  useFollowRevenues,
} from '@digiv3rse/api-bindings';

import { useDiGiApolloClient } from '../helpers/arguments';
import { ReadResult, useReadResult } from '../helpers/reads';
import { useFragmentVariables } from '../helpers/variables';

/**
 * {@link useRevenueFromFollow} hook arguments
 */
export type UseRevenueFromFollowArgs = FollowRevenueRequest;

/**
 * Fetch a revenue of a profile from all follow actions.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useRevenueFromFollow({
 *   for: '0x04',
 * });
 * ```
 *
 * @category Revenue
 * @group Hooks
 */
export function useRevenueFromFollow(
  args: UseRevenueFromFollowArgs,
): ReadResult<RevenueAggregate[]> {
  const { data, error, loading } = useReadResult(
    useFollowRevenues(
      useDiGiApolloClient({
        variables: useFragmentVariables({
          request: args,
        }),
      }),
    ),
  );

  if (loading) {
    return {
      data: undefined,
      error: undefined,
      loading: true,
    };
  }

  if (error) {
    return {
      data: undefined,
      error: error,
      loading: false,
    };
  }

  return {
    data: data.revenues,
    error: undefined,
    loading: false,
  };
}
