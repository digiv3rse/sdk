import { CryptoNativeAsset, EvmAddress, PromiseResult } from '@digiv3rse/shared-kernel';
import { Signature } from "./Signature.js";
import { AnyTransactionRequestModel, ISignedProtocolCall, IUnsignedProtocolCall, NativeTransaction, ProtocolTransactionRequestModel, UnsignedTransaction } from "./Transactions.js";
export declare class InsufficientGasError extends Error {
    readonly asset: CryptoNativeAsset;
    name: "InsufficientGasError";
    constructor(asset: CryptoNativeAsset);
}
export declare class PendingSigningRequestError extends Error {
    name: "PendingSigningRequestError";
    message: string;
}
export declare enum WalletConnectionErrorReason {
    INCORRECT_CHAIN = "INCORRECT_CHAIN",
    /**
     * The connected account is not the one we expect
     */
    WRONG_ACCOUNT = "WRONG_ACCOUNT",
    /**
     * A previous connection request that was not yet cancelled or approved
     */
    STALE_CONNECTION_REQUEST = "STALE_CONNECTION_REQUEST"
}
export declare class WalletConnectionError extends Error {
    readonly reason: WalletConnectionErrorReason;
    name: "WalletConnectionError";
    constructor(reason: WalletConnectionErrorReason);
}
export declare class UserRejectedError extends Error {
    name: "UserRejectedError";
    message: string;
}
export declare abstract class Wallet {
    readonly address: EvmAddress;
    constructor(address: EvmAddress);
    abstract signProtocolCall<T extends ProtocolTransactionRequestModel>(unsignedCall: IUnsignedProtocolCall<T>): PromiseResult<ISignedProtocolCall<T>, PendingSigningRequestError | UserRejectedError | WalletConnectionError>;
    abstract signMessage(message: string): PromiseResult<Signature, PendingSigningRequestError | UserRejectedError | WalletConnectionError>;
    abstract sendTransaction<T extends AnyTransactionRequestModel>(unsignedTransaction: UnsignedTransaction<T>): PromiseResult<NativeTransaction<T>, InsufficientGasError | PendingSigningRequestError | UserRejectedError | WalletConnectionError>;
}
