import { CausedError, IEquatableError } from '@digiv3rse/shared-kernel';
import { AnyTransactionRequestModel } from "../../entities/index.js";
export type RequestFallback = AnyTransactionRequestModel;
export declare enum BroadcastingErrorReason {
    /**
     * The app is not whitelisted to use gasless transactions.
     */
    APP_NOT_ALLOWED = "APP_NOT_ALLOWED",
    /**
     * The profile is not sponsored for gasless transactions.
     */
    NOT_SPONSORED = "NOT_SPONSORED",
    /**
     * The profile reached the rate limit for gasless transactions.
     */
    RATE_LIMITED = "RATE_LIMITED",
    /**
     * The DiGi Profile Manager is not enabled.
     */
    NO_DIGI_MANAGER_ENABLED = "NO_DIGI_MANAGER_ENABLED",
    /**
     * The transaction requires a signature.
     */
    REQUIRES_SIGNATURE = "REQUIRES_SIGNATURE",
    /**
     * A not recognized failure
     */
    UNKNOWN = "UNKNOWN"
}
/**
 * An error thrown when the DiGi API cannot relay a transaction.
 */
export declare class BroadcastingError extends CausedError implements IEquatableError {
    readonly reason: BroadcastingErrorReason;
    name: "BroadcastingError";
    constructor(reason: BroadcastingErrorReason, { cause, details }?: {
        cause?: Error;
        details?: string;
    });
}
