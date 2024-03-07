import type { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../../authentication/index.js";
import { DiGiContext } from "../../context.js";
import type { CredentialsExpiredError, NotAuthenticatedError } from "../../errors.js";
import type { CreateMomokaPublicationResultFragment, RelayErrorFragment, RelaySuccessFragment } from "../../graphql/fragments.generated.js";
import { BroadcastRequest, DiGiTransactionStatusRequest } from "../../graphql/types.generated.js";
import { DiGiTransactionResultFragment, RelayQueueResultFragment } from "./graphql/transaction.generated.js";
export declare class TransactionPollingError extends Error {
    name: "TransactionPollingError";
    message: string;
}
/**
 * Broadcast signed typed data for a gasless transaction.
 *
 * @remarks
 *
 * Typed data is a way to try to show the users what they are signing
 * in a more readable format. You should only call transaction broadcast
 * if you are using the typed data logic.
 *
 * @group DiGiClient Modules
 */
export declare class Transaction {
    private readonly authentication;
    private readonly sdk;
    /**
     * @internal
     */
    constructor(context: DiGiContext, authentication: Authentication);
    /**
     * Get the transaction hash for a transaction id.
     *
     * @param txId - The transaction id
     * @returns The transaction hash
     *
     * @example
     * ```ts
     * const txHash = await client.transaction.txIdToTxHash(txId);
     * ```
     */
    txIdToTxHash(txId: string): Promise<string | null>;
    /**
     * Use to see the size of relayers queue
     * if there are delays in txs being submitted onchain.
     *
     * @returns The relay queues
     *
     * @example
     * ```ts
     * const result = await client.transaction.relayQueues();
     * ```
     */
    relayQueues(): Promise<RelayQueueResultFragment[]>;
    /**
     * Generate a DiGi API relay address.
     *
     * @returns The relay address
     *
     * @example
     * ```ts
     * const result = await client.transaction.generateDiGiAPIRelayAddress();
     * ```
     */
    generateDiGiAPIRelayAddress(): Promise<string>;
    /**
     * Broadcast a signed typed data for a gasless transaction onchain.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link RelaySuccessFragment} or {@link RelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.transaction.broadcastOnchain({
     *   id: data.id,
     *   signature: signedTypedData,
     * });
     * ```
     */
    broadcastOnchain(request: BroadcastRequest): PromiseResult<RelaySuccessFragment | RelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Broadcast a signed typed data for a Momoka transaction.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * @param request - Request object for the mutation
     * @returns {@link PromiseResult} with {@link CreateMomokaPublicationResultFragment} or {@link RelayErrorFragment}
     *
     * @example
     * ```ts
     * const result = await client.transaction.broadcastOnMomoka({
     *   id: data.id,
     *   signature: signedTypedData,
     * });
     * ```
     */
    broadcastOnMomoka(request: BroadcastRequest): PromiseResult<CreateMomokaPublicationResultFragment | RelayErrorFragment, CredentialsExpiredError | NotAuthenticatedError>;
    /**
     * Get the status of a transaction.
     *
     * @param request - Request object for the query
     * @returns The transaction status
     *
     * @example
     * ```ts
     * const result = await client.transaction.status({
     *   forTxId: txId
     * });
     * ```
     */
    status(request: DiGiTransactionStatusRequest): Promise<DiGiTransactionResultFragment | null>;
    /**
     * Poll the transaction status until it has been completed.
     *
     * @param request - Request object for the query
     * @returns The transaction status
     * @throws {@link TransactionPollingError} if the transaction is not completed within 60s
     *
     * @example
     * ```ts
     * const result = await client.transaction.waitUntilComplete({
     *   forTxId: txId
     * });
     * ```
     */
    waitUntilComplete(request: DiGiTransactionStatusRequest): Promise<DiGiTransactionResultFragment | null>;
}
