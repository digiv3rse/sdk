import { SafeApolloClient } from '@digiv3rse/api-bindings';
import { DataTransaction } from '@digiv3rse/domain/entities';
import { CreatePostRequest } from '@digiv3rse/domain/use-cases/publications';
import { BroadcastingError, IMomokaRelayer, ProtocolTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';
import { ILogger, PromiseResult } from '@digiv3rse/shared-kernel';
import { SignedProtocolCall } from "../../wallet/adapters/ConcreteWallet.js";
import { ITransactionFactory } from "./ITransactionFactory.js";
export declare class MomokaRelayer implements IMomokaRelayer<CreatePostRequest> {
    private apolloClient;
    private factory;
    private logger;
    constructor(apolloClient: SafeApolloClient, factory: ITransactionFactory<ProtocolTransactionRequest>, logger: ILogger);
    relaySignedMomoka<T extends ProtocolTransactionRequest>(signedCall: SignedProtocolCall<T>): PromiseResult<DataTransaction<T>, BroadcastingError>;
    private relayWithProfileManager;
}
