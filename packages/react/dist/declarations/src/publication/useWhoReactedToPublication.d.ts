import { ProfileWhoReactedResult, WhoReactedPublicationRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useWhoReactedToPublication} hook arguments
 */
export type UseWhoReactedToPublicationArgs = PaginatedArgs<WhoReactedPublicationRequest>;
/**
 * `useWhoReactedToPublication` is a paginated hook that lets you fetch
 * profiles that reacted to a publication, together with the reactions.
 *
 * @category Publications
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useWhoReactedToPublication({
 *   for: '0x123-0x456',
 * });
 * ```
 */
export declare function useWhoReactedToPublication(args: UseWhoReactedToPublicationArgs): PaginatedReadResult<ProfileWhoReactedResult[]>;
