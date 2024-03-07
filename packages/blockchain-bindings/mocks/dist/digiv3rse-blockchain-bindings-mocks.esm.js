import { BigDecimal } from '@digiv3rse/shared-kernel';

function mockFeeHistoryResult(_ref) {
  var blockCount = _ref.blockCount,
    lastBlockBaseFee = _ref.lastBlockBaseFee,
    _ref$oldestBlock = _ref.oldestBlock,
    oldestBlock = _ref$oldestBlock === void 0 ? 42 : _ref$oldestBlock,
    rewardPercentiles = _ref.rewardPercentiles;
  var rewardPercentilesInHex = rewardPercentiles.map(function (reward) {
    return BigDecimal.rescale(reward.toBigDecimal(), reward.asset.decimals).toHex();
  });
  return {
    oldestBlock: oldestBlock,
    reward: new Array(blockCount).fill(rewardPercentilesInHex),
    // blockCount + 1 because it includes the next block after the newest of the returned range
    // see: https://docs.alchemy.com/alchemy/apis/ethereum/eth_feehistory
    baseFeePerGas: new Array(blockCount + 1).fill(BigDecimal.rescale(lastBlockBaseFee.toBigDecimal(), lastBlockBaseFee.asset.decimals).toHex()),
    gasUsedRatio: new Array(blockCount).fill(0.5)
  };
}

export { mockFeeHistoryResult };
