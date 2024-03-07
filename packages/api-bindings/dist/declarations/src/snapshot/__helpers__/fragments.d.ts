import { Url } from '@digiv3rse/shared-kernel';
import { SnapshotProposalId, SnapshotSpaceId } from '../../digi';
import { SnapshotProposal } from '../generated';
export declare function mockSnapshotSpaceId(): SnapshotSpaceId;
export declare function mockSnapshotProposalId(): SnapshotProposalId;
export declare function mockSnapshotPollUrl({ baseUrl, spaceId, proposalId, }?: {
    baseUrl?: Url;
    spaceId?: SnapshotSpaceId;
    proposalId?: SnapshotProposalId;
}): string;
export declare function mockSnapshotProposal(overrides?: Partial<SnapshotProposal>): SnapshotProposal;
