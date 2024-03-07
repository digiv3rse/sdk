import * as Types from "../../../../../graphql/types.generated.js";
import { ProfileFragment, PaginatedResultInfoFragment } from "../../../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type AddReactionMutationVariables = Types.Exact<{
    request: Types.ReactionRequest;
}>;
export type AddReactionMutation = {
    addReaction: string | null;
};
export type RemoveReactionMutationVariables = Types.Exact<{
    request: Types.ReactionRequest;
}>;
export type RemoveReactionMutation = {
    removeReaction: string | null;
};
export type ProfileReactionResultFragment = {
    reaction: Types.PublicationReactionType;
    reactionAt: string;
};
export type ProfileWhoReactedResultFragment = {
    profile: ProfileFragment;
    reactions: Array<ProfileReactionResultFragment>;
};
export type WhoReactedPublicationQueryVariables = Types.Exact<{
    request: Types.WhoReactedPublicationRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type WhoReactedPublicationQuery = {
    result: {
        items: Array<ProfileWhoReactedResultFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export declare const ProfileReactionResultFragmentDoc: DocumentNode;
export declare const ProfileWhoReactedResultFragmentDoc: DocumentNode;
export declare const AddReactionDocument: DocumentNode;
export declare const RemoveReactionDocument: DocumentNode;
export declare const WhoReactedPublicationDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    AddReaction(variables: AddReactionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: AddReactionMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    RemoveReaction(variables: RemoveReactionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: RemoveReactionMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    WhoReactedPublication(variables: WhoReactedPublicationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: WhoReactedPublicationQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
