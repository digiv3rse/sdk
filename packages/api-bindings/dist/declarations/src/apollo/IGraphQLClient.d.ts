import { ApolloCache, ApolloQueryResult, DefaultContext, FetchResult, MutationOptions, NormalizedCacheObject, Observable, OperationVariables, QueryOptions } from '@apollo/client';
export type GraphQLClientQueryResult<TData = unknown> = Omit<ApolloQueryResult<TData>, 'error' | 'errors'> & {
    data: TData;
};
export type GraphQLClientMutationResult<TData = unknown> = Omit<FetchResult<TData>, 'error' | 'errors'> & {
    data: TData;
};
export declare function assertGraphQLClientQueryResult<TData>(result: ApolloQueryResult<TData>, operationName: string): asserts result is GraphQLClientQueryResult<TData>;
export declare function assertGraphQLClientMutationResult<TData>(result: FetchResult<TData>, operationName: string): asserts result is GraphQLClientMutationResult<TData>;
export interface IGraphQLClient<TCacheShape extends NormalizedCacheObject> {
    query<TData = unknown, TVariables = OperationVariables>(options: QueryOptions<TVariables, TData>): Promise<GraphQLClientQueryResult<TData>>;
    mutate<TData = unknown, TVariables = OperationVariables, TContext = DefaultContext>(options: MutationOptions<TData, TVariables, TContext, ApolloCache<TCacheShape>>): Promise<GraphQLClientMutationResult<TData>>;
    poll<TData = unknown, TVariables = OperationVariables>(options: QueryOptions<TVariables, TData>): Observable<TData>;
}
