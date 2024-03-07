import { ClaimProfileWithHandleErrorReasonType, Profile, ReservedClaimable } from '@digiv3rse/api-bindings';
import { TransactionError } from '@digiv3rse/domain/entities';
import { FollowPolicyConfig, ClaimHandleError as GenericClaimHandleError } from '@digiv3rse/domain/use-cases/profile';
import { OneOf } from '@digiv3rse/shared-kernel';
import { UseDeferredTask } from "../helpers/tasks.js";
/**
 * @privateRemarks Extended class to generate proper documentation. No measurable run-time implications.
 */
export declare class ClaimHandleError extends GenericClaimHandleError<ClaimProfileWithHandleErrorReasonType> {
}
export { ClaimProfileWithHandleErrorReasonType };
/**
 * Claim a handle details.
 */
export type ClaimHandleArgs = OneOf<{
    /**
     * The handle local name to claim.
     */
    localName: string;
    /**
     * The handle reservation to claim.
     */
    reserved: ReservedClaimable;
}> & {
    /**
     * You can optionally specify a follow policy for the profile.
     */
    followPolicy?: FollowPolicyConfig;
};
/**
 * `useClaimHandle` is React Hook that allows you to claim a handle.
 *
 * You MUST be authenticated with a {@link WalletOnlySession} via {@link useLogin} to use this hook.
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Profiles
 * @group Hooks
 */
export declare function useClaimHandle(): UseDeferredTask<Profile, ClaimHandleError | TransactionError, ClaimHandleArgs>;
