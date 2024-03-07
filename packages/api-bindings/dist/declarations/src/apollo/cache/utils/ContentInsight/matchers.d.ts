import { Url } from '@digiv3rse/shared-kernel';
import { ContentInsight, ContentInsightType, SnapshotSpaceId } from '../../../../digi';
import { Matcher } from '../firstMatch';
export type ContentInsightMatcher = Matcher<Url, ContentInsight>;
export declare function snapshotPoll(url: Url): {
    type: ContentInsightType;
    spaceId: SnapshotSpaceId;
    proposalId: import("@digiv3rse/domain/entities").PollId;
    url: string;
} | null;
export declare function demoSnapshotPoll(url: Url): {
    type: ContentInsightType;
    spaceId: SnapshotSpaceId;
    proposalId: import("@digiv3rse/domain/entities").PollId;
    url: string;
} | null;
