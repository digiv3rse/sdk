import { DiGiClient, development } from '@digiv3rse/client';

async function main() {
  const client = new DiGiClient({
    environment: development,
  });

  const token = 'YOUR_VALID_REFRESH_TOKEN_HERE';
  await client.authentication.authenticateWith({ refreshToken: token });

  console.log(`Is DiGiClient authenticated? `, await client.authentication.isAuthenticated());

  const accessTokenResult = await client.authentication.getAccessToken();
  const accessToken = accessTokenResult.unwrap();
  const profileId = await client.authentication.getProfileId();

  console.log(`Authenticated profileId: `, profileId);
  console.log(`Access token: `, accessToken);
}

main();
