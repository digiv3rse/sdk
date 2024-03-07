import { JsonRpcProvider } from '@ethersproject/providers';
import { ChainType } from '@digiv3rse/shared-kernel';
import { ChainConfigRegistry } from "../../chains.js";
import { IProviderFactory } from "../adapters/IProviderFactory.js";
export type GetProvider = (config: {
    chainId: number;
}) => Promise<JsonRpcProvider>;
export interface IProviderBinding {
    getProvider: GetProvider;
}
export declare class ProviderFactory implements IProviderFactory {
    private readonly bindings;
    private readonly chains;
    constructor(bindings: IProviderBinding, chains: ChainConfigRegistry);
    createProvider(config: {
        chainType: ChainType;
    }): Promise<JsonRpcProvider>;
}
