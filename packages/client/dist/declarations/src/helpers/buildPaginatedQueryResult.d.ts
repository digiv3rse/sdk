import { PaginatedResultInfoFragment } from "../graphql/fragments.generated.js";
export type PaginatedQueryData<Item> = {
    pageInfo: PaginatedResultInfoFragment;
    items: Item[];
};
/**
 * A paginated query result.
 */
export type PaginatedResult<T> = PaginatedQueryData<T> & {
    /**
     * Fetch the next page of items.
     *
     * @returns A promise that resolves when the next page of items has been fetched.
     */
    next(): Promise<PaginatedResult<T> | null>;
    /**
     * Fetch the previous page of items.
     *
     * @returns A promise that resolves when the previous page of items has been fetched.
     */
    prev(): Promise<PaginatedResult<T> | null>;
};
/**
 * @internal
 */
export declare function buildPaginatedQueryResult<V, R>(queryFn: (variables: V) => Promise<PaginatedQueryData<R>>, variables: V): Promise<PaginatedResult<R>>;
