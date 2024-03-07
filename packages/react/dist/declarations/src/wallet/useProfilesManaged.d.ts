import { ProfilesManagedRequest, Profile } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useProfilesManaged} hook arguments
 */
export type UseProfilesManagedArgs = PaginatedArgs<ProfilesManagedRequest>;
/**
 * `useProfilesManaged` is a paginated hook that lets you fetch profiles managed by a wallet.
 *
 * @category Wallet
 * @group Hooks
 *
 * @example
 * Fetch all managed profiles, including owned profiles
 * ```tsx
 * const { data, loading, error } = useProfilesManaged({
 *   for: '0x1234567890123456789012345678901234567890',
 * });
 * ```
 *
 * Fetch managed profiles without owned ones
 * ```tsx
 * const { data, loading, error } = useProfilesManaged({
 *   for: '0x1234567890123456789012345678901234567890',
 *   includeOwned: false,
 * });
 * ```
 */
export declare function useProfilesManaged(args: UseProfilesManagedArgs): PaginatedReadResult<Profile[]>;
