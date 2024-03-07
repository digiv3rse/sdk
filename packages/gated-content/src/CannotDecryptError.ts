import { CausedError, IEquatableError } from '@digiv3rse/shared-kernel';

export class CannotDecryptError extends CausedError implements IEquatableError {
  name = 'CannotDecryptError' as const;
}
