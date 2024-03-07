import { DiGiClient } from '@digiv3rse/client';

export async function getOwnedProfileId(client: DiGiClient, address: string) {
  const ownedProfiles = await client.profile.fetchAll({ where: { ownedBy: [address] } });

  if (ownedProfiles.items.length === 0) {
    throw new Error(`You don't have any profiles, create one first`);
  }

  return ownedProfiles.items[0].id;
}
