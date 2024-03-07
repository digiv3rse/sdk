import { PromiseResult } from '@digiv3rse/shared-kernel';
import { NativeTransaction, TransactionKind, AnyTransactionRequestModel } from "../../entities/index.js";
import { ITransactionResultPresenter } from "../transactions/ITransactionResultPresenter.js";
import { TransactionQueue } from "../transactions/TransactionQueue.js";
import { FollowPolicyConfig } from "./FollowPolicy.js";
export type ClaimFreeTextHandleRequest = {
    kind: TransactionKind.CLAIM_HANDLE;
    localName: string;
    followPolicy?: FollowPolicyConfig;
};
export type ClaimReservedHandleRequest = {
    kind: TransactionKind.CLAIM_HANDLE;
    id: string;
    handle: string;
    followPolicy?: FollowPolicyConfig;
};
export type ClaimHandleRequest = ClaimFreeTextHandleRequest | ClaimReservedHandleRequest;
export declare function isClaimReservedHandleRequest(request: ClaimHandleRequest): request is ClaimReservedHandleRequest;
export declare class ClaimHandleError<TErrorReason extends string> extends Error {
    readonly localName: string;
    readonly reason: TErrorReason;
    name: "ClaimHandleError";
    constructor(localName: string, reason: TErrorReason);
}
export interface IClaimHandleGateway<TErrorReason extends string> {
    claimHandleTransaction<T extends ClaimHandleRequest>(request: T): PromiseResult<NativeTransaction<T>, ClaimHandleError<TErrorReason>>;
}
export type IClaimHandlePresenter<TErrorReason extends string> = ITransactionResultPresenter<ClaimHandleRequest, ClaimHandleError<TErrorReason>>;
export declare class ClaimHandle<TErrorReason extends string> {
    private readonly gateway;
    private readonly transactionQueue;
    private readonly presenter;
    constructor(gateway: IClaimHandleGateway<TErrorReason>, transactionQueue: TransactionQueue<AnyTransactionRequestModel>, presenter: IClaimHandlePresenter<TErrorReason>);
    execute(request: ClaimHandleRequest): Promise<void>;
}
