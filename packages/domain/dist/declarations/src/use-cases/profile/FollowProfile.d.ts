import { Amount, Data, Erc20, EvmAddress } from '@digiv3rse/shared-kernel';
import { TransactionKind, PendingSigningRequestError, UserRejectedError, WalletConnectionError, ProfileId, TransactionError } from "../../entities/index.js";
import { BroadcastingError } from "../transactions/BroadcastingError.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { ITransactionResultPresenter } from "../transactions/ITransactionResultPresenter.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SignedOnChain } from "../transactions/SignedOnChain.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
import { InsufficientAllowanceError, InsufficientFundsError, TokenAvailability } from "../wallets/TokenAvailability.js";
export type FreeFollowRequest = {
    profileId: ProfileId;
    kind: TransactionKind.FOLLOW_PROFILE;
    signless: boolean;
    sponsored: boolean;
};
export type FollowRequestFee = {
    amount: Amount<Erc20>;
    contractAddress: EvmAddress;
    recipient: EvmAddress;
};
export type PaidFollowRequest = {
    profileId: ProfileId;
    kind: TransactionKind.FOLLOW_PROFILE;
    fee: FollowRequestFee;
    signless: false;
    sponsored: boolean;
};
export type UnknownFollowRequest = {
    profileId: ProfileId;
    kind: TransactionKind.FOLLOW_PROFILE;
    address: EvmAddress;
    data: Data;
    signless: boolean;
    sponsored: boolean;
};
export type FollowRequest = FreeFollowRequest | PaidFollowRequest | UnknownFollowRequest;
export declare function isPaidFollowRequest(request: FollowRequest): request is PaidFollowRequest;
export declare function isUnknownFollowRequest(request: FollowRequest): request is UnknownFollowRequest;
export type IFollowProfilePresenter = ITransactionResultPresenter<FollowRequest, BroadcastingError | InsufficientAllowanceError | InsufficientFundsError | PendingSigningRequestError | TransactionError | UserRejectedError | WalletConnectionError>;
export declare class FollowProfile extends SponsorshipReady<FollowRequest> {
    private readonly tokenAvailability;
    private readonly signedExecution;
    private readonly delegableExecution;
    private readonly paidExecution;
    private readonly presenter;
    constructor(tokenAvailability: TokenAvailability, signedExecution: SignedOnChain<FollowRequest>, delegableExecution: DelegableSigning<FreeFollowRequest>, paidExecution: PaidTransaction<FollowRequest>, presenter: IFollowProfilePresenter);
    protected charged(request: FollowRequest): Promise<void>;
    protected sponsored(request: FollowRequest): Promise<void>;
}
