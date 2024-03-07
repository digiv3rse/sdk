import { TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
import { FollowPolicyConfig } from "./FollowPolicy.js";
export type UpdateFollowPolicyRequest = {
    policy: FollowPolicyConfig;
    kind: TransactionKind.UPDATE_FOLLOW_POLICY;
    signless: boolean;
    sponsored: boolean;
};
export declare class UpdateFollowPolicy extends SponsorshipReady<UpdateFollowPolicyRequest> {
    private readonly delegableExecution;
    private readonly paidExecution;
    constructor(delegableExecution: DelegableSigning<UpdateFollowPolicyRequest>, paidExecution: PaidTransaction<UpdateFollowPolicyRequest>);
    protected charged(request: UpdateFollowPolicyRequest): Promise<void>;
    protected sponsored(request: UpdateFollowPolicyRequest): Promise<void>;
}
