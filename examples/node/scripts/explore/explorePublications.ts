import {
  ExplorePublicationsOrderByType,
  DiGiClient,
  LimitType,
  development,
} from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const result = await client.explore.publications({
    orderBy: ExplorePublicationsOrderByType.Latest,
    limit: LimitType.Ten,
  });

  console.log(
    'Result: ',
    result.items.map((item) => ({
      id: item.id,
      metadata: item.metadata,
      by: {
        id: item.by.id,
        handle: item.by.handle,
      },
    })),
  );
}

main();
