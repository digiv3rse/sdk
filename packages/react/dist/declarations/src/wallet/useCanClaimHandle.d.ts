import { ClaimableProfilesResult } from '@digiv3rse/api-bindings';
import { ReadResult } from "../helpers/reads.js";
export type { ClaimableProfilesResult, ReservedClaimable } from '@digiv3rse/api-bindings';
/**
 * `useCanClaimHandle` is React Hook that allows you to check if you can claim a handle.
 *
 * You MUST be authenticated with a {@link WalletOnlySession} via {@link useLogin} to use this hook.
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Wallet
 * @group Hooks
 */
export declare function useCanClaimHandle(): ReadResult<ClaimableProfilesResult>;
