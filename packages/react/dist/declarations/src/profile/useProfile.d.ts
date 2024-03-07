import { Profile, ProfileRequest, UnspecifiedError } from '@digiv3rse/api-bindings';
import { OneOf } from '@digiv3rse/shared-kernel';
import { NotFoundError } from "../NotFoundError.js";
import { ReadResult } from "../helpers/reads.js";
/**
 * {@link useProfile} hook arguments
 */
export type UseProfileArgs = OneOf<ProfileRequest>;
/**
 * `useProfile` is a React hook that allows you to fetch a profile from the DiGi API.
 *
 * @example
 * ```ts
 * const { data, error, loading } = useProfile({ forProfileId: '0x04' });
 * ```
 *
 * Get a profile by handle:
 * ```ts
 * const { data, error, loading } = useProfile({
 *   forHandle: 'digi/stani',
 * });
 * ```
 *
 * Get a profile by Id:
 * ```ts
 * const { data, error, loading } = useProfile({
 *   forProfileId: '0x04',
 * });
 * ```
 *
 * @category Profiles
 * @group Hooks
 *
 * @param args - {@link UseProfileArgs}
 */
export declare function useProfile({ forHandle, forProfileId, }: UseProfileArgs): ReadResult<Profile, NotFoundError | UnspecifiedError>;
