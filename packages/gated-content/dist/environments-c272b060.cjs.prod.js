'use strict';

var LitScalarOperator = /*#__PURE__*/function (LitScalarOperator) {
  LitScalarOperator["EQUAL"] = "=";
  LitScalarOperator["NOT_EQUAL"] = "!=";
  LitScalarOperator["GREATER_THAN"] = ">";
  LitScalarOperator["GREATER_THAN_OR_EQUAL"] = ">=";
  LitScalarOperator["LESS_THAN"] = "<";
  LitScalarOperator["LESS_THAN_OR_EQUAL"] = "<=";
  return LitScalarOperator;
}({});
var LitConditionType = /*#__PURE__*/function (LitConditionType) {
  LitConditionType["EVM_BASIC"] = "evmBasic";
  LitConditionType["EVM_CONTRACT"] = "evmContract";
  return LitConditionType;
}({});
var LitOperatorType = /*#__PURE__*/function (LitOperatorType) {
  LitOperatorType["AND"] = "and";
  LitOperatorType["OR"] = "or";
  return LitOperatorType;
}({});
var LitKnownMethods = /*#__PURE__*/function (LitKnownMethods) {
  LitKnownMethods["OWNER_OF"] = "ownerOf";
  LitKnownMethods["BALANCE_OF"] = "balanceOf";
  LitKnownMethods["BALANCE_OF_BATCH"] = "balanceOfBatch";
  LitKnownMethods["HAS_ACCESS"] = "hasAccess";
  LitKnownMethods["IS_FOLLOWING"] = "isFollowing";
  LitKnownMethods["HAS_COLLECTED"] = "hasCollected";
  return LitKnownMethods;
}({});
var LitKnownParams = /*#__PURE__*/function (LitKnownParams) {
  LitKnownParams["USER_ADDRESS"] = ":userAddress";
  LitKnownParams["ZERO"] = "0";
  return LitKnownParams;
}({});
var LitContractType = /*#__PURE__*/function (LitContractType) {
  LitContractType["ERC20"] = "ERC20";
  LitContractType["ERC721"] = "ERC721";
  LitContractType["ERC1155"] = "ERC1155";
  return LitContractType;
}({});
var SupportedChains = /*#__PURE__*/function (SupportedChains) {
  SupportedChains["ETHEREUM"] = "ethereum";
  SupportedChains["POLYGON"] = "polygon";
  SupportedChains["MUMBAI"] = "mumbai";
  SupportedChains["LINEA_GOERLI"] = "lineaGoerli";
  return SupportedChains;
}({});
var SupportedChainId = /*#__PURE__*/function (SupportedChainId) {
  SupportedChainId[SupportedChainId["ETHEREUM"] = 1] = "ETHEREUM";
  SupportedChainId[SupportedChainId["POLYGON"] = 137] = "POLYGON";
  SupportedChainId[SupportedChainId["MUMBAI"] = 80001] = "MUMBAI";
  SupportedChainId[SupportedChainId["LINEA_GOERLI"] = 59140] = "LINEA_GOERLI";
  return SupportedChainId;
}({});
var SUPPORTED_CHAIN_IDS = Object.values(SupportedChainId);
function isSupportedChainId(chainId) {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
}

/**
 * @internal
 */

var production = {
  name: 'production',
  chainId: 137,
  chainName: SupportedChains.POLYGON,
  accessControlContract: {
    address: '0xE1A4f40b74f6E91159ffBd95489FE74Efe71fD97',
    chainId: SupportedChainId.POLYGON
  },
  patches: {
    accessControlContract: {
      address: '0x98a6C31E43b158198da95Ef1242faCA868424187',
      chainId: SupportedChainId.POLYGON
    }
  }
};
var development = {
  name: 'development',
  chainId: 80001,
  chainName: SupportedChains.MUMBAI,
  accessControlContract: {
    address: '0xc4F726a10fDEb0E98e16Fa658b606192d57FC71c',
    chainId: SupportedChainId.MUMBAI
  }
};

exports.LitConditionType = LitConditionType;
exports.LitContractType = LitContractType;
exports.LitKnownMethods = LitKnownMethods;
exports.LitKnownParams = LitKnownParams;
exports.LitOperatorType = LitOperatorType;
exports.LitScalarOperator = LitScalarOperator;
exports.SupportedChainId = SupportedChainId;
exports.SupportedChains = SupportedChains;
exports.development = development;
exports.isSupportedChainId = isSupportedChainId;
exports.production = production;
