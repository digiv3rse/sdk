import { ProfileId, TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
export type UnblockProfilesRequest = {
    profileIds: ProfileId[];
    kind: TransactionKind.UNBLOCK_PROFILE;
    signless: boolean;
    sponsored: boolean;
};
export declare class UnblockProfiles extends SponsorshipReady<UnblockProfilesRequest> {
    private readonly delegableExecution;
    private readonly paidExecution;
    constructor(delegableExecution: DelegableSigning<UnblockProfilesRequest>, paidExecution: PaidTransaction<UnblockProfilesRequest>);
    protected charged(request: UnblockProfilesRequest): Promise<void>;
    protected sponsored(request: UnblockProfilesRequest): Promise<void>;
}
