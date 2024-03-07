import { _ as _classCallCheck, a as _createClass } from './createClass-ec354b47.esm.js';
import { _ as _inherits, a as _callSuper, b as _assertThisInitialized } from './inherits-241db0b5.esm.js';
import { _ as _defineProperty } from './wrapNativeSuper-2b6372d3.esm.js';
import { CausedError } from '@digiv3rse/shared-kernel';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator-0859ab5c.esm.js';

var BroadcastingErrorReason = /*#__PURE__*/function (BroadcastingErrorReason) {
  BroadcastingErrorReason["APP_NOT_ALLOWED"] = "APP_NOT_ALLOWED";
  BroadcastingErrorReason["NOT_SPONSORED"] = "NOT_SPONSORED";
  BroadcastingErrorReason["RATE_LIMITED"] = "RATE_LIMITED";
  BroadcastingErrorReason["NO_DIGI_MANAGER_ENABLED"] = "NO_DIGI_MANAGER_ENABLED";
  BroadcastingErrorReason["REQUIRES_SIGNATURE"] = "REQUIRES_SIGNATURE";
  BroadcastingErrorReason["UNKNOWN"] = "UNKNOWN";
  return BroadcastingErrorReason;
}({});

/**
 * An error thrown when the DiGi API cannot relay a transaction.
 */
var BroadcastingError = /*#__PURE__*/function (_CausedError) {
  _inherits(BroadcastingError, _CausedError);
  function BroadcastingError(reason) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      cause = _ref.cause,
      details = _ref.details;
    _classCallCheck(this, BroadcastingError);
    var message = "failed to broadcast transaction due to: ".concat(reason) + (details ? details : '');
    _this = _callSuper(this, BroadcastingError, [message, {
      cause: cause
    }]);
    _defineProperty(_assertThisInitialized(_this), "name", 'BroadcastingError');
    _this.reason = reason;
    return _this;
  }
  return _createClass(BroadcastingError);
}(CausedError);

var PaidTransaction = /*#__PURE__*/function () {
  function PaidTransaction(activeWallet, gateway, presenter, queue) {
    _classCallCheck(this, PaidTransaction);
    this.activeWallet = activeWallet;
    this.gateway = gateway;
    this.presenter = presenter;
    this.queue = queue;
  }
  _createClass(PaidTransaction, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var wallet, unsigned, result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.activeWallet.requireActiveWallet();
            case 2:
              wallet = _context.sent;
              _context.next = 5;
              return this.gateway.createUnsignedTransaction(request, wallet);
            case 5:
              unsigned = _context.sent;
              _context.next = 8;
              return wallet.sendTransaction(unsigned);
            case 8:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 12;
                break;
              }
              this.presenter.present(result);
              return _context.abrupt("return");
            case 12:
              transaction = result.value;
              _context.next = 15;
              return this.queue.push(transaction, this.presenter);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function execute(_x) {
        return _execute.apply(this, arguments);
      }
      return execute;
    }()
  }]);
  return PaidTransaction;
}();

/**
 * Token allowance limit.
 */
var TokenAllowanceLimit = /*#__PURE__*/function (TokenAllowanceLimit) {
  TokenAllowanceLimit[TokenAllowanceLimit["EXACT"] = 0] = "EXACT";
  TokenAllowanceLimit[TokenAllowanceLimit["INFINITE"] = 1] = "INFINITE";
  return TokenAllowanceLimit;
}({});
var TokenAllowance = /*#__PURE__*/function (_PaidTransaction) {
  _inherits(TokenAllowance, _PaidTransaction);
  function TokenAllowance() {
    _classCallCheck(this, TokenAllowance);
    return _callSuper(this, TokenAllowance, arguments);
  }
  return _createClass(TokenAllowance);
}(PaidTransaction);

export { BroadcastingError as B, PaidTransaction as P, TokenAllowanceLimit as T, BroadcastingErrorReason as a, TokenAllowance as b };
