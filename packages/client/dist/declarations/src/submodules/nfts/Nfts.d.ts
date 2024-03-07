import type { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import { ProfileFragment } from "../../graphql/fragments.generated.js";
import type { MutualNftCollectionsRequest, NftCollectionOwnersRequest, NftCollectionsRequest, NftGalleriesRequest, NftGalleryCreateRequest, NftGalleryDeleteRequest, NftGalleryUpdateInfoRequest, NftGalleryUpdateItemOrderRequest, NftGalleryUpdateItemsRequest, NftsRequest, PopularNftCollectionsRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { NftFragment, NftGalleryFragment, NftCollectionFragment, NftCollectionWithOwnersFragment } from "./graphql/nfts.generated.js";
/**
 * Query owned NFTs. Create and manage NFT galleries.
 *
 * @experimental This module is not stable and may be removed in a future release
 * @group DiGiClient Modules
 */
export declare class Nfts {
    private readonly context;
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch NFTs for authenticated profile or for provided request params.
     *
     * If you are using `development` enviroment you can only query chainIds 5 and 80001.
     * If you are using `production` enviroment you can only query chainIds 1 and 137.
     *
     * @param request - Request object for the query
     * @returns NFTs wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * When authenticated
     * ```ts
     * const result = await client.nfts.fetch();
     * ```
     *
     * Without authentication
     * ```ts
     * const result = await client.nfts.fetch({
     *   where {
     *     profileId: '0x01',
     *   }
     * });
     * ```
     */
    fetch(request?: NftsRequest): Promise<PaginatedResult<NftFragment>>;
    /**
     * Fetch NFT collections.
     *
     * @param request - Request object for the query
     * @returns NFT collections wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.collections();
     * ```
     */
    collections(request?: NftCollectionsRequest): Promise<PaginatedResult<NftCollectionFragment>>;
    /**
     * Fetch mutual NFT collections between two profiles.
     *
     * @param request - Request object for the query
     * @returns NFT collections wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.mutualCollections({
     *   observer: '0x01',
     *   viewing: '0x02',
     * });
     * ```
     */
    mutualCollections(request: MutualNftCollectionsRequest): Promise<PaginatedResult<NftCollectionFragment>>;
    /**
     * Fetch popular NFT collections together with total number of owners.
     *
     * @param request - Request object for the query
     * @returns NFT collections with total owners wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.popularCollections();
     * ```
     */
    popularCollections(request?: PopularNftCollectionsRequest): Promise<PaginatedResult<NftCollectionWithOwnersFragment>>;
    /**
     * Fetch profiles who own a specific NFT collection.
     *
     * @param request - Request object for the query
     * @returns Profiles wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.collectionOwners({
     *   for: collection.contract.address,
     *   chainId: collection.contract.chainId,
     * });
     * ```
     */
    collectionOwners(request: NftCollectionOwnersRequest): Promise<PaginatedResult<ProfileFragment>>;
    /**
     * Fetch NFT galleries of a profile.
     *
     * @param request - Request object for the query
     * @returns Array of NFT galleries wrapped in {@link PaginatedResult}
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.fetchGalleries({
     *   for: '0x01',
     * });
     * ```
     */
    fetchGalleries(request: NftGalleriesRequest): Promise<PaginatedResult<NftGalleryFragment>>;
    /**
     * Create a new NFT gallery.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * If you are using `development` enviroment you can only query chainIds 5 and 80001.
     * If you are using `production` enviroment you can only query chainIds 1 and 137.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with the id of the new gallery
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.createGallery({
     *   name: 'My favorite NFTs',
     *   items: [
     *     {
     *       contract: {
     *         address: '0x1234123412341234123412341234123412341234', // an NFT that wallet owns
     *         chainId: 5,
     *       },
     *       tokenId: '1',
     *     }
     *   ]
     * });
     * ```
     */
    createGallery(request: NftGalleryCreateRequest): PromiseResult<string, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Update an NFT gallery.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.updateGalleryInfo({
     *   galleryId: '9aeb66b2-0d8f-4c33-951c-feedbb171148',
     *   name: 'New name',
     * });
     * ```
     */
    updateGalleryInfo(request: NftGalleryUpdateInfoRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Update a NFT gallery items.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * If you are using `development` enviroment you can only query chainIds 5 and 80001.
     * If you are using `production` enviroment you can only query chainIds 1 and 137.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.updateGalleryItems({
     *   galleryId: '9aeb66b2-0d8f-4c33-951c-feedbb171148',
     *   toAdd: [
     *     {
     *       contract: {
     *         address: '0x1234123412341234123412341234123412341234', // an NFT that wallet owns
     *         chainId: 5,
     *       },
     *       tokenId: '1',
     *     },
     *   ],
     *   toRemove: [
     *     {
     *       contract: {
     *         address: '0x1234123412341234123412341234123412341234', // an NFT that wallet owns
     *         chainId: 5,
     *       },
     *       tokenId: '2',
     *     },
     *   ],
     * });
     * ```
     */
    updateGalleryItems(request: NftGalleryUpdateItemsRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Update a NFT gallery items order.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * If you are using `development` enviroment you can only query chainIds 5 and 80001.
     * If you are using `production` enviroment you can only query chainIds 1 and 137.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.updateGalleryOrder({
     *   galleryId: '9aeb66b2-0d8f-4c33-951c-feedbb171148',
     *   updates: [
     *     {
     *       contract: {
     *         address: '0x1234123412341234123412341234123412341234', // an NFT that wallet owns
     *         chainId: 5,
     *       },
     *       tokenId: '1',
     *       newOrder: 1,
     *     },
     *   ],
     * });
     * ```
     */
    updateGalleryOrder(request: NftGalleryUpdateItemOrderRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Delete a NFT gallery.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with void
     * @experimental This function is not stable and may be removed in a future release
     *
     * @example
     * ```ts
     * const result = await client.nfts.deleteGallery({
     *   galleryId: '9aeb66b2-0d8f-4c33-951c-feedbb171148'
     * });
     * ```
     */
    deleteGallery(request: NftGalleryDeleteRequest): PromiseResult<void, CredentialsExpiredError | NotAuthenticatedError>;
}
