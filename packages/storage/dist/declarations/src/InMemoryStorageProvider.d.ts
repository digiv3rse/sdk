import { IStorageProvider } from "./IStorage.js";
export declare class InMemoryStorageProvider implements IStorageProvider {
    private readonly store;
    constructor();
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
