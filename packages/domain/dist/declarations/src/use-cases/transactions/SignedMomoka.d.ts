import { PromiseResult } from '@digiv3rse/shared-kernel';
import { AnyTransactionRequestModel, DataTransaction, ISignedProtocolCall, IUnsignedProtocolCall, PendingSigningRequestError, ProtocolTransactionRequestModel, UserRejectedError, WalletConnectionError } from "../../entities/index.js";
import { ActiveWallet } from "../authentication/ActiveWallet.js";
import { BroadcastingError } from "./BroadcastingError.js";
import { ISignedOperation } from "./DelegableSigning.js";
import { ITransactionResultPresenter } from "./ITransactionResultPresenter.js";
import { TransactionQueue } from "./TransactionQueue.js";
export interface IMomokaRelayer<T extends ProtocolTransactionRequestModel> {
    relaySignedMomoka(signedCall: ISignedProtocolCall<T>): PromiseResult<DataTransaction<T>, BroadcastingError>;
}
export interface ISignedMomokaGateway<T extends ProtocolTransactionRequestModel> {
    createUnsignedProtocolCall(request: T): Promise<IUnsignedProtocolCall<T>>;
}
export type ISignedMomokaPresenter<T extends ProtocolTransactionRequestModel> = ITransactionResultPresenter<T, BroadcastingError | PendingSigningRequestError | UserRejectedError | WalletConnectionError>;
export declare class SubsidizeOffChain<T extends ProtocolTransactionRequestModel> implements ISignedOperation<T> {
    protected readonly activeWallet: ActiveWallet;
    protected readonly gateway: ISignedMomokaGateway<T>;
    protected readonly relayer: IMomokaRelayer<ProtocolTransactionRequestModel>;
    protected readonly queue: TransactionQueue<AnyTransactionRequestModel>;
    protected readonly presenter: ISignedMomokaPresenter<T>;
    constructor(activeWallet: ActiveWallet, gateway: ISignedMomokaGateway<T>, relayer: IMomokaRelayer<ProtocolTransactionRequestModel>, queue: TransactionQueue<AnyTransactionRequestModel>, presenter: ISignedMomokaPresenter<T>);
    execute(request: T): Promise<void>;
}
