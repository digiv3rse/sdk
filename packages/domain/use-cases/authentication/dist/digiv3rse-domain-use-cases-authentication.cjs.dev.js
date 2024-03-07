'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var asyncToGenerator = require('../../../dist/asyncToGenerator-ba66657c.cjs.dev.js');
var createClass = require('../../../dist/createClass-ed62e2bc.cjs.dev.js');
var sharedKernel = require('@digiv3rse/shared-kernel');
var inherits = require('../../../dist/inherits-820eeba3.cjs.dev.js');
var wrapNativeSuper = require('../../../dist/wrapNativeSuper-c2c9eee5.cjs.dev.js');

var ActiveWallet = /*#__PURE__*/function () {
  function ActiveWallet(credentialsReader, walletGateway) {
    createClass._classCallCheck(this, ActiveWallet);
    this.credentialsReader = credentialsReader;
    this.walletGateway = walletGateway;
  }
  createClass._createClass(ActiveWallet, [{
    key: "requireActiveWallet",
    value: function () {
      var _requireActiveWallet = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee() {
        var credentials;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.credentialsReader.getCredentials();
            case 2:
              credentials = _context.sent;
              if (!credentials) {
                sharedKernel.never('User is not authenticated');
              }
              return _context.abrupt("return", this.walletGateway.getByAddress(credentials.address));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function requireActiveWallet() {
        return _requireActiveWallet.apply(this, arguments);
      }
      return requireActiveWallet;
    }()
  }]);
  return ActiveWallet;
}();

/**
 * The reason for logging out
 */
var LogoutReason = /*#__PURE__*/function (LogoutReason) {
  LogoutReason["CREDENTIALS_EXPIRED"] = "credentials-expired";
  LogoutReason["USER_INITIATED"] = "user-initiated";
  return LogoutReason;
}({});
var Logout = /*#__PURE__*/function () {
  function Logout(credentialsGateway, transactionGateway, conversationsGateway, presenter) {
    createClass._classCallCheck(this, Logout);
    this.credentialsGateway = credentialsGateway;
    this.transactionGateway = transactionGateway;
    this.conversationsGateway = conversationsGateway;
    this.presenter = presenter;
  }
  createClass._createClass(Logout, [{
    key: "execute",
    value: function () {
      var _execute = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(reason) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([this.conversationsGateway.reset(), this.transactionGateway.reset(), this.credentialsGateway.invalidate(reason)]);
            case 2:
              this.presenter.logout(reason);
            case 3:
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
  return Logout;
}();

/**
 * The type of user's session.
 */
var SessionType = /*#__PURE__*/function (SessionType) {
  SessionType["Anonymous"] = "ANONYMOUS";
  SessionType["WithProfile"] = "WITH_PROFILE";
  SessionType["JustWallet"] = "JUST_WALLET";
  return SessionType;
}({});

/**
 * A not authenticated user's session
 *
 * @internal
 */

/**
 * A typical authenticated user's session.
 *
 * @internal
 */

/**
 * An authenticated user's session with just a wallet address.
 *
 * This is currently not used, but will be used in the future.
 *
 * @internal
 */

/**
 * Describes the details of a user's session.
 *
 * @internal
 */

/**
 * @internal
 */
function anonymousSessionData(lastLogoutReason) {
  return {
    type: SessionType.Anonymous,
    lastLogoutReason: lastLogoutReason
  };
}

/**
 * @internal
 */
function profileSessionData(_ref) {
  var address = _ref.address,
    profileId = _ref.profileId;
  return {
    type: SessionType.WithProfile,
    address: address,
    profileId: profileId
  };
}

/**
 * @internal
 */
function walletOnlySessionData(_ref2) {
  var address = _ref2.address;
  return {
    type: SessionType.JustWallet,
    address: address
  };
}

var CredentialsExpiredError = /*#__PURE__*/function (_Error) {
  inherits._inherits(CredentialsExpiredError, _Error);
  function CredentialsExpiredError() {
    var _this;
    createClass._classCallCheck(this, CredentialsExpiredError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = inherits._callSuper(this, CredentialsExpiredError, [].concat(args));
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this), "name", 'CredentialsExpiredError');
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this), "message", 'Auth credentials are expired');
    return _this;
  }
  return createClass._createClass(CredentialsExpiredError);
}( /*#__PURE__*/wrapNativeSuper._wrapNativeSuper(Error));
var Bootstrap = /*#__PURE__*/function () {
  function Bootstrap(credentialsGateway, credentialsRenewer, transactionQueue, logout, presenter) {
    createClass._classCallCheck(this, Bootstrap);
    this.credentialsGateway = credentialsGateway;
    this.credentialsRenewer = credentialsRenewer;
    this.transactionQueue = transactionQueue;
    this.logout = logout;
    this.presenter = presenter;
  }
  createClass._createClass(Bootstrap, [{
    key: "execute",
    value: function () {
      var _execute = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee() {
        var credentials, result;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.credentialsGateway.getCredentials();
            case 2:
              credentials = _context.sent;
              if (credentials) {
                _context.next = 6;
                break;
              }
              this.presenter.present(anonymousSessionData());
              return _context.abrupt("return");
            case 6:
              _context.next = 8;
              return this.credentialsRenewer.renewCredentials(credentials);
            case 8:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 13;
                break;
              }
              _context.next = 12;
              return this.logout.execute(LogoutReason.CREDENTIALS_EXPIRED);
            case 12:
              return _context.abrupt("return");
            case 13:
              _context.next = 15;
              return this.credentialsGateway.save(result.value);
            case 15:
              _context.next = 17;
              return this.transactionQueue.resume();
            case 17:
              this.presenter.present(credentials.profileId ? profileSessionData({
                address: credentials.address,
                profileId: credentials.profileId
              }) : walletOnlySessionData(credentials));
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function execute() {
        return _execute.apply(this, arguments);
      }
      return execute;
    }()
  }]);
  return Bootstrap;
}();

/**
 * The details required to authenticate the session.
 */

var Login = /*#__PURE__*/function () {
  function Login(walletGateway, credentialsIssuer, credentialsWriter, presenter) {
    createClass._classCallCheck(this, Login);
    this.walletGateway = walletGateway;
    this.credentialsIssuer = credentialsIssuer;
    this.credentialsWriter = credentialsWriter;
    this.presenter = presenter;
  }
  createClass._createClass(Login, [{
    key: "execute",
    value: function () {
      var _execute = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        var wallet, result;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.walletGateway.getByAddress(request.address);
            case 2:
              wallet = _context.sent;
              _context.next = 5;
              return this.credentialsIssuer.issueCredentials(wallet, request.profileId);
            case 5:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 9;
                break;
              }
              this.presenter.present(result);
              return _context.abrupt("return");
            case 9:
              _context.next = 11;
              return this.credentialsWriter.save(result.value);
            case 11:
              if (!request.profileId) {
                _context.next = 14;
                break;
              }
              this.presenter.present(sharedKernel.success(profileSessionData({
                address: wallet.address,
                profileId: request.profileId
              })));
              return _context.abrupt("return");
            case 14:
              this.presenter.present(sharedKernel.success(walletOnlySessionData({
                address: wallet.address
              })));
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
  return Login;
}();

var UpgradeCredentials = /*#__PURE__*/function () {
  function UpgradeCredentials(credentialsUpgrader, credentialsWriter, presenter) {
    createClass._classCallCheck(this, UpgradeCredentials);
    this.credentialsUpgrader = credentialsUpgrader;
    this.credentialsWriter = credentialsWriter;
    this.presenter = presenter;
  }
  createClass._createClass(UpgradeCredentials, [{
    key: "execute",
    value: function () {
      var _execute = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        var credentials;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.credentialsUpgrader.upgradeCredentials(request.profileId);
            case 2:
              credentials = _context.sent;
              _context.next = 5;
              return this.credentialsWriter.save(credentials);
            case 5:
              // quick fix... should profile SessionData to replace ICredentials entity and make this code more type safe
              sharedKernel.invariant(credentials.profileId, 'Profile ID is missing');
              this.presenter.present(sharedKernel.success(profileSessionData({
                profileId: credentials.profileId,
                address: credentials.address
              })));
            case 7:
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
  return UpgradeCredentials;
}();

exports.ActiveWallet = ActiveWallet;
exports.Bootstrap = Bootstrap;
exports.CredentialsExpiredError = CredentialsExpiredError;
exports.Login = Login;
exports.Logout = Logout;
exports.LogoutReason = LogoutReason;
exports.SessionType = SessionType;
exports.UpgradeCredentials = UpgradeCredentials;
exports.anonymousSessionData = anonymousSessionData;
exports.profileSessionData = profileSessionData;
exports.walletOnlySessionData = walletOnlySessionData;
