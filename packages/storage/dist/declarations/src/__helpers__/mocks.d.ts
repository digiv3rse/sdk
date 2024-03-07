import { IStorage, IObservableStorageProvider } from "../IStorage.js";
export declare function mockStorageProvider(initial?: string | null): IObservableStorageProvider;
export interface IMockedStorage<T> extends IStorage<T> {
    simulateUpdate(newData: T | null, oldData: T | null): void;
}
export declare function mockStorage<T>(initial?: T | null): IMockedStorage<T>;
