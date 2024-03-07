import { URI } from '@digiv3rse/shared-kernel';
import { PublicationId, TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
import { OpenActionConfig } from "./OpenActionConfig.js";
import { ReferencePolicyConfig } from "./ReferencePolicyConfig.js";
export type CreateCommentRequest = {
    /**
     * The discriminator for the transaction kind.
     */
    kind: TransactionKind.CREATE_COMMENT;
    /**
     * Whether is possible to delegate the publication signing to the profile's chosen profile manager.
     */
    signless: boolean;
    /**
     * The publication ID to comment on.
     */
    commentOn: PublicationId;
    /**
     * The metadata URI.
     */
    metadata: URI;
    /**
     * The Open Actions associated with the publication.
     */
    actions: OpenActionConfig[];
    /**
     * The post reference policy.
     */
    reference: ReferencePolicyConfig;
    /**
     * Whether the transaction costs should be sponsored by the DiGi API or not.
     */
    sponsored: boolean;
};
export declare class CreateComment extends SponsorshipReady<CreateCommentRequest> {
    protected readonly sponsoredOnChain: DelegableSigning<CreateCommentRequest>;
    protected readonly sponsoredOnMomoka: DelegableSigning<CreateCommentRequest>;
    protected readonly paidOnChain: PaidTransaction<CreateCommentRequest>;
    constructor(sponsoredOnChain: DelegableSigning<CreateCommentRequest>, sponsoredOnMomoka: DelegableSigning<CreateCommentRequest>, paidOnChain: PaidTransaction<CreateCommentRequest>);
    protected charged(request: CreateCommentRequest): Promise<void>;
    protected sponsored(request: CreateCommentRequest): Promise<void>;
}
