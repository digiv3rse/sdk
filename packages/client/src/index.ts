/**
 * The primary entry point of the `@digiv3rse/client` package.
 *
 * See {@link Gated} for token-gated support.
 *
 * @module Core
 */

export * from './DiGiClient';
export * from './authentication';
export * from './environments';
export * from './errors';
export * from './graphql';
export * from './submodules';

// types
export type {
  Cast,
  EvmAddress,
  Failure,
  IEquatableError,
  InvariantError,
  Narrow,
  Prettify,
  Primitive,
  PromiseResult,
  Result,
  Success,
} from '@digiv3rse/shared-kernel';
export type { IStorageProvider, InMemoryStorageProvider } from '@digiv3rse/storage';
export type { PaginatedQueryData, PaginatedResult } from './helpers/buildPaginatedQueryResult';
export type { AppId, QueryParams } from './queryParams';
export type { TypedData, TypedDataResponse } from './types';
