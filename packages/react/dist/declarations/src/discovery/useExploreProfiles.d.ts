import { ExploreProfilesRequest, Profile } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
export type UseExploreProfilesArgs = PaginatedArgs<ExploreProfilesRequest>;
/**
 * `useExploreProfiles` is a paginated hook that lets you discover new profiles based on a defined criteria
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseExploreProfilesArgs}
 *
 * @example
 * Explore the latest created profiles
 * ```tsx
 * import { useExploreProfiles, ExploreProfilesOrderByType } from '@digiv3rse/react';
 *
 * function ExploreProfiles() {
 *   const { data, error, loading } = useExploreProfiles({
 *      orderBy: ExploreProfilesOrderByType.LatestCreated,
 *   });
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   return (
 *     <ul>
 *       {data.map((profile) => (
 *         <li key={profile.id}>{profile.handle}</li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
export declare function useExploreProfiles({ where, limit, orderBy }?: UseExploreProfilesArgs): PaginatedReadResult<Profile[]>;
