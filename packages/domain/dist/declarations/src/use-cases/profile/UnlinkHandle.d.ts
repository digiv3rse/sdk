import { ProfileId, TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
export type UnlinkHandleRequest = {
    fullHandle: string;
    profileId: ProfileId;
    kind: TransactionKind.UNLINK_HANDLE;
    signless: boolean;
    sponsored: boolean;
};
export declare class UnlinkHandle extends SponsorshipReady<UnlinkHandleRequest> {
    private readonly delegableExecution;
    private readonly paidExecution;
    constructor(delegableExecution: DelegableSigning<UnlinkHandleRequest>, paidExecution: PaidTransaction<UnlinkHandleRequest>);
    protected charged(request: UnlinkHandleRequest): Promise<void>;
    protected sponsored(request: UnlinkHandleRequest): Promise<void>;
}
