import { URI } from '@digiv3rse/shared-kernel';
import { TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
import { OpenActionConfig } from "./OpenActionConfig.js";
import { ReferencePolicyConfig } from "./ReferencePolicyConfig.js";
export type CreatePostRequest = {
    /**
     * The discriminator for the transaction kind.
     */
    kind: TransactionKind.CREATE_POST;
    /**
     * Whether is possible to delegate the publication signing to the profile's chosen profile manager.
     */
    signless: boolean;
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
export declare class CreatePost extends SponsorshipReady<CreatePostRequest> {
    protected readonly sponsoredOnChain: DelegableSigning<CreatePostRequest>;
    protected readonly sponsoredOnMomoka: DelegableSigning<CreatePostRequest>;
    protected readonly paidOnChain: PaidTransaction<CreatePostRequest>;
    constructor(sponsoredOnChain: DelegableSigning<CreatePostRequest>, sponsoredOnMomoka: DelegableSigning<CreatePostRequest>, paidOnChain: PaidTransaction<CreatePostRequest>);
    protected charged(request: CreatePostRequest): Promise<void>;
    protected sponsored(request: CreatePostRequest): Promise<void>;
}
