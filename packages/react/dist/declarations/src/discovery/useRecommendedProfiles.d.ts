import { Profile, ProfileRecommendationsRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
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
export declare function useRecommendedProfiles(args: UseRecommendedProfilesArgs): PaginatedReadResult<Profile[]>;
