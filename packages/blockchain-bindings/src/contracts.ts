import { Contract } from '@ethersproject/contracts';
import { Provider } from '@ethersproject/providers';
import { EvmAddress } from '@digiv3rse/shared-kernel';

import digiFollowNftAbi from './abi/DiGiFollowNFT.json';
import digiHubAbi from './abi/DiGiHub.json';
import digiTokenHandleRegistryAbi from './abi/DiGiTokenHandleRegistry.json';
import permissionlessCreatorAbi from './abi/PermissionlessCreator.json';
import publicActProxyAbi from './abi/PublicActProxy.json';
import erc20Abi from './abi/erc-20.json';
import type {
  Erc20,
  DiGiFollowNFT,
  DiGiHub,
  DiGiTokenHandleRegistry,
  PermissionlessCreator,
  PublicActProxy,
} from './types';

export function erc20(address: EvmAddress, provider?: Provider) {
  return new Contract(address, erc20Abi, provider) as Erc20;
}

export function digiFollowNFT(address: EvmAddress, provider?: Provider) {
  return new Contract(address, digiFollowNftAbi, provider) as DiGiFollowNFT;
}

export function digiHub(address: EvmAddress, provider?: Provider) {
  return new Contract(address, digiHubAbi, provider) as DiGiHub;
}

export function digiTokenHandleRegistry(address: EvmAddress, provider?: Provider) {
  return new Contract(address, digiTokenHandleRegistryAbi, provider) as DiGiTokenHandleRegistry;
}

export function publicActProxy(address: EvmAddress, provider?: Provider) {
  return new Contract(address, publicActProxyAbi, provider) as PublicActProxy;
}

export function permissionlessCreator(address: EvmAddress, provider?: Provider) {
  return new Contract(address, permissionlessCreatorAbi, provider) as PermissionlessCreator;
}
