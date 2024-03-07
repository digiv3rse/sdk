import { IAccessTokenStorage } from '@digiv3rse/api-bindings';
import { CredentialsExpiredError } from '@digiv3rse/domain/use-cases/authentication';
import { PromiseResult } from '@digiv3rse/shared-kernel';
import { AuthApi } from "./AuthApi.js";
import { Callback, ICredentialsExpiryEmitter } from "./CredentialsExpiryController.js";
import { CredentialsStorage } from "./CredentialsStorage.js";
export type Unsubscribe = () => void;
export declare class AccessTokenStorage implements IAccessTokenStorage, ICredentialsExpiryEmitter {
    private readonly authApi;
    private readonly credentialsStorage;
    private isRefreshing;
    private expiryListeners;
    private refreshListeners;
    constructor(authApi: AuthApi, credentialsStorage: CredentialsStorage);
    onExpiry(callback: Callback): Unsubscribe;
    onRefresh(callback: Callback): Unsubscribe;
    getAccessToken(): string | null;
    refreshToken(): PromiseResult<void, CredentialsExpiredError>;
    private refreshCredentials;
    private emitExpiryEvent;
    private emitRefreshEvent;
}
