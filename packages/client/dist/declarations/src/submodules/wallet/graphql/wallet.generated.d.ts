import * as Types from "../../../graphql/types.generated.js";
import { HandleInfoFragment, PaginatedResultInfoFragment, ProfileFragment, RelaySuccessFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type OwnedHandlesQueryVariables = Types.Exact<{
    request: Types.OwnedHandlesRequest;
}>;
export type OwnedHandlesQuery = {
    result: {
        items: Array<HandleInfoFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type ProfilesManagedQueryVariables = Types.Exact<{
    request: Types.ProfilesManagedRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type ProfilesManagedQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type UserSigNoncesFragment = {
    digiHubOnchainSigNonce: number;
    digiTokenHandleRegistryOnchainSigNonce: number;
};
export type UserSigNoncesQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export type UserSigNoncesQuery = {
    result: UserSigNoncesFragment;
};
export type ReservedClaimableFragment = {
    id: string;
    withHandle: string;
    source: string;
    expiry: string;
};
export type ClaimableProfilesResultFragment = {
    canMintProfileWithFreeTextHandle: boolean;
    reserved: Array<ReservedClaimableFragment>;
};
export type ClaimableProfilesQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export type ClaimableProfilesQuery = {
    result: ClaimableProfilesResultFragment;
};
export type LastLoggedInProfileQueryVariables = Types.Exact<{
    request: Types.LastLoggedInProfileRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type LastLoggedInProfileQuery = {
    result: ProfileFragment | null;
};
export type UserCurrentRateLimitFragment = {
    hourAllowanceLeft: number;
    hourAllowanceUsed: number;
    hourAllowance: number;
    dayAllowanceLeft: number;
    dayAllowanceUsed: number;
    dayAllowance: number;
};
export type UserCurrentRateLimitResultFragment = {
    momoka: UserCurrentRateLimitFragment;
    onchain: UserCurrentRateLimitFragment;
};
export type UserRateLimitQueryVariables = Types.Exact<{
    request: Types.UserCurrentRateLimitRequest;
}>;
export type UserRateLimitQuery = {
    result: UserCurrentRateLimitResultFragment;
};
export type CreateProfileWithHandleErrorResultFragment = {
    reason: Types.CreateProfileWithHandleErrorReasonType;
};
export type ClaimProfileWithHandleErrorResultFragment = {
    reason: Types.ClaimProfileWithHandleErrorReasonType;
};
export type ClaimProfileWithHandleMutationVariables = Types.Exact<{
    request: Types.ClaimProfileWithHandleRequest;
}>;
export type ClaimProfileWithHandleMutation = {
    result: ClaimProfileWithHandleErrorResultFragment | RelaySuccessFragment;
};
export type CreateProfileWithHandleMutationVariables = Types.Exact<{
    request: Types.CreateProfileWithHandleRequest;
}>;
export type CreateProfileWithHandleMutation = {
    result: CreateProfileWithHandleErrorResultFragment | RelaySuccessFragment;
};
export type CreateProfileMutationVariables = Types.Exact<{
    request: Types.CreateProfileRequest;
}>;
export type CreateProfileMutation = {
    result: RelaySuccessFragment;
};
export declare const UserSigNoncesFragmentDoc: DocumentNode;
export declare const ReservedClaimableFragmentDoc: DocumentNode;
export declare const ClaimableProfilesResultFragmentDoc: DocumentNode;
export declare const UserCurrentRateLimitFragmentDoc: DocumentNode;
export declare const UserCurrentRateLimitResultFragmentDoc: DocumentNode;
export declare const CreateProfileWithHandleErrorResultFragmentDoc: DocumentNode;
export declare const ClaimProfileWithHandleErrorResultFragmentDoc: DocumentNode;
export declare const OwnedHandlesDocument: DocumentNode;
export declare const ProfilesManagedDocument: DocumentNode;
export declare const UserSigNoncesDocument: DocumentNode;
export declare const ClaimableProfilesDocument: DocumentNode;
export declare const LastLoggedInProfileDocument: DocumentNode;
export declare const UserRateLimitDocument: DocumentNode;
export declare const ClaimProfileWithHandleDocument: DocumentNode;
export declare const CreateProfileWithHandleDocument: DocumentNode;
export declare const CreateProfileDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    OwnedHandles(variables: OwnedHandlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: OwnedHandlesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ProfilesManaged(variables: ProfilesManagedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ProfilesManagedQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    UserSigNonces(variables?: UserSigNoncesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UserSigNoncesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ClaimableProfiles(variables?: ClaimableProfilesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ClaimableProfilesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    LastLoggedInProfile(variables: LastLoggedInProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: LastLoggedInProfileQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    UserRateLimit(variables: UserRateLimitQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UserRateLimitQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ClaimProfileWithHandle(variables: ClaimProfileWithHandleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ClaimProfileWithHandleMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateProfileWithHandle(variables: CreateProfileWithHandleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateProfileWithHandleMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateProfile(variables: CreateProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateProfileMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
