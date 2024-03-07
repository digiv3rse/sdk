import { DiGiClient, development } from '@digiv3rse/client';

import { setupWallet } from '../shared/setupWallet';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const wallet = setupWallet();
  const address = await wallet.getAddress();

  const result = await client.wallet.profilesManaged({
    for: address,
  });

  console.log(
    `Profiles managed by ${address}: `,
    result.items.map((item) => ({
      id: item.id,
      handle: item.handle,
    })),
  );
}

main();
