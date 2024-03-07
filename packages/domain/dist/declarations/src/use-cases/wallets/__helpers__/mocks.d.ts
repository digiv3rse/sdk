import { Amount, Erc20, EvmAddress, Result } from '@digiv3rse/shared-kernel';
import { Wallet } from "../../../entities/index.js";
import { IBalanceGateway, ITokenGateway, TokenAvailability, TokenAvailabilityError, TokenAvailabilityRequest } from "../TokenAvailability.js";
export declare function mockIBalanceGateway<T extends Erc20>({ wallet, asset, balance, }: {
    wallet: Wallet;
    asset: T;
    balance: Amount<T>;
}): IBalanceGateway;
export declare function mockITokenGateway<T extends Erc20>({ owner, asset, spender, allowance, }: {
    owner: Wallet;
    asset: T;
    spender: EvmAddress;
    allowance: Amount<T>;
}): ITokenGateway;
export declare function mockTokenAvailabilityRequest(override?: Partial<TokenAvailabilityRequest>): TokenAvailabilityRequest;
export declare function mockTokeAvailability({ request, result, }: {
    request?: TokenAvailabilityRequest;
    result: Result<void, TokenAvailabilityError>;
}): TokenAvailability;
