import { PublicationId } from '@digiv3rse/domain/entities';
import { CollectRequest } from '@digiv3rse/domain/use-cases/publications';
import { Overwrite, Prettify } from '@digiv3rse/shared-kernel';
import { AaveFeeCollectPolicy, FeeCollectPolicy, LimitedFeeCollectPolicy, LimitedTimedFeeCollectPolicy, MultirecipientFeeCollectPolicy, NoCollectPolicy, NoFeeCollectPolicy, TimedFeeCollectPolicy, VaultFeeCollectPolicy } from '../CollectPolicy';
import { SnapshotPoll } from '../ContentInsight';
import { AaveFeeCollectModuleSettings, Comment, Erc4626FeeCollectModuleSettings, FeeCollectModuleSettings, FreeCollectModuleSettings, LimitedFeeCollectModuleSettings, LimitedTimedFeeCollectModuleSettings, Mirror, MultirecipientFeeCollectModuleSettings, Post, PublicationStats, SimpleCollectModuleSettings, TimedFeeCollectModuleSettings } from '../generated';
import { ProfileOwnedByMe } from './profile';
import { PickByTypename, Typename } from './types';
export type CollectModule = ContentPublication['collectModule'];
export type ReferenceModule = NonNullable<ContentPublication['referenceModule']>;
/**
 * @group Helpers
 */
export declare function isPostPublication<T extends Typename<string>>(publication: T): publication is PickByTypename<T, 'Post'>;
/**
 * @group Helpers
 */
export declare function isCommentPublication<T extends Typename<string>>(publication: T): publication is PickByTypename<T, 'Comment'>;
/**
 * @group Helpers
 */
export declare function isMirrorPublication<T extends Typename<string>>(publication: T): publication is PickByTypename<T, 'Mirror'>;
/**
 * @internal
 */
export declare function isDataAvailabilityPublicationId(publicationId: PublicationId): boolean;
/**
 * Any publication regardless of its type, or capabilities
 */
export type AnyPublication = Comment | Mirror | Post;
/**
 * Any publication that can be referenced other via a comment or mirror
 */
export type ContentPublication = Comment | Post;
/**
 * @internal
 */
export type Gated<T extends ContentPublication> = Overwrite<T, {
    isGated: true;
    metadata: Overwrite<T['metadata'], {
        encryptionParams: NonNullable<T['metadata']['encryptionParams']>;
    }>;
}>;
/**
 * An encrypted comment
 */
export type GatedComment = Prettify<Gated<Comment>>;
/**
 * An encrypted post
 */
export type GatedPost = Prettify<Gated<Post>>;
/**
 * An encrypted publication
 */
export type GatedPublication = GatedComment | GatedPost;
/**
 * @internal
 */
export type Collectable<T extends AnyPublication> = Overwrite<T, {
    collectPolicy: FeeCollectPolicy | NoFeeCollectPolicy | LimitedFeeCollectPolicy | TimedFeeCollectPolicy | LimitedTimedFeeCollectPolicy | MultirecipientFeeCollectPolicy | VaultFeeCollectPolicy | AaveFeeCollectPolicy;
    collectModule: AaveFeeCollectModuleSettings | Erc4626FeeCollectModuleSettings | FeeCollectModuleSettings | FreeCollectModuleSettings | LimitedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | MultirecipientFeeCollectModuleSettings | TimedFeeCollectModuleSettings;
}>;
/**
 * A collectable comment
 */
export type CollectableComment = Prettify<Collectable<Comment>>;
/**
 * A collectable mirror (i.e. a mirror of a collectable comment or post)
 */
export type CollectableMirror = Prettify<Collectable<Mirror>>;
/**
 * A collectable post
 */
export type CollectablePost = Prettify<Collectable<Post>>;
/**
 * A collectable publication
 *
 * It can be a comment, mirror or post
 */
export type CollectablePublication = CollectableComment | CollectableMirror | CollectablePost;
/**
 * @group Helpers
 */
export declare function isGatedPublication(publication: ContentPublication): publication is GatedPublication;
/**
 * @internal
 */
export type Poll<T extends ContentPublication> = Overwrite<T, {
    contentInsight: SnapshotPoll;
}>;
/**
 * A publication with a poll in its content
 *
 * **Pro-tip**: use {@link isPollPublication} to check if the publication contains a poll.
 */
export type PollPublication = Prettify<Poll<ContentPublication>>;
/**
 * @group Helpers
 */
export declare function isPollPublication(publication: AnyPublication): publication is PollPublication;
/**
 * @group Helpers
 */
export declare function isContentPublication(publication: AnyPublication): publication is ContentPublication;
export type PublicationOwnedByMe = Overwrite<AnyPublication, {
    profile: ProfileOwnedByMe;
}>;
/**
 * @group Helpers
 */
export declare function isPublicationOwnedByMe(publication: AnyPublication): publication is PublicationOwnedByMe;
export declare function createCollectRequest(publication: AnyPublication, collector: ProfileOwnedByMe): CollectRequest;
export type CollectableCollectModuleSettings = FreeCollectModuleSettings | FeeCollectModuleSettings | LimitedFeeCollectModuleSettings | TimedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | MultirecipientFeeCollectModuleSettings | Erc4626FeeCollectModuleSettings | AaveFeeCollectModuleSettings | SimpleCollectModuleSettings;
export declare function resolveCollectPolicy({ collectModule, isAuthorFollowedByMe, publicationStats, collectNftAddress, }: {
    collectModule: CollectModule;
    isAuthorFollowedByMe: boolean;
    publicationStats: PublicationStats;
    collectNftAddress: string | null;
}): FeeCollectPolicy | NoFeeCollectPolicy | MultirecipientFeeCollectPolicy | VaultFeeCollectPolicy | AaveFeeCollectPolicy | NoCollectPolicy;
