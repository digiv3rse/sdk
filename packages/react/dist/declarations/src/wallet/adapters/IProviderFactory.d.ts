import { JsonRpcProvider } from '@ethersproject/providers';
import { ChainType } from '@digiv3rse/shared-kernel';
export type CreateProviderConfig = {
    chainType: ChainType;
};
export interface IProviderFactory {
    createProvider(config: CreateProviderConfig): Promise<JsonRpcProvider>;
}
