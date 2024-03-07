import { DiGiClient, development } from '@digiv3rse/client';

import { setupWallet } from '../shared/setupWallet';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const wallet = setupWallet();
  const address = await wallet.getAddress();

  const result = await client.invites.profileAlreadyInvited({
    for: address,
  });

  console.log(`Result for ${address}: `, result);
}

main();
