'use strict';

var createClass = require('./createClass-ed62e2bc.cjs.dev.js');
var inherits = require('./inherits-820eeba3.cjs.dev.js');
var wrapNativeSuper = require('./wrapNativeSuper-c2c9eee5.cjs.dev.js');
var sharedKernel = require('@digiv3rse/shared-kernel');
var asyncToGenerator = require('./asyncToGenerator-ba66657c.cjs.dev.js');

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
  inherits._inherits(BroadcastingError, _CausedError);
  function BroadcastingError(reason) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      cause = _ref.cause,
      details = _ref.details;
    createClass._classCallCheck(this, BroadcastingError);
    var message = "failed to broadcast transaction due to: ".concat(reason) + (details ? details : '');
    _this = inherits._callSuper(this, BroadcastingError, [message, {
      cause: cause
    }]);
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this), "name", 'BroadcastingError');
    _this.reason = reason;
    return _this;
  }
  return createClass._createClass(BroadcastingError);
}(sharedKernel.CausedError);

var PaidTransaction = /*#__PURE__*/function () {
  function PaidTransaction(activeWallet, gateway, presenter, queue) {
    createClass._classCallCheck(this, PaidTransaction);
    this.activeWallet = activeWallet;
    this.gateway = gateway;
    this.presenter = presenter;
    this.queue = queue;
  }
  createClass._createClass(PaidTransaction, [{
    key: "execute",
    value: function () {
      var _execute = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        var wallet, unsigned, result, transaction;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
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
  inherits._inherits(TokenAllowance, _PaidTransaction);
  function TokenAllowance() {
    createClass._classCallCheck(this, TokenAllowance);
    return inherits._callSuper(this, TokenAllowance, arguments);
  }
  return createClass._createClass(TokenAllowance);
}(PaidTransaction);

exports.BroadcastingError = BroadcastingError;
exports.BroadcastingErrorReason = BroadcastingErrorReason;
exports.PaidTransaction = PaidTransaction;
exports.TokenAllowance = TokenAllowance;
exports.TokenAllowanceLimit = TokenAllowanceLimit;
