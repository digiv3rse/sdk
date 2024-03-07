import { WalletConnectionError } from '@digiv3rse/domain/entities';
import { PromiseResult } from '@digiv3rse/shared-kernel';
import { ChainConfigRegistry } from "../../chains.js";
import { CreateSignerConfig, ISignerFactory, RequiredSigner } from "../adapters/ConcreteWallet.js";
export type GetSigner = (config: {
    chainId?: number;
}) => Promise<RequiredSigner>;
export interface ISignerBinding {
    getSigner: GetSigner;
}
export type SignerFactoryConfig = {
    getSigner: GetSigner;
    chains: ChainConfigRegistry;
};
export declare class SignerFactory implements ISignerFactory {
    private readonly bindings;
    private readonly chains;
    constructor(bindings: ISignerBinding, chains: ChainConfigRegistry);
    createSigner({ address, chainType, }: CreateSignerConfig): PromiseResult<RequiredSigner, WalletConnectionError>;
    private createAddEthereumChainParameter;
    private addChain;
    private switchChain;
}
