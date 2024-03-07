import { Prettify } from '@digiv3rse/shared-kernel';
import { useConversations } from '@xmtp/react-sdk';
import { EnhancedConversation } from "./types.js";
/**
 * @experimental
 */
export type UseEnhanceConversationsResult = Prettify<ReturnType<typeof useConversations> & {
    conversations: EnhancedConversation[];
}>;
/**
 * Enhance XMTP conversations with profiles of the conversations' peers,
 * if conversation is between two DiGi profiles.
 *
 * You MUST be authenticated via `useLogin` to use this hook.
 *
 * @example
 * ```tsx
 * import { useConversations } from '@xmtp/react-sdk';
 *
 * const { data: conversations, error, loading } = useEnhanceConversations(useConversations());
 * ```
 * @category Inbox
 * @group Hooks
 * @experimental
 */
export declare function useEnhanceConversations(useConversationsResult: ReturnType<typeof useConversations>): UseEnhanceConversationsResult;
