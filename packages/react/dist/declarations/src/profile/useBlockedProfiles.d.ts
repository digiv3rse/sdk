import { Profile, WhoHaveBlockedRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useBlockedProfiles} hook arguments
 */
export type UseBlockedProfilesArgs = PaginatedArgs<WhoHaveBlockedRequest>;
/**
 * Fetch profiles that the authenticated profile has blocked.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useBlockedProfiles();
 * ```
 */
export declare function useBlockedProfiles(args?: UseBlockedProfilesArgs): PaginatedReadResult<Profile[]>;
