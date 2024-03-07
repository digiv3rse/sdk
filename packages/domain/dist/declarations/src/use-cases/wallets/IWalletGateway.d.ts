import { Wallet } from "../../entities/index.js";
export interface IWalletGateway {
    getByAddress(address: string): Promise<Wallet>;
}
