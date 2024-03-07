import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const profileId = '0x01';

  const result = await client.revenue.fromPublications({
    for: profileId,
  });

  console.log(`Follow revenue for profile with id: ${profileId}`, result);
}

main();
