import * as Types from "../../../graphql/types.generated.js";
import { NetworkAddressFragment, PaginatedResultInfoFragment, ProfileFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type PoapEventFragment = {
    id: string;
    fancyId: string | null;
    name: string | null;
    eventUrl: string | null;
    imageUrl: string | null;
    country: string | null;
    city: string | null;
    description: string | null;
    year: number | null;
    startDate: string | null;
    endDate: string | null;
    expiryDate: string | null;
    virtualEvent: boolean | null;
    fromAdmin: boolean | null;
    animationUrl: string | null;
    eventTemplateId: number | null;
    privateEvent: boolean | null;
};
export type PoapTokenFragment = {
    tokenId: string;
    eventId: string;
    layer: Types.PoapTokenLayerType;
    created: string;
    migrated: string | null;
    owner: NetworkAddressFragment;
    event: PoapEventFragment;
};
export type PoapsQueryVariables = Types.Exact<{
    request: Types.UserPoapsQueryRequest;
}>;
export type PoapsQuery = {
    result: {
        items: Array<PoapTokenFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type MutualPoapsQueryVariables = Types.Exact<{
    request: Types.MutualPoapsQueryRequest;
}>;
export type MutualPoapsQuery = {
    result: {
        items: Array<PoapEventFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type PoapHoldersQueryVariables = Types.Exact<{
    request: Types.PoapHoldersQueryRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type PoapHoldersQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type PoapEventQueryVariables = Types.Exact<{
    request: Types.PoapEventQueryRequest;
}>;
export type PoapEventQuery = {
    result: PoapEventFragment | null;
};
export declare const PoapEventFragmentDoc: DocumentNode;
export declare const PoapTokenFragmentDoc: DocumentNode;
export declare const PoapsDocument: DocumentNode;
export declare const MutualPoapsDocument: DocumentNode;
export declare const PoapHoldersDocument: DocumentNode;
export declare const PoapEventDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Poaps(variables: PoapsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PoapsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    MutualPoaps(variables: MutualPoapsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MutualPoapsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    PoapHolders(variables: PoapHoldersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PoapHoldersQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    PoapEvent(variables: PoapEventQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PoapEventQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
