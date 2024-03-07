import { Credentials, Wallet } from "../../entities/index.js";
import { IWalletGateway } from "../wallets/IWalletGateway.js";
export interface ICredentialsReader {
    getCredentials(): Promise<Credentials | null>;
}
export declare class ActiveWallet {
    private credentialsReader;
    private walletGateway;
    constructor(credentialsReader: ICredentialsReader, walletGateway: IWalletGateway);
    requireActiveWallet(): Promise<Wallet>;
}
