import { Logout } from '@digiv3rse/domain/use-cases/authentication';
export type Callback = () => void;
export interface ICredentialsExpiryEmitter {
    onExpiry(callback: Callback): void;
}
export declare class CredentialsExpiryController {
    readonly logout: Logout;
    constructor(logout: Logout);
    subscribe(tokenExpiryEmitter: ICredentialsExpiryEmitter): void;
    private onTokenExpired;
}
