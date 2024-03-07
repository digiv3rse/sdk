/**
 * This subclass of Error supports chaining.
 * If available, it uses the built-in support for property `.cause`.
 * Otherwise, it sets it up itself.
 *
 * @see https://github.com/tc39/proposal-error-cause
 * @internal
 */
export declare class CausedError extends Error {
    readonly cause?: Error;
    constructor(message: string, options?: {
        cause?: Error;
    });
}
