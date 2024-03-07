import { Profile, UnspecifiedError } from '@digiv3rse/api-bindings';
import { InsufficientGasError, PendingSigningRequestError, TransactionError, UserRejectedError, WalletConnectionError } from '@digiv3rse/domain/entities';
import { EvmAddress } from '@digiv3rse/shared-kernel';
import { UseDeferredTask } from "../helpers/tasks.js";
import { HandleNotAvailableError, InvalidHandleError } from "../misc/index.js";
/**
 * Create Profile details.
 */
export type CreateProfileArgs = {
    /**
     * The user's wallet. Could be an EOA or EIP-1271 compliant Smart Wallet (e.g. ERC-6551).
     */
    to: EvmAddress;
    /**
     * The handle local name to claim.
     */
    localName: string;
    /**
     * Determines if the Signless Experience should be enabled.
     *
     * @defaultValue true, if not specified.
     */
    approveSignless?: boolean;
};
/**
 * `useCreateProfile` is a React Hook that allows you to create a Profile associated with a Handle.
 *
 * @example
 * ```ts
 * const { execute, loading, error } = useCreateProfile();
 * ```
 *
 * ## Create a Profile
 *
 * ```ts
 * const { execute, loading, error } = useCreateProfile();
 *
 * // ...
 *
 * const result = execute({
 *   localName: 'foobar', // full handle will be digi/foobar
 *   to: '0x1234567890123456789012345678901234567890',
 * });
 *
 * if (result.isFailure()) {
 *   console.error(result.error);
 *   return;
 * }
 *
 * const profile = result.value;
 * console.log(profile);
 * ```
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Profiles
 * @group Hooks
 */
export declare function useCreateProfile(): UseDeferredTask<Profile, PendingSigningRequestError | InsufficientGasError | UserRejectedError | WalletConnectionError | TransactionError | HandleNotAvailableError | InvalidHandleError | UnspecifiedError, CreateProfileArgs>;
