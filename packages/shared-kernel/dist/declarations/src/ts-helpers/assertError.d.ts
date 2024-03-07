interface IErrorWithCode<T> extends Error {
    readonly code: T;
}
export declare function assertError(error: unknown): asserts error is Error;
export declare function assertErrorWithCode<T>(error: unknown): asserts error is IErrorWithCode<T>;
interface IErrorWithReason<T> extends Error {
    readonly reason: T;
}
export declare function assertErrorWithReason<T>(error: unknown): asserts error is IErrorWithReason<T>;
export {};
