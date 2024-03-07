import { ChainType, EvmAddress, PromiseResult } from '@digiv3rse/shared-kernel';
import { AppId } from "../AppId.js";
import { Credentials } from "../Credentials.js";
import { Profile, ProfileId } from "../Profile.js";
import { PublicationId } from "../Publication.js";
import { Signature } from "../Signature.js";
import { AnyTransactionRequestModel, DataTransaction, ISignedProtocolCall, IUnsignedProtocolCall, MetaTransaction, NativeTransaction, Nonce, ProtocolTransactionRequestModel, TransactionError, TransactionEvent, UnsignedTransaction } from "../Transactions.js";
import { Wallet } from "../Wallet.js";
export declare function mockProfileId(): ProfileId;
export declare function mockPublicationId(profileId?: ProfileId): PublicationId;
export declare function mockWallet({ address }?: {
    address?: EvmAddress;
}): import("jest-mock-extended/lib/Mock")._MockProxy<Wallet> & Wallet;
export declare function mockCredentials(overrides?: Partial<Credentials>): import("jest-mock-extended/lib/Mock")._MockProxy<Credentials> & Credentials;
export declare function mockSignature(): Signature;
export declare function mockAnyTransactionRequestModel(overrides?: Partial<AnyTransactionRequestModel>): AnyTransactionRequestModel;
export declare function mockProtocolTransactionRequestModel(overrides?: Partial<ProtocolTransactionRequestModel>): ProtocolTransactionRequestModel;
export declare function mockIUnsignedProtocolCall<T extends ProtocolTransactionRequestModel>(request: T, overrides?: {
    nonce: Nonce;
}): IUnsignedProtocolCall<T>;
export declare function mockISignedProtocolCall<T extends ProtocolTransactionRequestModel>(unsignedCall?: IUnsignedProtocolCall<T>): ISignedProtocolCall<T>;
export declare function mockUnsignedTransaction<T extends AnyTransactionRequestModel>(request?: T): UnsignedTransaction<T>;
export declare function mockTransactionHash(): string;
export declare function mockNonce(): Nonce;
type MockedMetaTransactionInit<T extends AnyTransactionRequestModel> = {
    chainType?: ChainType;
    hash?: string;
    id?: string;
    nonce?: Nonce;
    request: T;
};
type MockedTransactionUpdate = {
    event: TransactionEvent;
    txHash?: string;
} | {
    error: TransactionError;
};
type MockedTransactionInstructions = {
    withUpdatesSequence: Array<MockedTransactionUpdate>;
    failsWith?: TransactionError;
};
export declare class MockedMetaTransaction<T extends ProtocolTransactionRequestModel> extends MetaTransaction<T> {
    private instructions;
    readonly chainType: ChainType;
    readonly id: string;
    readonly request: T;
    readonly nonce: Nonce;
    hash: string;
    private constructor();
    waitNextEvent(): PromiseResult<TransactionEvent, TransactionError>;
    static fromSignedCall<T extends ProtocolTransactionRequestModel>(signedCall: ISignedProtocolCall<T>): MetaTransaction<T>;
    static fromRawData<T extends ProtocolTransactionRequestModel>(data: MockedMetaTransactionInit<T>, instructions?: MockedTransactionInstructions): MetaTransaction<T>;
}
export declare class MockedNativeTransaction<T extends AnyTransactionRequestModel> extends NativeTransaction<T> {
    waitNextEvent: () => PromiseResult<TransactionEvent, TransactionError>;
    readonly chainType: ChainType;
    readonly id: string;
    readonly request: T;
    hash: string;
    private constructor();
    static fromUnsignedTransaction<T extends AnyTransactionRequestModel>(unsignedTransaction: UnsignedTransaction<T>): NativeTransaction<T>;
    static fromRequest<T extends AnyTransactionRequestModel>(request: T): MockedNativeTransaction<T>;
}
export declare function mockProfile(): Profile;
export declare function mockTransactionError(): TransactionError;
export declare class MockedDataTransaction<T extends ProtocolTransactionRequestModel> extends DataTransaction<T> {
    readonly id: string;
    readonly request: T;
    private constructor();
    waitNextEvent(): PromiseResult<TransactionEvent, TransactionError>;
    static fromSignedCall<T extends ProtocolTransactionRequestModel>(signedCall: ISignedProtocolCall<T>): MockedDataTransaction<T>;
}
export declare function mockAppId(): AppId;
export {};
