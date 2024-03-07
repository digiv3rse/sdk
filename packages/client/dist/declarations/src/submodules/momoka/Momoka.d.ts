import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import { MomokaTransactionRequest, MomokaTransactionsRequest } from "../../graphql/types.generated.js";
import { PaginatedResult } from "../../helpers/index.js";
import { MomokaCommentTransactionFragment, MomokaMirrorTransactionFragment, MomokaPostTransactionFragment, MomokaQuoteTransactionFragment, MomokaSubmitterResultFragment } from "./graphql/momoka.generated.js";
export type MomokaTransaction = MomokaCommentTransactionFragment | MomokaMirrorTransactionFragment | MomokaPostTransactionFragment | MomokaQuoteTransactionFragment;
/**
 * @group DiGiClient Modules
 */
export declare class Momoka {
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Fetch momoka submitters
     *
     * @returns Submitters wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.momoka.submitters();
     * ```
     */
    submitters(): Promise<PaginatedResult<MomokaSubmitterResultFragment>>;
    /**
     * Fetch momoka summary
     *
     * @returns Summary of momoka transactions
     *
     * @example
     * ```ts
     * const result = await client.momoka.summary();
     * ```
     */
    summary(): Promise<{
        totalTransactions: number;
    }>;
    /**
     * Fetch momoka transaction
     *
     * @param request - The request object
     * @returns Momoka transaction
     *
     * @example
     * ```ts
     * const result = await client.momoka.transaction({ for: 'Go2-u7-11rykJn9nS7nNlQW4Bl2w0c3EOnn1_99Zltk' });
     * ```
     */
    transaction(request: MomokaTransactionRequest): Promise<MomokaTransaction | null>;
    /**
     * Fetch momoka transactions
     *
     * @param request - The request object
     * @returns Momoka transactions wrapped in {@link PaginatedResult}
     *
     * @example
     * ```ts
     * const result = await client.momoka.transactions();
     * ```
     */
    transactions(request?: MomokaTransactionsRequest): Promise<PaginatedResult<MomokaTransaction>>;
}
