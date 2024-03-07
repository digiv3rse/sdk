import { IEquatableError, Result } from '@digiv3rse/shared-kernel';
import { AnyTransactionRequestModel, TransactionError } from "../../entities/index.js";
import { ITransactionCompletionPresenter, TransactionData } from "./TransactionQueue.js";
export interface ITransactionResultPresenter<TRequest extends AnyTransactionRequestModel, TError extends IEquatableError> extends ITransactionCompletionPresenter<TRequest> {
    present(result: Result<TransactionData<TRequest>, TError | TransactionError>): void;
}
