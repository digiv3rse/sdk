import { BaseStorageSchema, IStorageProvider, Storage } from '@digiv3rse/storage';
import { JsonAuthSig } from '@lit-protocol/types';
import { z } from 'zod';

export const AuthSigData: z.Schema<JsonAuthSig, z.ZodTypeDef, object> = z
  .object({
    sig: z.string(),
    derivedVia: z.string(),
    signedMessage: z.string(),
    address: z.string(),
  })
  .strict();

export function createAuthStorage(storageProvider: IStorageProvider, namespace: string) {
  const authSigSchema = new BaseStorageSchema(`digi.${namespace}.gated`, AuthSigData);
  return Storage.createForSchema(authSigSchema, storageProvider);
}
