import { PollId } from '@digiv3rse/domain/entities';
import { Brand, Url } from '@digiv3rse/shared-kernel';
/**
 * @internal
 */
export declare enum ContentInsightType {
    SNAPSHOT_POLL = "SNAPSHOT_POLL",
    UNDETERMINED = "UNDETERMINED"
}
export type SnapshotProposalId = PollId;
export type SnapshotSpaceId = Brand<string, 'SnapshotSpaceId'>;
/**
 * Opaque data structure representing a Snapshot poll details.
 */
export type SnapshotPoll = {
    /**
     * @internal
     */
    type: ContentInsightType.SNAPSHOT_POLL;
    /**
     * @internal
     */
    proposalId: SnapshotProposalId;
    /**
     * @internal
     */
    spaceId: SnapshotSpaceId;
    /**
     * @internal
     */
    url: Url;
};
/**
 * Opaque data structure representing
 */
export type Undetermined = {
    /**
     * @internal
     */
    type: ContentInsightType.UNDETERMINED;
};
/**
 * Opaque data structure representing insights on the publication metadata textual content
 */
export type ContentInsight = SnapshotPoll | Undetermined;
