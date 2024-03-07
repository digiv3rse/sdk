import { PromiseResult } from '@digiv3rse/shared-kernel';
import { AnyTransactionRequestModel, Credentials } from "../../entities/index.js";
import { TransactionQueue } from "../transactions/index.js";
import { ICredentialsReader } from "./ActiveWallet.js";
import { ICredentialsWriter } from "./ICredentialsWriter.js";
import { Logout } from "./Logout.js";
import { SessionData } from "./SessionData.js";
export declare class CredentialsExpiredError extends Error {
    name: "CredentialsExpiredError";
    message: string;
}
export interface ICredentialsGateway extends ICredentialsReader, ICredentialsWriter {
}
export interface ICredentialsRenewer {
    renewCredentials(credentials: Credentials): PromiseResult<Credentials, CredentialsExpiredError>;
}
export interface IBootstrapPresenter {
    present(session: SessionData): void;
}
export declare class Bootstrap {
    private readonly credentialsGateway;
    private readonly credentialsRenewer;
    private readonly transactionQueue;
    private readonly logout;
    private readonly presenter;
    constructor(credentialsGateway: ICredentialsGateway, credentialsRenewer: ICredentialsRenewer, transactionQueue: TransactionQueue<AnyTransactionRequestModel>, logout: Logout, presenter: IBootstrapPresenter);
    execute(): Promise<void>;
}
