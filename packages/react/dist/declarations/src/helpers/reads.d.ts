import { QueryResult as ApolloQueryResult, OperationVariables, LazyQueryResultTuple as ApolloLazyResultTuple } from '@apollo/client';
import { UnspecifiedError, InputMaybe, Cursor, PaginatedResultInfo, LimitType } from '@digiv3rse/api-bindings';
import { IEquatableError, Prettify, PromiseResult } from '@digiv3rse/shared-kernel';
/**
 * A discriminated union of the possible results of a read operation with no errors.
 *
 * You can rely on the `loading` value to determine if the `data` is available.
 * When `loading` is `false`, the `data` value will be available.
 */
export type ReadResultWithoutError<T> = {
    data: undefined;
    loading: true;
} | {
    data: T;
    loading: false;
};
/**
 * A discriminated union of the possible results of a read operation with possible errors.
 *
 * You can rely on the `loading` value to determine if the `data` or `error` can be evaluated.
 *
 * If `error` is `undefined`, then `data` value will be available.
 */
export type ReadResultWithError<T, E> = {
    data: undefined;
    error: undefined;
    loading: true;
} | {
    data: T;
    error: undefined;
    loading: false;
} | {
    data: undefined;
    error: E;
    loading: false;
};
/**
 * A discriminated union of the possible results of a read operation.
 */
export type ReadResult<T, E = UnspecifiedError> = E extends Error ? ReadResultWithError<T, E> : ReadResultWithoutError<T>;
export type QueryData<R> = {
    result: R;
};
type InferResult<T extends QueryData<unknown>> = T extends QueryData<infer R> ? R : never;
/**
 * @internal
 */
export declare function useReadResult<T extends QueryData<R>, R = InferResult<T>, V extends OperationVariables = {
    [key: string]: never;
}>({ error, data }: ApolloQueryResult<T, V>): ReadResult<R, UnspecifiedError>;
/**
 * @experimental This is a pathfinder type for new lazy query hooks. It can change at any time.
 */
export type LazyReadResult<TArgs, TValue, TError extends IEquatableError = UnspecifiedError> = ReadResult<TValue, TError> & {
    /**
     * Fetches the data for this query.
     *
     * @returns A promise that resolves when the data has been fetched.
     */
    execute: (args: TArgs) => PromiseResult<TValue, TError>;
};
/**
 * @internal
 */
export declare function useLazyReadResult<TData extends QueryData<TResult>, TResult = InferResult<TData>, TVariables extends OperationVariables = {
    [key: string]: never;
}>([execute, { error, data }]: ApolloLazyResultTuple<TData, TVariables>): LazyReadResult<TVariables, TResult, UnspecifiedError>;
export type OmitCursor<T> = Omit<T, 'cursor'>;
export type PaginatedArgs<T> = Prettify<OmitCursor<T & {
    /**
     * The number of items to return.
     *
     * @defaultValue Default value is set by the API and it might differ between queries.
     */
    limit?: LimitType;
}>>;
/**
 * A paginated read result.
 */
export type PaginatedReadResult<T> = ReadResult<T, UnspecifiedError> & {
    /**
     * The number of items that are available before the results set.
     *
     * Use this to determine if you want to offer the option of loading more items
     * at the beginning of the list via the `prev` method.
     */
    beforeCount: number;
    /**
     * Whether there are more items to fetch in the next page
     */
    hasMore: boolean;
    /**
     * Fetches the next page of items.
     *
     * @returns A promise that resolves when the next page of items has been fetched.
     */
    next: () => Promise<void>;
    /**
     * Fetches the previous page of items.
     *
     * @returns A promise that resolves when the prev page of items has been fetched.
     */
    prev: () => Promise<void>;
};
type PaginatedQueryVariables = OperationVariables & {
    cursor?: InputMaybe<Cursor>;
};
export type PaginatedQueryData<K> = {
    result: {
        pageInfo: PaginatedResultInfo;
        items: K[];
    };
};
type InferPaginatedItemsType<T extends PaginatedQueryData<unknown>> = T extends PaginatedQueryData<infer R> ? R : never;
export declare function usePaginatedReadResult<TVariables extends PaginatedQueryVariables, TData extends PaginatedQueryData<TItem>, TItem = InferPaginatedItemsType<TData>>({ error, data, loading, fetchMore, variables, observable, }: ApolloQueryResult<TData, TVariables>): PaginatedReadResult<TItem[]>;
export {};
