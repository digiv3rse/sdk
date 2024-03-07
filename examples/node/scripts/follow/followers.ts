import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.profile.followers({
    of: '0x01',
  });

  console.log(
    `Followers:`,
    result.items.map((p) => p.handle),
  );
}

main();
