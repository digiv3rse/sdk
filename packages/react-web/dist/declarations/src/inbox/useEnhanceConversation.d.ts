import { CachedConversation } from '@xmtp/react-sdk';
import { EnhancedConversation } from "./types.js";
/**
 * @experimental
 */
export type UseEnhanceConversationRequest = {
    /**
     * XMTP conversation to enhance
     */
    conversation: CachedConversation;
};
/**
 * @experimental
 */
export type UseEnhanceConversationResult = {
    conversation: EnhancedConversation;
    error: Error | null;
    isLoaded: boolean;
    isLoading: boolean;
};
/**
 * Enhance XMTP conversation with a profile of the conversation's peer
 *
 * You MUST be authenticated via `useLogin` to use this hook.
 *
 * @example
 * ```tsx
 * const { data: enhancedConversation, loading } = useEnhanceConversation({
 *   conversation,
 * });
 * ```
 * @param args - {@link UseEnhanceConversationRequest}
 * @category Inbox
 * @group Hooks
 * @experimental
 */
export declare function useEnhanceConversation({ conversation, }: UseEnhanceConversationRequest): UseEnhanceConversationResult;
