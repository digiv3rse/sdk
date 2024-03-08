import { CausedError, IEquatableError } from '@digiv3rse/shared-kernel';
export declare class CannotDecryptError extends CausedError implements IEquatableError {
    name: "CannotDecryptError";
}
