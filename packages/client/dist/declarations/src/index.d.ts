/**
 * The primary entry point of the `@digiv3rse/client` package.
 *
 * See {@link Gated} for token-gated support.
 *
 * @module Core
 */
export * from "./DiGiClient.js";
export * from "./authentication/index.js";
export * from "./environments.js";
export * from "./errors.js";
export * from "./graphql/index.js";
export * from "./submodules/index.js";
export type { Cast, EvmAddress, Failure, IEquatableError, InvariantError, Narrow, Prettify, Primitive, PromiseResult, Result, Success, } from '@digiv3rse/shared-kernel';
export type { IStorageProvider, InMemoryStorageProvider } from '@digiv3rse/storage';
export type { PaginatedQueryData, PaginatedResult } from "./helpers/buildPaginatedQueryResult.js";
export type { AppId, QueryParams } from "./queryParams.js";
export type { TypedData, TypedDataResponse } from "./types.js";
