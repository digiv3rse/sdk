/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
export type { Erc20 } from './Erc20';
export type { DiGiFollowNFT } from './DiGiFollowNFT';
export type { DiGiHub } from './DiGiHub';
export type { DiGiTokenHandleRegistry } from './DiGiTokenHandleRegistry';
export type { PermissionlessCreator } from './PermissionlessCreator';
export type { PublicActProxy } from './PublicActProxy';

export type ChainId = number;

// https://eips.ethereum.org/EIPS/eip-3085
// eslint-disable-next-line @typescript-eslint/naming-convention
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
