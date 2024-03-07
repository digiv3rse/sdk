import { AnyTransactionRequestModel, InsufficientGasError, PendingSigningRequestError, UserRejectedError, WalletConnectionError } from "../../entities/index.js";
import { ActiveWallet } from "../authentication/ActiveWallet.js";
import { IPaidTransactionGateway } from "./IPaidTransactionGateway.js";
import { ITransactionResultPresenter } from "./ITransactionResultPresenter.js";
import { TransactionQueue } from "./TransactionQueue.js";
export type IPaidTransactionPresenter<T extends AnyTransactionRequestModel> = ITransactionResultPresenter<T, PendingSigningRequestError | InsufficientGasError | UserRejectedError | WalletConnectionError>;
export declare class PaidTransaction<T extends AnyTransactionRequestModel> {
    private readonly activeWallet;
    private readonly gateway;
    private readonly presenter;
    private readonly queue;
    constructor(activeWallet: ActiveWallet, gateway: IPaidTransactionGateway<T>, presenter: IPaidTransactionPresenter<T>, queue: TransactionQueue<AnyTransactionRequestModel>);
    execute(request: T): Promise<void>;
}
