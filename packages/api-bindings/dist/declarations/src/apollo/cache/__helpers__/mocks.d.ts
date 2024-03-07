import { ApolloCache, NormalizedCacheObject, ReactiveVar } from '@apollo/client';
import { ProfileIdentifier, WalletData } from '@digiv3rse/domain/use-cases/lifecycle';
import { AnyTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';
import { TransactionState } from '../transactions';
export type MockCacheConfiguration = {
    activeWalletVar?: ReactiveVar<WalletData | null>;
};
export declare function mockDiGiCache(): ApolloCache<NormalizedCacheObject>;
export declare function mockTransactionState<T extends AnyTransactionRequest>(partial: Partial<TransactionState<T>>): TransactionState<T>;
export declare function simulateAuthenticatedWallet(wallet?: WalletData): void;
export declare function simulateAuthenticatedProfile(profile: ProfileIdentifier, wallet?: WalletData): void;
export declare function simulateNotAuthenticated(): void;
