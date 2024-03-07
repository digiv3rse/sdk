import { JustProtocolRequest, TransactionKind } from '@digiv3rse/domain/entities';
import { IResettableTransactionGateway } from '@digiv3rse/domain/use-cases/authentication';
import { IMetaTransactionNonceGateway, IPendingTransactionGateway, NewTransactionsSubscriber, AnyTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';
import { IStorage } from '@digiv3rse/storage';
import { TransactionList } from "../schemas/transactions.js";
import { ISerializableDataTransaction, ISerializableMetaTransaction, ISerializableNativeTransaction, ISerializableTransactionFactory } from "./ISerializableTransactionFactory.js";
type ISerializableTransaction<T extends AnyTransactionRequest> = ISerializableNativeTransaction<T> | ISerializableMetaTransaction<JustProtocolRequest<T>> | ISerializableDataTransaction<JustProtocolRequest<T>>;
export declare class PendingTransactionGateway implements IPendingTransactionGateway<AnyTransactionRequest>, IMetaTransactionNonceGateway, IResettableTransactionGateway {
    private readonly storage;
    private readonly transactionFactory;
    private cache?;
    constructor(storage: IStorage<TransactionList>, transactionFactory: ISerializableTransactionFactory);
    save(tx: ISerializableTransaction<AnyTransactionRequest>): Promise<void>;
    remove(id: string): Promise<void>;
    reset(): Promise<void>;
    getAll(): Promise<readonly ISerializableTransaction<AnyTransactionRequest>[]>;
    getNextMetaTransactionNonceFor(kind: TransactionKind): Promise<number | undefined>;
    subscribe(subscriber: NewTransactionsSubscriber<AnyTransactionRequest>): void;
    private update;
    private toEntity;
}
export {};
