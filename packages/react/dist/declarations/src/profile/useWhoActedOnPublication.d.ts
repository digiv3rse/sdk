import { Profile, WhoActedOnPublicationRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useWhoActedOnPublication} hook arguments
 */
export type UseWhoActedOnPublicationArgs = PaginatedArgs<WhoActedOnPublicationRequest>;
/**
 * `useWhoActedOnPublication` is a paginated hook that lets you fetch profiles that acted on a publication.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useWhoActedOnPublication({
 *   on: '0x123-0x456',
 * });
 * ```
 */
export declare function useWhoActedOnPublication(args: UseWhoActedOnPublicationArgs): PaginatedReadResult<Profile[]>;
