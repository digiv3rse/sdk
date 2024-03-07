import { ProfileId, PublicationId } from '@digiv3rse/domain/entities';
import { FollowRequest, UnfollowRequest } from '@digiv3rse/domain/use-cases/profile';
import { CollectRequest, CreateMirrorRequest } from '@digiv3rse/domain/use-cases/publications';
import { AnyTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';
import { EthereumAddress } from '@digiv3rse/shared-kernel';
export declare enum TxStatus {
    /**
     * @deprecated Use {@link TxStatus.PENDING} instead. It will be removed in the next major version.
     */
    BROADCASTING = "pending",
    /**
     * @deprecated Use {@link TxStatus.PENDING} instead. It will be removed in the next major version.
     */
    MINING = "pending",
    /**
     * A pending transaction is a transaction that is either mining or it's mined but not indexed yet.
     */
    PENDING = "pending",
    /**
     * A settled transaction is a transaction that is mined and indexed.
     */
    SETTLED = "settled",
    /**
     * A failed transaction is a transaction that failed to be broadcasted or it failed to be mined.
     */
    FAILED = "failed"
}
/**
 * @deprecated Use {@link TransactionState} instead. It will be removed in the next major version.
 */
export type PendingTransactionState<T extends AnyTransactionRequest> = {
    status: TxStatus.BROADCASTING | TxStatus.FAILED;
    id: string;
    request: T;
};
/**
 * @deprecated Use {@link TransactionState} instead. It will be removed in the next major version.
 */
export type BroadcastedTransactionState<T extends AnyTransactionRequest> = {
    status: TxStatus.MINING | TxStatus.SETTLED | TxStatus.FAILED;
    id: string;
    request: T;
    txHash: string;
};
/**
 * Describe the state of a transaction and the originating request.
 */
export type TransactionState<T extends AnyTransactionRequest> = {
    status: TxStatus;
    id: string;
    request: T;
    txHash?: string;
};
export declare const recentTransactionsVar: import("@apollo/client").ReactiveVar<TransactionState<AnyTransactionRequest>[]>;
type TransactionStatusPredicate<T extends AnyTransactionRequest> = (txState: TransactionState<AnyTransactionRequest>) => txState is TransactionState<T>;
export declare function hasPendingTransactionWith<T extends AnyTransactionRequest>(predicate: TransactionStatusPredicate<T>): boolean;
export declare function hasSettledTransactionWith<T extends AnyTransactionRequest>(predicate: TransactionStatusPredicate<T>): boolean;
export declare function getAllPendingTransactions(): TransactionState<AnyTransactionRequest>[];
export declare function useRecentTransactionsVar(): TransactionState<AnyTransactionRequest>[];
export declare function useHasPendingTransaction<T extends AnyTransactionRequest>(predicate: TransactionStatusPredicate<T>): boolean;
export declare function useWaitUntilTransactionSettled(waitTimeInMs?: number): <T extends AnyTransactionRequest>(predicate: TransactionStatusPredicate<T>) => Promise<void>;
export declare function isFollowTransactionFor({ profileId, followerAddress, }: {
    profileId: ProfileId;
    followerAddress: EthereumAddress;
}): TransactionStatusPredicate<FollowRequest>;
export declare function isUnfollowTransactionFor({ profileId, }: {
    profileId: ProfileId;
}): TransactionStatusPredicate<UnfollowRequest>;
export declare function isCollectTransactionFor({ publicationId, profileId, }: {
    publicationId: PublicationId;
    profileId: ProfileId;
}): TransactionStatusPredicate<CollectRequest>;
export declare function isMirrorTransactionFor({ publicationId, profileId, }: {
    publicationId: PublicationId;
    profileId: ProfileId;
}): TransactionStatusPredicate<CreateMirrorRequest>;
export {};
