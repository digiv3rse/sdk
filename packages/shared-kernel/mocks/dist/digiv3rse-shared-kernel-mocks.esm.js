import { getAddress } from '@ethersproject/address';
import { A as Amount, D as Denomination, h as fiat, C as ChainType, f as erc20 } from '../../dist/Amount-a5200950.esm.js';
import 'decimal.js';

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var genRanHex = function genRanHex(size) {
  return _toConsumableArray(Array(size)).map(function () {
    return Math.floor(Math.random() * 16).toString(16);
  }).join('');
};
function mock32BytesHexString() {
  return '0x' + genRanHex(32 * 2);
}
function mockData() {
  return mock32BytesHexString();
}
function mockEvmAddress() {
  return getAddress("0x".concat(genRanHex(20 * 2)));
}
function mockEtherAmount(value) {
  return Amount.ether(value);
}
function mockEtherGweiAmount(value) {
  return Amount.ether(Denomination.gwei(value));
}
function mockMaticGweiAmount(value) {
  return Amount.matic(Denomination.gwei(value));
}
function mockUsdAsset() {
  return fiat({
    name: 'US Dollar',
    symbol: 'USD'
  });
}
function mockUsdAmount(value) {
  return Amount.fiat(mockUsdAsset(), value);
}
function mockErc20Asset(_ref) {
  var address = _ref.address,
    symbol = _ref.symbol,
    _ref$chainType = _ref.chainType,
    chainType = _ref$chainType === void 0 ? ChainType.ETHEREUM : _ref$chainType;
  return erc20({
    address: address,
    chainType: chainType,
    decimals: 18,
    name: 'An ERC20 token',
    symbol: symbol
  });
}
function mockDaiAsset() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$chainType = _ref2.chainType,
    chainType = _ref2$chainType === void 0 ? ChainType.ETHEREUM : _ref2$chainType;
  return erc20({
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    chainType: chainType,
    decimals: 18,
    name: 'Dai Stablecoin',
    symbol: 'DAI'
  });
}
function mockUsdcAsset() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$chainType = _ref3.chainType,
    chainType = _ref3$chainType === void 0 ? ChainType.ETHEREUM : _ref3$chainType;
  return erc20({
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    chainType: chainType,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC'
  });
}
function mockDaiAmount(value) {
  var chainType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ChainType.ETHEREUM;
  return Amount.erc20(mockDaiAsset({
    chainType: chainType
  }), value);
}
function mockUsdcAmount(value) {
  var chainType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ChainType.ETHEREUM;
  return Amount.erc20(mockUsdcAsset({
    chainType: chainType
  }), value);
}
function mockMaticAmount(value) {
  return Amount.matic(value);
}

export { mock32BytesHexString, mockDaiAmount, mockDaiAsset, mockData, mockErc20Asset, mockEtherAmount, mockEtherGweiAmount, mockEvmAddress, mockMaticAmount, mockMaticGweiAmount, mockUsdAmount, mockUsdAsset, mockUsdcAmount, mockUsdcAsset };
