export { P as Profile, a as PublicationReportReason } from '../../dist/PublicationReport-26df5202.esm.js';
export { i as isMomokaPublicationId } from '../../dist/Publication-713a9bb6.esm.js';
export { D as DataTransaction, M as MetaTransaction, N as NativeTransaction, P as ProtocolTransactionKinds, a as TransactionError, b as TransactionErrorReason, c as TransactionEvent, T as TransactionKind, U as UnsignedTransaction } from '../../dist/Transactions-c61bd9da.esm.js';
import { _ as _classCallCheck, a as _createClass } from '../../dist/createClass-ec354b47.esm.js';
import { _ as _inherits, a as _callSuper, b as _assertThisInitialized } from '../../dist/inherits-241db0b5.esm.js';
import { _ as _defineProperty, a as _wrapNativeSuper } from '../../dist/wrapNativeSuper-2b6372d3.esm.js';
import '../../dist/unsupportedIterableToArray-51bb61c2.esm.js';

var NftContractType = /*#__PURE__*/function (NftContractType) {
  NftContractType["Erc721"] = "ERC721";
  NftContractType["Erc1155"] = "ERC1155";
  return NftContractType;
}({});

var ProfileReportReason = /*#__PURE__*/function (ProfileReportReason) {
  ProfileReportReason["IMPERSONATION"] = "IMPERSONATION";
  ProfileReportReason["FRAUD_SOMETHING_ELSE"] = "FRAUD_SOMETHING_ELSE";
  ProfileReportReason["REPETITIVE"] = "REPETITIVE";
  ProfileReportReason["SPAM_SOMETHING_ELSE"] = "SPAM_SOMETHING_ELSE";
  return ProfileReportReason;
}({});

var InsufficientGasError = /*#__PURE__*/function (_Error) {
  _inherits(InsufficientGasError, _Error);
  function InsufficientGasError(asset) {
    var _this;
    _classCallCheck(this, InsufficientGasError);
    _this = _callSuper(this, InsufficientGasError, ['Not enough gas to pay for the operation']);
    _defineProperty(_assertThisInitialized(_this), "name", 'InsufficientGasError');
    _this.asset = asset;
    return _this;
  }
  return _createClass(InsufficientGasError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var PendingSigningRequestError = /*#__PURE__*/function (_Error2) {
  _inherits(PendingSigningRequestError, _Error2);
  function PendingSigningRequestError() {
    var _this2;
    _classCallCheck(this, PendingSigningRequestError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _callSuper(this, PendingSigningRequestError, [].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "name", 'PendingSigningRequestError');
    _defineProperty(_assertThisInitialized(_this2), "message", 'Clear or approve the pending wallet request and retry.');
    return _this2;
  }
  return _createClass(PendingSigningRequestError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var WalletConnectionErrorReason = /*#__PURE__*/function (WalletConnectionErrorReason) {
  WalletConnectionErrorReason["INCORRECT_CHAIN"] = "INCORRECT_CHAIN";
  WalletConnectionErrorReason["WRONG_ACCOUNT"] = "WRONG_ACCOUNT";
  WalletConnectionErrorReason["STALE_CONNECTION_REQUEST"] = "STALE_CONNECTION_REQUEST";
  return WalletConnectionErrorReason;
}({});
var WalletConnectionError = /*#__PURE__*/function (_Error3) {
  _inherits(WalletConnectionError, _Error3);
  function WalletConnectionError(reason) {
    var _this3;
    _classCallCheck(this, WalletConnectionError);
    _this3 = _callSuper(this, WalletConnectionError, ["Wallet connection failed due to ".concat(reason, " error")]);
    _defineProperty(_assertThisInitialized(_this3), "name", 'WalletConnectionError');
    _this3.reason = reason;
    return _this3;
  }
  return _createClass(WalletConnectionError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var UserRejectedError = /*#__PURE__*/function (_Error4) {
  _inherits(UserRejectedError, _Error4);
  function UserRejectedError() {
    var _this4;
    _classCallCheck(this, UserRejectedError);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this4 = _callSuper(this, UserRejectedError, [].concat(args));
    _defineProperty(_assertThisInitialized(_this4), "name", 'UserRejectedError');
    _defineProperty(_assertThisInitialized(_this4), "message", 'User rejected the request');
    return _this4;
  }
  return _createClass(UserRejectedError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var Wallet = /*#__PURE__*/_createClass(function Wallet(address) {
  _classCallCheck(this, Wallet);
  this.address = address;
});

export { InsufficientGasError, NftContractType, PendingSigningRequestError, ProfileReportReason, UserRejectedError, Wallet, WalletConnectionError, WalletConnectionErrorReason };
