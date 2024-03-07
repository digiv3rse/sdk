import { URI } from '@digiv3rse/shared-kernel';
import { PublicationId, TransactionKind } from "../../entities/index.js";
import { DelegableSigning } from "../transactions/DelegableSigning.js";
import { PaidTransaction } from "../transactions/PaidTransaction.js";
import { SponsorshipReady } from "../transactions/SponsorshipReady.js";
import { OpenActionConfig } from "./OpenActionConfig.js";
import { ReferencePolicyConfig } from "./ReferencePolicyConfig.js";
export type CreateQuoteRequest = {
    /**
     * The discriminator for the transaction kind.
     */
    kind: TransactionKind.CREATE_QUOTE;
    /**
     * Whether is possible to delegate the publication signing to the profile's chosen profile manager.
     */
    signless: boolean;
    /**
     * The publication ID that is being quoted.
     */
    quoteOn: PublicationId;
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
export declare class CreateQuote extends SponsorshipReady<CreateQuoteRequest> {
    protected readonly sponsoredOnChain: DelegableSigning<CreateQuoteRequest>;
    protected readonly sponsoredOnMomoka: DelegableSigning<CreateQuoteRequest>;
    protected readonly paidOnChain: PaidTransaction<CreateQuoteRequest>;
    constructor(sponsoredOnChain: DelegableSigning<CreateQuoteRequest>, sponsoredOnMomoka: DelegableSigning<CreateQuoteRequest>, paidOnChain: PaidTransaction<CreateQuoteRequest>);
    protected charged(request: CreateQuoteRequest): Promise<void>;
    protected sponsored(request: CreateQuoteRequest): Promise<void>;
}
