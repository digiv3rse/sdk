import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.nfts.fetchGalleries({
    for: '0x01',
  });

  console.log('Result: ', result.items);
}

main();
