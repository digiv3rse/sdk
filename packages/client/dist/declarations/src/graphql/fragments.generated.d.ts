import * as Types from "./types.generated.js";
import { GraphQLClient } from 'graphql-request';
import { DocumentNode } from 'graphql';
export type OptimisticStatusResultFragment = {
    __typename: 'OptimisticStatusResult';
    value: boolean;
    isFinalisedOnchain: boolean;
};
export type Erc20Fragment = {
    __typename: 'Erc20';
    name: string;
    symbol: string;
    decimals: number;
    contract: NetworkAddressFragment;
};
export type FiatAmountFragment = {
    __typename: 'FiatAmount';
    value: string;
    asset: FiatFragment;
};
export type FiatFragment = {
    __typename: 'Fiat';
    name: string;
    symbol: string;
    decimals: number;
};
export type AmountFragment = {
    __typename: 'Amount';
    value: string;
    asset: Erc20Fragment;
    rate: FiatAmountFragment | null;
};
export type FeeFollowModuleSettingsFragment = {
    __typename: 'FeeFollowModuleSettings';
    recipient: string;
    amount: AmountFragment;
    contract: NetworkAddressFragment;
};
export type RevertFollowModuleSettingsFragment = {
    __typename: 'RevertFollowModuleSettings';
    contract: NetworkAddressFragment;
};
export type UnknownFollowModuleSettingsFragment = {
    __typename: 'UnknownFollowModuleSettings';
    initializeCalldata: string | null;
    initializeResultData: string | null;
    signlessApproved: boolean;
    sponsoredApproved: boolean;
    verified: boolean;
    contract: NetworkAddressFragment;
};
export type NetworkAddressFragment = {
    __typename: 'NetworkAddress';
    address: string;
    chainId: number;
};
export type ImageFragment = {
    __typename: 'Image';
    uri: string;
    mimeType: string | null;
    width: number | null;
    height: number | null;
};
export type ImageSetFragment = {
    __typename: 'ImageSet';
    raw: ImageFragment;
    optimized: ImageFragment | null;
    small: ImageFragment | null;
    medium: ImageFragment | null;
};
export type EncryptableImageFragment = {
    __typename: 'EncryptableImage';
    uri: string;
    mimeType: string | null;
    width: number | null;
    height: number | null;
};
export type EncryptableImageSetFragment = {
    __typename: 'EncryptableImageSet';
    raw: EncryptableImageFragment;
    optimized: ImageFragment | null;
};
export type VideoFragment = {
    __typename: 'Video';
    uri: string;
    mimeType: string | null;
};
export type EncryptableVideoFragment = {
    __typename: 'EncryptableVideo';
    mimeType: string | null;
    uri: string;
};
export type EncryptableVideoSetFragment = {
    __typename: 'EncryptableVideoSet';
    raw: EncryptableVideoFragment;
    optimized: VideoFragment | null;
};
export type AudioFragment = {
    __typename: 'Audio';
    uri: string;
    mimeType: string | null;
};
export type EncryptableAudioFragment = {
    __typename: 'EncryptableAudio';
    mimeType: string | null;
    uri: string;
};
export type EncryptableAudioSetFragment = {
    __typename: 'EncryptableAudioSet';
    raw: EncryptableAudioFragment;
    optimized: AudioFragment | null;
};
export type ProfileCoverSetFragment = {
    __typename: 'ImageSet';
    raw: ImageFragment;
    optimized: ImageFragment | null;
    transformed: ImageFragment | null;
};
export type ProfilePictureSetFragment = {
    __typename: 'ImageSet';
    raw: ImageFragment;
    optimized: ImageFragment | null;
    thumbnail: ImageFragment | null;
};
export type NftImageFragment = {
    __typename: 'NftImage';
    tokenId: string;
    verified: boolean;
    collection: NetworkAddressFragment;
    image: ProfilePictureSetFragment;
};
export type ProfileMetadataFragment = {
    __typename: 'ProfileMetadata';
    appId: string | null;
    displayName: string | null;
    bio: string | null;
    rawURI: string;
    picture: ProfilePictureSetFragment | NftImageFragment | null;
    coverPicture: ProfileCoverSetFragment | null;
    attributes: Array<{
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
};
export type ProfileStatsFragment = {
    id: string;
    followers: number;
    following: number;
    comments: number;
    posts: number;
    mirrors: number;
    quotes: number;
    publications: number;
    countOpenActions: number;
    digiClassifierScore: number | null;
    upvotes: number;
    downvotes: number;
    upvoted: number;
    downvoted: number;
    collects: number;
};
export type HandleInfoFragment = {
    __typename: 'HandleInfo';
    id: string;
    fullHandle: string;
    namespace: string;
    localName: string;
    ownedBy: string;
    suggestedFormatted: {
        full: string;
        localName: string;
    };
    linkedTo: {
        nftTokenId: string;
        contract: NetworkAddressFragment;
    } | null;
};
export type ProfileFragment = {
    __typename: 'Profile';
    id: string;
    txHash: string;
    createdAt: string;
    interests: Array<string>;
    invitesLeft: number;
    sponsor: boolean;
    signless: boolean;
    peerToPeerRecommendedByMe: boolean;
    ownedBy: NetworkAddressFragment;
    operations: {
        __typename: 'ProfileOperations';
        id: string;
        canBlock: boolean;
        canUnblock: boolean;
        canFollow: Types.TriStateValue;
        canUnfollow: boolean;
        isBlockedByMe: OptimisticStatusResultFragment;
        isFollowedByMe: OptimisticStatusResultFragment;
        isFollowingMe: OptimisticStatusResultFragment;
    };
    guardian: {
        protected: boolean;
        cooldownEndsOn: string | null;
    } | null;
    onchainIdentity: {
        proofOfHumanity: boolean;
        ens: {
            name: string | null;
        } | null;
        sybilDotOrg: {
            verified: boolean;
            source: {
                twitter: {
                    handle: string | null;
                };
            } | null;
        };
        worldcoin: {
            isHuman: boolean;
        };
    };
    followNftAddress: NetworkAddressFragment | null;
    followModule: FeeFollowModuleSettingsFragment | RevertFollowModuleSettingsFragment | UnknownFollowModuleSettingsFragment | null;
    metadata: ProfileMetadataFragment | null;
    handle: HandleInfoFragment | null;
    invitedBy: {
        id: string;
    } | null;
    stats: ProfileStatsFragment;
};
export type ProfileMentionedFragment = {
    stillOwnsHandle: boolean;
    profile: {
        id: string;
    };
    snapshotHandleMentioned: HandleInfoFragment;
};
export type PaginatedResultInfoFragment = {
    prev: string | null;
    next: string | null;
};
export type AppFragment = {
    __typename: 'App';
    id: string;
};
export type MomokaInfoFragment = {
    __typename: 'MomokaInfo';
    proof: string;
};
export type FollowOnlyReferenceModuleSettingsFragment = {
    __typename: 'FollowOnlyReferenceModuleSettings';
    contract: NetworkAddressFragment;
};
export type DegreesOfSeparationReferenceModuleSettingsFragment = {
    __typename: 'DegreesOfSeparationReferenceModuleSettings';
    commentsRestricted: boolean;
    mirrorsRestricted: boolean;
    degreesOfSeparation: number;
    contract: NetworkAddressFragment;
};
export type UnknownReferenceModuleSettingsFragment = {
    __typename: 'UnknownReferenceModuleSettings';
    initializeCalldata: string | null;
    initializeResultData: string | null;
    signlessApproved: boolean;
    sponsoredApproved: boolean;
    verified: boolean;
    contract: NetworkAddressFragment;
};
export type SimpleCollectOpenActionSettingsFragment = {
    __typename: 'SimpleCollectOpenActionSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
    collectLimit: string | null;
    endsAt: string | null;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
};
export type MultirecipientFeeCollectOpenActionSettingsFragment = {
    __typename: 'MultirecipientFeeCollectOpenActionSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    referralFee: number;
    followerOnly: boolean;
    collectLimit: string | null;
    endsAt: string | null;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
    recipients: Array<{
        __typename: 'RecipientDataOutput';
        recipient: string;
        split: number;
    }>;
};
export type UnknownOpenActionModuleSettingsFragment = {
    __typename: 'UnknownOpenActionModuleSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    initializeCalldata: string | null;
    initializeResultData: string | null;
    signlessApproved: boolean;
    sponsoredApproved: boolean;
    verified: boolean;
    contract: NetworkAddressFragment;
};
export type LegacyFreeCollectModuleSettingsFragment = {
    __typename: 'LegacyFreeCollectModuleSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    followerOnly: boolean;
    contract: NetworkAddressFragment;
};
export type LegacyFeeCollectModuleSettingsFragment = {
    __typename: 'LegacyFeeCollectModuleSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
};
export type LegacyLimitedFeeCollectModuleSettingsFragment = {
    __typename: 'LegacyLimitedFeeCollectModuleSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    collectLimit: string | null;
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
};
export type LegacyLimitedTimedFeeCollectModuleSettingsFragment = {
    __typename: 'LegacyLimitedTimedFeeCollectModuleSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    collectLimit: string | null;
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
    endTimestamp: string;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
};
export type LegacyRevertCollectModuleSettingsFragment = {
    __typename: 'LegacyRevertCollectModuleSettings';
    type: Types.OpenActionModuleType;
    contract: NetworkAddressFragment;
};
export type LegacyTimedFeeCollectModuleSettingsFragment = {
    __typename: 'LegacyTimedFeeCollectModuleSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
    endTimestamp: string;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
};
export type LegacyMultirecipientFeeCollectModuleSettingsFragment = {
    __typename: 'LegacyMultirecipientFeeCollectModuleSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    referralFee: number;
    followerOnly: boolean;
    collectLimit: string | null;
    endsAt: string | null;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
    recipients: Array<{
        recipient: string;
        split: number;
    }>;
};
export type LegacySimpleCollectModuleSettingsFragment = {
    __typename: 'LegacySimpleCollectModuleSettings';
    type: Types.OpenActionModuleType;
    collectNft: string | null;
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
    collectLimit: string | null;
    endsAt: string | null;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
};
export type LegacyErc4626FeeCollectModuleSettingsFragment = {
    __typename: 'LegacyERC4626FeeCollectModuleSettings';
    type: Types.OpenActionModuleType;
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
    collectLimit: string | null;
    endsAt: string | null;
    contract: NetworkAddressFragment;
    vault: NetworkAddressFragment;
    amount: AmountFragment;
};
export type LegacyAaveFeeCollectModuleSettingsFragment = {
    __typename: 'LegacyAaveFeeCollectModuleSettings';
    type: Types.OpenActionModuleType;
    recipient: string;
    referralFee: number;
    followerOnly: boolean;
    collectLimit: string | null;
    endsAt: string | null;
    contract: NetworkAddressFragment;
    amount: AmountFragment;
};
export type UnknownOpenActionResultFragment = {
    __typename: 'UnknownOpenActionResult';
    address: string;
    category: Types.OpenActionCategoryType | null;
    initReturnData: string | null;
};
export type KnownCollectOpenActionResultFragment = {
    __typename: 'KnownCollectOpenActionResult';
    type: Types.CollectOpenActionModuleType;
};
export type OpenActionResult_KnownCollectOpenActionResult_Fragment = KnownCollectOpenActionResultFragment;
export type OpenActionResult_UnknownOpenActionResult_Fragment = UnknownOpenActionResultFragment;
export type OpenActionResultFragment = OpenActionResult_KnownCollectOpenActionResult_Fragment | OpenActionResult_UnknownOpenActionResult_Fragment;
export type CanDecryptResponseFragment = {
    __typename: 'CanDecryptResponse';
    result: boolean;
    reasons: Array<Types.DecryptFailReasonType> | null;
    extraDetails: string | null;
};
export type PublicationOperationsFragment = {
    __typename: 'PublicationOperations';
    id: string;
    isNotInterested: boolean;
    hasBookmarked: boolean;
    hasReported: boolean;
    canAct: Types.TriStateValue;
    canComment: Types.TriStateValue;
    canMirror: Types.TriStateValue;
    canQuote: Types.TriStateValue;
    hasQuoted: boolean;
    hasMirrored: boolean;
    canCollect: Types.TriStateValue;
    hasUpvoted: boolean;
    hasDownvoted: boolean;
    hasActed: OptimisticStatusResultFragment;
    actedOn: Array<OpenActionResult_KnownCollectOpenActionResult_Fragment | OpenActionResult_UnknownOpenActionResult_Fragment>;
    hasCollected: OptimisticStatusResultFragment;
    canDecrypt: CanDecryptResponseFragment;
};
export type PublicationMetadataLitEncryptionFragment = {
    __typename: 'PublicationMetadataLitEncryption';
    encryptionKey: string;
    encryptedPaths: Array<string>;
    accessCondition: RootConditionFragment;
};
export type NftOwnershipConditionFragment = {
    __typename: 'NftOwnershipCondition';
    contractType: Types.NftContractType;
    tokenIds: Array<string> | null;
    contract: NetworkAddressFragment;
};
export type Erc20OwnershipConditionFragment = {
    __typename: 'Erc20OwnershipCondition';
    condition: Types.ComparisonOperatorConditionType;
    amount: AmountFragment;
};
export type EoaOwnershipConditionFragment = {
    __typename: 'EoaOwnershipCondition';
    address: string;
};
export type ProfileOwnershipConditionFragment = {
    __typename: 'ProfileOwnershipCondition';
    profileId: string;
};
export type FollowConditionFragment = {
    __typename: 'FollowCondition';
    follow: string;
};
export type CollectConditionFragment = {
    __typename: 'CollectCondition';
    publicationId: string;
    thisPublication: boolean;
};
export type AndConditionFragment = {
    __typename: 'AndCondition';
    criteria: Array<AdvancedContractConditionFragment | CollectConditionFragment | EoaOwnershipConditionFragment | Erc20OwnershipConditionFragment | FollowConditionFragment | NftOwnershipConditionFragment | ProfileOwnershipConditionFragment>;
};
export type OrConditionFragment = {
    __typename: 'OrCondition';
    criteria: Array<AdvancedContractConditionFragment | CollectConditionFragment | EoaOwnershipConditionFragment | Erc20OwnershipConditionFragment | FollowConditionFragment | NftOwnershipConditionFragment | ProfileOwnershipConditionFragment>;
};
export type AdvancedContractConditionFragment = {
    __typename: 'AdvancedContractCondition';
    functionName: string;
    abi: string;
    params: Array<string>;
    comparison: Types.ComparisonOperatorConditionType;
    value: string;
    contract: NetworkAddressFragment;
};
export type RootConditionFragment = {
    __typename: 'RootCondition';
    criteria: Array<AdvancedContractConditionFragment | AndConditionFragment | CollectConditionFragment | EoaOwnershipConditionFragment | Erc20OwnershipConditionFragment | FollowConditionFragment | NftOwnershipConditionFragment | OrConditionFragment | ProfileOwnershipConditionFragment>;
};
export type PublicationMarketplaceMetadataAttributeFragment = {
    __typename: 'PublicationMarketplaceMetadataAttribute';
    displayType: Types.MarketplaceMetadataAttributeDisplayType | null;
    traitType: string | null;
    value: string | null;
};
export type MarketplaceMetadataFragment = {
    __typename: 'MarketplaceMetadata';
    description: string | null;
    externalURL: string | null;
    name: string | null;
    animationUrl: string | null;
    attributes: Array<PublicationMarketplaceMetadataAttributeFragment> | null;
    image: ImageSetFragment | null;
};
export type PublicationMetadataMediaVideoFragment = {
    __typename: 'PublicationMetadataMediaVideo';
    duration: number | null;
    license: Types.PublicationMetadataLicenseType | null;
    altTag: string | null;
    video: EncryptableVideoSetFragment;
    cover: EncryptableImageSetFragment | null;
};
export type PublicationMetadataMediaImageFragment = {
    __typename: 'PublicationMetadataMediaImage';
    altTag: string | null;
    license: Types.PublicationMetadataLicenseType | null;
    image: EncryptableImageSetFragment;
};
export type PublicationMetadataMediaAudioFragment = {
    __typename: 'PublicationMetadataMediaAudio';
    duration: number | null;
    license: Types.PublicationMetadataLicenseType | null;
    credits: string | null;
    artist: string | null;
    genre: string | null;
    recordLabel: string | null;
    lyrics: string | null;
    audio: EncryptableAudioSetFragment;
    cover: EncryptableImageSetFragment | null;
};
export type GeoLocationFragment = {
    __typename: 'GeoLocation';
    rawURI: string;
    latitude: number | null;
    longitude: number | null;
};
export type VideoMetadataV3Fragment = {
    __typename: 'VideoMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    isShortVideo: boolean;
    title: string;
    content: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    asset: PublicationMetadataMediaVideoFragment;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type AudioMetadataV3Fragment = {
    __typename: 'AudioMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    title: string;
    content: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    asset: PublicationMetadataMediaAudioFragment;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type ImageMetadataV3Fragment = {
    __typename: 'ImageMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    title: string;
    content: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    asset: PublicationMetadataMediaImageFragment;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type ArticleMetadataV3Fragment = {
    __typename: 'ArticleMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    title: string;
    content: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type EventMetadataV3Fragment = {
    __typename: 'EventMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    startsAt: string;
    endsAt: string;
    links: Array<string> | null;
    location: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    geographic: GeoLocationFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type LinkMetadataV3Fragment = {
    __typename: 'LinkMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    sharingLink: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type EmbedMetadataV3Fragment = {
    __typename: 'EmbedMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    embed: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type CheckingInMetadataV3Fragment = {
    __typename: 'CheckingInMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    location: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    geographic: GeoLocationFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type TextOnlyMetadataV3Fragment = {
    __typename: 'TextOnlyMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
};
export type ThreeDMetadataV3AssetFragment = {
    __typename: 'ThreeDMetadataV3Asset';
    uri: string;
    zipPath: string | null;
    playerURL: string;
    format: string;
    license: Types.PublicationMetadataLicenseType | null;
};
export type ThreeDMetadataV3Fragment = {
    __typename: 'ThreeDMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    assets: Array<ThreeDMetadataV3AssetFragment>;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type StoryMetadataV3Fragment = {
    __typename: 'StoryMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    asset: PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment;
};
export type TransactionMetadataV3Fragment = {
    __typename: 'TransactionMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    type: Types.PublicationMetadataTransactionType;
    txHash: string;
    chainId: number;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type MintMetadataV3Fragment = {
    __typename: 'MintMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    mintLink: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type SpaceMetadataV3Fragment = {
    __typename: 'SpaceMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    content: string;
    title: string;
    link: string;
    startsAt: string;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type LiveStreamMetadataV3Fragment = {
    __typename: 'LiveStreamMetadataV3';
    id: string;
    rawURI: string;
    locale: string;
    tags: Array<string> | null;
    contentWarning: Types.PublicationContentWarningType | null;
    hideFromFeed: boolean;
    appId: string | null;
    title: string;
    content: string;
    startsAt: string;
    endsAt: string;
    playbackURL: string;
    liveURL: string;
    checkLiveAPI: string | null;
    marketplace: MarketplaceMetadataFragment | null;
    attributes: Array<{
        __typename: 'MetadataAttribute';
        type: Types.MetadataAttributeType;
        key: string;
        value: string;
    }> | null;
    encryptedWith: PublicationMetadataLitEncryptionFragment | null;
    attachments: Array<PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment> | null;
};
export type PublicationStatsFragment = {
    id: string;
    comments: number;
    mirrors: number;
    quotes: number;
    bookmarks: number;
    countOpenActions: number;
    upvotes: number;
    downvotes: number;
    collects: number;
};
export type PostFragment = {
    __typename: 'Post';
    id: string;
    isHidden: boolean;
    txHash: string | null;
    createdAt: string;
    isEncrypted: boolean;
    hashtagsMentioned: Array<string>;
    publishedOn: AppFragment | null;
    momoka: MomokaInfoFragment | null;
    by: ProfileFragment;
    stats: PublicationStatsFragment;
    operations: PublicationOperationsFragment;
    metadata: ArticleMetadataV3Fragment | AudioMetadataV3Fragment | CheckingInMetadataV3Fragment | EmbedMetadataV3Fragment | EventMetadataV3Fragment | ImageMetadataV3Fragment | LinkMetadataV3Fragment | LiveStreamMetadataV3Fragment | MintMetadataV3Fragment | SpaceMetadataV3Fragment | StoryMetadataV3Fragment | TextOnlyMetadataV3Fragment | ThreeDMetadataV3Fragment | TransactionMetadataV3Fragment | VideoMetadataV3Fragment;
    openActionModules: Array<LegacyAaveFeeCollectModuleSettingsFragment | LegacyErc4626FeeCollectModuleSettingsFragment | LegacyFeeCollectModuleSettingsFragment | LegacyFreeCollectModuleSettingsFragment | LegacyLimitedFeeCollectModuleSettingsFragment | LegacyLimitedTimedFeeCollectModuleSettingsFragment | LegacyMultirecipientFeeCollectModuleSettingsFragment | LegacyRevertCollectModuleSettingsFragment | LegacySimpleCollectModuleSettingsFragment | LegacyTimedFeeCollectModuleSettingsFragment | MultirecipientFeeCollectOpenActionSettingsFragment | SimpleCollectOpenActionSettingsFragment | UnknownOpenActionModuleSettingsFragment>;
    referenceModule: DegreesOfSeparationReferenceModuleSettingsFragment | FollowOnlyReferenceModuleSettingsFragment | UnknownReferenceModuleSettingsFragment | {} | null;
    profilesMentioned: Array<ProfileMentionedFragment>;
};
export type CommentBaseFragment = {
    __typename: 'Comment';
    id: string;
    isHidden: boolean;
    hiddenByAuthor: boolean;
    txHash: string | null;
    createdAt: string;
    isEncrypted: boolean;
    publishedOn: AppFragment | null;
    momoka: MomokaInfoFragment | null;
    by: ProfileFragment;
    operations: PublicationOperationsFragment;
    metadata: ArticleMetadataV3Fragment | AudioMetadataV3Fragment | CheckingInMetadataV3Fragment | EmbedMetadataV3Fragment | EventMetadataV3Fragment | ImageMetadataV3Fragment | LinkMetadataV3Fragment | LiveStreamMetadataV3Fragment | MintMetadataV3Fragment | SpaceMetadataV3Fragment | StoryMetadataV3Fragment | TextOnlyMetadataV3Fragment | ThreeDMetadataV3Fragment | TransactionMetadataV3Fragment | VideoMetadataV3Fragment;
    openActionModules: Array<LegacyAaveFeeCollectModuleSettingsFragment | LegacyErc4626FeeCollectModuleSettingsFragment | LegacyFeeCollectModuleSettingsFragment | LegacyFreeCollectModuleSettingsFragment | LegacyLimitedFeeCollectModuleSettingsFragment | LegacyLimitedTimedFeeCollectModuleSettingsFragment | LegacyMultirecipientFeeCollectModuleSettingsFragment | LegacyRevertCollectModuleSettingsFragment | LegacySimpleCollectModuleSettingsFragment | LegacyTimedFeeCollectModuleSettingsFragment | MultirecipientFeeCollectOpenActionSettingsFragment | SimpleCollectOpenActionSettingsFragment | UnknownOpenActionModuleSettingsFragment>;
    referenceModule: DegreesOfSeparationReferenceModuleSettingsFragment | FollowOnlyReferenceModuleSettingsFragment | UnknownReferenceModuleSettingsFragment | {} | null;
};
export type CommentFragment = {
    hashtagsMentioned: Array<string>;
    profilesMentioned: Array<ProfileMentionedFragment>;
    root: PostFragment | {};
    commentOn: CommentBaseFragment | PostFragment | QuoteBaseFragment;
    firstComment: CommentBaseFragment | null;
    stats: PublicationStatsFragment;
} & CommentBaseFragment;
export type MirrorFragment = {
    __typename: 'Mirror';
    id: string;
    isHidden: boolean;
    txHash: string | null;
    createdAt: string;
    publishedOn: AppFragment | null;
    momoka: MomokaInfoFragment | null;
    by: ProfileFragment;
    mirrorOn: CommentFragment | PostFragment | QuoteFragment;
};
export type QuoteBaseFragment = {
    __typename: 'Quote';
    id: string;
    isHidden: boolean;
    txHash: string | null;
    createdAt: string;
    isEncrypted: boolean;
    publishedOn: AppFragment | null;
    momoka: MomokaInfoFragment | null;
    by: ProfileFragment;
    operations: PublicationOperationsFragment;
    metadata: ArticleMetadataV3Fragment | AudioMetadataV3Fragment | CheckingInMetadataV3Fragment | EmbedMetadataV3Fragment | EventMetadataV3Fragment | ImageMetadataV3Fragment | LinkMetadataV3Fragment | LiveStreamMetadataV3Fragment | MintMetadataV3Fragment | SpaceMetadataV3Fragment | StoryMetadataV3Fragment | TextOnlyMetadataV3Fragment | ThreeDMetadataV3Fragment | TransactionMetadataV3Fragment | VideoMetadataV3Fragment;
    openActionModules: Array<LegacyAaveFeeCollectModuleSettingsFragment | LegacyErc4626FeeCollectModuleSettingsFragment | LegacyFeeCollectModuleSettingsFragment | LegacyFreeCollectModuleSettingsFragment | LegacyLimitedFeeCollectModuleSettingsFragment | LegacyLimitedTimedFeeCollectModuleSettingsFragment | LegacyMultirecipientFeeCollectModuleSettingsFragment | LegacyRevertCollectModuleSettingsFragment | LegacySimpleCollectModuleSettingsFragment | LegacyTimedFeeCollectModuleSettingsFragment | MultirecipientFeeCollectOpenActionSettingsFragment | SimpleCollectOpenActionSettingsFragment | UnknownOpenActionModuleSettingsFragment>;
    referenceModule: DegreesOfSeparationReferenceModuleSettingsFragment | FollowOnlyReferenceModuleSettingsFragment | UnknownReferenceModuleSettingsFragment | {} | null;
};
export type QuoteFragment = {
    hashtagsMentioned: Array<string>;
    profilesMentioned: Array<ProfileMentionedFragment>;
    quoteOn: CommentBaseFragment | PostFragment | QuoteBaseFragment;
    stats: PublicationStatsFragment;
} & QuoteBaseFragment;
export type Eip712TypedDataDomainFragment = {
    name: string;
    chainId: number;
    version: string;
    verifyingContract: string;
};
export type Eip712TypedDataFieldFragment = {
    name: string;
    type: string;
};
export type RelaySuccessFragment = {
    __typename: 'RelaySuccess';
    txHash: string | null;
    txId: string;
};
export type RelayErrorFragment = {
    __typename: 'RelayError';
    reason: Types.RelayErrorReasonType;
};
export type DiGiProfileManagerRelayErrorFragment = {
    __typename: 'DiGiProfileManagerRelayError';
    reason: Types.DiGiProfileManagerRelayErrorReasonType;
};
export type CreateMomokaPublicationResultFragment = {
    __typename: 'CreateMomokaPublicationResult';
    id: string;
    proof: string;
    momokaId: string;
};
export declare const PaginatedResultInfoFragmentDoc: DocumentNode;
export declare const AppFragmentDoc: DocumentNode;
export declare const MomokaInfoFragmentDoc: DocumentNode;
export declare const NetworkAddressFragmentDoc: DocumentNode;
export declare const OptimisticStatusResultFragmentDoc: DocumentNode;
export declare const Erc20FragmentDoc: DocumentNode;
export declare const FiatFragmentDoc: DocumentNode;
export declare const FiatAmountFragmentDoc: DocumentNode;
export declare const AmountFragmentDoc: DocumentNode;
export declare const FeeFollowModuleSettingsFragmentDoc: DocumentNode;
export declare const RevertFollowModuleSettingsFragmentDoc: DocumentNode;
export declare const UnknownFollowModuleSettingsFragmentDoc: DocumentNode;
export declare const ImageFragmentDoc: DocumentNode;
export declare const ProfilePictureSetFragmentDoc: DocumentNode;
export declare const NftImageFragmentDoc: DocumentNode;
export declare const ProfileCoverSetFragmentDoc: DocumentNode;
export declare const ProfileMetadataFragmentDoc: DocumentNode;
export declare const HandleInfoFragmentDoc: DocumentNode;
export declare const ProfileStatsFragmentDoc: DocumentNode;
export declare const ProfileFragmentDoc: DocumentNode;
export declare const PublicationStatsFragmentDoc: DocumentNode;
export declare const KnownCollectOpenActionResultFragmentDoc: DocumentNode;
export declare const UnknownOpenActionResultFragmentDoc: DocumentNode;
export declare const OpenActionResultFragmentDoc: DocumentNode;
export declare const CanDecryptResponseFragmentDoc: DocumentNode;
export declare const PublicationOperationsFragmentDoc: DocumentNode;
export declare const PublicationMarketplaceMetadataAttributeFragmentDoc: DocumentNode;
export declare const ImageSetFragmentDoc: DocumentNode;
export declare const MarketplaceMetadataFragmentDoc: DocumentNode;
export declare const NftOwnershipConditionFragmentDoc: DocumentNode;
export declare const Erc20OwnershipConditionFragmentDoc: DocumentNode;
export declare const EoaOwnershipConditionFragmentDoc: DocumentNode;
export declare const ProfileOwnershipConditionFragmentDoc: DocumentNode;
export declare const FollowConditionFragmentDoc: DocumentNode;
export declare const CollectConditionFragmentDoc: DocumentNode;
export declare const AdvancedContractConditionFragmentDoc: DocumentNode;
export declare const AndConditionFragmentDoc: DocumentNode;
export declare const OrConditionFragmentDoc: DocumentNode;
export declare const RootConditionFragmentDoc: DocumentNode;
export declare const PublicationMetadataLitEncryptionFragmentDoc: DocumentNode;
export declare const EncryptableAudioFragmentDoc: DocumentNode;
export declare const AudioFragmentDoc: DocumentNode;
export declare const EncryptableAudioSetFragmentDoc: DocumentNode;
export declare const EncryptableImageFragmentDoc: DocumentNode;
export declare const EncryptableImageSetFragmentDoc: DocumentNode;
export declare const PublicationMetadataMediaAudioFragmentDoc: DocumentNode;
export declare const EncryptableVideoFragmentDoc: DocumentNode;
export declare const VideoFragmentDoc: DocumentNode;
export declare const EncryptableVideoSetFragmentDoc: DocumentNode;
export declare const PublicationMetadataMediaVideoFragmentDoc: DocumentNode;
export declare const PublicationMetadataMediaImageFragmentDoc: DocumentNode;
export declare const AudioMetadataV3FragmentDoc: DocumentNode;
export declare const VideoMetadataV3FragmentDoc: DocumentNode;
export declare const ImageMetadataV3FragmentDoc: DocumentNode;
export declare const ArticleMetadataV3FragmentDoc: DocumentNode;
export declare const GeoLocationFragmentDoc: DocumentNode;
export declare const EventMetadataV3FragmentDoc: DocumentNode;
export declare const LinkMetadataV3FragmentDoc: DocumentNode;
export declare const EmbedMetadataV3FragmentDoc: DocumentNode;
export declare const CheckingInMetadataV3FragmentDoc: DocumentNode;
export declare const TextOnlyMetadataV3FragmentDoc: DocumentNode;
export declare const ThreeDMetadataV3AssetFragmentDoc: DocumentNode;
export declare const ThreeDMetadataV3FragmentDoc: DocumentNode;
export declare const StoryMetadataV3FragmentDoc: DocumentNode;
export declare const TransactionMetadataV3FragmentDoc: DocumentNode;
export declare const MintMetadataV3FragmentDoc: DocumentNode;
export declare const SpaceMetadataV3FragmentDoc: DocumentNode;
export declare const LiveStreamMetadataV3FragmentDoc: DocumentNode;
export declare const LegacyFreeCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacyFeeCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacyLimitedFeeCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacyLimitedTimedFeeCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacyRevertCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacyTimedFeeCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacyMultirecipientFeeCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacySimpleCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacyErc4626FeeCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const LegacyAaveFeeCollectModuleSettingsFragmentDoc: DocumentNode;
export declare const MultirecipientFeeCollectOpenActionSettingsFragmentDoc: DocumentNode;
export declare const SimpleCollectOpenActionSettingsFragmentDoc: DocumentNode;
export declare const UnknownOpenActionModuleSettingsFragmentDoc: DocumentNode;
export declare const FollowOnlyReferenceModuleSettingsFragmentDoc: DocumentNode;
export declare const DegreesOfSeparationReferenceModuleSettingsFragmentDoc: DocumentNode;
export declare const UnknownReferenceModuleSettingsFragmentDoc: DocumentNode;
export declare const ProfileMentionedFragmentDoc: DocumentNode;
export declare const PostFragmentDoc: DocumentNode;
export declare const CommentBaseFragmentDoc: DocumentNode;
export declare const QuoteBaseFragmentDoc: DocumentNode;
export declare const CommentFragmentDoc: DocumentNode;
export declare const QuoteFragmentDoc: DocumentNode;
export declare const MirrorFragmentDoc: DocumentNode;
export declare const Eip712TypedDataDomainFragmentDoc: DocumentNode;
export declare const Eip712TypedDataFieldFragmentDoc: DocumentNode;
export declare const RelaySuccessFragmentDoc: DocumentNode;
export declare const RelayErrorFragmentDoc: DocumentNode;
export declare const DiGiProfileManagerRelayErrorFragmentDoc: DocumentNode;
export declare const CreateMomokaPublicationResultFragmentDoc: DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {};
export type Sdk = ReturnType<typeof getSdk>;
