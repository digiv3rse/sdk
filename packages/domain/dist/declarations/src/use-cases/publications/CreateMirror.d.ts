import { PublicationId, TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
export type CreateMirrorRequest = {
    mirrorOn: PublicationId;
    kind: TransactionKind.MIRROR_PUBLICATION;
    signless: boolean;
    sponsored: boolean;
};
export declare class CreateMirror extends SponsorshipReady<CreateMirrorRequest> {
    protected readonly sponsoredOnChain: DelegableSigning<CreateMirrorRequest>;
    protected readonly sponsoredOnMomoka: DelegableSigning<CreateMirrorRequest>;
    protected readonly paidOnChain: PaidTransaction<CreateMirrorRequest>;
    constructor(sponsoredOnChain: DelegableSigning<CreateMirrorRequest>, sponsoredOnMomoka: DelegableSigning<CreateMirrorRequest>, paidOnChain: PaidTransaction<CreateMirrorRequest>);
    protected charged(request: CreateMirrorRequest): Promise<void>;
    protected sponsored(request: CreateMirrorRequest): Promise<void>;
}
