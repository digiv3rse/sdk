import { ProfileId, TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
export type UnfollowRequest = {
    profileId: ProfileId;
    kind: TransactionKind.UNFOLLOW_PROFILE;
    signless: boolean;
    sponsored: boolean;
};
export declare class UnfollowProfile extends SponsorshipReady<UnfollowRequest> {
    private readonly delegableExecution;
    private readonly paidExecution;
    constructor(delegableExecution: DelegableSigning<UnfollowRequest>, paidExecution: PaidTransaction<UnfollowRequest>);
    protected charged(request: UnfollowRequest): Promise<void>;
    protected sponsored(request: UnfollowRequest): Promise<void>;
}
