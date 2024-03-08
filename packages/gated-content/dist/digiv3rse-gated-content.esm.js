import { _ as _classCallCheck, a as _defineProperty, b as _createClass, c as _asyncToGenerator, d as _regeneratorRuntime } from './asyncToGenerator-678ea54e.esm.js';
import { CausedError, never, assertNever, invariant, assertError, isNonNullable, InvariantError, success, failure } from '@digiv3rse/shared-kernel';
import { i as isSupportedChainId, S as SupportedChainId, a as SupportedChains, L as LitScalarOperator, b as LitConditionType, c as LitKnownMethods, d as LitKnownParams, e as LitContractType, f as LitOperatorType } from './environments-3a643094.esm.js';
export { a as SupportedChains, g as development, p as production } from './environments-3a643094.esm.js';
import { verifyMessage } from '@ethersproject/wallet';
import * as raw from '@digiv3rse/metadata';
import { ConditionComparisonOperator, NftContractType as NftContractType$1 } from '@digiv3rse/metadata';
import { NodeClient } from '@lit-protocol/node-client';
import { SiweMessage } from 'siwe';
import { BaseStorageSchema, Storage } from '@digiv3rse/storage';
import { z } from 'zod';
import { Interface } from '@ethersproject/abi';
import { BigNumber, parseFixed } from '@ethersproject/bignumber';
import { isAddress } from '@ethersproject/address';
import traverse from 'traverse';

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

var CannotDecryptError = /*#__PURE__*/function (_CausedError) {
  _inherits(CannotDecryptError, _CausedError);
  function CannotDecryptError() {
    var _this;
    _classCallCheck(this, CannotDecryptError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, CannotDecryptError, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "name", 'CannotDecryptError');
    return _this;
  }
  return _createClass(CannotDecryptError);
}(CausedError);

/** All built-in and custom scalars, mapped to their actual values */

/** NFT collection owners request */

/** A wrapper object containing an Nft collection, the total number of DiGi profiles that own it, and optional field resolvers */

/** NFT collections request */

var NftContractType = /*#__PURE__*/function (NftContractType) {
  NftContractType["Erc721"] = "ERC721";
  NftContractType["Erc1155"] = "ERC1155";
  return NftContractType;
}({});

/**
 * Generic helper type that ensures any fragment of a given node is allowed.
 *
 * Fragments must include `__typename` at all levels.
 *
 * @internal
 */

/**
 * Helper that narrows down the type of `encryptedWith` in union types.
 *
 * @internal
 */

/**
 * Helper that ensures that `encryptedWith` field is present in the metadata fragment.
 *
 * @internal
 */

/**
 * Any fragment of `PublicationMetadata` with `encryptedWith` field defined.
 *
 * Fragments must include `__typename` at all levels.
 */

/**
 * Any encryptable `PublicationMetadata` fragment.
 */

/**
 * Type guard that checks if a Publication Metadata fragment is encrypted.
 *
 * @param metadata - any supported metadata fragment
 */
function isEncryptedPublicationMetadata(metadata) {
  return !!metadata.encryptedWith;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}

function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

var InvalidAccessCriteriaError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidAccessCriteriaError, _Error);
  function InvalidAccessCriteriaError() {
    var _this;
    _classCallCheck(this, InvalidAccessCriteriaError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, InvalidAccessCriteriaError, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "name", 'InvalidAccessCriteriaError');
    return _this;
  }
  return _createClass(InvalidAccessCriteriaError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
function assertValidAddress(address) {
  if (isAddress(address)) return;
  throw new InvalidAccessCriteriaError("Invalid address: ".concat(address));
}
function assertSupportedChainId(chainID) {
  if (isSupportedChainId(chainID)) return;
  throw new InvalidAccessCriteriaError("Invalid chain ID: ".concat(chainID));
}
var assertValidTokenIds = function assertValidTokenIds(tokenIds) {
  if (!tokenIds) {
    return;
  }
  try {
    tokenIds.every(function (tokenId) {
      return BigNumber.from(tokenId);
    });
  } catch (e) {
    throw new InvalidAccessCriteriaError("Invalid token ids");
  }
};
function isValidDiGiId(id) {
  var regex = /^0x(?:[a-fA-F0-9]{2})+$/;
  return regex.test(id);
}
function assertValidProfileId(profileId) {
  if (isValidDiGiId(profileId)) return;
  throw new InvalidAccessCriteriaError("Invalid profile id: ".concat(profileId));
}
function assertValidPublicationId(publicationId) {
  var _ref = publicationId.split('-'),
    _ref2 = _slicedToArray(_ref, 2),
    profileId = _ref2[0],
    pubId = _ref2[1];
  if (isValidDiGiId(profileId) && isValidDiGiId(pubId)) return;
  throw new InvalidAccessCriteriaError("Invalid publication id: ".concat(publicationId));
}
function assertAtLeastTwoCriteria(criteria) {
  if (criteria.length < 2) {
    throw new InvalidAccessCriteriaError('Compound condition must have at least 2 criteria.');
  }
}
function assertNoMoreThanFiveCriteria(criteria) {
  if (criteria.length > 5) {
    throw new InvalidAccessCriteriaError('Compound conditions can only have up to 5 criteria.');
  }
}

var insertObjectInBetweenArrayElements = function insertObjectInBetweenArrayElements(array, objectToInsert) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    var _array$i;
    results.push((_array$i = array[i]) !== null && _array$i !== void 0 ? _array$i : never());
    if (i !== array.length - 1) {
      results.push(objectToInsert);
    }
  }
  return results;
};
var toLitSupportedChainName = function toLitSupportedChainName(chainId) {
  switch (chainId) {
    case SupportedChainId.ETHEREUM:
      return SupportedChains.ETHEREUM;
    case SupportedChainId.POLYGON:
      return SupportedChains.POLYGON;
    case SupportedChainId.MUMBAI:
      return SupportedChains.MUMBAI;
    case SupportedChainId.LINEA_GOERLI:
      return SupportedChains.LINEA_GOERLI;
    default:
      assertNever(chainId, 'Unsupported chain id');
  }
};
var resolveScalarOperatorSymbol = function resolveScalarOperatorSymbol(operator) {
  if (operator in LitScalarOperator) return LitScalarOperator[operator];
  throw new InvalidAccessCriteriaError("Invalid operator: ".concat(String(operator)));
};

var transformAdvancedContractCondition = function transformAdvancedContractCondition(condition) {
  assertValidAddress(condition.contract.address);
  assertSupportedChainId(condition.contract.chainId);
  assertValidAbi(condition.abi, condition.functionName);
  assertValidFunctionParams(condition);
  assertValidComparison(condition);
  return [{
    conditionType: LitConditionType.EVM_CONTRACT,
    contractAddress: condition.contract.address.toLowerCase(),
    chain: toLitSupportedChainName(condition.contract.chainId),
    functionName: condition.functionName,
    functionParams: condition.params || [],
    functionAbi: new Interface([condition.abi]).getFunction(condition.functionName),
    returnValueTest: {
      key: '',
      comparator: resolveScalarOperatorSymbol(condition.comparison),
      value: condition.value
    }
  }];
};
function assertValidAbi(humanReadableAbi, functionName) {
  try {
    var fn = new Interface([humanReadableAbi]).getFunction(functionName);

    // assert view function
    invariant(fn.stateMutability === 'view', 'You can only use view functions');

    // assert single output
    invariant(Array.isArray(fn.outputs) && fn.outputs.length === 1, 'The function must return 1 value');

    // assert output is boolean or uint
    invariant(fn.outputs[0] && (fn.outputs[0].type === 'bool' || /^uint(8|16|32|64|128|256)$/.test(fn.outputs[0].type)), 'The function must return a boolean or uint[8|16|32|64|128|256]');
  } catch (e) {
    throw new InvalidAccessCriteriaError("Invalid abi: ".concat(humanReadableAbi, " or function: ").concat(functionName, ". Only view functions returning a single boolean or uint output are supported"));
  }
}

/**
 * verifies arguments are valid, as well as the prefixed `:userAddress` param exists
 * @param condition - the user provided condition object
 */
function assertValidFunctionParams(condition) {
  try {
    var fn = new Interface([condition.abi]).getFunction(condition.functionName);
    var userAddressParamFound = false;
    invariant(fn.inputs.length === condition.params.length, 'wrong number of params');
    fn.inputs.forEach(function (input, index) {
      var param = condition.params[index];
      invariant(param, "param ".concat(input.name || input.type, " is missing"));
      if (input.baseType === 'array' || input.baseType === 'tuple') {
        invariant(Array.isArray(param) && param.length > 0, "param ".concat(input.name, " expects an array argument"));
        if (param.includes(':userAddress')) {
          userAddressParamFound = true;
        }
      }
      if (input.baseType === 'address') {
        if (param === ':userAddress') {
          userAddressParamFound = true;
        } else {
          assertValidAddress(param);
        }
      } else if (input.baseType.includes('int')) {
        BigNumber.from(param);
      } else if (input.baseType === 'bool') {
        invariant(param === 'true' || param === 'false', "param ".concat(input.name, " is invalid, must be a boolean)"));
      } else if (input.baseType === 'bytes') {
        invariant(/^0x[0-9A-Fa-f]+$/.test(param), "param ".concat(input.name, " is invalid, must be a hex string)"));
      }
    });
    invariant(userAddressParamFound, "param :userAddress is missing");
  } catch (e) {
    assertError(e);
    throw new InvalidAccessCriteriaError(e.message);
  }
}

/**
 * verifies the comparison is valid based on the function output type
 * @param condition - the user provided condition object
 */
function assertValidComparison(condition) {
  try {
    invariant(Object.values(ConditionComparisonOperator).includes(condition.comparison), "comparison operator ".concat(condition.comparison, " is unsupported"));

    // get function return type
    var fn = new Interface([condition.abi]).getFunction(condition.functionName);
    invariant(Array.isArray(fn.outputs) && fn.outputs.length === 1 && fn.outputs[0], 'function should have a single output');

    // for bool, array, tuple results we only allow equal/not equal
    if (['bool', 'string', 'bytes', 'address', 'array', 'tuple'].includes(fn.outputs[0].baseType)) {
      invariant(condition.comparison === ConditionComparisonOperator.EQUAL || condition.comparison === ConditionComparisonOperator.NOT_EQUAL, "comparison ".concat(condition.comparison, " is invalid for function return type ").concat(fn.outputs[0].type));
    }

    // for uint results we allow all comparisons but we check the provided value
    if (/^uint(8|16|32|64|128|256)$/.test(fn.outputs[0].baseType)) {
      BigNumber.from(condition.value);
    }
  } catch (e) {
    assertError(e);
    throw new InvalidAccessCriteriaError(e.message);
  }
}

var transformCollectCondition = function transformCollectCondition(condition, accessControlContract, context) {
  var _context$profileId;
  invariant(isNonNullable(condition.publicationId), 'publicationId is missing');
  assertValidPublicationId(condition.publicationId);
  var _condition$publicatio = condition.publicationId.split('-'),
    _condition$publicatio2 = _slicedToArray(_condition$publicatio, 2),
    publisherId = _condition$publicatio2[0],
    publicationId = _condition$publicatio2[1];
  return [{
    conditionType: LitConditionType.EVM_CONTRACT,
    contractAddress: accessControlContract.address,
    chain: toLitSupportedChainName(accessControlContract.chainId),
    functionName: LitKnownMethods.HAS_COLLECTED,
    functionParams: [LitKnownParams.USER_ADDRESS, BigNumber.from(publisherId).toString(), BigNumber.from(publicationId).toString(), (_context$profileId = context === null || context === void 0 ? void 0 : context.profileId) !== null && _context$profileId !== void 0 ? _context$profileId : BigNumber.from(0).toString(), '0x'],
    functionAbi: {
      constant: true,
      inputs: [{
        internalType: 'address',
        name: 'requestorAddress',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'publisherId',
        type: 'uint256'
      }, {
        internalType: 'uint256',
        name: 'pubId',
        type: 'uint256'
      }, {
        internalType: 'uint256',
        name: 'collectorProfileId',
        type: 'uint256'
      }, {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }],
      name: LitKnownMethods.HAS_COLLECTED,
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    },
    returnValueTest: {
      key: '',
      comparator: LitScalarOperator.EQUAL,
      value: 'true'
    }
  }];
};

var transformEoaCondition = function transformEoaCondition(condition) {
  assertValidAddress(condition.address);
  return [{
    conditionType: LitConditionType.EVM_BASIC,
    contractAddress: '',
    // this is intentional, its how lit implements checking for EOA ownership
    standardContractType: '',
    // same as above
    chain: SupportedChains.POLYGON,
    method: '',
    // same here
    parameters: [LitKnownParams.USER_ADDRESS],
    returnValueTest: {
      comparator: LitScalarOperator.EQUAL,
      value: condition.address
    }
  }];
};

function parseConditionAmount(condition) {
  try {
    return parseFixed(condition.amount.value, condition.amount.asset.decimals).toString();
  } catch (e) {
    throw new InvalidAccessCriteriaError("Invalid amount: ".concat(condition.amount.value));
  }
}
var transformErc20Condition = function transformErc20Condition(condition) {
  assertValidAddress(condition.amount.asset.contract.address);
  assertSupportedChainId(condition.amount.asset.contract.chainId);
  return [{
    conditionType: LitConditionType.EVM_BASIC,
    contractAddress: condition.amount.asset.contract.address.toLowerCase(),
    standardContractType: LitContractType.ERC20,
    chain: toLitSupportedChainName(condition.amount.asset.contract.chainId),
    method: LitKnownMethods.BALANCE_OF,
    parameters: [LitKnownParams.USER_ADDRESS],
    returnValueTest: {
      comparator: resolveScalarOperatorSymbol(condition.condition),
      value: parseConditionAmount(condition)
    }
  }];
};

var transformFollowCondition = function transformFollowCondition(condition, accessControlContract) {
  assertValidProfileId(condition.follow);
  return [{
    conditionType: LitConditionType.EVM_CONTRACT,
    contractAddress: accessControlContract.address,
    chain: toLitSupportedChainName(accessControlContract.chainId),
    functionName: LitKnownMethods.IS_FOLLOWING,
    functionParams: [LitKnownParams.USER_ADDRESS, BigNumber.from(condition.follow).toString(), BigNumber.from(0).toString(), '0x'],
    functionAbi: {
      constant: true,
      inputs: [{
        internalType: 'address',
        name: 'requestorAddress',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256'
      }, {
        internalType: 'uint256',
        name: 'followerProfileId',
        type: 'uint256'
      }, {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }],
      name: LitKnownMethods.IS_FOLLOWING,
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    },
    returnValueTest: {
      key: '',
      comparator: LitScalarOperator.EQUAL,
      value: 'true'
    }
  }];
};

var _handleOwnsAtLeastOneNftFromCollection = function _handleOwnsAtLeastOneNftFromCollection() {
  return {
    method: LitKnownMethods.BALANCE_OF,
    parameters: [LitKnownParams.USER_ADDRESS],
    returnValueTest: {
      comparator: LitScalarOperator.GREATER_THAN,
      value: LitKnownParams.ZERO
    }
  };
};
var _handleOwnsOneSpecificNftFromCollection = function _handleOwnsOneSpecificNftFromCollection(tokenId) {
  return {
    method: LitKnownMethods.OWNER_OF,
    parameters: [tokenId],
    returnValueTest: {
      comparator: LitScalarOperator.EQUAL,
      value: LitKnownParams.USER_ADDRESS
    }
  };
};
var _handleOwnsOneSpecificNftFromERC1155Collection = function _handleOwnsOneSpecificNftFromERC1155Collection(tokenId) {
  return {
    method: LitKnownMethods.BALANCE_OF,
    parameters: [LitKnownParams.USER_ADDRESS, tokenId],
    returnValueTest: {
      comparator: LitScalarOperator.GREATER_THAN,
      value: LitKnownParams.ZERO
    }
  };
};
var _handleOwnsMultipleFromERC1155Collection = function _handleOwnsMultipleFromERC1155Collection(tokenIds) {
  return {
    method: LitKnownMethods.BALANCE_OF_BATCH,
    parameters: [tokenIds.map(function () {
      return LitKnownParams.USER_ADDRESS;
    }).join(','), tokenIds.join(',')],
    returnValueTest: {
      comparator: LitScalarOperator.GREATER_THAN,
      value: LitKnownParams.ZERO
    }
  };
};
var transformNftCondition = function transformNftCondition(condition) {
  assertValidAddress(condition.contract.address);
  assertSupportedChainId(condition.contract.chainId);
  assertValidTokenIds(condition.tokenIds);
  var partial;
  var result = {
    conditionType: LitConditionType.EVM_BASIC,
    contractAddress: condition.contract.address.toLowerCase(),
    standardContractType: LitContractType[condition.contractType],
    chain: toLitSupportedChainName(condition.contract.chainId)
  };
  switch (condition.contractType) {
    case NftContractType$1.ERC721:
      // case owns at least one nft from the collection
      if (!condition.tokenIds || condition.tokenIds.length === 0) {
        partial = _handleOwnsAtLeastOneNftFromCollection();
        // case owns a single specific nft from the collection
      } else if (condition.tokenIds.length === 1) {
        var _condition$tokenIds$;
        partial = _handleOwnsOneSpecificNftFromCollection((_condition$tokenIds$ = condition.tokenIds[0]) !== null && _condition$tokenIds$ !== void 0 ? _condition$tokenIds$ : never());
        // case owns multiple specific nfts from the collection
      } else {
        // workaround for ERC721 contracts that do not support balanceOfBatch
        var partials = condition.tokenIds.map(function (tokenId) {
          return _handleOwnsOneSpecificNftFromCollection(tokenId);
        });
        var results = partials.map(function (p) {
          return Object.assign(p, result);
        });
        // wrap the condition in a Lit or condition
        return insertObjectInBetweenArrayElements(results, {
          operator: LitOperatorType.OR
        });
      }
      break;
    case NftContractType$1.ERC1155:
      if (!condition.tokenIds || condition.tokenIds.length === 0) {
        throw new InvalidAccessCriteriaError("ERC1155 requires at least one token id");
      } else if (condition.tokenIds.length === 1) {
        var _condition$tokenIds$2;
        partial = _handleOwnsOneSpecificNftFromERC1155Collection((_condition$tokenIds$2 = condition.tokenIds[0]) !== null && _condition$tokenIds$2 !== void 0 ? _condition$tokenIds$2 : never());
      } else {
        partial = _handleOwnsMultipleFromERC1155Collection(condition.tokenIds);
      }
      break;
    default:
      assertNever(condition.contractType, 'Unsupported contract type');
  }
  return [Object.assign(result, partial)];
};

var transformProfileCondition = function transformProfileCondition(condition, accessControlContract) {
  assertValidProfileId(condition.profileId);
  return [{
    conditionType: LitConditionType.EVM_CONTRACT,
    contractAddress: accessControlContract.address,
    chain: toLitSupportedChainName(accessControlContract.chainId),
    functionName: LitKnownMethods.HAS_ACCESS,
    functionParams: [LitKnownParams.USER_ADDRESS, BigNumber.from(condition.profileId).toString(), '0x'],
    functionAbi: {
      constant: true,
      inputs: [{
        internalType: 'address',
        name: 'requestorAddress',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256'
      }, {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }],
      name: 'hasAccess',
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    },
    returnValueTest: {
      key: '',
      comparator: LitScalarOperator.EQUAL,
      value: 'true'
    }
  }];
};

/**
 * Bespoke implementation of flatten that only flattens one level of nesting
 */
function flatten(conditions) {
  // boolean transform supports one level of nesting
  return conditions.reduce(function (acc, val) {
    if (Array.isArray(val) && val.length === 1) {
      return acc.concat(val);
    } else {
      // handle nested conditions
      acc.push(val);
      return acc;
    }
  }, []);
}
function transformSimpleCondition(condition, accessControlContract, context) {
  switch (condition.type) {
    case raw.ConditionType.EOA_OWNERSHIP:
      return transformEoaCondition(condition);
    case raw.ConditionType.ERC20_OWNERSHIP:
      return transformErc20Condition(condition);
    case raw.ConditionType.NFT_OWNERSHIP:
      return transformNftCondition(condition);
    case raw.ConditionType.PROFILE_OWNERSHIP:
      return transformProfileCondition(condition, accessControlContract);
    case raw.ConditionType.COLLECT:
      return transformCollectCondition(condition, accessControlContract, context);
    case raw.ConditionType.FOLLOW:
      return transformFollowCondition(condition, accessControlContract);
    case raw.ConditionType.ADVANCED_CONTRACT:
      return transformAdvancedContractCondition(condition);
    default:
      throw new InvariantError("Unknown access criteria type: \n".concat(JSON.stringify(condition, null, 2)));
  }
}
function transformCompoundCondition(condition, accessControlContract, context) {
  if (condition.type === raw.ConditionType.AND || condition.type === raw.ConditionType.OR) {
    assertAtLeastTwoCriteria(condition.criteria);
    assertNoMoreThanFiveCriteria(condition.criteria);
    try {
      var flat = flatten(condition.criteria.map(function (criterion) {
        return transformSimpleCondition(criterion, accessControlContract, context);
      }));
      return insertObjectInBetweenArrayElements(flat, {
        operator: LitOperatorType[condition.type]
      });
    } catch (err) {
      if (err instanceof InvariantError) {
        throw new InvalidAccessCriteriaError('Cannot nest conditions more than 2 levels deep.');
      }
      throw err;
    }
  }
  return transformSimpleCondition(condition, accessControlContract, context);
}
function createUnifiedAccessControlConditions(condition, accessControlContract, context) {
  if (condition.type !== raw.ConditionType.OR) {
    throw new InvalidAccessCriteriaError('Root condition must be an OR condition');
  }
  if (condition.criteria.length < 1) {
    throw new InvalidAccessCriteriaError('Root condition must have at least one criteria');
  }
  assertNoMoreThanFiveCriteria(condition.criteria);
  if (condition.criteria.length > 2) {
    throw new InvalidAccessCriteriaError('Root conditions can only have up to 2 criteria.');
  }
  if (!condition.criteria.some(function (c) {
    return c.type === raw.ConditionType.PROFILE_OWNERSHIP;
  })) {
    throw new InvalidAccessCriteriaError("Root conditions must contain a ".concat(raw.ConditionType.PROFILE_OWNERSHIP, " condition"));
  }
  var flat = flatten(condition.criteria.map(function (criterion) {
    return transformCompoundCondition(criterion, accessControlContract, context);
  }));

  // the type assertion is needed because the Lit SDK typedef suggests nested conditions are not allowed but they are
  return insertObjectInBetweenArrayElements(flat, {
    operator: LitOperatorType.OR
  });
}
function transformFromRaw(condition, accessControlContract) {
  return createUnifiedAccessControlConditions(condition, accessControlContract);
}
function toRawNetworkAddress(_ref) {
  var address = _ref.address,
    chainId = _ref.chainId;
  return {
    address: raw.toEvmAddress(address),
    chainId: raw.toChainId(chainId)
  };
}
function toRawSimpleCondition(gqlCondition) {
  var _raw$ConditionCompari, _gqlCondition$tokenId, _gqlCondition$tokenId2, _gqlCondition$tokenId3, _raw$ConditionCompari2;
  switch (gqlCondition.__typename) {
    case 'EoaOwnershipCondition':
      return raw.eoaOwnershipCondition({
        address: gqlCondition.address
      });
    case 'ProfileOwnershipCondition':
      return raw.profileOwnershipCondition({
        profileId: gqlCondition.profileId
      });
    case 'Erc20OwnershipCondition':
      return raw.erc20OwnershipCondition({
        condition: (_raw$ConditionCompari = raw.ConditionComparisonOperator[gqlCondition.condition]) !== null && _raw$ConditionCompari !== void 0 ? _raw$ConditionCompari : never("Not supported condition: ".concat(gqlCondition.condition)),
        contract: toRawNetworkAddress(gqlCondition.amount.asset.contract),
        decimals: gqlCondition.amount.asset.decimals,
        value: gqlCondition.amount.value
      });
    case 'NftOwnershipCondition':
      switch (gqlCondition.contractType) {
        case NftContractType.Erc721:
          return raw.erc721OwnershipCondition({
            contract: toRawNetworkAddress(gqlCondition.contract),
            tokenIds: (_gqlCondition$tokenId = (_gqlCondition$tokenId2 = gqlCondition.tokenIds) === null || _gqlCondition$tokenId2 === void 0 ? void 0 : _gqlCondition$tokenId2.map(raw.toTokenId)) !== null && _gqlCondition$tokenId !== void 0 ? _gqlCondition$tokenId : undefined
          });
        case NftContractType.Erc1155:
          return raw.erc1155OwnershipCondition({
            contract: toRawNetworkAddress(gqlCondition.contract),
            tokenIds: (_gqlCondition$tokenId3 = gqlCondition.tokenIds) === null || _gqlCondition$tokenId3 === void 0 ? void 0 : _gqlCondition$tokenId3.map(raw.toTokenId)
          });
        default:
          assertNever(gqlCondition.contractType, 'Unknown NFT contract type');
      }
      break;
    case 'CollectCondition':
      return raw.collectCondition({
        publicationId: gqlCondition.publicationId,
        thisPublication: gqlCondition.thisPublication
      });
    case 'FollowCondition':
      return raw.followCondition({
        follow: raw.toProfileId(gqlCondition.follow)
      });
    case 'AdvancedContractCondition':
      return raw.advancedContractCondition({
        contract: toRawNetworkAddress(gqlCondition.contract),
        abi: gqlCondition.abi,
        functionName: gqlCondition.functionName,
        params: gqlCondition.params.slice(),
        comparison: (_raw$ConditionCompari2 = raw.ConditionComparisonOperator[gqlCondition.comparison]) !== null && _raw$ConditionCompari2 !== void 0 ? _raw$ConditionCompari2 : never("Not supported condition: ".concat(gqlCondition.comparison)),
        value: gqlCondition.value
      });
    default:
      assertNever(gqlCondition, 'Unknown access condition type');
  }
}
function toAnyRawCondition(gqlCondition) {
  switch (gqlCondition.__typename) {
    case 'OrCondition':
      return raw.orCondition(gqlCondition.criteria.map(toRawSimpleCondition));
    case 'AndCondition':
      return raw.andCondition(gqlCondition.criteria.map(toRawSimpleCondition));
    default:
      return toRawSimpleCondition(gqlCondition);
  }
}
function toRawAccessCondition(gqlCondition) {
  assertAtLeastTwoCriteria(gqlCondition.criteria);
  return raw.accessCondition(gqlCondition.criteria.map(function (c) {
    return toAnyRawCondition(c);
  }));
}
function transformFromGql(strategy, accessControlContract, context) {
  var transformed = toRawAccessCondition(strategy.accessCondition);
  return createUnifiedAccessControlConditions(transformed, accessControlContract, context);
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

var AuthSigData = z.object({
  sig: z.string(),
  derivedVia: z.string(),
  signedMessage: z.string(),
  address: z.string()
}).strict();
function createAuthStorage(storageProvider, namespace) {
  var authSigSchema = new BaseStorageSchema("digi.".concat(namespace, ".gated"), AuthSigData);
  return Storage.createForSchema(authSigSchema, storageProvider);
}

var _ToEncryptPaths;
var ToEncryptPaths = (_ToEncryptPaths = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ToEncryptPaths, raw.PublicationSchemaId.ARTICLE_LATEST, ['digi.content', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.AUDIO_LATEST, ['digi.content', 'digi.audio.item', 'digi.audio.cover', 'digi.audio.credits', 'digi.audio.artist', 'digi.audio.genre', 'digi.audio.recordLabel', 'digi.audio.lyrics', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.CHECKING_IN_LATEST, ['digi.content', 'digi.location', 'digi.address.country', 'digi.address.formatted', 'digi.address.locality', 'digi.address.postalCode', 'digi.address.region', 'digi.address.streetAddress', 'digi.position', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.EMBED_LATEST, ['digi.content', 'digi.embed', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.EVENT_LATEST, ['digi.content', 'digi.location', 'digi.address.country', 'digi.address.formatted', 'digi.address.locality', 'digi.address.postalCode', 'digi.address.region', 'digi.address.streetAddress', 'digi.position', 'digi.startsAt', 'digi.endsAt', 'digi.links[n]', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.IMAGE_LATEST, ['digi.content', 'digi.image.item', 'digi.image.altTag', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.LINK_LATEST, ['digi.content', 'digi.sharingLink', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.LIVESTREAM_LATEST, ['digi.content', 'digi.startsAt', 'digi.endsAt', 'digi.playbackUrl', 'digi.liveUrl', 'digi.checkLiveAPI', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.MINT_LATEST, ['digi.content', 'digi.mintLink', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.SPACE_LATEST, ['digi.content', 'digi.link', 'digi.startsAt', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ToEncryptPaths, raw.PublicationSchemaId.STORY_LATEST, ['digi.content', 'digi.asset.item', 'digi.asset.altTag', 'digi.asset.cover', 'digi.asset.credits', 'digi.asset.artist', 'digi.asset.genre', 'digi.asset.recordLabel', 'digi.asset.lyrics']), raw.PublicationSchemaId.TEXT_ONLY_LATEST, ['digi.content']), raw.PublicationSchemaId.THREE_D_LATEST, ['digi.content', 'digi.assets[n].uri', 'digi.assets[n].playerUrl', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.TRANSACTION_LATEST, ['digi.content', 'digi.txHash', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']), raw.PublicationSchemaId.VIDEO_LATEST, ['digi.content', 'digi.video.item', 'digi.video.altTag', 'digi.video.cover', 'digi.attachments[n].item', 'digi.attachments[n].altTag', 'digi.attachments[n].cover', 'digi.attachments[n].credits', 'digi.attachments[n].artist', 'digi.attachments[n].genre', 'digi.attachments[n].recordLabel', 'digi.attachments[n].lyrics']));
function resolvePathsToEncrypt(_ref) {
  var $schema = _ref.$schema;
  if ($schema in ToEncryptPaths) {
    return ToEncryptPaths[$schema];
  }
  // Fail-safe: do not encrypt if schema is not supported, this could happen if a
  // new schema is defined and the dev adopts it without updating the SDK first.
  return [];
}
var DecryptablePathsMapping = {
  'digi.address.country': 'address.country',
  'digi.address.formatted': 'address.formatted',
  'digi.address.locality': 'address.locality',
  'digi.address.postalCode': 'address.postalCode',
  'digi.address.region': 'address.region',
  'digi.address.streetAddress': 'address.streetAddress',
  'digi.asset.altTag': 'asset.altTag',
  'digi.asset.artist': 'asset.artist',
  'digi.asset.cover': 'asset.cover.raw.uri',
  'digi.asset.credits': 'asset.credits',
  'digi.asset.genre': 'asset.genre',
  'digi.asset.item': ['asset.audio.raw.uri', 'asset.image.raw.uri', 'asset.video.raw.uri'],
  'digi.asset.lyrics': 'asset.lyrics',
  'digi.asset.recordLabel': 'asset.recordLabel',
  'digi.assets[n].playerUrl': 'assets[n].playerURL',
  'digi.assets[n].uri': 'assets[n].uri',
  'digi.attachments[n].altTag': 'attachments[n].altTag',
  'digi.attachments[n].artist': 'attachments[n].artist',
  'digi.attachments[n].cover': 'attachments[n].cover.raw.uri',
  'digi.attachments[n].credits': 'attachments[n].credits',
  'digi.attachments[n].genre': 'attachments[n].genre',
  'digi.attachments[n].item': ['attachments[n].audio.raw.uri', 'attachments[n].image.raw.uri', 'attachments[n].video.raw.uri'],
  'digi.attachments[n].lyrics': 'attachments[n].lyrics',
  'digi.attachments[n].recordLabel': 'attachments[n].recordLabel',
  'digi.audio.artist': 'asset.artist',
  'digi.audio.cover': 'asset.cover.raw.uri',
  'digi.audio.credits': 'asset.credits',
  'digi.audio.genre': 'asset.genre',
  'digi.audio.item': 'asset.audio.raw.uri',
  'digi.audio.lyrics': 'asset.lyrics',
  'digi.audio.recordLabel': 'asset.recordLabel',
  'digi.checkLiveAPI': 'checkLiveAPI',
  'digi.content': 'content',
  'digi.embed': 'embed',
  'digi.endsAt': 'endsAt',
  'digi.position': 'geographic.rawURI',
  'digi.image.altTag': 'asset.altTag',
  'digi.image.item': 'asset.image.raw.uri',
  'digi.link': 'link',
  'digi.links[n]': 'links[n]',
  'digi.liveUrl': 'liveURL',
  'digi.location': 'location',
  'digi.mintLink': 'mintLink',
  'digi.playbackUrl': 'playbackURL',
  'digi.sharingLink': 'sharingLink',
  'digi.startsAt': 'startsAt',
  'digi.txHash': 'txHash',
  'digi.video.altTag': 'asset.altTag',
  'digi.video.cover': 'asset.cover.raw.uri',
  'digi.video.item': 'asset.video.raw.uri'
};
function resolvePathsToDecrypt(_ref2) {
  var encryptedWith = _ref2.encryptedWith;
  return encryptedWith.encryptedPaths.reduce(function (acc, path) {
    if (path in DecryptablePathsMapping && DecryptablePathsMapping[path]) {
      acc.push(DecryptablePathsMapping[path]);
    }
    return acc;
  }, []).flat();
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function pathToRegExp(path) {
  return new RegExp("^".concat(path.replaceAll('.', '\\.').replaceAll('[n]', '\\.\\d+'), "$"));
}
function update(_x, _x2, _x3) {
  return _update.apply(this, arguments);
}
function _update() {
  _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input, paths, updater) {
    var output, regexps, toUpdate, _iterator, _step, _path, _value, updated;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          output = traverse.clone(input);
          regexps = paths.map(pathToRegExp);
          toUpdate = traverse.paths(output).filter(function (path) {
            return regexps.some(function (r) {
              return r.test(path.join('.'));
            });
          });
          _iterator = _createForOfIteratorHelper(toUpdate);
          _context.prev = 4;
          _iterator.s();
        case 6:
          if ((_step = _iterator.n()).done) {
            _context.next = 16;
            break;
          }
          _path = _step.value;
          _value = traverse.get(output, _path);
          if (!(typeof _value === 'string' && _value.length > 0)) {
            _context.next = 14;
            break;
          }
          _context.next = 12;
          return updater(_value, _path.join('.'));
        case 12:
          updated = _context.sent;
          traverse.set(output, _path, updated);
        case 14:
          _context.next = 6;
          break;
        case 16:
          _context.next = 21;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](4);
          _iterator.e(_context.t0);
        case 21:
          _context.prev = 21;
          _iterator.f();
          return _context.finish(21);
        case 24:
          return _context.abrupt("return", output);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 18, 21, 24]]);
  }));
  return _update.apply(this, arguments);
}

var PublicationMetadataEncryptor = /*#__PURE__*/function () {
  function PublicationMetadataEncryptor(cipher) {
    _classCallCheck(this, PublicationMetadataEncryptor);
    this.cipher = cipher;
  }
  _createClass(PublicationMetadataEncryptor, [{
    key: "encrypt",
    value: function () {
      var _encrypt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(metadata) {
        var _this = this;
        var paths, encrypted;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              paths = resolvePathsToEncrypt(metadata);
              _context.next = 3;
              return update(metadata, paths, function (value) {
                return _this.encryptString(value);
              });
            case 3:
              encrypted = _context.sent;
              return _context.abrupt("return", {
                encrypted: encrypted,
                paths: paths
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function encrypt(_x) {
        return _encrypt.apply(this, arguments);
      }
      return encrypt;
    }()
  }, {
    key: "encryptString",
    value: function () {
      var _encryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(value) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.cipher.encrypt(value));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function encryptString(_x2) {
        return _encryptString.apply(this, arguments);
      }
      return encryptString;
    }()
  }]);
  return PublicationMetadataEncryptor;
}();
var PublicationMetadataDecryptor = /*#__PURE__*/function () {
  function PublicationMetadataDecryptor(cipher) {
    _classCallCheck(this, PublicationMetadataDecryptor);
    this.cipher = cipher;
  }
  _createClass(PublicationMetadataDecryptor, [{
    key: "decrypt",
    value: function () {
      var _decrypt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(encrypted) {
        var _this2 = this;
        var paths;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              paths = resolvePathsToDecrypt(encrypted);
              return _context3.abrupt("return", update(encrypted, paths, function (value) {
                return _this2.decryptString(value);
              }));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function decrypt(_x3) {
        return _decrypt.apply(this, arguments);
      }
      return decrypt;
    }()
  }, {
    key: "decryptString",
    value: function () {
      var _decryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(value) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.cipher.decrypt(value));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function decryptString(_x4) {
        return _decryptString.apply(this, arguments);
      }
      return decryptString;
    }()
  }]);
  return PublicationMetadataDecryptor;
}();

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

// Adapted from ts-toolbelt: https://github.com/millsp/ts-toolbelt/blob/master/sources/Object/Paths.ts#L21

function isLitError(throwable) {
  if (_typeof(throwable) !== 'object' || throwable === null) {
    return false;
  }
  return ['name', 'message', 'errorCode'].every(function (key) {
    return key in throwable;
  });
}

function isIncorrectAccessControlConditionsError(error) {
  return isLitError(error) && error.errorCode === 'incorrect_access_control_conditions';
}

/**
 * As per [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) the information
 * provided will be used to create a SIWE message.
 *
 * @example
 * ```
 * ${domain} wants you to sign in with your Ethereum account:
 * ${address}
 *
 * ${statement}
 *
 * URI: ${uri}
 * ...
 * ```
 */

/**
 * An object implementing basic signer functionality.
 *
 * This is structurally compatible with the `ethers` `Signer` interface.
 */

function uint8arrayToHexString(buffer) {
  return buffer.reduce(function (str, _byte) {
    return str + _byte.toString(16).padStart(2, '0');
  }, '');
}
var GatedClient = /*#__PURE__*/function () {
  function GatedClient(_ref) {
    var authentication = _ref.authentication,
      environment = _ref.environment,
      signer = _ref.signer,
      storageProvider = _ref.storageProvider,
      encryptionProvider = _ref.encryptionProvider;
    _classCallCheck(this, GatedClient);
    this.authentication = authentication;
    this.environment = environment;
    this.signer = signer;
    this.storage = createAuthStorage(storageProvider, environment.name);
    this.encryptionProvider = encryptionProvider;
    this.litClient = new NodeClient({
      debug: false
    });
  }
  _createClass(GatedClient, [{
    key: "encryptPublicationMetadata",
    value: function () {
      var _encryptPublicationMetadata = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(metadata, accessCondition) {
        var cipher, encryptionKey, enc, _yield$enc$encrypt, encrypted, paths;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.ensureLitConnection();
            case 2:
              _context.next = 4;
              return this.encryptionProvider.createCipher();
            case 4:
              cipher = _context.sent;
              _context.next = 7;
              return this.saveEncryptionKey(cipher, accessCondition);
            case 7:
              encryptionKey = _context.sent;
              enc = new PublicationMetadataEncryptor(cipher);
              _context.next = 11;
              return enc.encrypt(metadata);
            case 11:
              _yield$enc$encrypt = _context.sent;
              encrypted = _yield$enc$encrypt.encrypted;
              paths = _yield$enc$encrypt.paths;
              return _context.abrupt("return", success(_objectSpread2(_objectSpread2({}, encrypted), {}, {
                digi: _objectSpread2(_objectSpread2({}, encrypted.digi), {}, {
                  encryptedWith: {
                    encryptionKey: encryptionKey,
                    accessCondition: accessCondition,
                    provider: raw.EncryptionProvider.LIT_PROTOCOL,
                    encryptedPaths: paths
                  }
                })
              })));
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function encryptPublicationMetadata(_x, _x2) {
        return _encryptPublicationMetadata.apply(this, arguments);
      }
      return encryptPublicationMetadata;
    }()
  }, {
    key: "decryptPublicationMetadataFragment",
    value: function () {
      var _decryptPublicationMetadataFragment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(encryptedMetadata, context) {
        var decrypted;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.ensureLitConnection();
            case 2:
              _context2.prev = 2;
              _context2.next = 5;
              return this.decrypt(encryptedMetadata, context);
            case 5:
              decrypted = _context2.sent;
              return _context2.abrupt("return", success(decrypted));
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              if (!isLitError(_context2.t0)) {
                _context2.next = 13;
                break;
              }
              return _context2.abrupt("return", failure(new CannotDecryptError(_context2.t0.message, {
                cause: _context2.t0
              })));
            case 13:
              assertError(_context2.t0);
              return _context2.abrupt("return", failure(new CannotDecryptError('Cannot decrypt the metadata', {
                cause: _context2.t0
              })));
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 9]]);
      }));
      function decryptPublicationMetadataFragment(_x3, _x4) {
        return _decryptPublicationMetadataFragment.apply(this, arguments);
      }
      return decryptPublicationMetadataFragment;
    }()
  }, {
    key: "decrypt",
    value: function () {
      var _decrypt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(encryptedMetadata, context) {
        var cipher;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.retrieveCipher(encryptedMetadata, context);
            case 2:
              cipher = _context3.sent;
              _context3.t0 = encryptedMetadata.__typename;
              _context3.next = _context3.t0 === 'ArticleMetadataV3' ? 6 : _context3.t0 === 'AudioMetadataV3' ? 6 : _context3.t0 === 'CheckingInMetadataV3' ? 6 : _context3.t0 === 'EmbedMetadataV3' ? 6 : _context3.t0 === 'EventMetadataV3' ? 6 : _context3.t0 === 'ImageMetadataV3' ? 6 : _context3.t0 === 'LinkMetadataV3' ? 6 : _context3.t0 === 'LiveStreamMetadataV3' ? 6 : _context3.t0 === 'MintMetadataV3' ? 6 : _context3.t0 === 'SpaceMetadataV3' ? 6 : _context3.t0 === 'StoryMetadataV3' ? 6 : _context3.t0 === 'TextOnlyMetadataV3' ? 6 : _context3.t0 === 'ThreeDMetadataV3' ? 6 : _context3.t0 === 'TransactionMetadataV3' ? 6 : _context3.t0 === 'VideoMetadataV3' ? 6 : 7;
              break;
            case 6:
              return _context3.abrupt("return", new PublicationMetadataDecryptor(cipher).decrypt(encryptedMetadata));
            case 7:
              assertNever(encryptedMetadata, "Not supported metadata type");
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function decrypt(_x5, _x6) {
        return _decrypt.apply(this, arguments);
      }
      return decrypt;
    }()
  }, {
    key: "getOrCreateAuthSig",
    value: function () {
      var _getOrCreateAuthSig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var authSig, siweMessage, messageToSign, signature, recoveredAddress, newAuthSig;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.storage.get();
            case 2:
              authSig = _context4.sent;
              if (!authSig) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return", authSig);
            case 5:
              _context4.next = 7;
              return this.createSiweMessage();
            case 7:
              siweMessage = _context4.sent;
              messageToSign = siweMessage.prepareMessage();
              _context4.next = 11;
              return this.signer.signMessage(messageToSign);
            case 11:
              signature = _context4.sent;
              recoveredAddress = verifyMessage(messageToSign, signature);
              newAuthSig = {
                sig: signature,
                derivedVia: 'web3.eth.personal.sign',
                signedMessage: messageToSign,
                address: recoveredAddress
              };
              _context4.next = 16;
              return this.storage.set(newAuthSig);
            case 16:
              return _context4.abrupt("return", newAuthSig);
            case 17:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getOrCreateAuthSig() {
        return _getOrCreateAuthSig.apply(this, arguments);
      }
      return getOrCreateAuthSig;
    }()
  }, {
    key: "ensureLitConnection",
    value: function () {
      var _ensureLitConnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (this.litClient.ready) {
                _context5.next = 3;
                break;
              }
              _context5.next = 3;
              return this.litClient.connect();
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function ensureLitConnection() {
        return _ensureLitConnection.apply(this, arguments);
      }
      return ensureLitConnection;
    }()
  }, {
    key: "saveEncryptionKey",
    value: function () {
      var _saveEncryptionKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(cipher, accessCondition) {
        var symmetricKey, authSig, encryptedSymmetricKey;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return cipher.exportKey();
            case 2:
              symmetricKey = _context6.sent;
              _context6.next = 5;
              return this.getOrCreateAuthSig();
            case 5:
              authSig = _context6.sent;
              _context6.next = 8;
              return this.litClient.saveEncryptionKey({
                authSig: authSig,
                chain: this.environment.chainName,
                symmetricKey: symmetricKey,
                unifiedAccessControlConditions: transformFromRaw(accessCondition, this.environment.accessControlContract)
              });
            case 8:
              encryptedSymmetricKey = _context6.sent;
              return _context6.abrupt("return", raw.toLitEncryptionKey(uint8arrayToHexString(encryptedSymmetricKey)));
            case 10:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function saveEncryptionKey(_x7, _x8) {
        return _saveEncryptionKey.apply(this, arguments);
      }
      return saveEncryptionKey;
    }()
  }, {
    key: "retrieveCipher",
    value: function () {
      var _retrieveCipher = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(encryptedMetadata, context) {
        var encryptionKey;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.retrieveEncryptionKey(encryptedMetadata, context);
            case 2:
              encryptionKey = _context7.sent;
              return _context7.abrupt("return", this.encryptionProvider.importCipher(encryptionKey));
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function retrieveCipher(_x9, _x10) {
        return _retrieveCipher.apply(this, arguments);
      }
      return retrieveCipher;
    }()
  }, {
    key: "retrieveEncryptionKey",
    value: function () {
      var _retrieveEncryptionKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(encryptedMetadata, context) {
        var authSig;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.getOrCreateAuthSig();
            case 2:
              authSig = _context8.sent;
              _context8.prev = 3;
              _context8.next = 6;
              return this.litClient.getEncryptionKey({
                authSig: authSig,
                chain: this.environment.chainName,
                toDecrypt: encryptedMetadata.encryptedWith.encryptionKey,
                unifiedAccessControlConditions: transformFromGql(encryptedMetadata.encryptedWith, this.environment.accessControlContract, context)
              });
            case 6:
              return _context8.abrupt("return", _context8.sent);
            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](3);
              if (!(isIncorrectAccessControlConditionsError(_context8.t0) && this.environment.patches)) {
                _context8.next = 15;
                break;
              }
              _context8.next = 14;
              return this.litClient.getEncryptionKey({
                authSig: authSig,
                chain: this.environment.chainName,
                toDecrypt: encryptedMetadata.encryptedWith.encryptionKey,
                unifiedAccessControlConditions: transformFromGql(encryptedMetadata.encryptedWith, this.environment.patches.accessControlContract, context)
              });
            case 14:
              return _context8.abrupt("return", _context8.sent);
            case 15:
              throw _context8.t0;
            case 16:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[3, 9]]);
      }));
      function retrieveEncryptionKey(_x11, _x12) {
        return _retrieveEncryptionKey.apply(this, arguments);
      }
      return retrieveEncryptionKey;
    }()
  }, {
    key: "createSiweMessage",
    value: function () {
      var _createSiweMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.t0 = SiweMessage;
              _context9.t1 = _objectSpread2;
              _context9.next = 4;
              return this.signer.getAddress();
            case 4:
              _context9.t2 = _context9.sent;
              _context9.t3 = this.environment.chainId;
              _context9.t4 = {
                address: _context9.t2,
                version: '1',
                chainId: _context9.t3,
                statement: 'DiGi token-gated content needs you to log-in with the https://litprotocol.com/'
              };
              _context9.t5 = this.authentication;
              _context9.t6 = (0, _context9.t1)(_context9.t4, _context9.t5);
              return _context9.abrupt("return", new _context9.t0(_context9.t6));
            case 10:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function createSiweMessage() {
        return _createSiweMessage.apply(this, arguments);
      }
      return createSiweMessage;
    }()
  }]);
  return GatedClient;
}();

export { CannotDecryptError, GatedClient, isEncryptedPublicationMetadata };
