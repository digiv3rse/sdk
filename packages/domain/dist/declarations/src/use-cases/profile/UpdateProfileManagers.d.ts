import { EvmAddress } from '@digiv3rse/shared-kernel';
import { TransactionKind } from "../../entities/index.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SignedOnChain } from "../transactions/SignedOnChain.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
export type UpdateProfileManagersRequest = {
    kind: TransactionKind.UPDATE_PROFILE_MANAGERS;
    approveSignless?: boolean;
    add?: EvmAddress[];
    remove?: EvmAddress[];
    sponsored: boolean;
};
export declare class UpdateProfileManagers extends SponsorshipReady<UpdateProfileManagersRequest> {
    private readonly sponsoredExecution;
    private readonly paidExecution;
    constructor(sponsoredExecution: SignedOnChain<UpdateProfileManagersRequest>, paidExecution: PaidTransaction<UpdateProfileManagersRequest>);
    protected charged(request: UpdateProfileManagersRequest): Promise<void>;
    protected sponsored(request: UpdateProfileManagersRequest): Promise<void>;
}
