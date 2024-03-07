import { Profile } from '@digiv3rse/react';
import { CachedConversation } from '@xmtp/react-sdk';
export type EnhancedConversation = CachedConversation & {
    peerProfile?: Profile;
};
