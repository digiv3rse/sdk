import { AnyTransactionRequestModel, Wallet } from "../../entities/index.js";
import { UnsignedTransaction } from "../../entities/Transactions.js";
export interface IPaidTransactionGateway<T extends AnyTransactionRequestModel> {
    createUnsignedTransaction(request: T, wallet: Wallet): Promise<UnsignedTransaction<T>>;
}
