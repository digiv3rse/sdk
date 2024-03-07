import { FollowRevenueRequest, RevenueAggregate } from '@digiv3rse/api-bindings';
import { ReadResult } from "../helpers/reads.js";
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
export declare function useRevenueFromFollow(args: UseRevenueFromFollowArgs): ReadResult<RevenueAggregate[]>;
