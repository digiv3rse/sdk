import { AnyTransactionRequest } from '@digiv3rse/domain/use-cases/transactions';
import { IWalletGateway } from '@digiv3rse/domain/use-cases/wallets';
import { EvmAddress } from '@digiv3rse/shared-kernel';
import { z } from 'zod';
import { ITransactionFactory } from "../../transactions/adapters/ITransactionFactory.js";
import { ConcreteWallet, ISignerFactory } from "./ConcreteWallet.js";
export declare const WalletStorageSchema: z.ZodArray<z.ZodObject<{
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>, "many">;
export type WalletStorageSchema = z.infer<typeof WalletStorageSchema>;
export declare class WalletGateway implements IWalletGateway {
    private readonly signerFactory;
    private readonly transactionFactory;
    private inMemoryCache;
    constructor(signerFactory: ISignerFactory, transactionFactory: ITransactionFactory<AnyTransactionRequest>);
    getByAddress(address: EvmAddress): Promise<ConcreteWallet>;
}
