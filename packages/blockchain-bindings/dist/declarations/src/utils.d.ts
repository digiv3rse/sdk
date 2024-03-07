import { CryptoAmount, EvmAddress } from '@digiv3rse/shared-kernel';
export declare function hexToInt(hex: string): number;
export declare function isTheSameAddress(address1: EvmAddress, address2: EvmAddress): boolean;
export declare function bigNumber(from: CryptoAmount): import("ethers").BigNumber;
