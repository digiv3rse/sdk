import { TransactionError } from '@digiv3rse/domain/entities';
import { PromiseResult } from '@digiv3rse/shared-kernel';
/**
 * An object that represents the result of an async transaction.
 *
 * It allows to wait for the transaction until it's full completion.
 *
 * @experimental this interface is not yet stable and might change in the future.
 */
export type AsyncTransactionResult<TValue> = {
    /**
     * Allows to wait for the transaction until its full completion.
     *
     * For DiGi Transactions this means that the transaction has been mined and indexed.
     *
     * For other blockchain transactions this means that the transaction has been mined.
     */
    waitForCompletion(): PromiseResult<TValue, TransactionError>;
};
