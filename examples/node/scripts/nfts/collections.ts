import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.nfts.collections({
    for: '0x06',
  });

  console.log('Result: ', result.items);
}

main();
