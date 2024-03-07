import { ILogger } from '@digiv3rse/shared-kernel';
import type { IAccessTokenStorage } from './IAccessTokenStorage';
import { SafeApolloClient } from './SafeApolloClient';
import { ContentInsightMatcher } from './cache/utils/ContentInsight';
export type { ContentInsightMatcher } from './cache/utils/ContentInsight';
export { snapshotPoll, demoSnapshotPoll } from './cache/utils/ContentInsight';
export type ApolloClientConfig = {
    accessTokenStorage: IAccessTokenStorage;
    backendURL: string;
    logger: ILogger;
    pollingInterval: number;
    contentMatchers: ContentInsightMatcher[];
};
export declare function createDiGiApolloClient({ accessTokenStorage, backendURL, logger, pollingInterval, contentMatchers, }: ApolloClientConfig): SafeApolloClient<import("@apollo/client").NormalizedCacheObject>;
export type AuthApolloClientConfig = {
    backendURL: string;
    logger: ILogger;
};
export declare function createAuthApolloClient({ backendURL, logger }: AuthApolloClientConfig): SafeApolloClient<import("@apollo/client").NormalizedCacheObject>;
export type SnapshotApolloClientConfig = {
    backendURL: string;
};
export declare function createSnapshotApolloClient({ backendURL }: SnapshotApolloClientConfig): SafeApolloClient<import("@apollo/client").NormalizedCacheObject>;
export type { IAccessTokenStorage };
export type { IGraphQLClient } from './IGraphQLClient';
export * from './errors';
export * from './cache/transactions';
export * from './cache/session';
export type { SafeApolloClient };
