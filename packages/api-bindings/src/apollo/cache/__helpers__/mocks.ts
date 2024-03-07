import { ApolloCache, NormalizedCacheObject } from '@apollo/client';
import { faker } from '@faker-js/faker';
import { mockCreatePostRequest } from '@digiv3rse/domain/mocks';
import { AnyTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';

import { createDiGiCache } from '../createDiGiCache';
import { TransactionState, TxStatus } from '../transactions';

export function mockDiGiCache(): ApolloCache<NormalizedCacheObject> {
  return createDiGiCache();
}

export function mockTransactionState<T extends AnyTransactionRequest>(
  partial: Partial<TransactionState<T>>,
): TransactionState<T> {
  return {
    id: faker.datatype.uuid(),
    status: TxStatus.PENDING,
    request: mockCreatePostRequest() as T,
    ...partial,
  } as TransactionState<T>;
}
