import {
  MetaTransaction,
  NativeTransaction,
  JustProtocolRequest,
  TransactionKind,
  DataTransaction,
} from '@digiv3rse/domain/entities';
import { IResettableTransactionGateway } from '@digiv3rse/domain/use-cases/authentication';
import {
  IMetaTransactionNonceGateway,
  IPendingTransactionGateway,
  NewTransactionsSubscriber,
  AnyTransactionRequest,
} from '@digiv3rse/domain/use-cases/transactions';
import { assertNever, invariant } from '@digiv3rse/shared-kernel';
import { IStorage } from '@digiv3rse/storage';
import differenceBy from 'lodash/differenceBy.js';

import { TransactionList, TransactionSchema, TransactionType } from '../schemas/transactions';
import {
  ISerializableDataTransaction,
  ISerializableMetaTransaction,
  ISerializableNativeTransaction,
  ISerializableTransactionFactory,
} from './ISerializableTransactionFactory';

const digiHubTransactionKinds = [
  TransactionKind.ACT_ON_PUBLICATION,
  TransactionKind.CREATE_COMMENT,
  TransactionKind.CREATE_POST,
  TransactionKind.CREATE_QUOTE,
  TransactionKind.FOLLOW_PROFILE,
  TransactionKind.MIRROR_PUBLICATION,
  TransactionKind.UPDATE_PROFILE_MANAGERS,
  TransactionKind.UPDATE_FOLLOW_POLICY,
  TransactionKind.UPDATE_PROFILE_DETAILS,
];

// const tokenHandleRegistryTransactionKinds = []; // not used yet

const transactionKindToFilterGroup: { [k in TransactionKind]: TransactionKind[] } = {
  [TransactionKind.ACT_ON_PUBLICATION]: digiHubTransactionKinds,
  [TransactionKind.BLOCK_PROFILE]: digiHubTransactionKinds,
  [TransactionKind.UNBLOCK_PROFILE]: digiHubTransactionKinds,
  [TransactionKind.CREATE_COMMENT]: digiHubTransactionKinds,
  [TransactionKind.CREATE_POST]: digiHubTransactionKinds,
  [TransactionKind.CREATE_QUOTE]: digiHubTransactionKinds,
  [TransactionKind.FOLLOW_PROFILE]: digiHubTransactionKinds,
  [TransactionKind.MIRROR_PUBLICATION]: digiHubTransactionKinds,
  [TransactionKind.UPDATE_PROFILE_MANAGERS]: digiHubTransactionKinds,
  [TransactionKind.UPDATE_FOLLOW_POLICY]: digiHubTransactionKinds,
  [TransactionKind.UPDATE_PROFILE_DETAILS]: digiHubTransactionKinds,

  [TransactionKind.CLAIM_HANDLE]: [],
  [TransactionKind.APPROVE_MODULE]: [],
  [TransactionKind.CREATE_PROFILE]: [],
  [TransactionKind.UNFOLLOW_PROFILE]: [],
  [TransactionKind.LINK_HANDLE]: [],
  [TransactionKind.UNLINK_HANDLE]: [],
};

function isSerializableMetaTransaction<T extends AnyTransactionRequest>(
  tx: ISerializableTransaction<T>,
): tx is ISerializableMetaTransaction<JustProtocolRequest<T>> {
  return tx instanceof MetaTransaction;
}

type ISerializableTransaction<T extends AnyTransactionRequest> =
  | ISerializableNativeTransaction<T>
  | ISerializableMetaTransaction<JustProtocolRequest<T>>
  | ISerializableDataTransaction<JustProtocolRequest<T>>;

function toTransactionSchema(
  tx: ISerializableTransaction<AnyTransactionRequest>,
): TransactionSchema {
  if (tx instanceof MetaTransaction) {
    return {
      type: TransactionType.Meta,
      ...tx.toTransactionData(),
    };
  }

  if (tx instanceof NativeTransaction) {
    return {
      type: TransactionType.Native,
      ...tx.toTransactionData(),
    };
  }

  if (tx instanceof DataTransaction) {
    return {
      type: TransactionType.Data,
      ...tx.toTransactionData(),
    };
  }

  assertNever(tx, 'Transaction type not supported');
}

export class PendingTransactionGateway
  implements
    IPendingTransactionGateway<AnyTransactionRequest>,
    IMetaTransactionNonceGateway,
    IResettableTransactionGateway
{
  private cache?: ISerializableTransaction<AnyTransactionRequest>[];

  constructor(
    private readonly storage: IStorage<TransactionList>,
    private readonly transactionFactory: ISerializableTransactionFactory,
  ) {}

  async save(tx: ISerializableTransaction<AnyTransactionRequest>): Promise<void> {
    const transactions = await this.getAll();
    const newTransactions = [...transactions];

    const idx = transactions.findIndex((entry) => entry.id === tx.id);
    if (idx > -1) {
      newTransactions.splice(idx, 1, tx);
      await this.update(newTransactions);
      return;
    }

    if (tx instanceof MetaTransaction) {
      const expectedNonce = await this.getNextMetaTransactionNonceFor(tx.request.kind);

      if (expectedNonce) {
        invariant(
          expectedNonce === tx.nonce,
          `Nonce mismatch, was expecting ${expectedNonce}, got ${tx.nonce}`,
        );
      }
    }

    newTransactions.unshift(tx);
    await this.update(newTransactions);
  }

  async remove(id: string): Promise<void> {
    const transactions = await this.getAll();
    await this.update(transactions.filter((tx) => tx.id !== id));
  }

  async reset(): Promise<void> {
    void this.storage.reset();
  }

  async getAll(): Promise<readonly ISerializableTransaction<AnyTransactionRequest>[]> {
    if (this.cache) {
      return this.cache.slice();
    }
    const data = await this.storage.get();

    if (data === null) {
      return [];
    }

    return data.map((entry) => this.toEntity(entry));
  }

  async getNextMetaTransactionNonceFor(kind: TransactionKind) {
    const all = await this.getAll();

    if (all.length === 0) {
      return undefined;
    }

    const metaTransactions = all.filter(isSerializableMetaTransaction);
    if (metaTransactions.length === 0) {
      return undefined;
    }

    if (kind in transactionKindToFilterGroup) {
      const filter = transactionKindToFilterGroup[kind];
      const firstOfKind = metaTransactions.find((tx) => filter.includes(tx.request.kind));

      return firstOfKind ? firstOfKind.nonce + 1 : undefined;
    }
    return undefined;
  }

  subscribe(subscriber: NewTransactionsSubscriber<AnyTransactionRequest>): void {
    this.storage.subscribe(async (newData, oldData) => {
      if (newData === null) {
        return;
      }
      const updatedTransactions = newData.map((entry) => this.toEntity(entry));
      const previousTransactions = oldData?.map((entry) => this.toEntity(entry)) ?? [];

      const newTransaction = differenceBy(updatedTransactions, previousTransactions, (tx) => tx.id);

      if (newTransaction.length > 0) {
        subscriber(newTransaction);
      }
    });
  }

  private async update(
    transactions: ISerializableTransaction<AnyTransactionRequest>[],
  ): Promise<void> {
    this.cache = transactions;
    const data = transactions.map(toTransactionSchema);
    await this.storage.set(data);
  }

  private toEntity(data: TransactionSchema): ISerializableTransaction<AnyTransactionRequest> {
    switch (data.type) {
      case TransactionType.Meta:
        return this.transactionFactory.createMetaTransaction(data);
      case TransactionType.Native:
        return this.transactionFactory.createNativeTransaction(data);
      case TransactionType.Data:
        return this.transactionFactory.createDataTransaction(data);
      default:
        assertNever(data, 'Transaction type not supported');
    }
  }
}
