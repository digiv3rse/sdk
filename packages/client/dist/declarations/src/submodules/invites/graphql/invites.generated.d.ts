import * as Types from "../../../graphql/types.generated.js";
import { ProfileFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type InvitedResultFragment = {
    by: string;
    when: string;
    profileMinted: ProfileFragment | null;
};
export type InvitedProfilesQueryVariables = Types.Exact<{
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type InvitedProfilesQuery = {
    result: Array<InvitedResultFragment>;
};
export type ProfileAlreadyInvitedQueryVariables = Types.Exact<{
    request: Types.AlreadyInvitedCheckRequest;
}>;
export type ProfileAlreadyInvitedQuery = {
    result: boolean;
};
export type InviteMutationVariables = Types.Exact<{
    request: Types.InviteRequest;
}>;
export type InviteMutation = {
    invite: string | null;
};
export declare const InvitedResultFragmentDoc: DocumentNode;
export declare const InvitedProfilesDocument: DocumentNode;
export declare const ProfileAlreadyInvitedDocument: DocumentNode;
export declare const InviteDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    InvitedProfiles(variables: InvitedProfilesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: InvitedProfilesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ProfileAlreadyInvited(variables: ProfileAlreadyInvitedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ProfileAlreadyInvitedQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Invite(variables: InviteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: InviteMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
