import { SafeApolloClient } from '@digiv3rse/api-bindings';
import { MetaTransaction } from '@digiv3rse/domain/entities';
import { IOnChainRelayer, BroadcastingError, ProtocolTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';
import { ILogger, PromiseResult } from '@digiv3rse/shared-kernel';
import { SignedProtocolCall } from "../../wallet/adapters/ConcreteWallet.js";
import { ITransactionFactory } from "./ITransactionFactory.js";
export declare class OnChainRelayer implements IOnChainRelayer<ProtocolTransactionRequest> {
    private apolloClient;
    private factory;
    private logger;
    constructor(apolloClient: SafeApolloClient, factory: ITransactionFactory<ProtocolTransactionRequest>, logger: ILogger);
    relayProtocolCall<T extends ProtocolTransactionRequest>(signedCall: SignedProtocolCall<T>): PromiseResult<MetaTransaction<T>, BroadcastingError>;
    private relayWithProfileManager;
}
