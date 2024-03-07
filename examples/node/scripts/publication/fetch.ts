import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.publication.fetch({
    forId: '0x123-0x456',
  });

  console.log(`Publication fetched by id: `, result);
}

main();
