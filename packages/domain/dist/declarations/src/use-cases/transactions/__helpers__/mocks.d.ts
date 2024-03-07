/// <reference types="jest" />
import { Result } from '@digiv3rse/shared-kernel';
import { AnyTransactionRequestModel, DataTransaction, ISignedProtocolCall, IUnsignedProtocolCall, MetaTransaction, NativeTransaction, Nonce, ProtocolTransactionRequestModel, UnsignedTransaction, Wallet } from "../../../entities/index.js";
import { BroadcastingError } from "../BroadcastingError.js";
import { DelegableProtocolTransactionRequestModel, IDelegatedTransactionGateway } from "../DelegableSigning.js";
import { IPaidTransactionGateway } from "../IPaidTransactionGateway.js";
import { IMomokaRelayer } from "../SignedMomoka.js";
import { IMetaTransactionNonceGateway, IOnChainRelayer, ISignedOnChainGateway } from "../SignedOnChain.js";
import { AnyTransactionRequest } from "../SupportedTransactionRequest.js";
import { TokenAllowanceRequest } from "../TokenAllowance.js";
import { TransactionData, TransactionQueue } from "../TransactionQueue.js";
export declare function mockIOnChainRelayer<T extends ProtocolTransactionRequestModel>({ signedCall, result, }: {
    signedCall: ISignedProtocolCall<T>;
    result: Result<MetaTransaction<T>, BroadcastingError>;
}): import("jest-mock-extended/lib/Mock")._MockProxy<IOnChainRelayer<T>> & IOnChainRelayer<T>;
export declare function mockIMomokaRelayer<T extends ProtocolTransactionRequestModel>({ signedCall, result, }: {
    signedCall: ISignedProtocolCall<T>;
    result: Result<DataTransaction<T>, BroadcastingError>;
}): import("jest-mock-extended/lib/Mock")._MockProxy<IMomokaRelayer<T>> & IMomokaRelayer<T>;
export declare function mockTransactionQueue<T extends AnyTransactionRequestModel = AnyTransactionRequestModel>(): import("jest-mock-extended/lib/Mock")._MockProxy<TransactionQueue<T>> & TransactionQueue<T>;
export declare function mockTransactionData<T extends AnyTransactionRequest>(overrides?: Partial<TransactionData<T>>): TransactionData<T>;
export declare function mockIMetaTransactionNonceGateway({ nonce, }?: {
    nonce?: number | undefined;
}): IMetaTransactionNonceGateway;
export declare function mockISignedOnChainGateway<T extends ProtocolTransactionRequestModel>({ request, nonce, unsignedCall, }: {
    request: T;
    nonce: Nonce | undefined;
    unsignedCall: IUnsignedProtocolCall<T>;
}): ISignedOnChainGateway<T>;
export declare function mockISignedMomokaGateway<T extends ProtocolTransactionRequestModel>({ request, unsignedCall, }: {
    request: T;
    unsignedCall: IUnsignedProtocolCall<T>;
}): ISignedOnChainGateway<T>;
export declare function mockIDelegatedTransactionGateway<T extends ProtocolTransactionRequestModel>({ request, result, }: {
    request: T;
    result: Result<NativeTransaction<T>, BroadcastingError>;
}): IDelegatedTransactionGateway<T>;
export declare function mockDelegableProtocolTransactionRequestModel({ signless, }: {
    signless: boolean;
}): DelegableProtocolTransactionRequestModel;
export declare function mockProtocolTransactionRequestModelWithOffChainFlag(): ProtocolTransactionRequestModel;
export declare function mockITransactionCompletionPresenter(): {
    present: jest.Mock<any, any, any>;
    waitForSuccess(): Promise<void>;
    waitForFailure(): Promise<void>;
};
export declare function mockTokenAllowanceRequest(override?: Partial<TokenAllowanceRequest>): TokenAllowanceRequest;
export declare function mockAnyBroadcastingError(): BroadcastingError;
export declare function mockIPaidTransactionGateway<T extends AnyTransactionRequestModel>({ request, wallet, unsignedTransaction, }: {
    request: T;
    wallet: Wallet;
    unsignedTransaction: UnsignedTransaction<T>;
}): IPaidTransactionGateway<T>;
