import { URI } from '@digiv3rse/shared-kernel';
import { TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
export type SetProfileMetadataRequest = {
    metadataURI: URI;
    kind: TransactionKind.UPDATE_PROFILE_DETAILS;
    signless: boolean;
    sponsored: boolean;
};
export declare class SetProfileMetadata extends SponsorshipReady<SetProfileMetadataRequest> {
    private readonly delegableExecution;
    private readonly paidExecution;
    constructor(delegableExecution: DelegableSigning<SetProfileMetadataRequest>, paidExecution: PaidTransaction<SetProfileMetadataRequest>);
    protected charged(request: SetProfileMetadataRequest): Promise<void>;
    protected sponsored(request: SetProfileMetadataRequest): Promise<void>;
}
