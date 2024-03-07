import { QueryHookOptions, StoreValue } from '@apollo/client';
import { ProfileId, PublicationId } from '@digiv3rse/domain/entities';
import { Cursor } from './Cursor';
import { MediaTransformParams } from './ImageSizeTransform';
import { Comment, PaginatedResultInfo, Exact, InputMaybe, Profile, PublicationMetadataFilters, SearchProfilesVariables, SearchPublicationsVariables, GetProfileBookmarksVariables } from './generated';
import { Sources } from './sources';
import { ContentPublication } from './utils';
export * from './CollectPolicy';
export * from './ContentEncryptionKey';
export * from './ContentInsight';
export * from './Cursor';
export * from './FollowPolicy';
export * from './FollowStatus';
export * from './generated';
export type { Digit, ImageSizeTransform, MediaTransformParams, // overwrite the generated one
Percentage, Pixel, } from './ImageSizeTransform';
export * from './ProfileAttributeReader';
export * from './ProfileAttributes';
export * from './ReferencePolicy';
export * from './sources';
export * from './utils';
export type CursorBasedPaginatedResult<T = StoreValue> = {
    items: T[];
    pageInfo: PaginatedResultInfo;
};
export type GetCommentsVariables = Exact<{
    commentsOf: PublicationId;
    limit: number;
    sources: Sources;
    cursor?: InputMaybe<Cursor>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    observerId?: InputMaybe<ProfileId>;
    mediaTransformPublicationSmall?: InputMaybe<MediaTransformParams>;
    mediaTransformPublicationMedium?: InputMaybe<MediaTransformParams>;
    mediaTransformProfileThumbnail?: InputMaybe<MediaTransformParams>;
}>;
export type GetCommentsData = {
    result: {
        items: Array<Comment>;
        pageInfo: PaginatedResultInfo;
    };
};
/**
 * This hooks uses the codegen generated GetPublications query hook so that it
 * can returns paginated results of Comment in a type safe way.
 */
export declare function useGetComments(options: QueryHookOptions<GetCommentsData, GetCommentsVariables>): import("@apollo/client").QueryResult<GetCommentsData, Exact<{
    commentsOf: PublicationId;
    limit: number;
    sources: Sources;
    cursor?: InputMaybe<Cursor> | undefined;
    metadata?: InputMaybe<PublicationMetadataFilters> | undefined;
    observerId?: InputMaybe<ProfileId> | undefined;
    mediaTransformPublicationSmall?: InputMaybe<MediaTransformParams> | undefined;
    mediaTransformPublicationMedium?: InputMaybe<MediaTransformParams> | undefined;
    mediaTransformProfileThumbnail?: InputMaybe<MediaTransformParams> | undefined;
}>>;
export type SearchProfilesData = {
    result: {
        __typename: 'ProfileSearchResult';
        items: Array<Profile>;
        pageInfo: PaginatedResultInfo;
    };
};
/**
 * This is a patched version of the codegen generated useSearchProfilesQuery hook.
 * It is patched to return paginated results of Profile instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
export declare function useSearchProfiles(options: QueryHookOptions<SearchProfilesData, SearchProfilesVariables>): import("@apollo/client").QueryResult<SearchProfilesData, Exact<{
    limit: number;
    cursor?: InputMaybe<Cursor> | undefined;
    query: string;
    observerId?: InputMaybe<ProfileId> | undefined;
    sources: import("@digiv3rse/domain/entities").AppId | import("@digiv3rse/domain/entities").AppId[];
    mediaTransformProfileThumbnail?: InputMaybe<import("./generated").MediaTransformParams> | undefined;
}>>;
export type SearchPublicationsData = {
    result: {
        __typename: 'PublicationSearchResult';
        items: Array<ContentPublication>;
        pageInfo: PaginatedResultInfo;
    };
};
/**
 * This is a patched version of the codegen generated useSearchPublicationsQuery hook.
 * It is patched to return paginated results of ContentPublication instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
export declare function useSearchPublications(options: QueryHookOptions<SearchPublicationsData, SearchPublicationsVariables>): import("@apollo/client").QueryResult<SearchPublicationsData, Exact<{
    limit?: InputMaybe<number> | undefined;
    cursor?: InputMaybe<Cursor> | undefined;
    query: string;
    sources: import("@digiv3rse/domain/entities").AppId | import("@digiv3rse/domain/entities").AppId[];
    observerId?: InputMaybe<ProfileId> | undefined;
    mediaTransformPublicationSmall?: InputMaybe<import("./generated").MediaTransformParams> | undefined;
    mediaTransformPublicationMedium?: InputMaybe<import("./generated").MediaTransformParams> | undefined;
    mediaTransformProfileThumbnail?: InputMaybe<import("./generated").MediaTransformParams> | undefined;
}>>;
export type GetProfileBookmarksData = {
    result: {
        items: Array<ContentPublication>;
        pageInfo: PaginatedResultInfo;
    };
};
/**
 * This is a patched version of the codegen generated useGetProfileBookmarks hook.
 * It is patched to return paginated results of ContentPublication instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
export declare function useGetProfileBookmarks(options: QueryHookOptions<GetProfileBookmarksData, GetProfileBookmarksVariables>): import("@apollo/client").QueryResult<GetProfileBookmarksData, Exact<{
    profileId: ProfileId;
    limit: number;
    sources: import("@digiv3rse/domain/entities").AppId | import("@digiv3rse/domain/entities").AppId[];
    metadata?: InputMaybe<PublicationMetadataFilters> | undefined;
    cursor?: InputMaybe<Cursor> | undefined;
    observerId?: InputMaybe<ProfileId> | undefined;
    mediaTransformPublicationSmall?: InputMaybe<import("./generated").MediaTransformParams> | undefined;
    mediaTransformPublicationMedium?: InputMaybe<import("./generated").MediaTransformParams> | undefined;
    mediaTransformProfileThumbnail?: InputMaybe<import("./generated").MediaTransformParams> | undefined;
}>>;
