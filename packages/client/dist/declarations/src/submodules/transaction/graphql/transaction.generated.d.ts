import * as Types from "../../../graphql/types.generated.js";
import { NetworkAddressFragment, RelaySuccessFragment, RelayErrorFragment, CreateMomokaPublicationResultFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type DiGiTransactionResultFragment = {
    __typename: 'DiGiTransactionResult';
    status: Types.DiGiTransactionStatusType;
    txHash: string;
    reason: Types.DiGiTransactionFailureType | null;
    extraInfo: string | null;
};
export type TxIdToTxHashQueryVariables = Types.Exact<{
    for: Types.Scalars['TxId']['input'];
}>;
export type TxIdToTxHashQuery = {
    result: string | null;
};
export type RelayQueueResultFragment = {
    __typename: 'RelayQueueResult';
    key: Types.RelayRoleKey;
    queue: number;
    relay: NetworkAddressFragment;
};
export type RelayQueuesQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export type RelayQueuesQuery = {
    result: Array<RelayQueueResultFragment>;
};
export type GenerateDiGiApiRelayAddressQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export type GenerateDiGiApiRelayAddressQuery = {
    result: string;
};
export type DiGiTransactionStatusQueryVariables = Types.Exact<{
    request: Types.DiGiTransactionStatusRequest;
}>;
export type DiGiTransactionStatusQuery = {
    result: DiGiTransactionResultFragment | null;
};
export type BroadcastOnchainMutationVariables = Types.Exact<{
    request: Types.BroadcastRequest;
}>;
export type BroadcastOnchainMutation = {
    result: RelayErrorFragment | RelaySuccessFragment;
};
export type BroadcastOnMomokaMutationVariables = Types.Exact<{
    request: Types.BroadcastRequest;
}>;
export type BroadcastOnMomokaMutation = {
    result: CreateMomokaPublicationResultFragment | RelayErrorFragment;
};
export declare const DiGiTransactionResultFragmentDoc: DocumentNode;
export declare const RelayQueueResultFragmentDoc: DocumentNode;
export declare const TxIdToTxHashDocument: DocumentNode;
export declare const RelayQueuesDocument: DocumentNode;
export declare const GenerateDiGiApiRelayAddressDocument: DocumentNode;
export declare const DiGiTransactionStatusDocument: DocumentNode;
export declare const BroadcastOnchainDocument: DocumentNode;
export declare const BroadcastOnMomokaDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    TxIdToTxHash(variables: TxIdToTxHashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: TxIdToTxHashQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    RelayQueues(variables?: RelayQueuesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: RelayQueuesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    GenerateDiGiAPIRelayAddress(variables?: GenerateDiGiApiRelayAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: GenerateDiGiApiRelayAddressQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    DiGiTransactionStatus(variables: DiGiTransactionStatusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: DiGiTransactionStatusQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    BroadcastOnchain(variables: BroadcastOnchainMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: BroadcastOnchainMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    BroadcastOnMomoka(variables: BroadcastOnMomokaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: BroadcastOnMomokaMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
