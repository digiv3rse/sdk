import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const address = await client.handle.resolveAddress({ handle: 'test/wagmi' });

  console.log(`Address: `, address);
}

main();
