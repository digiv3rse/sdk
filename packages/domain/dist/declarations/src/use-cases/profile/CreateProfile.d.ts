import { EvmAddress } from '@digiv3rse/shared-kernel';
import { AnyTransactionRequestModel, InsufficientGasError, PendingSigningRequestError, TransactionKind, UserRejectedError, WalletConnectionError } from "../../entities/index.js";
import { IPaidTransactionGateway } from "../transactions/IPaidTransactionGateway.js";
import { ITransactionResultPresenter } from "../transactions/ITransactionResultPresenter.js";
import { TransactionQueue } from "../transactions/TransactionQueue.js";
import { IWalletGateway } from "../wallets/IWalletGateway.js";
export type CreateProfileRequest = {
    kind: TransactionKind.CREATE_PROFILE;
    to: EvmAddress;
    localName: string;
    approveSignless: boolean;
};
export type ICreateProfileTransactionGateway = IPaidTransactionGateway<CreateProfileRequest>;
export type ICreateProfilePresenter = ITransactionResultPresenter<CreateProfileRequest, PendingSigningRequestError | InsufficientGasError | UserRejectedError | WalletConnectionError>;
export declare class CreateProfile {
    private readonly wallets;
    private readonly gateway;
    private readonly presenter;
    private readonly queue;
    constructor(wallets: IWalletGateway, gateway: ICreateProfileTransactionGateway, presenter: ICreateProfilePresenter, queue: TransactionQueue<AnyTransactionRequestModel>);
    execute(request: CreateProfileRequest): Promise<void>;
}
