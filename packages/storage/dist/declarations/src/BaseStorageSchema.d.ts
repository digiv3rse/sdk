import { z } from 'zod';
/**
 * Error thrown when the storage item does not match the validation schema
 */
export declare class SchemaMismatchError extends Error {
    name: "SchemaMismatchError";
    constructor(schemaId: string, errors: string);
}
/**
 * Error thrown when no migration path is found between two versions
 */
export declare class NoMigrationPathError extends Error {
    name: "NoMigrationPathError";
    constructor(schemaId: string, fromVersion: number, toVersion: number);
}
declare const storageMetadata: z.ZodObject<{
    version: z.ZodNumber;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    version: number;
    createdAt: number;
    updatedAt: number;
}, {
    version: number;
    createdAt: number;
    updatedAt: number;
}>;
export type StorageMetadata = z.infer<typeof storageMetadata>;
export interface IStorageItem<Data> {
    data: Data;
    metadata: StorageMetadata;
}
/**
 * A storage schema that can be used to migrate data between versions
 */
export interface IStorageSchema<Data> {
    get key(): string;
    get version(): number;
    process(item: unknown): Promise<IStorageItem<Data>>;
}
/**
 * A basic storage schema implementation without migration strategy.
 *
 * Use it directly of as the base class for specific schemas when migrations are required.
 */
export declare class BaseStorageSchema<T extends z.ZodSchema<Output, z.ZodTypeDef, Input>, Output = z.output<T>, Input = z.input<T>> implements IStorageSchema<Output> {
    readonly key: string;
    private schema;
    readonly version: number;
    constructor(key: string, schema: T);
    process(storageItemUnknown: unknown): Promise<IStorageItem<Output>>;
    protected migrate(storageItem: IStorageItem<Input>): Output;
    protected parseStorageItem(storageItem: unknown): IStorageItem<Input>;
    protected parseData(data: Input): Output;
}
export {};
