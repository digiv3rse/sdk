import { MockedResponse } from '@apollo/client/testing';
import { Nonce } from '@digiv3rse/domain/entities';
import { AddNotInterestedData, AddNotInterestedVariables, AddReactionData, AddReactionVariables, AddToMyBookmarksVariables, BroadcastOffChainData, BroadcastOffChainResult, BroadcastOffChainVariables, BroadcastOnChainData, BroadcastOnChainResult, BroadcastOnChainVariables, CreateCollectTypedDataData, CreateCommentTypedDataData, CreateCommentTypedDataVariables, CreateCommentViaDispatcherData, CreateCommentViaDispatcherVariables, CreateDataAvailabilityCommentTypedDataData, CreateDataAvailabilityCommentTypedDataVariables, CreateDataAvailabilityCommentViaDispatcherData, CreateDataAvailabilityCommentViaDispatcherVariables, CreateDataAvailabilityMirrorTypedDataData, CreateDataAvailabilityMirrorTypedDataVariables, CreateDataAvailabilityMirrorViaDispatcherData, CreateDataAvailabilityMirrorViaDispatcherVariables, CreateDataAvailabilityPostTypedDataData, CreateDataAvailabilityPostTypedDataVariables, CreateDataAvailabilityPostViaDispatcherData, CreateDataAvailabilityPostViaDispatcherVariables, CreateFollowTypedDataData, CreateMirrorTypedDataData, CreateMirrorTypedDataVariables, CreateMirrorViaDispatcherData, CreateMirrorViaDispatcherVariables, CreatePostTypedDataData, CreatePostTypedDataVariables, CreatePostViaDispatcherData, CreatePostViaDispatcherVariables, CreateProfileData, CreateProfileVariables, CreatePublicSetProfileMetadataUriRequest, CreateSetDispatcherTypedDataData, CreateSetFollowModuleTypedDataData, CreateSetProfileImageUriTypedDataData, CreateSetProfileImageUriTypedDataVariables, CreateSetProfileImageUriViaDispatcherData, CreateSetProfileImageUriViaDispatcherVariables, CreateSetProfileMetadataTypedDataData, CreateSetProfileMetadataViaDispatcherData, CreateSetProfileMetadataViaDispatcherVariables, CreateUnfollowTypedDataData, HidePublicationData, HidePublicationVariables, ProxyActionData, ProxyActionVariables, RemoveFromMyBookmarksVariables, RemoveNotInterestedData, RemoveNotInterestedVariables, RemoveReactionData, RemoveReactionVariables, ReportPublicationData, ReportPublicationVariables } from '../generated';
export declare function mockCreateProfileResponse({ request, result, }: {
    request: CreateProfileVariables['request'];
    result: Required<BroadcastOnChainResult>;
}): MockedResponse<CreateProfileData>;
export declare function mockBroadcastOnChainResponse({ result, variables, }: {
    result: Required<BroadcastOnChainResult>;
    variables: BroadcastOnChainVariables;
}): MockedResponse<BroadcastOnChainData>;
export declare function mockBroadcastOffChainResponse({ result, variables, }: {
    result: Required<BroadcastOffChainResult>;
    variables: BroadcastOffChainVariables;
}): MockedResponse<BroadcastOffChainData>;
export declare function mockCreatePostTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreatePostTypedDataData;
export declare function mockCreateCommentTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateCommentTypedDataData;
export declare function mockCreateMirrorTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateMirrorTypedDataData;
export declare function mockHidePublicationResponse(args: {
    variables: HidePublicationVariables;
}): MockedResponse<HidePublicationData>;
export declare function mockAddReactionResponse(args: {
    variables: AddReactionVariables;
}): MockedResponse<AddReactionData>;
export declare function mockRemoveReactionResponse(args: {
    variables: RemoveReactionVariables;
}): MockedResponse<RemoveReactionData>;
export declare function mockRemoveReactionResponseWithGraphqlValidationError(args: {
    variables: RemoveReactionVariables;
}): MockedResponse<RemoveReactionData>;
export declare function mockCreateFollowTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateFollowTypedDataData;
export declare function mockCreateSetProfileMetadataTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateSetProfileMetadataTypedDataData;
export declare function mockCreateUnfollowTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateUnfollowTypedDataData;
export declare function mockBroadcastProxyActionCallResponse(instructions: {
    result: string;
    variables: ProxyActionVariables;
}): MockedResponse<ProxyActionData>;
export declare function createBroadcastProxyActionCallMockedError(instructions: {
    errorMessage: string;
    variables: ProxyActionVariables;
}): MockedResponse<ProxyActionData>;
export declare function mockCreateSetFollowModuleTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateSetFollowModuleTypedDataData;
export declare function mockCreateSetProfileImageUriTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateSetProfileImageUriTypedDataData;
export declare function mockCreateSetProfileImageUriTypedDataResponse<T extends CreateSetProfileImageUriTypedDataData>({ variables, data, }: {
    variables: CreateSetProfileImageUriTypedDataVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateSetDispatcherTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateSetDispatcherTypedDataData;
export declare function mockCreateSetProfileMetadataTypedDataResponse({ request, overrideSigNonce, data, }: {
    request: CreatePublicSetProfileMetadataUriRequest;
    overrideSigNonce?: Nonce;
    data?: CreateSetProfileMetadataTypedDataData;
}): MockedResponse<CreateSetProfileMetadataTypedDataData>;
export declare function mockCreateSetProfileMetadataViaDispatcherResponse<T extends CreateSetProfileMetadataViaDispatcherData>({ variables, data, }: {
    variables: CreateSetProfileMetadataViaDispatcherVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateCommentTypedDataResponse<T extends CreateCommentTypedDataData>({ variables, data, }: {
    variables: CreateCommentTypedDataVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateDataAvailabilityCommentTypedDataResponse<T extends CreateDataAvailabilityCommentTypedDataData>({ variables, data, }: {
    variables: CreateDataAvailabilityCommentTypedDataVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateCommentViaDispatcherResponse<T extends CreateCommentViaDispatcherData>({ variables, data, }: {
    variables: CreateCommentViaDispatcherVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateDataAvailabilityCommentViaDispatcherDataResponse<T extends CreateDataAvailabilityCommentViaDispatcherData>({ variables, data, }: {
    variables: CreateDataAvailabilityCommentViaDispatcherVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateMirrorTypedDataResponse<T extends CreateMirrorTypedDataData>({ variables, data, }: {
    variables: CreateMirrorTypedDataVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateDataAvailabilityMirrorTypedDataResponse<T extends CreateDataAvailabilityMirrorTypedDataData>({ variables, data, }: {
    variables: CreateDataAvailabilityMirrorTypedDataVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateMirrorViaDispatcherResponse<T extends CreateMirrorViaDispatcherData>({ variables, data, }: {
    variables: CreateMirrorViaDispatcherVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateDataAvailabilityMirrorViaDispatcherDataResponse<T extends CreateDataAvailabilityMirrorViaDispatcherData>({ variables, data, }: {
    variables: CreateDataAvailabilityMirrorViaDispatcherVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreatePostTypedDataResponse<T extends CreatePostTypedDataData>({ variables, data, }: {
    variables: CreatePostTypedDataVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateDataAvailabilityPostTypedDataResponse<T extends CreateDataAvailabilityPostTypedDataData>({ variables, data, }: {
    variables: CreateDataAvailabilityPostTypedDataVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreatePostViaDispatcherResponse<T extends CreatePostViaDispatcherData>({ variables, data, }: {
    variables: CreatePostViaDispatcherVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateDataAvailabilityPostViaDispatcherDataResponse<T extends CreateDataAvailabilityPostViaDispatcherData>({ variables, data, }: {
    variables: CreateDataAvailabilityPostViaDispatcherVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockSetProfileImageURIViaDispatcherResponse<T extends CreateSetProfileImageUriViaDispatcherData>({ variables, data, }: {
    variables: CreateSetProfileImageUriViaDispatcherVariables;
    data: T;
}): MockedResponse<T>;
export declare function mockCreateCollectTypedDataData({ nonce, }?: {
    nonce?: Nonce;
}): CreateCollectTypedDataData;
export declare function mockReportPublicationResponse(args: {
    variables: ReportPublicationVariables;
}): MockedResponse<ReportPublicationData>;
export declare function mockAddNotInterestedResponse(variables: AddNotInterestedVariables): MockedResponse<AddNotInterestedData>;
export declare function mockRemoveNotInterestedResponse(variables: RemoveNotInterestedVariables): MockedResponse<RemoveNotInterestedData>;
export declare function mockAddToMyBookmarksResponse(variables: AddToMyBookmarksVariables): MockedResponse<AddNotInterestedData>;
export declare function mockRemoveFromMyBookmarksResponse(variables: RemoveFromMyBookmarksVariables): MockedResponse<RemoveNotInterestedData>;
