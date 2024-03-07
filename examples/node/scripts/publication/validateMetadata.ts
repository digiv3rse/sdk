import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const metadata = {};

  const result = await client.publication.validateMetadata({
    json: JSON.stringify(metadata),
  });

  if (!result.valid) {
    throw new Error(`Metadata is not valid because of ${String(result.reason)}`);
  }

  console.log(`Result: `, result);
}

main();
