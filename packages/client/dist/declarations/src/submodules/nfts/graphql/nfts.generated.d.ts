import * as Types from "../../../graphql/types.generated.js";
import { NetworkAddressFragment, PaginatedResultInfoFragment, ImageFragment, ProfileFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type OwnerFragment = {
    amount: string;
    address: string;
};
export type NftCollectionFragment = {
    name: string;
    symbol: string;
    baseUri: string | null;
    contractType: Types.NftContractType;
    verified: boolean;
    contract: NetworkAddressFragment;
};
export type NftMetadataFragment = {
    name: string | null;
    description: string | null;
    image: {
        raw: ImageFragment;
        optimized: ImageFragment | null;
    } | null;
};
export type NftFragment = {
    tokenId: string;
    contentURI: string | null;
    contractType: Types.NftContractType;
    owner: OwnerFragment;
    contract: NetworkAddressFragment;
    collection: NftCollectionFragment;
    metadata: NftMetadataFragment;
};
export type NftGalleryFragment = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    items: Array<NftFragment>;
};
export type NftCollectionWithOwnersFragment = {
    totalOwners: number;
    collection: NftCollectionFragment;
};
export type NftsQueryVariables = Types.Exact<{
    request: Types.NftsRequest;
}>;
export type NftsQuery = {
    result: {
        items: Array<NftFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type NftGalleriesQueryVariables = Types.Exact<{
    request: Types.NftGalleriesRequest;
}>;
export type NftGalleriesQuery = {
    result: {
        items: Array<NftGalleryFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type NftCollectionOwnersQueryVariables = Types.Exact<{
    request: Types.NftCollectionOwnersRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type NftCollectionOwnersQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type NftCollectionsQueryVariables = Types.Exact<{
    request: Types.NftCollectionsRequest;
}>;
export type NftCollectionsQuery = {
    result: {
        items: Array<NftCollectionFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type MutualNftCollectionsQueryVariables = Types.Exact<{
    request: Types.MutualNftCollectionsRequest;
}>;
export type MutualNftCollectionsQuery = {
    result: {
        items: Array<NftCollectionFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type PopularNftCollectionsQueryVariables = Types.Exact<{
    request: Types.PopularNftCollectionsRequest;
}>;
export type PopularNftCollectionsQuery = {
    result: {
        items: Array<NftCollectionWithOwnersFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type CreateNftGalleryMutationVariables = Types.Exact<{
    request: Types.NftGalleryCreateRequest;
}>;
export type CreateNftGalleryMutation = {
    result: string;
};
export type UpdateNftGalleryInfoMutationVariables = Types.Exact<{
    request: Types.NftGalleryUpdateInfoRequest;
}>;
export type UpdateNftGalleryInfoMutation = {
    updateNftGalleryInfo: string | null;
};
export type UpdateNftGalleryOrderMutationVariables = Types.Exact<{
    request: Types.NftGalleryUpdateItemOrderRequest;
}>;
export type UpdateNftGalleryOrderMutation = {
    updateNftGalleryOrder: string | null;
};
export type UpdateNftGalleryItemsMutationVariables = Types.Exact<{
    request: Types.NftGalleryUpdateItemsRequest;
}>;
export type UpdateNftGalleryItemsMutation = {
    updateNftGalleryItems: string | null;
};
export type DeleteNftGalleryMutationVariables = Types.Exact<{
    request: Types.NftGalleryDeleteRequest;
}>;
export type DeleteNftGalleryMutation = {
    deleteNftGallery: string | null;
};
export declare const OwnerFragmentDoc: DocumentNode;
export declare const NftCollectionFragmentDoc: DocumentNode;
export declare const NftMetadataFragmentDoc: DocumentNode;
export declare const NftFragmentDoc: DocumentNode;
export declare const NftGalleryFragmentDoc: DocumentNode;
export declare const NftCollectionWithOwnersFragmentDoc: DocumentNode;
export declare const NftsDocument: DocumentNode;
export declare const NftGalleriesDocument: DocumentNode;
export declare const NftCollectionOwnersDocument: DocumentNode;
export declare const NftCollectionsDocument: DocumentNode;
export declare const MutualNftCollectionsDocument: DocumentNode;
export declare const PopularNftCollectionsDocument: DocumentNode;
export declare const CreateNftGalleryDocument: DocumentNode;
export declare const UpdateNftGalleryInfoDocument: DocumentNode;
export declare const UpdateNftGalleryOrderDocument: DocumentNode;
export declare const UpdateNftGalleryItemsDocument: DocumentNode;
export declare const DeleteNftGalleryDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Nfts(variables: NftsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: NftsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    NftGalleries(variables: NftGalleriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: NftGalleriesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    NftCollectionOwners(variables: NftCollectionOwnersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: NftCollectionOwnersQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    NftCollections(variables: NftCollectionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: NftCollectionsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    MutualNftCollections(variables: MutualNftCollectionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MutualNftCollectionsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    PopularNftCollections(variables: PopularNftCollectionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PopularNftCollectionsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateNFTGallery(variables: CreateNftGalleryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateNftGalleryMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    UpdateNFTGalleryInfo(variables: UpdateNftGalleryInfoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UpdateNftGalleryInfoMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    UpdateNFTGalleryOrder(variables: UpdateNftGalleryOrderMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UpdateNftGalleryOrderMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    UpdateNFTGalleryItems(variables: UpdateNftGalleryItemsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UpdateNftGalleryItemsMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    DeleteNFTGallery(variables: DeleteNftGalleryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: DeleteNftGalleryMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
