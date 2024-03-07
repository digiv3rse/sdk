import { useXmtpClient } from '@digiv3rse/react-web/inbox';
import { ReactNode } from 'react';

import { EnableConversationsButton } from './EnableConversationsButton';

type Props = {
  children: ReactNode;
};

export function EnableConversations({ children }: Props) {
  const { client } = useXmtpClient();

  if (!client) {
    return <EnableConversationsButton />;
  }

  return children;
}
