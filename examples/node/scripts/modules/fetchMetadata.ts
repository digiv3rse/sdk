import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.modules.fetchMetadata({
    implementation: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
  });

  console.log('Result: ', result);
}

main();
