import { Profile, SessionType, useSession } from '@digiv3rse/react';
import { invariant } from '@digiv3rse/shared-kernel';
import { useStartConversation } from '@xmtp/react-sdk';

import { buildConversationId } from './helpers';

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
export function useStartDiGiConversation(
  args: StartDiGiConversationRequest,
): UseStartDiGiConversationResult {
  const { data: session } = useSession();

  invariant(
    session?.authenticated,
    'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.',
  );
  invariant(
    session.type === SessionType.WithProfile,
    'You must have a profile to use this operation.',
  );

  return useStartConversation({
    conversationId: buildConversationId(session.profile.id, args.peerProfile.id),
    metadata: {},
  });
}
