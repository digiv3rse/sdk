import * as Types from "../../../graphql/types.generated.js";
import { ProfileFragment, PostFragment, QuoteFragment, PaginatedResultInfoFragment, CommentFragment, MirrorFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type ReactionEventFragment = {
    reaction: Types.PublicationReactionType;
    createdAt: string;
    by: ProfileFragment;
};
export type FeedItemFragment = {
    id: string;
    root: CommentFragment | PostFragment | QuoteFragment;
    mirrors: Array<MirrorFragment>;
    reactions: Array<ReactionEventFragment>;
    comments: Array<CommentFragment>;
};
export type FeedQueryVariables = Types.Exact<{
    request: Types.FeedRequest;
    publicationImageSmallTransform: Types.ImageTransform;
    publicationImageMediumTransform: Types.ImageTransform;
    publicationOperationsActedArgs?: Types.InputMaybe<Types.PublicationOperationsActedArgs>;
    publicationStatsInput: Types.PublicationStatsInput;
    publicationStatsCountOpenActionArgs: Types.PublicationStatsCountOpenActionArgs;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type FeedQuery = {
    result: {
        items: Array<FeedItemFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type FeedHighlightsQueryVariables = Types.Exact<{
    request: Types.FeedHighlightsRequest;
    publicationImageSmallTransform: Types.ImageTransform;
    publicationImageMediumTransform: Types.ImageTransform;
    publicationOperationsActedArgs?: Types.InputMaybe<Types.PublicationOperationsActedArgs>;
    publicationStatsInput: Types.PublicationStatsInput;
    publicationStatsCountOpenActionArgs: Types.PublicationStatsCountOpenActionArgs;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type FeedHighlightsQuery = {
    result: {
        items: Array<PostFragment | QuoteFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type LatestActedFragment = {
    actedAt: string;
    txHash: string;
    profile: ProfileFragment;
};
export type FollowPaidActionFragment = {
    __typename: 'FollowPaidAction';
    latestActed: Array<LatestActedFragment>;
    followed: ProfileFragment;
};
export type OpenActionPaidActionFragment = {
    __typename: 'OpenActionPaidAction';
    latestActed: Array<LatestActedFragment>;
    actedOn: CommentFragment | PostFragment | QuoteFragment;
};
export type LatestPaidActionsQueryVariables = Types.Exact<{
    publicationImageSmallTransform: Types.ImageTransform;
    publicationImageMediumTransform: Types.ImageTransform;
    publicationOperationsActedArgs?: Types.InputMaybe<Types.PublicationOperationsActedArgs>;
    publicationStatsInput: Types.PublicationStatsInput;
    publicationStatsCountOpenActionArgs: Types.PublicationStatsCountOpenActionArgs;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type LatestPaidActionsQuery = {
    result: {
        items: Array<FollowPaidActionFragment | OpenActionPaidActionFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export declare const ReactionEventFragmentDoc: DocumentNode;
export declare const FeedItemFragmentDoc: DocumentNode;
export declare const LatestActedFragmentDoc: DocumentNode;
export declare const FollowPaidActionFragmentDoc: DocumentNode;
export declare const OpenActionPaidActionFragmentDoc: DocumentNode;
export declare const FeedDocument: DocumentNode;
export declare const FeedHighlightsDocument: DocumentNode;
export declare const LatestPaidActionsDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Feed(variables: FeedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: FeedQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    FeedHighlights(variables: FeedHighlightsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: FeedHighlightsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    LatestPaidActions(variables: LatestPaidActionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: LatestPaidActionsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
