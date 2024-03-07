import { BigDecimal } from "../arithmetic/BigDecimal.js";
import { Asset, CryptoAsset, CryptoNativeAsset, Erc20, Ether, Fiat, Matic } from "./Asset.js";
/**
 * A type alias for a value that can be used to construct an {@link Amount}
 *
 */
export type AmountValue = BigDecimal | number | string;
/**
 * A set of convenience helpers useful to specify amount values in common denominations.
 *
 */
export declare const Denomination: {
    /**
     * Creates an amount value in gwei (10^-9)
     *
     * @example
     * Define an Ethers {@link Amount} in gwei:
     *
     * ```ts
     * const etherAmount = Amount.ether(
     *   Denomination.gwei(1)
     * )
     * ```
     * @returns a {@link BigDecimal} instance
     */
    gwei(value: AmountValue): import("decimal.js").default;
    /**
     * Creates an amount value in gwei (10^-18)
     *
     * @example
     * Define an Ethers {@link Amount} in wei:
     *
     * ```ts
     * const etherAmount = Amount.ether(
     *   Denomination.wei(42)
     * )
     * ```
     * @returns a {@link BigDecimal} instance
     */
    wei(value: AmountValue): import("decimal.js").default;
};
/**
 * Amount is a value object representing an amount of given {@link Asset}.
 *
 * @sealed
 * @typeParam T - The {@link Asset} type of the amount.
 * @remarks
 *
 * Amount hides all the complexity of dealing with the specific precision constraints of different assets.
 * It offers a consistent interface to perform arithmetic operations on amounts.
 *
 * Amount is immutable. All arithmetic operations return a new Amount instance.
 */
export declare class Amount<T extends Asset> {
    readonly asset: T;
    private readonly value;
    private constructor();
    /**
     * Creates a new Amount using the `rate: Amount<C>` as conversion factor.
     *
     * The new Amount will have the {@link Asset} of the `rate` parameter.
     *
     * @typeParam C - The {@link Asset} type to convert to.
     * @example
     * Create the Fiat equivalent of an Ether Amount given the ETH-FIAT rate:
     *
     * ```ts
     * const etherAmount = Amount.ether('1'); // Amount<Ether>
     *
     * const fiatAsset = fiat({ name: 'US Dollar', symbol: 'USD' }); // Fiat
     *
     * const rate = Amount.fiat(fiatAsset, '0.0006'); // Amount<Fiat>
     *
     * const fiatAmount = etherAmount.convert(rate); // Amount<Fiat>
     * ```
     */
    convert<C extends Asset>(rate: Amount<C>): Amount<C>;
    /**
     * Equality check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is equal to the `amount` parameter.
     */
    eq(amount: Amount<T>): boolean;
    /**
     * Greater than check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is greater than the `amount` parameter.
     */
    gt(amount: Amount<T>): boolean;
    /**
     * Greater than or equal check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is greater than or equal to the `amount` parameter.
     */
    gte(amount: Amount<T>): boolean;
    /**
     * Less than check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is less than the `amount` parameter.
     */
    lt(amount: Amount<T>): boolean;
    /**
     * Less than or equal check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is less than or equal to the `amount` parameter.
     */
    lte(amount: Amount<T>): boolean;
    /**
     * Sum of two Amounts of the same {@link Asset}.
     *
     * @returns a new Amount that is the sum of this Amount and the `amount` parameter.
     */
    add(amount: Amount<T>): Amount<T>;
    /**
     * Difference of two Amounts of the same {@link Asset}.
     *
     * @returns a new Amount that is the difference of this Amount and the `amount` parameter.
     */
    sub(amount: Amount<T>): Amount<T>;
    /**
     * Product of an Amount and a scalar factor.
     *
     * @returns a new Amount that is the product of this Amount and the `factor` parameter.
     */
    mul(factor: AmountValue): Amount<T>;
    /**
     * Quotient of an Amount and a scalar divisor.
     *
     * @returns a new Amount that is the quotient of this Amount and the `divisor` parameter.
     */
    div(divisor: AmountValue): Amount<T>;
    /**
     * Converts the internal value as {@link BigDecimal} truncated at the {@link Asset} max precision.
     *
     * Use this as your last resource, you should favour the use of Amount arithmetic methods to have a guarantee maximum precision.
     *
     * **Use at your own risk.**
     *
     * @experimental
     */
    toBigDecimal(): BigDecimal;
    /**
     * Formats the Amount value using fixed-point notation.
     *
     * Optionally you can specify the number of decimals to return.
     *
     * @returns the internal value as `string` truncated at this Amount {@link Asset} max precision.
     */
    toFixed(decimals?: number): string;
    /**
     * Formats the Amount value to its maximum precision using a fixed-point notation.
     *
     * Optionally you can specify the number of significant digits to approximate the value to.
     *
     * @returns the internal value as `string` truncated at this Amount {@link Asset} max precision.
     */
    toSignificantDigits(significantDigits?: number): string;
    /**
     * Converts the Amount value as less safe JS `number`.
     *
     * **Use at your own risk.**
     *
     * Type coercion with, for example, JavaScript's unary plus operator will also work.
     *
     * @returns the internal value as `number` that has the potential to lose precision.
     */
    toNumber(): number;
    /**
     * Convenience method to check if the Amount value is zero.
     *
     * @returns `true` if the Amount value is zero.
     */
    isZero(): boolean;
    /**
     * Diagnostic method to inspect the internal value.
     *
     * @returns a string representation of the Amount value and {@link Asset} symbol.
     */
    toString(): string;
    /**
     * Creates an Amount of the same {@link Asset} with the new specified `value`.
     *
     * @returns a new Amount with the same {@link Asset} and the new `value`.
     */
    clone(value: AmountValue): Amount<T>;
    private static from;
    /**
     *
     *
     * @internal
     */
    static [Symbol.toStringTag]: string;
    /**
     * Creates an Amount of the specified {@link Erc20} with the specified `value`.
     */
    static erc20<T extends Erc20>(asset: T, value: AmountValue): Amount<T>;
    /**
     * Creates an {@link Ether} Amount with the specified `value`.
     */
    static ether(value: AmountValue): Amount<Ether>;
    /**
     * Creates an Amount of the specified {@link Fiat} with the specified `value`.
     */
    static fiat<T extends Fiat>(asset: T, value: AmountValue): Amount<Fiat>;
    /**
     * Creates an {@link Matic} Amount with the specified `value`.
     */
    static matic(value: AmountValue): Amount<Matic>;
}
/**
 * A convenience type to specify a crypto amount.
 *
 */
export type CryptoAmount = Amount<CryptoAsset>;
/**
 * A convenience type to specify a native crypto amount.
 *
 */
export type CryptoNativeAmount = Amount<CryptoNativeAsset>;
/**
 * A convenience type to specify an ERC20 crypto amount.
 *
 */
export type Erc20Amount = Amount<Erc20>;
/**
 * A convenience type to specify a fiat amount.
 *
 */
export type FiatAmount = Amount<Fiat>;
