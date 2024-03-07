import * as Types from "../../../../../graphql/types.generated.js";
import { Eip712TypedDataFieldFragment, Eip712TypedDataDomainFragment, RelaySuccessFragment, DiGiProfileManagerRelayErrorFragment } from "../../../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type CreateActOnOpenActionEip712TypedDataFragment = {
    types: {
        Act: Array<Eip712TypedDataFieldFragment>;
    };
    domain: Eip712TypedDataDomainFragment;
    value: {
        nonce: number;
        deadline: number;
        publicationActedProfileId: string;
        publicationActedId: string;
        actorProfileId: string;
        referrerProfileIds: Array<string>;
        referrerPubIds: Array<string>;
        actionModuleAddress: string;
        actionModuleData: string;
    };
};
export type CreateActOnOpenActionBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: CreateActOnOpenActionEip712TypedDataFragment;
};
export type ActOnOpenActionMutationVariables = Types.Exact<{
    request: Types.ActOnOpenActionDiGiManagerRequest;
}>;
export type ActOnOpenActionMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type CreateActOnOpenActionTypedDataMutationVariables = Types.Exact<{
    request: Types.ActOnOpenActionRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateActOnOpenActionTypedDataMutation = {
    result: CreateActOnOpenActionBroadcastItemResultFragment;
};
export declare const CreateActOnOpenActionEip712TypedDataFragmentDoc: DocumentNode;
export declare const CreateActOnOpenActionBroadcastItemResultFragmentDoc: DocumentNode;
export declare const ActOnOpenActionDocument: DocumentNode;
export declare const CreateActOnOpenActionTypedDataDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    ActOnOpenAction(variables: ActOnOpenActionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ActOnOpenActionMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateActOnOpenActionTypedData(variables: CreateActOnOpenActionTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateActOnOpenActionTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
