import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.nfts.mutualCollections({
    observer: '0x01',
    viewing: '0x02',
  });

  console.log('Result: ', result.items);
}

main();
