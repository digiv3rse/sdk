import { UnspecifiedError, RevenueFromPublicationRequest, PublicationRevenue } from '@digiv3rse/api-bindings';
import { NotFoundError } from "../NotFoundError.js";
import { ReadResult } from "../helpers/reads.js";
/**
 * {@link useRevenueFromPublication} hook arguments
 */
export type UseRevenueFromPublicationArgs = RevenueFromPublicationRequest;
/**
 * Fetch a profile's revenue from a single publication.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useRevenueFromPublication({
 *   for: '0x04-0x0b',
 * });
 * ```
 *
 * @category Revenue
 * @group Hooks
 */
export declare function useRevenueFromPublication(args: UseRevenueFromPublicationArgs): ReadResult<PublicationRevenue, NotFoundError | UnspecifiedError>;
