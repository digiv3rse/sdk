import { NormalizedCacheObject } from '@apollo/client';
import { MockedResponse } from '@apollo/client/testing';
import { DocumentNode, ExecutionResult, GraphQLError } from 'graphql';
import { SafeApolloClient } from '../SafeApolloClient';
export declare function mockDiGiApolloClient(mocks?: ReadonlyArray<MockedResponse<unknown>>): SafeApolloClient<NormalizedCacheObject>;
export declare function mockSnapshotApolloClient(mocks: ReadonlyArray<MockedResponse<unknown>>): SafeApolloClient<NormalizedCacheObject>;
export declare function createGraphQLError({ code, message, }: {
    code: string;
    message: string;
}): GraphQLError;
export declare function createGraphQLValidationError(message?: string): GraphQLError;
export declare function mockValidationErrorResponse(document: DocumentNode): MockedResponse<unknown>;
export declare function mockGenericSuccessResponse<T>(document: DocumentNode, data: T): MockedResponse<T>;
export declare function mockGenericErrorResponse(document: DocumentNode): MockedResponse<unknown>;
export declare function createHttpJsonResponse(status: number, body: ExecutionResult<unknown>, headers?: Record<string, string>): Response;
export declare function createUnauthenticatedHttpResponse(): Response;
