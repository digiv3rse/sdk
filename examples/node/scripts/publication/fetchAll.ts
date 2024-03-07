import { DiGiClient, development, isPostPublication } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const profileId = '0x04';
  const result = await client.publication.fetchAll({
    where: {
      from: [profileId],
    },
  });

  console.log(
    `All publications from profileId ${profileId}: `,
    result.items.map((p) => ({
      id: p.id,
    })),
  );

  const posts = result.items.filter(isPostPublication);

  console.log(
    `Only posts: `,
    posts.map((p) => ({
      id: p.id,
    })),
  );
}

main();
