import { Amount, Erc20, EvmAddress, PromiseResult } from '@digiv3rse/shared-kernel';
import { Wallet } from "../../entities/index.js";
import { ActiveWallet } from "../authentication/ActiveWallet.js";
export interface IBalanceGateway {
    getBalanceFor<T extends Erc20>(wallet: Wallet, asset: T): Promise<Amount<T>>;
}
export interface ITokenGateway {
    getTransferAllowanceFor<T extends Erc20>(asset: T, owner: Wallet, spender: EvmAddress): Promise<Amount<T>>;
}
export declare class InsufficientAllowanceError extends Error {
    readonly requestedAmount: Amount<Erc20>;
    name: "InsufficientAllowanceError";
    constructor(requestedAmount: Amount<Erc20>);
}
export declare class InsufficientFundsError extends Error {
    readonly requestedAmount: Amount<Erc20>;
    name: "InsufficientFundsError";
    constructor(requestedAmount: Amount<Erc20>);
}
export type TokenAvailabilityRequest = {
    amount: Amount<Erc20>;
    spender: EvmAddress;
};
export type TokenAvailabilityError = InsufficientAllowanceError | InsufficientFundsError;
export declare class TokenAvailability {
    private readonly balanceGateway;
    private readonly tokenGateway;
    private readonly activeWallet;
    constructor(balanceGateway: IBalanceGateway, tokenGateway: ITokenGateway, activeWallet: ActiveWallet);
    checkAvailability(request: TokenAvailabilityRequest): PromiseResult<void, TokenAvailabilityError>;
}
