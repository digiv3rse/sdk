import * as Types from "../../../graphql/types.generated.js";
import { Eip712TypedDataDomainFragment, Eip712TypedDataFieldFragment, ProfileFragment, PaginatedResultInfoFragment, OptimisticStatusResultFragment, RelaySuccessFragment, DiGiProfileManagerRelayErrorFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type ProfileManagerFragment = {
    address: string;
    isDiGiManager: boolean;
};
export type CreateOnchainSetProfileMetadataBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            SetProfileMetadataURI: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            metadataURI: string;
        };
    };
};
export type CreateChangeProfileManagersBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            ChangeDelegatedExecutorsConfig: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            delegatorProfileId: string;
            delegatedExecutors: Array<string>;
            approvals: Array<boolean>;
            configNumber: number;
            switchToGivenConfig: boolean;
        };
    };
};
export type CreateBlockProfilesBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            SetBlockStatus: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            byProfileId: string;
            idsOfProfilesToSetBlockStatus: Array<string>;
            blockStatus: Array<boolean>;
        };
    };
};
export type CreateUnblockProfilesBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            SetBlockStatus: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            byProfileId: string;
            idsOfProfilesToSetBlockStatus: Array<string>;
            blockStatus: Array<boolean>;
        };
    };
};
export type CreateFollowBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Follow: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            followerProfileId: string;
            idsOfProfilesToFollow: Array<string>;
            followTokenIds: Array<string>;
            datas: Array<string>;
        };
    };
};
export type CreateUnfollowBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Unfollow: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            unfollowerProfileId: string;
            idsOfProfilesToUnfollow: Array<string>;
        };
    };
};
export type CreateSetFollowModuleBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            SetFollowModule: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            followModule: string;
            followModuleInitData: string;
        };
    };
};
export type CreateLinkHandleToProfileBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Link: Array<Eip712TypedDataFieldFragment>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            handleId: string;
        };
    };
};
export type CreateUnlinkHandleFromProfileBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Unlink: Array<Eip712TypedDataFieldFragment>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            handleId: string;
        };
    };
};
export type ProfileQueryVariables = Types.Exact<{
    request: Types.ProfileRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type ProfileQuery = {
    result: ProfileFragment | null;
};
export type DefaultProfileQueryVariables = Types.Exact<{
    request: Types.DefaultProfileRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type DefaultProfileQuery = {
    result: ProfileFragment | null;
};
export type ProfilesQueryVariables = Types.Exact<{
    request: Types.ProfilesRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type ProfilesQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type ProfileManagersQueryVariables = Types.Exact<{
    request: Types.ProfileManagersRequest;
}>;
export type ProfileManagersQuery = {
    result: {
        items: Array<ProfileManagerFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type ProfileRecommendationsQueryVariables = Types.Exact<{
    request: Types.ProfileRecommendationsRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type ProfileRecommendationsQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type FollowingQueryVariables = Types.Exact<{
    request: Types.FollowingRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type FollowingQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type FollowersQueryVariables = Types.Exact<{
    request: Types.FollowersRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type FollowersQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type MutualFollowersQueryVariables = Types.Exact<{
    request: Types.MutualFollowersRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type MutualFollowersQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type FollowStatusBulkResultFragment = {
    follower: string;
    profileId: string;
    status: OptimisticStatusResultFragment;
};
export type FollowStatusBulkQueryVariables = Types.Exact<{
    request: Types.FollowStatusBulkRequest;
}>;
export type FollowStatusBulkQuery = {
    result: Array<FollowStatusBulkResultFragment>;
};
export type WhoActedOnPublicationQueryVariables = Types.Exact<{
    request: Types.WhoActedOnPublicationRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type WhoActedOnPublicationQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type ProfileActionHistoryFragment = {
    id: number;
    actionType: Types.ProfileActionHistoryType;
    who: string;
    txHash: string | null;
    actionedOn: string;
};
export type ProfileActionHistoryQueryVariables = Types.Exact<{
    request: Types.ProfileActionHistoryRequest;
}>;
export type ProfileActionHistoryQuery = {
    result: {
        items: Array<ProfileActionHistoryFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type WhoHaveBlockedQueryVariables = Types.Exact<{
    request: Types.WhoHaveBlockedRequest;
    profileCoverTransform: Types.ImageTransform;
    profilePictureTransform: Types.ImageTransform;
    profileStatsArg?: Types.InputMaybe<Types.ProfileStatsArg>;
    profileStatsCountOpenActionArgs?: Types.InputMaybe<Types.ProfileStatsCountOpenActionArgs>;
    profileMetadataSource?: Types.InputMaybe<Types.Scalars['AppId']['input']>;
    rateRequest: Types.RateRequest;
}>;
export type WhoHaveBlockedQuery = {
    result: {
        items: Array<ProfileFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type AddProfileInterestsMutationVariables = Types.Exact<{
    request: Types.ProfileInterestsRequest;
}>;
export type AddProfileInterestsMutation = {
    result: string | null;
};
export type RemoveProfileInterestsMutationVariables = Types.Exact<{
    request: Types.ProfileInterestsRequest;
}>;
export type RemoveProfileInterestsMutation = {
    result: string | null;
};
export type SetProfileMetadataMutationVariables = Types.Exact<{
    request: Types.OnchainSetProfileMetadataRequest;
}>;
export type SetProfileMetadataMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type BlockMutationVariables = Types.Exact<{
    request: Types.BlockRequest;
}>;
export type BlockMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type UnblockMutationVariables = Types.Exact<{
    request: Types.UnblockRequest;
}>;
export type UnblockMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type FollowMutationVariables = Types.Exact<{
    request: Types.FollowDiGiManagerRequest;
}>;
export type FollowMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type UnfollowMutationVariables = Types.Exact<{
    request: Types.UnfollowRequest;
}>;
export type UnfollowMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type DismissRecommendedProfilesMutationVariables = Types.Exact<{
    request: Types.DismissRecommendedProfilesRequest;
}>;
export type DismissRecommendedProfilesMutation = {
    result: string | null;
};
export type SetDefaultProfileMutationVariables = Types.Exact<{
    request: Types.SetDefaultProfileRequest;
}>;
export type SetDefaultProfileMutation = {
    result: string | null;
};
export type CreateOnchainSetProfileMetadataTypedDataMutationVariables = Types.Exact<{
    request: Types.OnchainSetProfileMetadataRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateOnchainSetProfileMetadataTypedDataMutation = {
    result: CreateOnchainSetProfileMetadataBroadcastItemResultFragment;
};
export type CreateChangeProfileManagersTypedDataMutationVariables = Types.Exact<{
    request: Types.ChangeProfileManagersRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateChangeProfileManagersTypedDataMutation = {
    result: CreateChangeProfileManagersBroadcastItemResultFragment;
};
export type CreateBlockProfilesTypedDataMutationVariables = Types.Exact<{
    request: Types.BlockRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateBlockProfilesTypedDataMutation = {
    result: CreateBlockProfilesBroadcastItemResultFragment;
};
export type CreateUnblockProfilesTypedDataMutationVariables = Types.Exact<{
    request: Types.UnblockRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateUnblockProfilesTypedDataMutation = {
    result: CreateUnblockProfilesBroadcastItemResultFragment;
};
export type CreateFollowTypedDataMutationVariables = Types.Exact<{
    request: Types.FollowRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateFollowTypedDataMutation = {
    result: CreateFollowBroadcastItemResultFragment;
};
export type CreateUnfollowTypedDataMutationVariables = Types.Exact<{
    request: Types.UnfollowRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateUnfollowTypedDataMutation = {
    result: CreateUnfollowBroadcastItemResultFragment;
};
export type SetFollowModuleMutationVariables = Types.Exact<{
    request: Types.SetFollowModuleRequest;
}>;
export type SetFollowModuleMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type CreateSetFollowModuleTypedDataMutationVariables = Types.Exact<{
    request: Types.SetFollowModuleRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateSetFollowModuleTypedDataMutation = {
    result: CreateSetFollowModuleBroadcastItemResultFragment;
};
export type LinkHandleToProfileMutationVariables = Types.Exact<{
    request: Types.LinkHandleToProfileRequest;
}>;
export type LinkHandleToProfileMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type UnlinkHandleFromProfileMutationVariables = Types.Exact<{
    request: Types.UnlinkHandleFromProfileRequest;
}>;
export type UnlinkHandleFromProfileMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type CreateLinkHandleToProfileTypedDataMutationVariables = Types.Exact<{
    request: Types.LinkHandleToProfileRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateLinkHandleToProfileTypedDataMutation = {
    result: CreateLinkHandleToProfileBroadcastItemResultFragment;
};
export type CreateUnlinkHandleFromProfileTypedDataMutationVariables = Types.Exact<{
    request: Types.UnlinkHandleFromProfileRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateUnlinkHandleFromProfileTypedDataMutation = {
    result: CreateUnlinkHandleFromProfileBroadcastItemResultFragment;
};
export type ReportProfileMutationVariables = Types.Exact<{
    request: Types.ReportProfileRequest;
}>;
export type ReportProfileMutation = {
    reportProfile: string | null;
};
export type PeerToPeerRecommendMutationVariables = Types.Exact<{
    request: Types.PeerToPeerRecommendRequest;
}>;
export type PeerToPeerRecommendMutation = {
    peerToPeerRecommend: string | null;
};
export type PeerToPeerUnrecommendMutationVariables = Types.Exact<{
    request: Types.PeerToPeerRecommendRequest;
}>;
export type PeerToPeerUnrecommendMutation = {
    peerToPeerUnrecommend: string | null;
};
export declare const ProfileManagerFragmentDoc: DocumentNode;
export declare const CreateOnchainSetProfileMetadataBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateChangeProfileManagersBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateBlockProfilesBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateUnblockProfilesBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateFollowBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateUnfollowBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateSetFollowModuleBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateLinkHandleToProfileBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateUnlinkHandleFromProfileBroadcastItemResultFragmentDoc: DocumentNode;
export declare const FollowStatusBulkResultFragmentDoc: DocumentNode;
export declare const ProfileActionHistoryFragmentDoc: DocumentNode;
export declare const ProfileDocument: DocumentNode;
export declare const DefaultProfileDocument: DocumentNode;
export declare const ProfilesDocument: DocumentNode;
export declare const ProfileManagersDocument: DocumentNode;
export declare const ProfileRecommendationsDocument: DocumentNode;
export declare const FollowingDocument: DocumentNode;
export declare const FollowersDocument: DocumentNode;
export declare const MutualFollowersDocument: DocumentNode;
export declare const FollowStatusBulkDocument: DocumentNode;
export declare const WhoActedOnPublicationDocument: DocumentNode;
export declare const ProfileActionHistoryDocument: DocumentNode;
export declare const WhoHaveBlockedDocument: DocumentNode;
export declare const AddProfileInterestsDocument: DocumentNode;
export declare const RemoveProfileInterestsDocument: DocumentNode;
export declare const SetProfileMetadataDocument: DocumentNode;
export declare const BlockDocument: DocumentNode;
export declare const UnblockDocument: DocumentNode;
export declare const FollowDocument: DocumentNode;
export declare const UnfollowDocument: DocumentNode;
export declare const DismissRecommendedProfilesDocument: DocumentNode;
export declare const SetDefaultProfileDocument: DocumentNode;
export declare const CreateOnchainSetProfileMetadataTypedDataDocument: DocumentNode;
export declare const CreateChangeProfileManagersTypedDataDocument: DocumentNode;
export declare const CreateBlockProfilesTypedDataDocument: DocumentNode;
export declare const CreateUnblockProfilesTypedDataDocument: DocumentNode;
export declare const CreateFollowTypedDataDocument: DocumentNode;
export declare const CreateUnfollowTypedDataDocument: DocumentNode;
export declare const SetFollowModuleDocument: DocumentNode;
export declare const CreateSetFollowModuleTypedDataDocument: DocumentNode;
export declare const LinkHandleToProfileDocument: DocumentNode;
export declare const UnlinkHandleFromProfileDocument: DocumentNode;
export declare const CreateLinkHandleToProfileTypedDataDocument: DocumentNode;
export declare const CreateUnlinkHandleFromProfileTypedDataDocument: DocumentNode;
export declare const ReportProfileDocument: DocumentNode;
export declare const PeerToPeerRecommendDocument: DocumentNode;
export declare const PeerToPeerUnrecommendDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Profile(variables: ProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ProfileQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    DefaultProfile(variables: DefaultProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: DefaultProfileQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Profiles(variables: ProfilesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ProfilesQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ProfileManagers(variables: ProfileManagersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ProfileManagersQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ProfileRecommendations(variables: ProfileRecommendationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ProfileRecommendationsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Following(variables: FollowingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: FollowingQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Followers(variables: FollowersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: FollowersQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    MutualFollowers(variables: MutualFollowersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MutualFollowersQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    FollowStatusBulk(variables: FollowStatusBulkQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: FollowStatusBulkQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    WhoActedOnPublication(variables: WhoActedOnPublicationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: WhoActedOnPublicationQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ProfileActionHistory(variables: ProfileActionHistoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ProfileActionHistoryQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    WhoHaveBlocked(variables: WhoHaveBlockedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: WhoHaveBlockedQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    AddProfileInterests(variables: AddProfileInterestsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: AddProfileInterestsMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    RemoveProfileInterests(variables: RemoveProfileInterestsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: RemoveProfileInterestsMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    SetProfileMetadata(variables: SetProfileMetadataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: SetProfileMetadataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Block(variables: BlockMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: BlockMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Unblock(variables: UnblockMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UnblockMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Follow(variables: FollowMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: FollowMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Unfollow(variables: UnfollowMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UnfollowMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    DismissRecommendedProfiles(variables: DismissRecommendedProfilesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: DismissRecommendedProfilesMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    SetDefaultProfile(variables: SetDefaultProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: SetDefaultProfileMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateOnchainSetProfileMetadataTypedData(variables: CreateOnchainSetProfileMetadataTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateOnchainSetProfileMetadataTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateChangeProfileManagersTypedData(variables: CreateChangeProfileManagersTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateChangeProfileManagersTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateBlockProfilesTypedData(variables: CreateBlockProfilesTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateBlockProfilesTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateUnblockProfilesTypedData(variables: CreateUnblockProfilesTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateUnblockProfilesTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateFollowTypedData(variables: CreateFollowTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateFollowTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateUnfollowTypedData(variables: CreateUnfollowTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateUnfollowTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    SetFollowModule(variables: SetFollowModuleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: SetFollowModuleMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateSetFollowModuleTypedData(variables: CreateSetFollowModuleTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateSetFollowModuleTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    LinkHandleToProfile(variables: LinkHandleToProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: LinkHandleToProfileMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    UnlinkHandleFromProfile(variables: UnlinkHandleFromProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UnlinkHandleFromProfileMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateLinkHandleToProfileTypedData(variables: CreateLinkHandleToProfileTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateLinkHandleToProfileTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateUnlinkHandleFromProfileTypedData(variables: CreateUnlinkHandleFromProfileTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateUnlinkHandleFromProfileTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ReportProfile(variables: ReportProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ReportProfileMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    PeerToPeerRecommend(variables: PeerToPeerRecommendMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PeerToPeerRecommendMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    PeerToPeerUnrecommend(variables: PeerToPeerUnrecommendMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PeerToPeerUnrecommendMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
