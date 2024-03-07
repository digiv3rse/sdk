import { Amount, Data, Erc20, EvmAddress } from '@digiv3rse/shared-kernel';
import { TransactionKind, PendingSigningRequestError, UserRejectedError, WalletConnectionError, ProfileId, PublicationId } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { ITransactionResultPresenter } from "../transactions/ITransactionResultPresenter.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SignedOnChain } from "../transactions/SignedOnChain.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
import { InsufficientAllowanceError, InsufficientFundsError, TokenAvailability } from "../wallets/TokenAvailability.js";
export declare enum AllOpenActionType {
    LEGACY_COLLECT = "LEGACY_COLLECT",
    SIMPLE_COLLECT = "SIMPLE_COLLECT",
    MULTIRECIPIENT_COLLECT = "MULTIRECIPIENT_COLLECT",
    UNKNOWN_OPEN_ACTION = "UNKNOWN_OPEN_ACTION"
}
export type CollectFee = {
    amount: Amount<Erc20>;
    contractAddress: EvmAddress;
};
export type LegacyCollectRequest = {
    kind: TransactionKind.ACT_ON_PUBLICATION;
    type: AllOpenActionType.LEGACY_COLLECT;
    publicationId: PublicationId;
    public: false;
    signless: boolean;
    sponsored: boolean;
    referrer?: PublicationId;
    fee?: CollectFee;
};
export type Referrers = ReadonlyArray<PublicationId | ProfileId>;
export type MultirecipientCollectRequest = {
    kind: TransactionKind.ACT_ON_PUBLICATION;
    type: AllOpenActionType.MULTIRECIPIENT_COLLECT;
    publicationId: PublicationId;
    referrers?: Referrers;
    fee: CollectFee;
    public: boolean;
    signless: boolean;
    sponsored: boolean;
};
export type SimpleCollectRequest = {
    kind: TransactionKind.ACT_ON_PUBLICATION;
    type: AllOpenActionType.SIMPLE_COLLECT;
    publicationId: PublicationId;
    referrers?: Referrers;
    fee?: CollectFee;
    public: boolean;
    signless: boolean;
    sponsored: boolean;
};
export type UnknownActionRequest = {
    kind: TransactionKind.ACT_ON_PUBLICATION;
    type: AllOpenActionType.UNKNOWN_OPEN_ACTION;
    publicationId: PublicationId;
    address: EvmAddress;
    data: Data;
    referrers?: Referrers;
    public: boolean;
    signless: boolean;
    sponsored: boolean;
};
export type CollectRequest = LegacyCollectRequest | MultirecipientCollectRequest | SimpleCollectRequest;
export type OpenActionRequest = CollectRequest | UnknownActionRequest;
export type DelegableOpenActionRequest = LegacyCollectRequest | SimpleCollectRequest | UnknownActionRequest;
export type PaidCollectRequest = CollectRequest & {
    fee: CollectFee;
};
export declare function isPaidCollectRequest(request: OpenActionRequest): request is PaidCollectRequest;
export type IOpenActionPresenter = ITransactionResultPresenter<OpenActionRequest, InsufficientAllowanceError | InsufficientFundsError | PendingSigningRequestError | UserRejectedError | WalletConnectionError>;
export declare class OpenAction extends SponsorshipReady<OpenActionRequest> {
    private readonly tokenAvailability;
    private readonly signedExecution;
    private readonly delegableExecution;
    private readonly paidExecution;
    private readonly presenter;
    constructor(tokenAvailability: TokenAvailability, signedExecution: SignedOnChain<OpenActionRequest>, delegableExecution: DelegableSigning<OpenActionRequest>, paidExecution: PaidTransaction<OpenActionRequest>, presenter: IOpenActionPresenter);
    protected charged(request: OpenActionRequest): Promise<void>;
    protected sponsored(request: OpenActionRequest): Promise<void>;
}
