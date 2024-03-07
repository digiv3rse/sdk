import { MockedResponse } from '@apollo/client/testing';
import { GetSnapshotProposalData, SnapshotProposal } from '../generated';
export declare function mockGetSnapshotProposalDataResponse({ proposal, }: {
    proposal: SnapshotProposal;
}): MockedResponse<GetSnapshotProposalData>;
