import * as Types from "../../../graphql/types.generated.js";
import { AmountFragment, PostFragment, QuoteFragment, PaginatedResultInfoFragment, MirrorFragment, CommentFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type RevenueAggregateFragment = {
    total: AmountFragment;
};
export type PublicationRevenueFragment = {
    publication: CommentFragment | MirrorFragment | PostFragment | QuoteFragment;
    revenue: Array<RevenueAggregateFragment>;
};
export type RevenueFromPublicationsQueryVariables = Types.Exact<{
    request: Types.RevenueFromPublicationsRequest;
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
export type RevenueFromPublicationsQuery = {
    result: {
        items: Array<PublicationRevenueFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type RevenueFromPublicationQueryVariables = Types.Exact<{
    request: Types.RevenueFromPublicationRequest;
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
export type RevenueFromPublicationQuery = {
    result: PublicationRevenueFragment | null;
};
export type FollowRevenuesQueryVariables = Types.Exact<{
    request: Types.FollowRevenueRequest;
    rateRequest: Types.RateRequest;
}>;
export type FollowRevenuesQuery = {
    result: {
        revenues: Array<RevenueAggregateFragment>;
    };
};
export declare const RevenueAggregateFragmentDoc: DocumentNode;
export declare const PublicationRevenueFragmentDoc: DocumentNode;
export declare const RevenueFromPublicationsDocument: DocumentNode;
export declare const RevenueFromPublicationDocument: DocumentNode;
export declare const FollowRevenuesDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    RevenueFromPublications(variables: RevenueFromPublicationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: RevenueFromPublicationsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    RevenueFromPublication(variables: RevenueFromPublicationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: RevenueFromPublicationQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    FollowRevenues(variables: FollowRevenuesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: FollowRevenuesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
