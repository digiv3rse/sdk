import { Profile } from '@digiv3rse/api-bindings';
import { InsufficientGasError, PendingSigningRequestError, UserRejectedError, WalletConnectionError } from '@digiv3rse/domain/entities';
import { BroadcastingError } from '@digiv3rse/domain/use-cases/transactions';
import { InsufficientAllowanceError, InsufficientFundsError } from '@digiv3rse/domain/use-cases/wallets';
import { UseDeferredTask } from "../helpers/tasks.js";
import { AsyncTransactionResult } from "./adapters/AsyncTransactionResult.js";
export declare class PrematureFollowError extends Error {
    name: "PrematureFollowError";
}
/**
 * An object representing the result of a follow operation.
 *
 * It allows to wait for the transaction to be processed and indexed.
 */
export type FollowAsyncResult = AsyncTransactionResult<void>;
export type FollowArgs = {
    /**
     * The profile to follow
     */
    profile: Profile;
    /**
     * Whether the transaction costs should be sponsored by the DiGi API or
     * should be paid by the authenticated wallet.
     *
     * There are scenarios where the sponsorship will be denied regardless of this value.
     * See {@link BroadcastingError} with:
     * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
     * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
     * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
     *
     * If not specified, or `true`, the hook will attempt a Signless Experience when possible;
     * otherwise, it will fall back to a signed experience.
     */
    sponsored?: boolean;
    /**
     * If the profile is configured with an Unknown Follow Module,
     * this is the calldata to be used to process the follow request.
     *
     * It's consumer responsibility to encode it correctly.
     */
    data?: string;
};
/**
 * `useFollow` allows you to follow another Profile.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```ts
 * const { execute: follow, error, loading } = useFollow();
 * ```
 *
 * ## Follow a profile
 *
 * Given you have an instance of a {@link Profile} from fetched data, you can follow with:
 *
 * ```ts
 * const { execute, error, loading } = useFollow();
 *
 * const follow = async (profile: Profile) => {
 *   const result = await execute({ profile });
 *
 *   // ...
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```ts
 * const follow = async (profile: Profile) => {
 *   const result = await execute({ profile });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'InsufficientAllowanceError':
 *         const requestedAmount = result.error.requestedAmount;
 *         console.log(
 *           'You must approve the contract to spend at least: '+
 *             `${requestedAmount.asset.symbol} ${requestedAmount.toSignificantDigits(6)}`
 *         );
 *         break;
 *
 *       case 'InsufficientFundsError':
 *         const requestedAmount = result.error.requestedAmount;
 *         console.log(
 *           'You do not have enough funds to pay for this follow fee: '+
 *             `${requestedAmount.asset.symbol} ${requestedAmount.toSignificantDigits(6)}`
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'PrematureFollowError':
 *         console.log('There is a pending unfollow request for this profile.');
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * }
 * ```
 *
 *
 * ## Wait for completion
 *
 * You can always wait the operation to be fully processed and indexed by DiGi API.
 *
 * ```ts
 * const follow = async (profile: Profile) => {
 *   const result = await execute({ profile });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending on the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   console.log('Follow executed successfully');
 * };
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const follow = async (profile: Profile) => {
 *   const result = await execute({
 *     profile,
 *     sponsored: false
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const follow = async (profile: Profile) => {
 *   const sponsoredResult = await execute({ profile });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({ profile, sponsored: false });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 * @category Profiles
 * @group Hooks
 */
export declare function useFollow(): UseDeferredTask<FollowAsyncResult, BroadcastingError | InsufficientAllowanceError | InsufficientFundsError | InsufficientGasError | PendingSigningRequestError | PrematureFollowError | UserRejectedError | WalletConnectionError, FollowArgs>;
