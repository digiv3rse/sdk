import { Amount } from "../Amount.js";
import { Erc20, Fiat } from "../Asset.js";
import { ChainType } from "../ChainType.js";
import { Data, EvmAddress } from "../types.js";
export declare function mock32BytesHexString(): string;
export declare function mockData(): Data;
export declare function mockEvmAddress(): EvmAddress;
export declare function mockEtherAmount(value: number | string): Amount<import("../Asset.js").Ether>;
export declare function mockEtherGweiAmount(value: number | string): Amount<import("../Asset.js").Ether>;
export declare function mockMaticGweiAmount(value: number | string): Amount<import("../Asset.js").Matic>;
export declare function mockUsdAsset(): Fiat;
export declare function mockUsdAmount(value: number | string): Amount<Fiat>;
export declare function mockErc20Asset({ address, symbol, chainType, }: {
    address: string;
    symbol: string;
    chainType?: ChainType;
}): Erc20;
export declare function mockDaiAsset({ chainType, }?: {
    chainType?: ChainType;
}): Erc20;
export declare function mockUsdcAsset({ chainType, }?: {
    chainType?: ChainType;
}): Erc20;
export declare function mockDaiAmount(value: number | string, chainType?: ChainType): Amount<Erc20>;
export declare function mockUsdcAmount(value: number | string, chainType?: ChainType): Amount<Erc20>;
export declare function mockMaticAmount(value: number | string): Amount<import("../Asset.js").Matic>;
