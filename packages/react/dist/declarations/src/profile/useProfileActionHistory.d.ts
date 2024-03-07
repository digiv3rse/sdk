import { ProfileActionHistory, ProfileActionHistoryRequest } from '@digiv3rse/api-bindings';
import { PaginatedArgs, PaginatedReadResult } from "../helpers/reads.js";
/**
 * {@link useProfileActionHistory} hook arguments
 */
export type UseProfileActionHistoryArgs = PaginatedArgs<ProfileActionHistoryRequest>;
/**
 * `useProfileActionHistory` is a paginated hook that lets you fetch profile action history.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useProfileActionHistory();
 * ```
 */
export declare function useProfileActionHistory(args?: UseProfileActionHistoryArgs): PaginatedReadResult<ProfileActionHistory[]>;
