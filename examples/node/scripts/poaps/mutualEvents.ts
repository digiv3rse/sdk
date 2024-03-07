import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.poaps.mutualEvents({
    observer: '0x04',
    viewing: '0x01',
  });

  console.log(
    'Result: ',
    result.items.map((item) => item),
  );
}

main();
