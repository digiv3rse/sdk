import { SafeApolloClient } from '@digiv3rse/api-bindings';
import { ActiveWallet, Logout } from '@digiv3rse/domain/use-cases/authentication';
import { AnyTransactionRequest, TransactionQueue } from '@digiv3rse/domain/use-cases/transactions';
import { TokenAvailability } from '@digiv3rse/domain/use-cases/wallets';
import { IStorage } from '@digiv3rse/storage';
import { ReactNode } from 'react';
import { AccessTokenStorage } from "./authentication/adapters/AccessTokenStorage.js";
import { CredentialsFactory } from "./authentication/adapters/CredentialsFactory.js";
import { CredentialsGateway } from "./authentication/adapters/CredentialsGateway.js";
import { BaseConfig, RequiredConfig } from "./config.js";
import { IProfileCacheManager } from "./profile/adapters/IProfileCacheManager.js";
import { PublicationCacheManager } from "./publication/infrastructure/PublicationCacheManager.js";
import { ITransactionFactory } from "./transactions/adapters/ITransactionFactory.js";
import { MomokaRelayer } from "./transactions/adapters/MomokaRelayer.js";
import { OnChainRelayer } from "./transactions/adapters/OnChainRelayer.js";
import { PendingTransactionGateway } from "./transactions/adapters/PendingTransactionGateway/index.js";
import { IProviderFactory } from "./wallet/adapters/IProviderFactory.js";
import { WalletGateway } from "./wallet/adapters/WalletGateway.js";
/**
 * @internal
 */
export declare function createSharedDependencies(userConfig: BaseConfig): SharedDependencies;
/**
 * @internal
 */
export type SharedDependencies = {
    accessTokenStorage: AccessTokenStorage;
    activeWallet: ActiveWallet;
    apolloClient: SafeApolloClient;
    config: RequiredConfig;
    credentialsFactory: CredentialsFactory;
    credentialsGateway: CredentialsGateway;
    inboxKeyStorage: IStorage<string>;
    logout: Logout;
    momokaRelayer: MomokaRelayer;
    onChainRelayer: OnChainRelayer;
    profileCacheManager: IProfileCacheManager;
    providerFactory: IProviderFactory;
    publicationCacheManager: PublicationCacheManager;
    tokenAvailability: TokenAvailability;
    transactionFactory: ITransactionFactory<AnyTransactionRequest>;
    transactionGateway: PendingTransactionGateway;
    transactionQueue: TransactionQueue<AnyTransactionRequest>;
    walletGateway: WalletGateway;
};
type SharedDependenciesProviderProps = {
    children: ReactNode;
    dependencies: SharedDependencies;
};
/**
 * @internal
 */
export declare function SharedDependenciesProvider({ children, dependencies: context, }: SharedDependenciesProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * @internal DO NOT USE THIS HOOK OUTSIDE OF THE LENS SDK
 */
export declare function useSharedDependencies(): SharedDependencies;
export {};
