import { IEquatableError, Result } from '@digiv3rse/shared-kernel';
export interface IGenericResultPresenter<T, E extends IEquatableError> {
    present(result: Result<T, E>): void;
}
