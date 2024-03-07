import DecimalJS from 'decimal.js';
declare const BigDecimal_base: typeof DecimalJS;
/**
 * BigDecimal is a value object representing an high precision decimal number.
 *
 * @sealed
 */
export declare class BigDecimal extends BigDecimal_base {
    /**
     * Syntactic sugar over new BigDecimal
     *
     * @internal
     */
    static from(value: DecimalJS.Value): BigDecimal;
    /**
     * Computes the mean of the given values
     *
     * @internal
     */
    static mean(values: BigDecimal[]): BigDecimal;
    /**
     * Rescales the given value by the given power of 10
     *
     * @internal
     */
    static rescale(value: BigDecimal, powerOfTen: number): DecimalJS;
}
export {};
