import { Profile, ProfileSearchRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
export type UseSearchProfilesArgs = PaginatedArgs<ProfileSearchRequest>;
/**
 * `useSearchProfiles` is a paginated hook that lets you search for profiles based on a defined criteria
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseSearchProfilesArgs}
 *
 * @example
 * ```tsx
 * function SearchProfiles() {
 *   const { data, error, loading } = useSearchProfiles({ query: 'foo' });
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
export declare function useSearchProfiles(args: UseSearchProfilesArgs): PaginatedReadResult<Profile[]>;
