'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PublicationReport = require('../../dist/PublicationReport-fdaa0678.cjs.dev.js');
var Publication = require('../../dist/Publication-5b2b4e9f.cjs.dev.js');
var Transactions = require('../../dist/Transactions-84b0c7a3.cjs.dev.js');
var createClass = require('../../dist/createClass-ed62e2bc.cjs.dev.js');
var inherits = require('../../dist/inherits-820eeba3.cjs.dev.js');
var wrapNativeSuper = require('../../dist/wrapNativeSuper-c2c9eee5.cjs.dev.js');
require('../../dist/unsupportedIterableToArray-9e97e24a.cjs.dev.js');

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
  inherits._inherits(InsufficientGasError, _Error);
  function InsufficientGasError(asset) {
    var _this;
    createClass._classCallCheck(this, InsufficientGasError);
    _this = inherits._callSuper(this, InsufficientGasError, ['Not enough gas to pay for the operation']);
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this), "name", 'InsufficientGasError');
    _this.asset = asset;
    return _this;
  }
  return createClass._createClass(InsufficientGasError);
}( /*#__PURE__*/wrapNativeSuper._wrapNativeSuper(Error));
var PendingSigningRequestError = /*#__PURE__*/function (_Error2) {
  inherits._inherits(PendingSigningRequestError, _Error2);
  function PendingSigningRequestError() {
    var _this2;
    createClass._classCallCheck(this, PendingSigningRequestError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = inherits._callSuper(this, PendingSigningRequestError, [].concat(args));
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this2), "name", 'PendingSigningRequestError');
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this2), "message", 'Clear or approve the pending wallet request and retry.');
    return _this2;
  }
  return createClass._createClass(PendingSigningRequestError);
}( /*#__PURE__*/wrapNativeSuper._wrapNativeSuper(Error));
var WalletConnectionErrorReason = /*#__PURE__*/function (WalletConnectionErrorReason) {
  WalletConnectionErrorReason["INCORRECT_CHAIN"] = "INCORRECT_CHAIN";
  WalletConnectionErrorReason["WRONG_ACCOUNT"] = "WRONG_ACCOUNT";
  WalletConnectionErrorReason["STALE_CONNECTION_REQUEST"] = "STALE_CONNECTION_REQUEST";
  return WalletConnectionErrorReason;
}({});
var WalletConnectionError = /*#__PURE__*/function (_Error3) {
  inherits._inherits(WalletConnectionError, _Error3);
  function WalletConnectionError(reason) {
    var _this3;
    createClass._classCallCheck(this, WalletConnectionError);
    _this3 = inherits._callSuper(this, WalletConnectionError, ["Wallet connection failed due to ".concat(reason, " error")]);
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this3), "name", 'WalletConnectionError');
    _this3.reason = reason;
    return _this3;
  }
  return createClass._createClass(WalletConnectionError);
}( /*#__PURE__*/wrapNativeSuper._wrapNativeSuper(Error));
var UserRejectedError = /*#__PURE__*/function (_Error4) {
  inherits._inherits(UserRejectedError, _Error4);
  function UserRejectedError() {
    var _this4;
    createClass._classCallCheck(this, UserRejectedError);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this4 = inherits._callSuper(this, UserRejectedError, [].concat(args));
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this4), "name", 'UserRejectedError');
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this4), "message", 'User rejected the request');
    return _this4;
  }
  return createClass._createClass(UserRejectedError);
}( /*#__PURE__*/wrapNativeSuper._wrapNativeSuper(Error));
var Wallet = /*#__PURE__*/createClass._createClass(function Wallet(address) {
  createClass._classCallCheck(this, Wallet);
  this.address = address;
});

exports.Profile = PublicationReport.Profile;
exports.PublicationReportReason = PublicationReport.PublicationReportReason;
exports.isMomokaPublicationId = Publication.isMomokaPublicationId;
exports.DataTransaction = Transactions.DataTransaction;
exports.MetaTransaction = Transactions.MetaTransaction;
exports.NativeTransaction = Transactions.NativeTransaction;
exports.ProtocolTransactionKinds = Transactions.ProtocolTransactionKinds;
exports.TransactionError = Transactions.TransactionError;
exports.TransactionErrorReason = Transactions.TransactionErrorReason;
exports.TransactionEvent = Transactions.TransactionEvent;
exports.TransactionKind = Transactions.TransactionKind;
exports.UnsignedTransaction = Transactions.UnsignedTransaction;
exports.InsufficientGasError = InsufficientGasError;
exports.NftContractType = NftContractType;
exports.PendingSigningRequestError = PendingSigningRequestError;
exports.ProfileReportReason = ProfileReportReason;
exports.UserRejectedError = UserRejectedError;
exports.Wallet = Wallet;
exports.WalletConnectionError = WalletConnectionError;
exports.WalletConnectionErrorReason = WalletConnectionErrorReason;
