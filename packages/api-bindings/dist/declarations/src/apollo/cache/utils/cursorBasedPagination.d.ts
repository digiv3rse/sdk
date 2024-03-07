import { KeySpecifier } from '@apollo/client/cache/inmemory/policies';
import { FieldPolicy } from '@apollo/client/core';
import { CursorBasedPaginatedResult } from '../../../digi';
export declare function cursorBasedPagination<TResult extends CursorBasedPaginatedResult>(keyArgs: KeySpecifier): FieldPolicy<TResult>;
