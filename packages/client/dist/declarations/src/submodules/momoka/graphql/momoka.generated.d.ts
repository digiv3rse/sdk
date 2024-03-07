import * as Types from "../../../graphql/types.generated.js";
import { AppFragment, PaginatedResultInfoFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type MomokaVerificationStatusSuccessFragment = {
    verified: boolean;
};
export type MomokaVerificationStatusFailureFragment = {
    status: Types.MomokaValidatorError;
};
export type MomokaPostTransactionFragment = {
    transactionId: string;
    submitter: string;
    createdAt: string;
    app: AppFragment | null;
    publication: {
        id: string;
    };
    verificationStatus: MomokaVerificationStatusFailureFragment | MomokaVerificationStatusSuccessFragment;
};
export type MomokaCommentTransactionFragment = {
    transactionId: string;
    submitter: string;
    createdAt: string;
    app: AppFragment | null;
    verificationStatus: MomokaVerificationStatusFailureFragment | MomokaVerificationStatusSuccessFragment;
    publication: {
        id: string;
    };
    commentOn: {
        id: string;
    } | {
        id: string;
    } | {
        id: string;
    };
};
export type MomokaMirrorTransactionFragment = {
    transactionId: string;
    submitter: string;
    createdAt: string;
    app: AppFragment | null;
    verificationStatus: MomokaVerificationStatusFailureFragment | MomokaVerificationStatusSuccessFragment;
    publication: {
        id: string;
    };
    mirrorOn: {
        id: string;
    } | {
        id: string;
    } | {
        id: string;
    };
};
export type MomokaQuoteTransactionFragment = {
    transactionId: string;
    submitter: string;
    createdAt: string;
    app: AppFragment | null;
    verificationStatus: MomokaVerificationStatusFailureFragment | MomokaVerificationStatusSuccessFragment;
    publication: {
        id: string;
    };
    quoteOn: {
        id: string;
    } | {
        id: string;
    } | {
        id: string;
    };
};
export type MomokaSubmitterResultFragment = {
    address: string;
    name: string;
    totalTransactions: number;
};
export type MomokaSubmittersQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export type MomokaSubmittersQuery = {
    result: {
        items: Array<MomokaSubmitterResultFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type MomokaSummaryQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export type MomokaSummaryQuery = {
    result: {
        totalTransactions: number;
    };
};
export type MomokaTransactionQueryVariables = Types.Exact<{
    request: Types.MomokaTransactionRequest;
}>;
export type MomokaTransactionQuery = {
    result: MomokaCommentTransactionFragment | MomokaMirrorTransactionFragment | MomokaPostTransactionFragment | MomokaQuoteTransactionFragment | null;
};
export type MomokaTransactionsQueryVariables = Types.Exact<{
    request: Types.MomokaTransactionsRequest;
}>;
export type MomokaTransactionsQuery = {
    result: {
        items: Array<MomokaCommentTransactionFragment | MomokaMirrorTransactionFragment | MomokaPostTransactionFragment | MomokaQuoteTransactionFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export declare const MomokaVerificationStatusSuccessFragmentDoc: DocumentNode;
export declare const MomokaVerificationStatusFailureFragmentDoc: DocumentNode;
export declare const MomokaPostTransactionFragmentDoc: DocumentNode;
export declare const MomokaCommentTransactionFragmentDoc: DocumentNode;
export declare const MomokaMirrorTransactionFragmentDoc: DocumentNode;
export declare const MomokaQuoteTransactionFragmentDoc: DocumentNode;
export declare const MomokaSubmitterResultFragmentDoc: DocumentNode;
export declare const MomokaSubmittersDocument: DocumentNode;
export declare const MomokaSummaryDocument: DocumentNode;
export declare const MomokaTransactionDocument: DocumentNode;
export declare const MomokaTransactionsDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    MomokaSubmitters(variables?: MomokaSubmittersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MomokaSubmittersQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    MomokaSummary(variables?: MomokaSummaryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MomokaSummaryQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    MomokaTransaction(variables: MomokaTransactionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MomokaTransactionQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    momokaTransactions(variables: MomokaTransactionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MomokaTransactionsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
