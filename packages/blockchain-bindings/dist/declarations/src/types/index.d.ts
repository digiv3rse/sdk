export type { Erc20 } from "./Erc20.js";
export type { DiGiFollowNFT } from "./DiGiFollowNFT.js";
export type { DiGiHub } from "./DiGiHub.js";
export type { DiGiTokenHandleRegistry } from "./DiGiTokenHandleRegistry.js";
export type { PermissionlessCreator } from "./PermissionlessCreator.js";
export type { PublicActProxy } from "./PublicActProxy.js";
export type ChainId = number;
export interface AddEthereumChainParameter {
    chainId: string;
    blockExplorerUrls?: string[];
    chainName?: string;
    iconUrls?: string[];
    nativeCurrency?: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls?: string[];
}
export type RewardPercentiles = string[];
export type FeeHistoryResult = {
    baseFeePerGas: string[];
    gasUsedRatio: number[];
    oldestBlock: number;
    reward: RewardPercentiles[];
};
