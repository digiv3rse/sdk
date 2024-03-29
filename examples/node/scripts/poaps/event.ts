import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.poaps.event({
    eventId: '0x04',
  });

  console.log('Result: ', result);
}

main();
