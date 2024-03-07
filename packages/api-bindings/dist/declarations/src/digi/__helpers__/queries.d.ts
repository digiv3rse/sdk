import { MockedResponse } from '@apollo/client/testing';
import { Erc20 } from '@digiv3rse/shared-kernel';
import { Cursor } from '../Cursor';
import { Comment, EnabledModuleCurrenciesData, EnabledModules, EnabledModulesData, ExploreProfilesData, ExploreProfilesVariables, ExplorePublicationsData, ExplorePublicationsVariables, FeedData, FeedItem, FeedVariables, GetAllProfilesData, GetAllProfilesVariables, GetProfileBookmarksData, GetProfileBookmarksVariables, GetProfileData, GetProfilePublicationRevenueData, GetProfilePublicationRevenueVariables, GetProfileVariables, GetPublicationData, GetPublicationRevenueData, GetPublicationRevenueVariables, GetPublicationsData, GetPublicationsVariables, GetPublicationVariables, HasTxHashBeenIndexedData, HasTxHashBeenIndexedVariables, Maybe, Mirror, MutualFollowersProfilesData, MutualFollowersProfilesVariables, PaginatedResultInfo, Post, Profile, ProfileFollowRevenue, ProfileFollowRevenueData, ProfileFollowRevenueVariables, ProfilePublicationsForSaleData, ProfilePublicationsForSaleVariables, ProfilesToFollowData, ProfilesToFollowVariables, ProxyActionStatusData, ProxyActionStatusResult, ProxyActionStatusVariables, PublicationRevenue, SearchProfilesVariables, SearchPublicationsVariables, TransactionErrorReasons, Wallet, WhoCollectedPublicationData, WhoCollectedPublicationVariables, WhoReactedPublicationData, WhoReactedPublicationVariables, WhoReactedResult } from '../generated';
import { SearchProfilesData, SearchPublicationsData } from '../index';
import { Sources } from '../sources';
import { AnyPublication, ContentPublication } from '../utils/publication';
export declare function mockSources(): Sources;
export declare function mockCursor(): Cursor;
export declare function mockProfilesToFollowResponse({ variables, profiles, }: {
    variables: ProfilesToFollowVariables;
    profiles: Profile[];
}): MockedResponse<ProfilesToFollowData>;
export declare function mockGetProfileResponse({ variables, profile, }: {
    variables: GetProfileVariables;
    profile?: Maybe<Profile>;
}): MockedResponse<GetProfileData>;
export declare function mockGetAllProfilesResponse({ variables, profiles, }: {
    variables: GetAllProfilesVariables;
    profiles?: Profile[];
}): MockedResponse<GetAllProfilesData>;
export declare function mockHasTxHashBeenIndexedData(result: {
    reason: TransactionErrorReasons;
} | {
    indexed: boolean;
    txHash: string;
}): HasTxHashBeenIndexedData;
export declare function mockHasTxHashBeenIndexedResponse({ variables, data, }: {
    variables: HasTxHashBeenIndexedVariables;
    data: HasTxHashBeenIndexedData;
}): MockedResponse<HasTxHashBeenIndexedData>;
export declare function mockProxyActionStatusResponse(instructions: {
    result: {
        reason: string;
        lastKnownTxId: string;
    } | Partial<ProxyActionStatusResult>;
    variables: ProxyActionStatusVariables;
}): MockedResponse<ProxyActionStatusData>;
export declare function mockEnabledModuleCurrenciesResponse(currencies: Erc20[]): MockedResponse<EnabledModuleCurrenciesData>;
export declare function mockWhoCollectedPublicationResponse(args: {
    variables: WhoCollectedPublicationVariables;
    wallets: Wallet[];
}): MockedResponse<WhoCollectedPublicationData>;
export declare function mockMutualFollowersResponse(args: {
    variables: MutualFollowersProfilesVariables;
    profiles: Profile[];
}): MockedResponse<MutualFollowersProfilesData>;
export declare function mockGetPublicationsResponse({ variables, publications, info, }: {
    variables: GetPublicationsVariables;
    publications: Array<AnyPublication>;
    info?: PaginatedResultInfo;
}): MockedResponse<GetPublicationsData>;
export declare function mockFeedResponse(args: {
    variables: FeedVariables;
    items: FeedItem[];
}): MockedResponse<FeedData>;
export declare function mockExplorePublicationsResponse(args: {
    variables: ExplorePublicationsVariables;
    items: Array<Post | Comment | Mirror>;
}): MockedResponse<ExplorePublicationsData>;
export declare function mockGetPublicationRevenueResponse(args: {
    variables: GetPublicationRevenueVariables;
    revenue: PublicationRevenue | null;
}): MockedResponse<GetPublicationRevenueData>;
export declare function mockGetProfilePublicationRevenueResponse(args: {
    variables: GetProfilePublicationRevenueVariables;
    items: PublicationRevenue[];
}): MockedResponse<GetProfilePublicationRevenueData>;
export declare function mockProfilePublicationsForSaleResponse(args: {
    variables: ProfilePublicationsForSaleVariables;
    items: ContentPublication[];
}): MockedResponse<ProfilePublicationsForSaleData>;
export declare function mockWhoReactedPublicationResponse(args: {
    variables: WhoReactedPublicationVariables;
    items: Array<WhoReactedResult>;
}): MockedResponse<WhoReactedPublicationData>;
export declare function mockProfileFollowRevenueResponse({ variables, revenues, }: {
    variables: ProfileFollowRevenueVariables;
    revenues: ProfileFollowRevenue;
}): MockedResponse<ProfileFollowRevenueData>;
export declare function mockSearchProfilesResponse(args: {
    variables: SearchProfilesVariables;
    items: Profile[];
}): MockedResponse<SearchProfilesData>;
export declare function mockExploreProfilesResponse(args: {
    variables: ExploreProfilesVariables;
    items: Array<Profile>;
}): MockedResponse<ExploreProfilesData>;
export declare function mockSearchPublicationsResponse(args: {
    variables: SearchPublicationsVariables;
    items: Array<ContentPublication>;
}): MockedResponse<SearchPublicationsData>;
export declare function mockGetPublicationResponse({ variables, publication, }: {
    variables: GetPublicationVariables;
    publication: AnyPublication | null;
}): MockedResponse<GetPublicationData>;
export declare function mockEnabledModulesResponse({ data, }?: {
    data?: EnabledModules;
}): MockedResponse<EnabledModulesData>;
export declare function mockGetProfileBookmarksResponse({ variables, publications, }: {
    variables: GetProfileBookmarksVariables;
    publications: ContentPublication[];
}): MockedResponse<GetProfileBookmarksData>;
