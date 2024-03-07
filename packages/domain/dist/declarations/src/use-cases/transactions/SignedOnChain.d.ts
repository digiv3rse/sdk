import { PromiseResult } from '@digiv3rse/shared-kernel';
import { IUnsignedProtocolCall, Nonce, TransactionKind, ISignedProtocolCall, AnyTransactionRequestModel, MetaTransaction, PendingSigningRequestError, UserRejectedError, WalletConnectionError, ProtocolTransactionRequestModel, TransactionError } from "../../entities/index.js";
import { ActiveWallet } from "../authentication/ActiveWallet.js";
import { BroadcastingError } from "./BroadcastingError.js";
import { ISignedOperation } from "./DelegableSigning.js";
import { ITransactionResultPresenter } from "./ITransactionResultPresenter.js";
import { TransactionQueue } from "./TransactionQueue.js";
export interface IMetaTransactionNonceGateway {
    getNextMetaTransactionNonceFor(kind: TransactionKind): Promise<Nonce | undefined>;
}
export interface IOnChainRelayer<T extends ProtocolTransactionRequestModel> {
    relayProtocolCall(signedCall: ISignedProtocolCall<T>): PromiseResult<MetaTransaction<T>, BroadcastingError>;
}
export interface ISignedOnChainGateway<T extends ProtocolTransactionRequestModel> {
    createUnsignedProtocolCall(request: T, nonceOverride?: Nonce): Promise<IUnsignedProtocolCall<T>>;
}
export type ISignedOnChainPresenter<T extends ProtocolTransactionRequestModel> = ITransactionResultPresenter<T, BroadcastingError | PendingSigningRequestError | UserRejectedError | WalletConnectionError | TransactionError>;
export declare class SignedOnChain<T extends ProtocolTransactionRequestModel> implements ISignedOperation<T> {
    protected readonly activeWallet: ActiveWallet;
    protected readonly metaTransactionNonceGateway: IMetaTransactionNonceGateway;
    protected readonly signedOnChainGateway: ISignedOnChainGateway<T>;
    protected readonly relayer: IOnChainRelayer<ProtocolTransactionRequestModel>;
    protected readonly transactionQueue: TransactionQueue<AnyTransactionRequestModel>;
    protected readonly presenter: ISignedOnChainPresenter<T>;
    constructor(activeWallet: ActiveWallet, metaTransactionNonceGateway: IMetaTransactionNonceGateway, signedOnChainGateway: ISignedOnChainGateway<T>, relayer: IOnChainRelayer<ProtocolTransactionRequestModel>, transactionQueue: TransactionQueue<AnyTransactionRequestModel>, presenter: ISignedOnChainPresenter<T>);
    execute(request: T): Promise<void>;
}
