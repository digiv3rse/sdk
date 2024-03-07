import { DiGiClient, development } from '@digiv3rse/client';

import { getAuthenticatedClient } from '../shared/getAuthenticatedClient';
import { setupWallet } from '../shared/setupWallet';

async function fetchAuthenticated() {
  const wallet = setupWallet();
  const client = await getAuthenticatedClient(wallet);

  const result = await client.nfts.fetch();

  console.log('Result: ', result.items);
}

async function fetchForProfileId() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.nfts.fetch({
    where: {
      forProfileId: '0x06',
    },
  });

  console.log('Result: ', result.items);
}

fetchAuthenticated();
fetchForProfileId();
