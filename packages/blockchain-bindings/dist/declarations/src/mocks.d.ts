import { Amount, CryptoNativeAsset } from '@digiv3rse/shared-kernel';
import { FeeHistoryResult } from "./types/index.js";
export declare function mockFeeHistoryResult<T extends CryptoNativeAsset>({ blockCount, lastBlockBaseFee, oldestBlock, rewardPercentiles, }: {
    blockCount: number;
    lastBlockBaseFee: Amount<T>;
    oldestBlock?: number;
    rewardPercentiles: Amount<T>[];
}): FeeHistoryResult;
