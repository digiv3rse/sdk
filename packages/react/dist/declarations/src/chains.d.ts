import { CryptoNativeAsset, ChainType } from '@digiv3rse/shared-kernel';
/**
 * A chain configuration
 *
 * @internal
 */
export type ChainConfig = {
    chainId: number;
    name: string;
    rpcUrl: string;
    blockExplorer: string;
    nativeCurrency: CryptoNativeAsset;
};
/**
 * @internal
 */
export declare const mainnet: ChainConfig;
/**
 * @internal
 */
export declare const goerli: ChainConfig;
/**
 * @internal
 */
export declare const polygon: ChainConfig;
/**
 * @internal
 */
export declare const mumbai: ChainConfig;
/**
 * A registry of chain configurations
 *
 * @internal
 */
export type ChainConfigRegistry = Record<ChainType, ChainConfig>;
