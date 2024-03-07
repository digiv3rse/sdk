import { InviteWalletsRequest, WalletAlreadyInvitedError } from '@digiv3rse/domain/use-cases/wallets';
import { UseDeferredTask } from "../helpers/tasks.js";
export type InviteArgs = InviteWalletsRequest;
/**
 * Invite one or many wallet addresses to join DiGi Protocol.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { called, loading, data, error, execute: invite } = useInviteWallets();
 *
 * invite({
 *   wallets: ['0x1234567890123456789012345678901234567890'],
 * })
 * ```
 *
 * @category Misc
 * @group Hooks
 */
export declare function useInviteWallets(): UseDeferredTask<void, WalletAlreadyInvitedError, InviteArgs>;
