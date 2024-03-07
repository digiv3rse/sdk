import * as Types from "../../graphql/types.generated.js";
import { PaginatedResultInfoFragment } from "../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type AuthChallengeFragment = {
    __typename: 'AuthChallengeResult';
    id: string;
    text: string;
};
export type ApprovedAuthenticationFragment = {
    __typename: 'ApprovedAuthentication';
    authorizationId: string;
    browser: string | null;
    device: string | null;
    os: string | null;
    origin: string | null;
    expiresAt: string;
    createdAt: string;
    updatedAt: string;
};
export type AuthChallengeQueryVariables = Types.Exact<{
    request: Types.ChallengeRequest;
}>;
export type AuthChallengeQuery = {
    result: AuthChallengeFragment;
};
export type AuthVerifyQueryVariables = Types.Exact<{
    request: Types.VerifyRequest;
}>;
export type AuthVerifyQuery = {
    result: boolean;
};
export type CurrentSessionQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export type CurrentSessionQuery = {
    result: ApprovedAuthenticationFragment;
};
export type ApprovedAuthenticationsQueryVariables = Types.Exact<{
    request: Types.ApprovedAuthenticationRequest;
}>;
export type ApprovedAuthenticationsQuery = {
    result: {
        items: Array<ApprovedAuthenticationFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type AuthAuthenticateMutationVariables = Types.Exact<{
    request: Types.SignedAuthChallenge;
}>;
export type AuthAuthenticateMutation = {
    result: {
        accessToken: string;
        refreshToken: string;
    };
};
export type AuthRefreshMutationVariables = Types.Exact<{
    request: Types.RefreshRequest;
}>;
export type AuthRefreshMutation = {
    result: {
        accessToken: string;
        refreshToken: string;
    };
};
export type WalletAuthenticationToProfileAuthenticationMutationVariables = Types.Exact<{
    request: Types.WalletAuthenticationToProfileAuthenticationRequest;
}>;
export type WalletAuthenticationToProfileAuthenticationMutation = {
    result: {
        accessToken: string;
        refreshToken: string;
    };
};
export type RevokeAuthenticationMutationVariables = Types.Exact<{
    request: Types.RevokeAuthenticationRequest;
}>;
export type RevokeAuthenticationMutation = {
    revokeAuthentication: string | null;
};
export declare const AuthChallengeFragmentDoc: DocumentNode;
export declare const ApprovedAuthenticationFragmentDoc: DocumentNode;
export declare const AuthChallengeDocument: DocumentNode;
export declare const AuthVerifyDocument: DocumentNode;
export declare const CurrentSessionDocument: DocumentNode;
export declare const ApprovedAuthenticationsDocument: DocumentNode;
export declare const AuthAuthenticateDocument: DocumentNode;
export declare const AuthRefreshDocument: DocumentNode;
export declare const WalletAuthenticationToProfileAuthenticationDocument: DocumentNode;
export declare const RevokeAuthenticationDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    AuthChallenge(variables: AuthChallengeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: AuthChallengeQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    AuthVerify(variables: AuthVerifyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: AuthVerifyQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CurrentSession(variables?: CurrentSessionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CurrentSessionQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ApprovedAuthentications(variables: ApprovedAuthenticationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ApprovedAuthenticationsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    AuthAuthenticate(variables: AuthAuthenticateMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: AuthAuthenticateMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    AuthRefresh(variables: AuthRefreshMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: AuthRefreshMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    WalletAuthenticationToProfileAuthentication(variables: WalletAuthenticationToProfileAuthenticationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: WalletAuthenticationToProfileAuthenticationMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    RevokeAuthentication(variables: RevokeAuthenticationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: RevokeAuthenticationMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
