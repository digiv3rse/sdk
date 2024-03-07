import { BaseStorageSchema, IStorageProvider, Storage } from '@digiv3rse/storage';
import { z } from 'zod';

export const KeyBundleData = z.string();

export type KeyBundleData = z.infer<typeof KeyBundleData>;

export function createInboxKeyStorage(storageProvider: IStorageProvider, namespace: string) {
  const notificationStorageDataSchema = new BaseStorageSchema(
    `digi.${namespace}.inbox.keyBundle`,
    KeyBundleData,
  );
  return Storage.createForSchema(notificationStorageDataSchema, storageProvider);
}
