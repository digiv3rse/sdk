import { Provider } from '@ethersproject/providers';
import { EvmAddress } from '@digiv3rse/shared-kernel';
import type { Erc20, DiGiFollowNFT, DiGiHub, DiGiTokenHandleRegistry, PermissionlessCreator, PublicActProxy } from "./types/index.js";
export declare function erc20(address: EvmAddress, provider?: Provider): Erc20;
export declare function digiFollowNFT(address: EvmAddress, provider?: Provider): DiGiFollowNFT;
export declare function digiHub(address: EvmAddress, provider?: Provider): DiGiHub;
export declare function digiTokenHandleRegistry(address: EvmAddress, provider?: Provider): DiGiTokenHandleRegistry;
export declare function publicActProxy(address: EvmAddress, provider?: Provider): PublicActProxy;
export declare function permissionlessCreator(address: EvmAddress, provider?: Provider): PermissionlessCreator;
