import { _ as _inherits, a as _callSuper, b as _assertThisInitialized } from './inherits-241db0b5.esm.js';
import { _ as _defineProperty, a as _wrapNativeSuper } from './wrapNativeSuper-2b6372d3.esm.js';
import { a as _createClass, _ as _classCallCheck } from './createClass-ec354b47.esm.js';

var TransactionKind = /*#__PURE__*/function (TransactionKind) {
  TransactionKind["APPROVE_MODULE"] = "APPROVE_MODULE";
  TransactionKind["ACT_ON_PUBLICATION"] = "ACT_ON_PUBLICATION";
  TransactionKind["BLOCK_PROFILE"] = "BLOCK_PROFILE";
  TransactionKind["CREATE_COMMENT"] = "CREATE_COMMENT";
  TransactionKind["CREATE_POST"] = "CREATE_POST";
  TransactionKind["CREATE_PROFILE"] = "CREATE_PROFILE";
  TransactionKind["CLAIM_HANDLE"] = "CLAIM_HANDLE";
  TransactionKind["CREATE_QUOTE"] = "CREATE_QUOTE";
  TransactionKind["FOLLOW_PROFILE"] = "FOLLOW_PROFILE";
  TransactionKind["LINK_HANDLE"] = "LINK_HANDLE";
  TransactionKind["MIRROR_PUBLICATION"] = "MIRROR_PUBLICATION";
  TransactionKind["UNBLOCK_PROFILE"] = "UNBLOCK_PROFILE";
  TransactionKind["UNFOLLOW_PROFILE"] = "UNFOLLOW_PROFILE";
  TransactionKind["UNLINK_HANDLE"] = "UNLINK_HANDLE";
  TransactionKind["UPDATE_FOLLOW_POLICY"] = "UPDATE_FOLLOW_POLICY";
  TransactionKind["UPDATE_PROFILE_DETAILS"] = "UPDATE_PROFILE_DETAILS";
  TransactionKind["UPDATE_PROFILE_MANAGERS"] = "UPDATE_PROFILE_MANAGERS";
  return TransactionKind;
}({});
var ProtocolTransactionKinds = [TransactionKind.ACT_ON_PUBLICATION, TransactionKind.BLOCK_PROFILE, TransactionKind.UNFOLLOW_PROFILE, TransactionKind.CLAIM_HANDLE, TransactionKind.CREATE_COMMENT, TransactionKind.CREATE_POST, TransactionKind.CREATE_PROFILE, TransactionKind.CREATE_QUOTE, TransactionKind.FOLLOW_PROFILE, TransactionKind.LINK_HANDLE, TransactionKind.MIRROR_PUBLICATION, TransactionKind.UNBLOCK_PROFILE, TransactionKind.UNFOLLOW_PROFILE, TransactionKind.UNLINK_HANDLE, TransactionKind.UPDATE_FOLLOW_POLICY, TransactionKind.UPDATE_PROFILE_DETAILS, TransactionKind.UPDATE_PROFILE_MANAGERS];

/**
 * @internal
 */

/**
 * @internal
 */

var UnsignedTransaction = /*#__PURE__*/_createClass(function UnsignedTransaction(id, chainType, request) {
  _classCallCheck(this, UnsignedTransaction);
  this.id = id;
  this.chainType = chainType;
  this.request = request;
});

// TODO rename to UnsignedOperation

// TODO rename to SignedOperation

var TransactionEvent = /*#__PURE__*/function (TransactionEvent) {
  TransactionEvent["BROADCASTED"] = "BROADCASTED";
  TransactionEvent["UPGRADED"] = "UPGRADED";
  TransactionEvent["SETTLED"] = "SETTLED";
  return TransactionEvent;
}({});
var MetaTransaction = /*#__PURE__*/_createClass(function MetaTransaction() {
  _classCallCheck(this, MetaTransaction);
});
var NativeTransaction = /*#__PURE__*/_createClass(function NativeTransaction() {
  _classCallCheck(this, NativeTransaction);
});
var DataTransaction = /*#__PURE__*/_createClass(function DataTransaction() {
  _classCallCheck(this, DataTransaction);
});

// TODO: move, this type might be a convenience type but not an entity per se

/**
 * The reason why a transaction failed.
 */
var TransactionErrorReason = /*#__PURE__*/function (TransactionErrorReason) {
  TransactionErrorReason["INDEXING_TIMEOUT"] = "INDEXING_TIMEOUT";
  TransactionErrorReason["MINING_TIMEOUT"] = "MINING_TIMEOUT";
  TransactionErrorReason["REVERTED"] = "REVERTED";
  TransactionErrorReason["UNKNOWN"] = "UNKNOWN";
  return TransactionErrorReason;
}({});

/**
 * An error that occurs when a transaction fails.
 */
var TransactionError = /*#__PURE__*/function (_Error) {
  _inherits(TransactionError, _Error);
  function TransactionError(reason) {
    var _this;
    _classCallCheck(this, TransactionError);
    _this = _callSuper(this, TransactionError, ["Transaction failed due to: ".concat(reason)]);
    _defineProperty(_assertThisInitialized(_this), "name", 'TransactionError');
    _this.reason = reason;
    return _this;
  }
  return _createClass(TransactionError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

export { DataTransaction as D, MetaTransaction as M, NativeTransaction as N, ProtocolTransactionKinds as P, TransactionKind as T, UnsignedTransaction as U, TransactionError as a, TransactionErrorReason as b, TransactionEvent as c };
