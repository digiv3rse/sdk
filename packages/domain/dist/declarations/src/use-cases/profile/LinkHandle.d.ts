import { ProfileId, TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
export type LinkHandleRequest = {
    fullHandle: string;
    profileId: ProfileId;
    kind: TransactionKind.LINK_HANDLE;
    signless: boolean;
    sponsored: boolean;
};
export declare class LinkHandle extends SponsorshipReady<LinkHandleRequest> {
    private readonly delegableExecution;
    private readonly paidExecution;
    constructor(delegableExecution: DelegableSigning<LinkHandleRequest>, paidExecution: PaidTransaction<LinkHandleRequest>);
    protected charged(request: LinkHandleRequest): Promise<void>;
    protected sponsored(request: LinkHandleRequest): Promise<void>;
}
