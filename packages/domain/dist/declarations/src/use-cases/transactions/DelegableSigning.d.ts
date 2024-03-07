import { PromiseResult } from '@digiv3rse/shared-kernel';
import { ProtocolTransactionRequestModel, AnyTransactionRequestModel, Transaction } from "../../entities/index.js";
import { BroadcastingError } from "./BroadcastingError.js";
import { ITransactionResultPresenter } from "./ITransactionResultPresenter.js";
import { TransactionQueue } from "./TransactionQueue.js";
type WithDelegateFlag<T extends ProtocolTransactionRequestModel> = T & {
    signless: boolean;
};
export type DelegableProtocolTransactionRequestModel = WithDelegateFlag<ProtocolTransactionRequestModel>;
export interface ISignedOperation<TRequest extends ProtocolTransactionRequestModel> {
    execute(request: TRequest): Promise<void>;
}
export interface IDelegatedTransactionGateway<TDelegable extends ProtocolTransactionRequestModel> {
    createDelegatedTransaction(request: TDelegable): PromiseResult<Transaction<TDelegable>, BroadcastingError>;
}
export type IDelegatedTransactionPresenter<TDelegable extends ProtocolTransactionRequestModel> = ITransactionResultPresenter<TDelegable, BroadcastingError>;
export declare class DelegableSigning<TRequest extends ProtocolTransactionRequestModel, TDelegable extends WithDelegateFlag<TRequest> = WithDelegateFlag<TRequest>> {
    private readonly signedOperation;
    private readonly transactionGateway;
    private readonly transactionQueue;
    private readonly presenter;
    constructor(signedOperation: ISignedOperation<TRequest>, transactionGateway: IDelegatedTransactionGateway<TDelegable>, transactionQueue: TransactionQueue<AnyTransactionRequestModel>, presenter: IDelegatedTransactionPresenter<TDelegable>);
    execute(request: TDelegable): Promise<void>;
}
export {};
