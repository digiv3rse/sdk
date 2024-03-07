import { Amount, Erc20, EvmAddress } from '@digiv3rse/shared-kernel';
import { TransactionKind } from "../../entities/index.js";
import { PaidTransaction } from "./PaidTransaction.js";
/**
 * Token allowance limit.
 */
export declare enum TokenAllowanceLimit {
    /**
     * The allowance will be set to the exact amount specified in the request.
     */
    EXACT = 0,
    /**
     * The allowance will be set to the maximum value possible, virtually infinite.
     */
    INFINITE = 1
}
export type TokenAllowanceRequest = {
    amount: Amount<Erc20>;
    spender: EvmAddress;
    limit: TokenAllowanceLimit;
    kind: TransactionKind.APPROVE_MODULE;
};
export declare class TokenAllowance extends PaidTransaction<TokenAllowanceRequest> {
}
