import { DiGiClient, development } from '@digiv3rse/client';
import { Wallet } from 'ethers';

import { getOwnedProfileId } from './getOwnedProfileId';

export async function getAuthenticatedClient(wallet: Wallet): Promise<DiGiClient> {
  const client = new DiGiClient({
    environment: development,
  });
  const address = await wallet.getAddress();
  const profileId = await getOwnedProfileId(client, address);

  const { id, text } = await client.authentication.generateChallenge({
    signedBy: address,
    for: profileId,
  });
  const signature = await wallet.signMessage(text);

  await client.authentication.authenticate({ id, signature });

  return client;
}
