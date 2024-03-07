import { Result } from '@digiv3rse/shared-kernel';
import { Transaction, TransactionError, TransactionKind, AnyTransactionRequestModel } from "../../entities/index.js";
export type NewTransactionsSubscriber<T extends AnyTransactionRequestModel> = (transactions: readonly Transaction<T>[]) => void;
export interface IPendingTransactionGateway<T extends AnyTransactionRequestModel> {
    getAll(): Promise<readonly Transaction<T>[]>;
    save(tx: Transaction<T>): Promise<void>;
    remove(id: string): Promise<void>;
    subscribe(subscriber: NewTransactionsSubscriber<T>): void;
}
export type TransactionData<T extends AnyTransactionRequestModel> = {
    id: string;
    request: T;
    txHash?: string;
};
export interface ITransactionResponder<T extends AnyTransactionRequestModel> {
    prepare?(data: TransactionData<T>): Promise<unknown>;
    commit(data: TransactionData<T>): Promise<unknown>;
    rollback?(data: TransactionData<T>): Promise<unknown>;
}
export interface ITransactionQueuePresenter<T extends AnyTransactionRequestModel> {
    pending(data: TransactionData<T>): void;
    settled(data: TransactionData<T>): void;
    failed(error: TransactionError, data: TransactionData<T>): void;
    clearRecent(): void;
}
export type TransactionResponders<T extends AnyTransactionRequestModel> = {
    [K in TransactionKind]: ITransactionResponder<Extract<T, {
        kind: K;
    }>>;
};
export interface ITransactionCompletionPresenter<TRequest extends AnyTransactionRequestModel> {
    present(result: Result<TransactionData<TRequest>, TransactionError>): void;
}
export declare class TransactionQueue<TAll extends AnyTransactionRequestModel> {
    private readonly responders;
    private readonly transactionGateway;
    private readonly transactionQueuePresenter;
    private constructor();
    clearRecent(): void;
    push<TCurrent extends TAll>(transaction: Transaction<TCurrent>, presenter?: ITransactionCompletionPresenter<TCurrent>): Promise<void>;
    resume(): Promise<void>;
    private handle;
    private observe;
    private prepare;
    private commit;
    private rollback;
    private waitCompletion;
    private getResponderFor;
    static create<T extends AnyTransactionRequestModel>(responders: TransactionResponders<T>, transactionGateway: IPendingTransactionGateway<T>, transactionQueuePresenter: ITransactionQueuePresenter<T>): TransactionQueue<T>;
}
