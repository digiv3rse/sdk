import { LastLoggedInProfileRequest, Profile, UnspecifiedError } from '@digiv3rse/api-bindings';
import { NotFoundError } from "../NotFoundError.js";
import { ReadResult } from "../helpers/reads.js";
/**
 * {@link useLastLoggedInProfile} hook arguments
 */
export type UseLastLoggedInProfileArgs = LastLoggedInProfileRequest;
/**
 * Fetch the last logged in profile for a wallet address.
 *
 * @example
 * ```ts
 * const { data, error, loading } = useLastLoggedInProfile({
 *   for: '0x1234567890123456789012345678901234567890',
 * });
 * ```
 *
 * @category Wallet
 * @group Hooks
 */
export declare function useLastLoggedInProfile(args: UseLastLoggedInProfileArgs): ReadResult<Profile, NotFoundError | UnspecifiedError>;
