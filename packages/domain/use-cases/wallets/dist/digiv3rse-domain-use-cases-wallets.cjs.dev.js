'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var asyncToGenerator = require('../../../dist/asyncToGenerator-ba66657c.cjs.dev.js');
var createClass = require('../../../dist/createClass-ed62e2bc.cjs.dev.js');
var inherits = require('../../../dist/inherits-820eeba3.cjs.dev.js');
var wrapNativeSuper = require('../../../dist/wrapNativeSuper-c2c9eee5.cjs.dev.js');
var sharedKernel = require('@digiv3rse/shared-kernel');

var WalletAlreadyInvitedError = /*#__PURE__*/function (_Error) {
  inherits._inherits(WalletAlreadyInvitedError, _Error);
  function WalletAlreadyInvitedError(invalid) {
    var _this;
    createClass._classCallCheck(this, WalletAlreadyInvitedError);
    _this = inherits._callSuper(this, WalletAlreadyInvitedError, ["Wallets already invited: ".concat(invalid.join(', '))]);
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this), "name", 'WalletAlreadyInvitedError');
    _this.invalid = invalid;
    return _this;
  }
  return createClass._createClass(WalletAlreadyInvitedError);
}( /*#__PURE__*/wrapNativeSuper._wrapNativeSuper(Error));
var InviteWallets = /*#__PURE__*/function () {
  function InviteWallets(factory, gateway, presenter) {
    createClass._classCallCheck(this, InviteWallets);
    this.factory = factory;
    this.gateway = gateway;
    this.presenter = presenter;
  }
  createClass._createClass(InviteWallets, [{
    key: "invite",
    value: function () {
      var _invite = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        var invites, _invalid;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.factory.create(request);
            case 2:
              invites = _context.sent;
              if (!(invites.length !== request.wallets.length)) {
                _context.next = 7;
                break;
              }
              _invalid = request.wallets.filter(function (wallet) {
                return !invites.some(function (invite) {
                  return invite.address === wallet;
                });
              });
              this.presenter.present(sharedKernel.failure(new WalletAlreadyInvitedError(_invalid)));
              return _context.abrupt("return");
            case 7:
              _context.next = 9;
              return this.gateway.invite(invites);
            case 9:
              this.presenter.present(sharedKernel.success());
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function invite(_x) {
        return _invite.apply(this, arguments);
      }
      return invite;
    }()
  }]);
  return InviteWallets;
}();

var InsufficientAllowanceError = /*#__PURE__*/function (_Error) {
  inherits._inherits(InsufficientAllowanceError, _Error);
  function InsufficientAllowanceError(requestedAmount) {
    var _this;
    createClass._classCallCheck(this, InsufficientAllowanceError);
    _this = inherits._callSuper(this, InsufficientAllowanceError, ["Insufficient allowance ".concat(requestedAmount.toString())]);
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this), "name", 'InsufficientAllowanceError');
    _this.requestedAmount = requestedAmount;
    return _this;
  }
  return createClass._createClass(InsufficientAllowanceError);
}( /*#__PURE__*/wrapNativeSuper._wrapNativeSuper(Error));
var InsufficientFundsError = /*#__PURE__*/function (_Error2) {
  inherits._inherits(InsufficientFundsError, _Error2);
  function InsufficientFundsError(requestedAmount) {
    var _this2;
    createClass._classCallCheck(this, InsufficientFundsError);
    _this2 = inherits._callSuper(this, InsufficientFundsError, ["Insufficient funds ".concat(requestedAmount.toString())]);
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this2), "name", 'InsufficientFundsError');
    _this2.requestedAmount = requestedAmount;
    return _this2;
  }
  return createClass._createClass(InsufficientFundsError);
}( /*#__PURE__*/wrapNativeSuper._wrapNativeSuper(Error));
var TokenAvailability = /*#__PURE__*/function () {
  function TokenAvailability(balanceGateway, tokenGateway, activeWallet) {
    createClass._classCallCheck(this, TokenAvailability);
    this.balanceGateway = balanceGateway;
    this.tokenGateway = tokenGateway;
    this.activeWallet = activeWallet;
  }
  createClass._createClass(TokenAvailability, [{
    key: "checkAvailability",
    value: function () {
      var _checkAvailability = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        var wallet, balance, allowance;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.activeWallet.requireActiveWallet();
            case 2:
              wallet = _context.sent;
              _context.next = 5;
              return this.balanceGateway.getBalanceFor(wallet, request.amount.asset);
            case 5:
              balance = _context.sent;
              if (!request.amount.gt(balance)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", sharedKernel.failure(new InsufficientFundsError(request.amount)));
            case 8:
              _context.next = 10;
              return this.tokenGateway.getTransferAllowanceFor(request.amount.asset, wallet, request.spender);
            case 10:
              allowance = _context.sent;
              if (!request.amount.gt(allowance)) {
                _context.next = 13;
                break;
              }
              return _context.abrupt("return", sharedKernel.failure(new InsufficientAllowanceError(request.amount)));
            case 13:
              return _context.abrupt("return", sharedKernel.success());
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function checkAvailability(_x) {
        return _checkAvailability.apply(this, arguments);
      }
      return checkAvailability;
    }()
  }]);
  return TokenAvailability;
}();

exports.InsufficientAllowanceError = InsufficientAllowanceError;
exports.InsufficientFundsError = InsufficientFundsError;
exports.InviteWallets = InviteWallets;
exports.TokenAvailability = TokenAvailability;
exports.WalletAlreadyInvitedError = WalletAlreadyInvitedError;
