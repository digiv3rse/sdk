import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const searchTerm = 'test';

  const result = await client.search.profiles({
    query: searchTerm,
  });

  console.log(
    'Search result: ',
    result.items.map((item) => ({
      id: item.id,
      handle: item.handle,
    })),
  );
}

main();
