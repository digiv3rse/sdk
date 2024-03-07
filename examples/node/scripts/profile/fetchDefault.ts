import { DiGiClient, development } from '@digiv3rse/client';

import { setupWallet } from '../shared/setupWallet';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const wallet = setupWallet();

  const defaultProfile = await client.profile.fetchDefault({
    for: wallet.address,
  });

  console.log(`Default profile for wallet ${wallet.address}: `, {
    id: defaultProfile?.id,
    handle: defaultProfile?.handle,
  });
}

main();
