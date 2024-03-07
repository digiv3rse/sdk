import * as Types from "../../../graphql/types.generated.js";
import { PostFragment, QuoteFragment, PaginatedResultInfoFragment, MirrorFragment, CommentFragment, Eip712TypedDataDomainFragment, Eip712TypedDataFieldFragment, RelaySuccessFragment, DiGiProfileManagerRelayErrorFragment, CreateMomokaPublicationResultFragment } from "../../../graphql/fragments.generated.js";
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type TagResultFragment = {
    tag: string;
    total: number;
};
export type PublicationValidateMetadataResultFragment = {
    valid: boolean;
    reason: string | null;
};
export type PublicationQueryVariables = Types.Exact<{
    request: Types.PublicationRequest;
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
export type PublicationQuery = {
    result: CommentFragment | MirrorFragment | PostFragment | QuoteFragment | null;
};
export type PublicationsQueryVariables = Types.Exact<{
    request: Types.PublicationsRequest;
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
export type PublicationsQuery = {
    result: {
        items: Array<CommentFragment | MirrorFragment | PostFragment | QuoteFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type PublicationsTagsQueryVariables = Types.Exact<{
    request: Types.PublicationsTagsRequest;
}>;
export type PublicationsTagsQuery = {
    result: {
        items: Array<TagResultFragment>;
        pageInfo: PaginatedResultInfoFragment;
    };
};
export type ValidatePublicationMetadataQueryVariables = Types.Exact<{
    request: Types.ValidatePublicationMetadataRequest;
}>;
export type ValidatePublicationMetadataQuery = {
    result: PublicationValidateMetadataResultFragment;
};
export type CreateOnchainPostBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Post: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            contentURI: string;
            actionModules: Array<string>;
            actionModulesInitDatas: Array<string>;
            referenceModule: string;
            referenceModuleInitData: string;
        };
    };
};
export type CreateOnchainCommentBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Comment: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            contentURI: string;
            pointedProfileId: string;
            pointedPubId: string;
            referrerProfileIds: Array<string>;
            referrerPubIds: Array<string>;
            referenceModuleData: string;
            actionModules: Array<string>;
            actionModulesInitDatas: Array<string>;
            referenceModule: string;
            referenceModuleInitData: string;
        };
    };
};
export type CreateOnchainMirrorBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Mirror: Array<{
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
            pointedProfileId: string;
            pointedPubId: string;
            referrerProfileIds: Array<string>;
            referrerPubIds: Array<string>;
            referenceModuleData: string;
        };
    };
};
export type CreateOnchainQuoteBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Quote: Array<Eip712TypedDataFieldFragment>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            contentURI: string;
            pointedProfileId: string;
            pointedPubId: string;
            referrerProfileIds: Array<string>;
            referrerPubIds: Array<string>;
            referenceModuleData: string;
            actionModules: Array<string>;
            actionModulesInitDatas: Array<string>;
            referenceModule: string;
            referenceModuleInitData: string;
        };
    };
};
export type CreateMomokaPostBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Post: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            contentURI: string;
            actionModules: Array<string>;
            actionModulesInitDatas: Array<string>;
            referenceModule: string;
            referenceModuleInitData: string;
        };
    };
};
export type CreateMomokaCommentBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Comment: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            contentURI: string;
            pointedProfileId: string;
            pointedPubId: string;
            referrerProfileIds: Array<string>;
            referrerPubIds: Array<string>;
            referenceModuleData: string;
            actionModules: Array<string>;
            actionModulesInitDatas: Array<string>;
            referenceModule: string;
            referenceModuleInitData: string;
        };
    };
};
export type CreateMomokaMirrorBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Mirror: Array<{
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
            pointedProfileId: string;
            pointedPubId: string;
            referrerProfileIds: Array<string>;
            referrerPubIds: Array<string>;
            referenceModuleData: string;
        };
    };
};
export type CreateMomokaQuoteBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: {
        types: {
            Quote: Array<{
                name: string;
                type: string;
            }>;
        };
        domain: Eip712TypedDataDomainFragment;
        value: {
            nonce: number;
            deadline: number;
            profileId: string;
            contentURI: string;
            pointedProfileId: string;
            pointedPubId: string;
            referrerProfileIds: Array<string>;
            referrerPubIds: Array<string>;
            referenceModuleData: string;
            actionModules: Array<string>;
            actionModulesInitDatas: Array<string>;
            referenceModule: string;
            referenceModuleInitData: string;
        };
    };
};
export type CreateLegacyCollectEip712TypedDataFragment = {
    types: {
        CollectLegacy: Array<Eip712TypedDataFieldFragment>;
    };
    domain: Eip712TypedDataDomainFragment;
    value: {
        nonce: number;
        deadline: number;
        publicationCollectedProfileId: string;
        publicationCollectedId: string;
        collectorProfileId: string;
        referrerProfileId: string;
        referrerPubId: string;
        collectModuleData: string;
    };
};
export type CreateLegacyCollectBroadcastItemResultFragment = {
    id: string;
    expiresAt: string;
    typedData: CreateLegacyCollectEip712TypedDataFragment;
};
export type CreateOnchainPostTypedDataMutationVariables = Types.Exact<{
    request: Types.OnchainPostRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateOnchainPostTypedDataMutation = {
    result: CreateOnchainPostBroadcastItemResultFragment;
};
export type CreateOnchainCommentTypedDataMutationVariables = Types.Exact<{
    request: Types.OnchainCommentRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateOnchainCommentTypedDataMutation = {
    result: CreateOnchainCommentBroadcastItemResultFragment;
};
export type CreateOnchainMirrorTypedDataMutationVariables = Types.Exact<{
    request: Types.OnchainMirrorRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateOnchainMirrorTypedDataMutation = {
    result: CreateOnchainMirrorBroadcastItemResultFragment;
};
export type CreateOnchainQuoteTypedDataMutationVariables = Types.Exact<{
    request: Types.OnchainQuoteRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateOnchainQuoteTypedDataMutation = {
    result: CreateOnchainQuoteBroadcastItemResultFragment;
};
export type CreateMomokaPostTypedDataMutationVariables = Types.Exact<{
    request: Types.MomokaPostRequest;
}>;
export type CreateMomokaPostTypedDataMutation = {
    result: CreateMomokaPostBroadcastItemResultFragment;
};
export type CreateMomokaCommentTypedDataMutationVariables = Types.Exact<{
    request: Types.MomokaCommentRequest;
}>;
export type CreateMomokaCommentTypedDataMutation = {
    result: CreateMomokaCommentBroadcastItemResultFragment;
};
export type CreateMomokaMirrorTypedDataMutationVariables = Types.Exact<{
    request: Types.MomokaMirrorRequest;
}>;
export type CreateMomokaMirrorTypedDataMutation = {
    result: CreateMomokaMirrorBroadcastItemResultFragment;
};
export type CreateMomokaQuoteTypedDataMutationVariables = Types.Exact<{
    request: Types.MomokaQuoteRequest;
}>;
export type CreateMomokaQuoteTypedDataMutation = {
    result: CreateMomokaQuoteBroadcastItemResultFragment;
};
export type PostOnchainMutationVariables = Types.Exact<{
    request: Types.OnchainPostRequest;
}>;
export type PostOnchainMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type CommentOnchainMutationVariables = Types.Exact<{
    request: Types.OnchainCommentRequest;
}>;
export type CommentOnchainMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type MirrorOnchainMutationVariables = Types.Exact<{
    request: Types.OnchainMirrorRequest;
}>;
export type MirrorOnchainMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type QuoteOnchainMutationVariables = Types.Exact<{
    request: Types.OnchainQuoteRequest;
}>;
export type QuoteOnchainMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type PostOnMomokaMutationVariables = Types.Exact<{
    request: Types.MomokaPostRequest;
}>;
export type PostOnMomokaMutation = {
    result: CreateMomokaPublicationResultFragment | DiGiProfileManagerRelayErrorFragment;
};
export type CommentOnMomokaMutationVariables = Types.Exact<{
    request: Types.MomokaCommentRequest;
}>;
export type CommentOnMomokaMutation = {
    result: CreateMomokaPublicationResultFragment | DiGiProfileManagerRelayErrorFragment;
};
export type MirrorOnMomokaMutationVariables = Types.Exact<{
    request: Types.MomokaMirrorRequest;
}>;
export type MirrorOnMomokaMutation = {
    result: CreateMomokaPublicationResultFragment | DiGiProfileManagerRelayErrorFragment;
};
export type QuoteOnMomokaMutationVariables = Types.Exact<{
    request: Types.MomokaQuoteRequest;
}>;
export type QuoteOnMomokaMutation = {
    result: CreateMomokaPublicationResultFragment | DiGiProfileManagerRelayErrorFragment;
};
export type HidePublicationMutationVariables = Types.Exact<{
    request: Types.HidePublicationRequest;
}>;
export type HidePublicationMutation = {
    hidePublication: string | null;
};
export type HideCommentMutationVariables = Types.Exact<{
    request: Types.HideCommentRequest;
}>;
export type HideCommentMutation = {
    hideComment: string | null;
};
export type UnhideCommentMutationVariables = Types.Exact<{
    request: Types.UnhideCommentRequest;
}>;
export type UnhideCommentMutation = {
    unhideComment: string | null;
};
export type ReportPublicationMutationVariables = Types.Exact<{
    request: Types.ReportPublicationRequest;
}>;
export type ReportPublicationMutation = {
    reportPublication: string | null;
};
export type LegacyCollectMutationVariables = Types.Exact<{
    request: Types.LegacyCollectRequest;
}>;
export type LegacyCollectMutation = {
    result: DiGiProfileManagerRelayErrorFragment | RelaySuccessFragment;
};
export type CreateLegacyCollectTypedDataMutationVariables = Types.Exact<{
    request: Types.LegacyCollectRequest;
    options?: Types.InputMaybe<Types.TypedDataOptions>;
}>;
export type CreateLegacyCollectTypedDataMutation = {
    result: CreateLegacyCollectBroadcastItemResultFragment;
};
export type RefreshPublicationMetadataMutationVariables = Types.Exact<{
    request: Types.RefreshPublicationMetadataRequest;
}>;
export type RefreshPublicationMetadataMutation = {
    result: {
        result: Types.RefreshPublicationMetadataResultType;
    };
};
export declare const TagResultFragmentDoc: DocumentNode;
export declare const PublicationValidateMetadataResultFragmentDoc: DocumentNode;
export declare const CreateOnchainPostBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateOnchainCommentBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateOnchainMirrorBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateOnchainQuoteBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateMomokaPostBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateMomokaCommentBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateMomokaMirrorBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateMomokaQuoteBroadcastItemResultFragmentDoc: DocumentNode;
export declare const CreateLegacyCollectEip712TypedDataFragmentDoc: DocumentNode;
export declare const CreateLegacyCollectBroadcastItemResultFragmentDoc: DocumentNode;
export declare const PublicationDocument: DocumentNode;
export declare const PublicationsDocument: DocumentNode;
export declare const PublicationsTagsDocument: DocumentNode;
export declare const ValidatePublicationMetadataDocument: DocumentNode;
export declare const CreateOnchainPostTypedDataDocument: DocumentNode;
export declare const CreateOnchainCommentTypedDataDocument: DocumentNode;
export declare const CreateOnchainMirrorTypedDataDocument: DocumentNode;
export declare const CreateOnchainQuoteTypedDataDocument: DocumentNode;
export declare const CreateMomokaPostTypedDataDocument: DocumentNode;
export declare const CreateMomokaCommentTypedDataDocument: DocumentNode;
export declare const CreateMomokaMirrorTypedDataDocument: DocumentNode;
export declare const CreateMomokaQuoteTypedDataDocument: DocumentNode;
export declare const PostOnchainDocument: DocumentNode;
export declare const CommentOnchainDocument: DocumentNode;
export declare const MirrorOnchainDocument: DocumentNode;
export declare const QuoteOnchainDocument: DocumentNode;
export declare const PostOnMomokaDocument: DocumentNode;
export declare const CommentOnMomokaDocument: DocumentNode;
export declare const MirrorOnMomokaDocument: DocumentNode;
export declare const QuoteOnMomokaDocument: DocumentNode;
export declare const HidePublicationDocument: DocumentNode;
export declare const HideCommentDocument: DocumentNode;
export declare const UnhideCommentDocument: DocumentNode;
export declare const ReportPublicationDocument: DocumentNode;
export declare const LegacyCollectDocument: DocumentNode;
export declare const CreateLegacyCollectTypedDataDocument: DocumentNode;
export declare const RefreshPublicationMetadataDocument: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Publication(variables: PublicationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PublicationQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    Publications(variables: PublicationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PublicationsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    PublicationsTags(variables: PublicationsTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PublicationsTagsQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ValidatePublicationMetadata(variables: ValidatePublicationMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ValidatePublicationMetadataQuery;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateOnchainPostTypedData(variables: CreateOnchainPostTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateOnchainPostTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateOnchainCommentTypedData(variables: CreateOnchainCommentTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateOnchainCommentTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateOnchainMirrorTypedData(variables: CreateOnchainMirrorTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateOnchainMirrorTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateOnchainQuoteTypedData(variables: CreateOnchainQuoteTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateOnchainQuoteTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateMomokaPostTypedData(variables: CreateMomokaPostTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateMomokaPostTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateMomokaCommentTypedData(variables: CreateMomokaCommentTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateMomokaCommentTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateMomokaMirrorTypedData(variables: CreateMomokaMirrorTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateMomokaMirrorTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateMomokaQuoteTypedData(variables: CreateMomokaQuoteTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateMomokaQuoteTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    PostOnchain(variables: PostOnchainMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PostOnchainMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CommentOnchain(variables: CommentOnchainMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CommentOnchainMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    MirrorOnchain(variables: MirrorOnchainMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MirrorOnchainMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    QuoteOnchain(variables: QuoteOnchainMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: QuoteOnchainMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    PostOnMomoka(variables: PostOnMomokaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: PostOnMomokaMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CommentOnMomoka(variables: CommentOnMomokaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CommentOnMomokaMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    MirrorOnMomoka(variables: MirrorOnMomokaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: MirrorOnMomokaMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    QuoteOnMomoka(variables: QuoteOnMomokaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: QuoteOnMomokaMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    HidePublication(variables: HidePublicationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: HidePublicationMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    HideComment(variables: HideCommentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: HideCommentMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    UnhideComment(variables: UnhideCommentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: UnhideCommentMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    ReportPublication(variables: ReportPublicationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: ReportPublicationMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    LegacyCollect(variables: LegacyCollectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: LegacyCollectMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    CreateLegacyCollectTypedData(variables: CreateLegacyCollectTypedDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: CreateLegacyCollectTypedDataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
    RefreshPublicationMetadata(variables: RefreshPublicationMetadataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{
        data: RefreshPublicationMetadataMutation;
        extensions?: any;
        headers: Dom.Headers;
        status: number;
    }>;
};
export type Sdk = ReturnType<typeof getSdk>;
