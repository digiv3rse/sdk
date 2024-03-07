import { ChainType } from "./ChainType.js";
import { EvmAddress } from "./types.js";
/** @internal */
export declare enum Kind {
    NATIVE = 0,
    ERC20 = 1,
    FIAT = 2
}
/**
 * WellKnownSymbols is a convenience enum for well known asset symbols.
 *
 */
export declare enum WellKnownSymbols {
    ETH = "ETH",
    MATIC = "MATIC"
}
/** @internal */
export declare enum NativeType {
    ETHER = 0,
    MATIC = 1
}
/**
 * Fiat is a value object representing a fiat currency.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 */
declare class Fiat {
    readonly name: string;
    readonly symbol: string;
    /** @internal */
    readonly kind: Kind.FIAT;
    readonly decimals: number;
    constructor(name: string, symbol: string);
    /** @internal */
    get hash(): string;
    isErc20(): this is Erc20;
    isFiat(): this is Fiat;
    toString(): string;
}
/**
 * Ether is a value object representing the Ether token.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 */
declare class Ether {
    /** @internal */
    readonly kind: Kind.NATIVE;
    /** @internal */
    readonly type: NativeType.ETHER;
    readonly name: string;
    readonly decimals: number;
    readonly symbol: string;
    readonly chainType: ChainType;
    /** @internal */
    get hash(): string;
    isErc20(): this is Erc20;
    isNativeToken(): this is CryptoNativeAsset;
    isFiat(): this is Fiat;
    toString(): string;
}
/**
 * Matic is a value object representing the Matic token.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 */
declare class Matic {
    /** @internal */
    readonly kind: Kind.NATIVE;
    /** @internal */
    readonly type: NativeType.MATIC;
    readonly name: "Matic";
    readonly decimals: 18;
    readonly symbol: WellKnownSymbols.MATIC;
    readonly chainType: ChainType;
    /** @internal */
    get hash(): string;
    isErc20(): this is Erc20;
    isNativeToken(): this is CryptoNativeAsset;
    isFiat(): this is Fiat;
    toString(): WellKnownSymbols.MATIC;
}
/**
 * Erc20 is a value object representing an ERC20 token.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 */
declare class Erc20 {
    readonly name: string;
    readonly decimals: number;
    readonly symbol: string;
    readonly address: EvmAddress;
    readonly chainType: ChainType;
    /** @internal */
    readonly kind: Kind.ERC20;
    constructor(name: string, decimals: number, symbol: string, address: EvmAddress, chainType: ChainType);
    /** @internal */
    get hash(): string;
    isErc20(): this is Erc20;
    isNativeToken(): this is CryptoNativeAsset;
    isFiat(): this is Fiat;
    toString(): string;
}
export type { Erc20, Ether, Matic, Fiat };
/**
 * Asset is a convenience union of value objects representing currency or token.
 *
 * Asset instances are immutable and can be compared using reference equality (`===`).
 *
 */
export type Asset = Fiat | Ether | Erc20 | Matic;
/**
 * CryptoAsset is a convenience union representing tokens that are native to the supported blockchains.
 *
 * @remarks
 *
 * The reason we make a distinction between CryptoAsset and {@link Asset} is that CryptoAsset are
 * kind of "special" in that they are the only assets that do not have a canonical contract address
 * and they are used to pay for gas fees.
 */
export type CryptoNativeAsset = Ether | Matic;
/**
 * CryptoAsset is a convenience union representing currencies that are blockchain tokens.
 *
 */
export type CryptoAsset = Ether | Erc20 | Matic;
/**
 * Initialization object for `erc20` factory function
 *
 */
export type Erc20Info = {
    address: EvmAddress;
    chainType: ChainType;
    decimals: number;
    name: string;
    symbol: string;
};
/**
 * Erc20 asset factory function.
 *
 * Erc20 instances, like all {@link Asset} instances, are immutable and can be compared using reference equality (`===`).
 *
 * @param info - {@link Erc20Info} details
 * @returns An Erc20 asset instance.
 */
export declare function erc20({ name, decimals, symbol, address, chainType }: Erc20Info): Erc20;
/**
 * Matic asset provider function.
 *
 * There is only one Matic token, so this function returns the same instance every time.
 *
 * @returns The Matic instance.
 */
export declare function matic(): Matic;
/**
 * Ether asset provider function.
 *
 * There is only one Ether token, so this function returns the same instance every time.
 *
 * @returns The Ether instance.
 */
export declare function ether(): Ether;
/**
 * Initialization object for `fiat` factory function
 */
export type FiatInfo = {
    name: string;
    symbol: string;
};
/**
 * Fiat asset factory function.
 *
 * Fiat instances, like all {@link Asset} instances, are immutable and can be compared using reference equality (`===`).
 *
 * @param info - {@link FiatInfo} details
 * @returns An Fiat asset instance.
 */
export declare function fiat({ name, symbol }: FiatInfo): Fiat;
