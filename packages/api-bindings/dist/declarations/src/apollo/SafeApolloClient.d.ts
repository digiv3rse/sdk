import { ApolloCache, ApolloClient, ApolloLink, DefaultContext, MutationOptions, NormalizedCacheObject, Observable, OperationVariables, QueryOptions } from '@apollo/client';
import { SemVer } from '../SemVer';
import { GraphQLClientMutationResult, GraphQLClientQueryResult, IGraphQLClient } from './IGraphQLClient';
export type SafeApolloClientOptions<TCacheShape> = {
    cache: ApolloCache<TCacheShape>;
    /**
     * @defaultValue false
     */
    connectToDevTools?: boolean;
    pollingInterval?: number;
    version?: SemVer;
    link: ApolloLink;
};
export declare class SafeApolloClient<TCacheShape extends NormalizedCacheObject = NormalizedCacheObject> extends ApolloClient<TCacheShape> implements IGraphQLClient<TCacheShape> {
    private pollingInterval;
    constructor({ cache, link, pollingInterval, version, connectToDevTools, }: SafeApolloClientOptions<TCacheShape>);
    query<TData = unknown, TVariables = OperationVariables>(options: QueryOptions<TVariables, TData>): Promise<GraphQLClientQueryResult<TData>>;
    mutate<TData = unknown, TVariables = OperationVariables, TContext = DefaultContext>(options: MutationOptions<TData, TVariables, TContext, ApolloCache<TCacheShape>>): Promise<GraphQLClientMutationResult<TData>>;
    poll<TData = unknown, TVariables = OperationVariables>(options: QueryOptions<TVariables, TData>): Observable<TData>;
}
