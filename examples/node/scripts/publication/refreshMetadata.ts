import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.publication.refreshMetadata({
    for: '0x123-0x456',
  });

  console.log(`Result: `, result);
}

main();
