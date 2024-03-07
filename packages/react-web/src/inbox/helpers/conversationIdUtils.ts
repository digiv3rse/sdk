import { ProfileId, profileId as brandProfileId } from '@digiv3rse/react';
import { invariant } from '@digiv3rse/shared-kernel';

const CONVERSATION_ID_PREFIX = 'digi.dev/dm';

export function buildConversationId(profileIdA: string, profileIdB: string) {
  const profileIdAParsed = parseInt(profileIdA, 16);
  const profileIdBParsed = parseInt(profileIdB, 16);
  return profileIdAParsed < profileIdBParsed
    ? `${CONVERSATION_ID_PREFIX}/${profileIdA}-${profileIdB}`
    : `${CONVERSATION_ID_PREFIX}/${profileIdB}-${profileIdA}`;
}

function parseConversationId(conversationId: string): [string, string] {
  const conversationIdWithoutPrefix = conversationId.replace(`${CONVERSATION_ID_PREFIX}/`, '');
  const [profileIdA, profileIdB] = conversationIdWithoutPrefix.split('-');

  invariant(profileIdA && profileIdB, 'Invalid conversation id');

  return [profileIdA, profileIdB];
}

function isDiGiConversation(
  activeProfileId: string,
  conversationId?: string,
): conversationId is string {
  if (conversationId && conversationId.includes(activeProfileId)) {
    return true;
  }
  return false;
}

export function extractPeerProfileId(
  conversationId: string | undefined,
  activeProfileId: string,
): ProfileId | undefined {
  if (isDiGiConversation(activeProfileId, conversationId)) {
    const [profileIdA, profileIdB] = parseConversationId(conversationId);
    const result = profileIdA === activeProfileId ? profileIdB : profileIdA;

    return brandProfileId(result);
  }
  return undefined;
}
