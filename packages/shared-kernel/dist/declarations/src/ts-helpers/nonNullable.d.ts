/**
 *  Cast a `value` to exclude `null` and `undefined`.
 *  Throws if either `null` or `undefined` was passed
 */
export declare function nonNullable<T>(value: T, message: string): NonNullable<T>;
export declare function isNonNullable<T>(value: T): value is NonNullable<T>;
