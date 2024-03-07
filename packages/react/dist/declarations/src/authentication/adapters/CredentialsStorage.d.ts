import { IStorage, IStorageProvider, PersistedCredentials, StorageSubscriber, StorageSubscription } from '@digiv3rse/storage';
import { JwtCredentials } from "./JwtCredentials.js";
/**
 * Stores auth credentials.
 * Access token is kept in memory.
 * Refresh token is persisted permanently.
 */
export declare class CredentialsStorage implements IStorage<JwtCredentials> {
    refreshTokenStorage: IStorage<PersistedCredentials>;
    accessToken: string | null;
    constructor(storageProvider: IStorageProvider, namespace: string);
    set({ accessToken, refreshToken }: JwtCredentials): Promise<void>;
    get(): Promise<JwtCredentials | null>;
    reset(): Promise<void>;
    subscribe(_: StorageSubscriber<JwtCredentials>): StorageSubscription;
    getAccessToken(): string | null;
    private getRefreshToken;
}
