import { z } from 'zod';
import { BaseStorageSchema, IStorageItem } from "./BaseStorageSchema.js";
declare const PersistedCredentialsSchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    refreshToken: string;
}, {
    refreshToken: string;
}>;
type PersistedCredentialsSchema = typeof PersistedCredentialsSchema;
export type PersistedCredentials = z.infer<PersistedCredentialsSchema>;
export declare class CredentialsStorageSchema extends BaseStorageSchema<PersistedCredentialsSchema> {
    version: number;
    constructor(key: string);
    protected migrate(storageItem: IStorageItem<PersistedCredentials>): PersistedCredentials;
}
export {};
