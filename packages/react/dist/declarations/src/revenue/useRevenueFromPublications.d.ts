import { PublicationRevenue, RevenueFromPublicationsRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useRevenueFromPublications} hook arguments
 */
export type UseRevenueFromPublicationsArgs = PaginatedArgs<RevenueFromPublicationsRequest>;
/**
 * Fetch a profile's revenue for all their publications.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useRevenueFromPublications({
 *   for: '0x04',
 * });
 * ```
 *
 * @category Revenue
 * @group Hooks
 * @param args - {@link UseRevenueFromPublicationsArgs}
 */
export declare function useRevenueFromPublications(args: UseRevenueFromPublicationsArgs): PaginatedReadResult<PublicationRevenue[]>;
