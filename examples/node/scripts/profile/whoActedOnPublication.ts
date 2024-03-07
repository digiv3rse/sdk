import { DiGiClient, OpenActionCategoryType, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.profile.whoActedOnPublication({
    on: '0x0635-0x0f',
    where: {
      anyOf: [
        {
          category: OpenActionCategoryType.Collect,
        },
      ],
    },
  });

  console.log(
    `Result: `,
    result.items.map((i) => ({
      id: i.id,
      handle: i.handle,
    })),
  );
}

main();
