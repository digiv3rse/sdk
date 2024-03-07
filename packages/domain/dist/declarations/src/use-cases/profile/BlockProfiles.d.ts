import { ProfileId, TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
export type BlockProfilesRequest = {
    profileIds: ProfileId[];
    kind: TransactionKind.BLOCK_PROFILE;
    signless: boolean;
    sponsored: boolean;
};
export declare class BlockProfiles extends SponsorshipReady<BlockProfilesRequest> {
    private readonly delegableExecution;
    private readonly paidExecution;
    constructor(delegableExecution: DelegableSigning<BlockProfilesRequest>, paidExecution: PaidTransaction<BlockProfilesRequest>);
    protected charged(request: BlockProfilesRequest): Promise<void>;
    protected sponsored(request: BlockProfilesRequest): Promise<void>;
}
