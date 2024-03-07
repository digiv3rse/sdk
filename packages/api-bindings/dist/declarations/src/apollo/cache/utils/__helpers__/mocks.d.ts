import { MockedResponse } from '@apollo/client/testing';
import { Cursor, CursorBasedPaginatedResult } from '../../../../digi';
export declare const AnyPaginatedQueryDocument: import("@apollo/client").DocumentNode;
type AnyPaginatedItem = {
    name: string;
};
export type AnyPaginatedQueryVariables = {
    cursor?: string;
};
type AnyPaginatedQueryResult = CursorBasedPaginatedResult<AnyPaginatedItem>;
export type AnyPaginatedQueryData = {
    result: AnyPaginatedQueryResult;
};
export declare function mockAnyPaginatedQueryResult<T = AnyPaginatedItem>({ items, next, prev, }?: {
    items?: T[];
    next?: null;
    prev?: null;
} | {
    items?: [T];
    next?: Cursor | null;
    prev?: Cursor | null;
}): CursorBasedPaginatedResult<T>;
export declare function mockAnyPaginatedQueryResponse({ variables, result, }: {
    variables?: AnyPaginatedQueryVariables;
    result: AnyPaginatedQueryResult;
}): MockedResponse<AnyPaginatedQueryData>;
export {};
