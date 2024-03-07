import { IStorageItem, IStorageSchema } from "./BaseStorageSchema.js";
import { IObservableStorageProvider, IStorage, IStorageProvider, StorageSubscriber, StorageSubscription } from "./IStorage.js";
/**
 * An implementation of `IStorage` with support for migration strategies
 */
export declare class Storage<Data> implements IStorage<Data> {
    protected readonly schema: IStorageSchema<Data>;
    protected readonly provider: IStorageProvider | IObservableStorageProvider;
    protected constructor(schema: IStorageSchema<Data>, provider: IStorageProvider | IObservableStorageProvider);
    get(): Promise<Data | null>;
    reset(): Promise<void>;
    set(data: Data): Promise<void>;
    subscribe(subscriber: StorageSubscriber<Data>): StorageSubscription;
    private getWithMetadata;
    protected parse(json: string): Promise<IStorageItem<Data>>;
    private getStorageKey;
    static createForSchema<D>(schema: IStorageSchema<D>, provider: IStorageProvider): IStorage<D>;
}
