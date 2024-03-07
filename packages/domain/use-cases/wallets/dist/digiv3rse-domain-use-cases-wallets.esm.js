import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../../../dist/asyncToGenerator-0859ab5c.esm.js';
import { _ as _classCallCheck, a as _createClass } from '../../../dist/createClass-ec354b47.esm.js';
import { _ as _inherits, a as _callSuper, b as _assertThisInitialized } from '../../../dist/inherits-241db0b5.esm.js';
import { _ as _defineProperty, a as _wrapNativeSuper } from '../../../dist/wrapNativeSuper-2b6372d3.esm.js';
import { success, failure } from '@digiv3rse/shared-kernel';

var WalletAlreadyInvitedError = /*#__PURE__*/function (_Error) {
  _inherits(WalletAlreadyInvitedError, _Error);
  function WalletAlreadyInvitedError(invalid) {
    var _this;
    _classCallCheck(this, WalletAlreadyInvitedError);
    _this = _callSuper(this, WalletAlreadyInvitedError, ["Wallets already invited: ".concat(invalid.join(', '))]);
    _defineProperty(_assertThisInitialized(_this), "name", 'WalletAlreadyInvitedError');
    _this.invalid = invalid;
    return _this;
  }
  return _createClass(WalletAlreadyInvitedError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var InviteWallets = /*#__PURE__*/function () {
  function InviteWallets(factory, gateway, presenter) {
    _classCallCheck(this, InviteWallets);
    this.factory = factory;
    this.gateway = gateway;
    this.presenter = presenter;
  }
  _createClass(InviteWallets, [{
    key: "invite",
    value: function () {
      var _invite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var invites, _invalid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
              this.presenter.present(failure(new WalletAlreadyInvitedError(_invalid)));
              return _context.abrupt("return");
            case 7:
              _context.next = 9;
              return this.gateway.invite(invites);
            case 9:
              this.presenter.present(success());
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
  _inherits(InsufficientAllowanceError, _Error);
  function InsufficientAllowanceError(requestedAmount) {
    var _this;
    _classCallCheck(this, InsufficientAllowanceError);
    _this = _callSuper(this, InsufficientAllowanceError, ["Insufficient allowance ".concat(requestedAmount.toString())]);
    _defineProperty(_assertThisInitialized(_this), "name", 'InsufficientAllowanceError');
    _this.requestedAmount = requestedAmount;
    return _this;
  }
  return _createClass(InsufficientAllowanceError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var InsufficientFundsError = /*#__PURE__*/function (_Error2) {
  _inherits(InsufficientFundsError, _Error2);
  function InsufficientFundsError(requestedAmount) {
    var _this2;
    _classCallCheck(this, InsufficientFundsError);
    _this2 = _callSuper(this, InsufficientFundsError, ["Insufficient funds ".concat(requestedAmount.toString())]);
    _defineProperty(_assertThisInitialized(_this2), "name", 'InsufficientFundsError');
    _this2.requestedAmount = requestedAmount;
    return _this2;
  }
  return _createClass(InsufficientFundsError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var TokenAvailability = /*#__PURE__*/function () {
  function TokenAvailability(balanceGateway, tokenGateway, activeWallet) {
    _classCallCheck(this, TokenAvailability);
    this.balanceGateway = balanceGateway;
    this.tokenGateway = tokenGateway;
    this.activeWallet = activeWallet;
  }
  _createClass(TokenAvailability, [{
    key: "checkAvailability",
    value: function () {
      var _checkAvailability = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var wallet, balance, allowance;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
              return _context.abrupt("return", failure(new InsufficientFundsError(request.amount)));
            case 8:
              _context.next = 10;
              return this.tokenGateway.getTransferAllowanceFor(request.amount.asset, wallet, request.spender);
            case 10:
              allowance = _context.sent;
              if (!request.amount.gt(allowance)) {
                _context.next = 13;
                break;
              }
              return _context.abrupt("return", failure(new InsufficientAllowanceError(request.amount)));
            case 13:
              return _context.abrupt("return", success());
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

export { InsufficientAllowanceError, InsufficientFundsError, InviteWallets, TokenAvailability, WalletAlreadyInvitedError };
