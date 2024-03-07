import { TypedDataSigner, Signer } from '@ethersproject/abstract-signer';
import { TransactionRequest } from '@ethersproject/providers';
import { TypedData } from '@digiv3rse/blockchain-bindings';
import { InsufficientGasError, Wallet, WalletConnectionError, UserRejectedError, PendingSigningRequestError, ISignedProtocolCall, IUnsignedProtocolCall, UnsignedTransaction, NativeTransaction, ProtocolTransactionRequestModel, AnyTransactionRequestModel, Signature } from '@digiv3rse/domain/entities';
import { AnyTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';
import { ChainType, EvmAddress, PromiseResult } from '@digiv3rse/shared-kernel';
import { z } from 'zod';
import { ITransactionFactory } from "../../transactions/adapters/ITransactionFactory.js";
export type RequiredSigner = Signer & TypedDataSigner;
export type CreateSignerConfig = {
    address: EvmAddress;
    chainType?: ChainType;
};
export interface ISignerFactory {
    createSigner(config: CreateSignerConfig): PromiseResult<RequiredSigner, WalletConnectionError>;
}
export declare const WalletDataSchema: z.ZodObject<{
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>;
export type WalletDataSchema = z.infer<typeof WalletDataSchema>;
export declare class UnsignedProtocolCall<T extends ProtocolTransactionRequestModel> implements IUnsignedProtocolCall<T> {
    readonly id: string;
    readonly request: T;
    readonly typedData: TypedData;
    private constructor();
    get nonce(): number;
    static create<T extends ProtocolTransactionRequestModel>({ id, request, typedData, }: {
        id: string;
        request: T;
        typedData: TypedData;
    }): UnsignedProtocolCall<T>;
}
export declare class SignedProtocolCall<T extends ProtocolTransactionRequestModel> implements ISignedProtocolCall<T> {
    readonly id: string;
    readonly request: T;
    readonly signature: Signature;
    readonly nonce: number;
    private constructor();
    static create<T extends ProtocolTransactionRequestModel>({ unsignedCall, signature, }: {
        unsignedCall: UnsignedProtocolCall<T>;
        signature: string;
    }): SignedProtocolCall<T>;
}
export interface ITransactionRequest {
    get transactionRequest(): TransactionRequest;
}
export declare class ConcreteWallet extends Wallet {
    private readonly signerFactory;
    private readonly transactionFactory;
    private signingInProgress;
    private constructor();
    signProtocolCall<T extends ProtocolTransactionRequestModel>(unsignedCall: UnsignedProtocolCall<T>): PromiseResult<ISignedProtocolCall<T>, PendingSigningRequestError | UserRejectedError | WalletConnectionError>;
    signMessage(message: string): PromiseResult<Signature, PendingSigningRequestError | WalletConnectionError | UserRejectedError>;
    sendTransaction<T extends AnyTransactionRequestModel>(unsignedTransaction: UnsignedTransaction<T> & ITransactionRequest): PromiseResult<NativeTransaction<T>, InsufficientGasError | PendingSigningRequestError | UserRejectedError | WalletConnectionError>;
    toWalletData(): WalletDataSchema;
    static create(address: EvmAddress, signerFactory: ISignerFactory, transactionFactory: ITransactionFactory<AnyTransactionRequest>): ConcreteWallet;
}
