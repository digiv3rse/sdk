import * as Types from "../../../graphql/types.generated.js";
import { ProfileFragment, PostFragment, QuoteFragment, PaginatedResultInfoFragment, CommentFragment, MirrorFragment, OpenActionResult_KnownCollectOpenActionResult_Fragment, OpenActionResult_UnknownOpenActionResult_Fragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type ReactionNotificationFragment = {
    __typename: 'ReactionNotification';
    id: string;
    reactions: Array<{
        profile: ProfileFragment;
        reactions: Array<{
            reaction: Types.PublicationReactionType;
            reactedAt: string;
        }>;
    }>;
    publication: CommentFragment | PostFragment | QuoteFragment;
};
export type CommentNotificationFragment = {
    __typename: 'CommentNotification';
    id: string;
    comment: CommentFragment;
};
export type MirrorNotificationFragment = {
    __typename: 'MirrorNotification';
    id: string;
    mirrors: Array<{
        mirrorId: string;
        mirroredAt: string;
        profile: ProfileFragment;
    }>;
    publication: CommentFragment | PostFragment | QuoteFragment;
};
export type QuoteNotificationFragment = {
    __typename: 'QuoteNotification';
    id: string;
    quote: QuoteFragment;
};
export type OpenActionProfileActedFragment = {
    actedAt: string;
    by: ProfileFragment;
    action: OpenActionResult_KnownCollectOpenActionResult_Fragment | OpenActionResult_UnknownOpenActionResult_Fragment;
};
export type ActedNotificationFragment = {
    __typename: 'ActedNotification';
    id: string;
    actions: Array<OpenActionProfileActedFragment>;
    publication: CommentFragment | MirrorFragment | PostFragment | QuoteFragment;
};
export type FollowNotificationFragment = {
    __typename: 'FollowNotification';
    id: string;
    followers: Array<ProfileFragment>;
};
export type MentionNotificationFragment = {
    __typename: 'MentionNotification';
    id: string;
    publication: CommentFragment | PostFragment | QuoteFragment;
};
export type NotificationsQueryVariables = Types.Exact<{
    request: Types.NotificationRequest;
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
export type NotificationsQuery = {
    result: {
        items: Array<ActedNotificationFragment | CommentNotificationFragment | FollowNotificationFragment | MentionNotificationFragment | MirrorNotificationFragment | QuoteNotificationFragment | ReactionNotificationFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export declare const ReactionNotificationFragmentDoc: DocumentNode;
export declare const CommentNotificationFragmentDoc: DocumentNode;
export declare const MirrorNotificationFragmentDoc: DocumentNode;
export declare const QuoteNotificationFragmentDoc: DocumentNode;
export declare const OpenActionProfileActedFragmentDoc: DocumentNode;
export declare const ActedNotificationFragmentDoc: DocumentNode;
export declare const FollowNotificationFragmentDoc: DocumentNode;
export declare const MentionNotificationFragmentDoc: DocumentNode;
export declare const NotificationsDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Notifications(variables: NotificationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: NotificationsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
