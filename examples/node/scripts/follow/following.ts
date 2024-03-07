import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.profile.following({
    for: '0x01',
  });

  console.log(
    `Following:`,
    result.items.map((p) => p.handle),
  );
}

main();
