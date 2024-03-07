import { PendingSigningRequestError, UserRejectedError, WalletConnectionError } from '@digiv3rse/react';
import { Client, ClientOptions } from '@xmtp/react-sdk';
/**
 * @experimental
 */
export type InitXmtpClientOptions = Partial<Omit<ClientOptions, 'env' | 'privateKeyOverride'>>;
/**
 * @experimental
 */
export type UseXmtpClientResult = {
    client: Client | undefined;
    disconnect: () => Promise<void>;
    error: PendingSigningRequestError | UserRejectedError | WalletConnectionError | Error | undefined;
    initialize: (options?: InitXmtpClientOptions) => Promise<Client | undefined>;
    isLoading: boolean;
};
/**
 * Initialize XMTP client using the same Signer as the one provided with `DiGiConfig`.
 * Store XMTP user's decryption key in storage to improve UX.
 * Be aware that XMTP user's key must be stored safely.
 *
 * You MUST be authenticated via `useLogin` to use this hook.
 *
 * @example
 * ```tsx
 * const { client, disconnect, isLoading, error, initialize } = useXmtpClient();
 *
 * const handleConnect = async () => {
 *   await initialize();
 * };
 *
 * if (isLoading) return 'Loading...';
 * if (error) return 'Error';
 *
 * if (!client) {
 *   return (
 *     <button type="button" onClick={handleConnect}>
 *       Connect to XMTP
 *     </button>
 *   );
 * }
 * ```
 * @category Inbox
 * @group Hooks
 * @experimental
 */
export declare function useXmtpClient(): UseXmtpClientResult;
