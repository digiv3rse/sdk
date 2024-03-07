import { InvitedResult } from '@digiv3rse/api-bindings';
import { ReadResult } from "../helpers/reads.js";
/**
 * Fetch all invited profiles.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useInvitedProfiles();
 * ```
 *
 * @category Misc
 * @group Hooks
 */
export declare function useInvitedProfiles(): ReadResult<InvitedResult[]>;
