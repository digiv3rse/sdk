/**
 * Unwraps the promise to allow resolving/rejecting outside the Promise constructor
 */
export declare class Deferred<T = void> {
    readonly promise: Promise<T>;
    resolve: (value: T) => void;
    reject: (reason?: unknown) => void;
    constructor();
}
