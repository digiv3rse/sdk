import { Profile } from '@digiv3rse/react';
import { useStartConversation } from '@xmtp/react-sdk';
/**
 * @experimental
 */
export type StartDiGiConversationRequest = {
    /**
     * Profile to start a conversation with
     */
    peerProfile: Profile;
};
/**
 * @experimental
 */
export type UseStartDiGiConversationResult = ReturnType<typeof useStartConversation>;
/**
 * Start a new XMTP conversation between two DiGi profiles.
 *
 * You MUST be authenticated via `useLogin` to use this hook.
 *
 * @example
 * ```tsx
 * const { startConversation, isLoading, error } = useStartDiGiConversation({
 *   peerProfile,
 * });
 *
 * const newConversation = await startConversation(peerProfile.ownedBy.address, firstMessage);
 * ```
 * @category Inbox
 * @group Hooks
 * @experimental
 */
export declare function useStartDiGiConversation(args: StartDiGiConversationRequest): UseStartDiGiConversationResult;
