import { ProfileInterestTypes } from '@digiv3rse/client';

import { getAuthenticatedClient } from '../shared/getAuthenticatedClient';
import { getOwnedProfileId } from '../shared/getOwnedProfileId';
import { setupWallet } from '../shared/setupWallet';

async function main() {
  const wallet = setupWallet();
  const client = await getAuthenticatedClient(wallet);
  const profileId = await getOwnedProfileId(client, wallet.address);

  // add interests
  await client.profile.addInterests({
    interests: [ProfileInterestTypes.Technology, ProfileInterestTypes.HealthFitnessExercise],
  });

  // fetch all interests
  const profile = await client.profile.fetch({
    forProfileId: profileId,
  });

  console.log(`Profile interests`, profile?.interests);

  // remove interests
  await client.profile.removeInterests({
    interests: [ProfileInterestTypes.Technology],
  });
}

main();
