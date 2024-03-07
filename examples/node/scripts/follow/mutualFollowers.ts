import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.profile.mutualFollowers({
    observer: '0x01',
    viewing: '0x02',
  });

  console.log(
    `Mutual followers: `,
    result.items.map((i) => ({ id: i.id, handle: i.handle })),
  );
}

main();
