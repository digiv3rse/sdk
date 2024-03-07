import { IEquatableError, DiGiClient, Result, TypedDataResponse } from '@digiv3rse/client';
import { Wallet } from 'ethers';

export async function signAndBroadcast<
  T extends TypedDataResponse,
  E extends IEquatableError<string, string>,
>(client: DiGiClient, wallet: Wallet, result: Result<T, E>) {
  const data = result.unwrap();

  // sign with the wallet
  const signedTypedData = await wallet._signTypedData(
    data.typedData.domain,
    data.typedData.types,
    data.typedData.value,
  );

  const broadcastResult = await client.transaction.broadcastOnchain({
    id: data.id,
    signature: signedTypedData,
  });

  // broadcastResult is a Result object
  return broadcastResult.unwrap();
}
