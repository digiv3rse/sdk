/**
 * The reason for logging out
 */
export declare enum LogoutReason {
    CREDENTIALS_EXPIRED = "credentials-expired",
    USER_INITIATED = "user-initiated"
}
export interface IResettableCredentialsGateway {
    invalidate(reason: LogoutReason): Promise<void>;
}
export interface IResettableTransactionGateway {
    reset(): Promise<void>;
}
export interface IConversationsGateway {
    reset(): Promise<void>;
}
export interface ILogoutPresenter {
    logout(reason: LogoutReason): void;
}
export declare class Logout {
    private credentialsGateway;
    private transactionGateway;
    private conversationsGateway;
    private presenter;
    constructor(credentialsGateway: IResettableCredentialsGateway, transactionGateway: IResettableTransactionGateway, conversationsGateway: IConversationsGateway, presenter: ILogoutPresenter);
    execute(reason: LogoutReason): Promise<void>;
}
