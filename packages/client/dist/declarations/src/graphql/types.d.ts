import { EncryptedFragmentOf } from '@digiv3rse/gated-content';
import { CommentFragment, MirrorFragment, PostFragment, QuoteFragment, ArticleMetadataV3Fragment, AudioMetadataV3Fragment, CheckingInMetadataV3Fragment, EmbedMetadataV3Fragment, EventMetadataV3Fragment, ImageMetadataV3Fragment, LinkMetadataV3Fragment, LiveStreamMetadataV3Fragment, MintMetadataV3Fragment, SpaceMetadataV3Fragment, StoryMetadataV3Fragment, TextOnlyMetadataV3Fragment, ThreeDMetadataV3Fragment, TransactionMetadataV3Fragment, VideoMetadataV3Fragment, PublicationMetadataMediaAudioFragment, PublicationMetadataMediaImageFragment, PublicationMetadataMediaVideoFragment } from "./fragments.generated.js";
export type AnyPublicationFragment = CommentFragment | MirrorFragment | PostFragment | QuoteFragment;
export type PrimaryPublicationFragment = PostFragment | CommentFragment | QuoteFragment;
export type PublicationMetadataFragment = ArticleMetadataV3Fragment | AudioMetadataV3Fragment | CheckingInMetadataV3Fragment | EmbedMetadataV3Fragment | EventMetadataV3Fragment | ImageMetadataV3Fragment | LinkMetadataV3Fragment | LiveStreamMetadataV3Fragment | MintMetadataV3Fragment | SpaceMetadataV3Fragment | StoryMetadataV3Fragment | TextOnlyMetadataV3Fragment | ThreeDMetadataV3Fragment | TransactionMetadataV3Fragment | VideoMetadataV3Fragment;
export type PublicationMetadataMediaFragment = PublicationMetadataMediaAudioFragment | PublicationMetadataMediaImageFragment | PublicationMetadataMediaVideoFragment;
/**
 * Any encrypted publication metadata regardless of its type, or capabilities
 */
export type AnyEncryptablePublicationMetadataFragment = EncryptedFragmentOf<PublicationMetadataFragment>;
