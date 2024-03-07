import { CausedError } from '@digiv3rse/shared-kernel';
export declare class UnspecifiedError extends CausedError {
    name: "UnspecifiedError";
    constructor(cause: Error);
}
export declare class ValidationError extends CausedError {
    name: "ValidationError";
    constructor(cause: Error);
}
