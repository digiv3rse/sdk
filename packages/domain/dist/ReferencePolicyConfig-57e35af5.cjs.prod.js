'use strict';

var asyncToGenerator = require('./asyncToGenerator-3551d940.cjs.prod.js');
var createClass = require('./createClass-a52f56fd.cjs.prod.js');
var inherits = require('./inherits-21b1f04d.cjs.prod.js');
var SponsorshipReady = require('./SponsorshipReady-3239fb78.cjs.prod.js');

var AllOpenActionType = /*#__PURE__*/function (AllOpenActionType) {
  AllOpenActionType["LEGACY_COLLECT"] = "LEGACY_COLLECT";
  AllOpenActionType["SIMPLE_COLLECT"] = "SIMPLE_COLLECT";
  AllOpenActionType["MULTIRECIPIENT_COLLECT"] = "MULTIRECIPIENT_COLLECT";
  AllOpenActionType["UNKNOWN_OPEN_ACTION"] = "UNKNOWN_OPEN_ACTION";
  return AllOpenActionType;
}({});
function isCollectRequest(request) {
  return [AllOpenActionType.LEGACY_COLLECT, AllOpenActionType.SIMPLE_COLLECT, AllOpenActionType.MULTIRECIPIENT_COLLECT].includes(request.type);
}
function isPaidCollectRequest(request) {
  return isCollectRequest(request) && request.fee !== undefined;
}
function isPublicOpenActionRequest(request) {
  return 'public' in request && request["public"];
}
var OpenAction = /*#__PURE__*/function (_SponsorshipReady) {
  inherits._inherits(OpenAction, _SponsorshipReady);
  function OpenAction(tokenAvailability, signedExecution, delegableExecution, paidExecution, presenter) {
    var _this;
    createClass._classCallCheck(this, OpenAction);
    _this = inherits._callSuper(this, OpenAction);
    _this.tokenAvailability = tokenAvailability;
    _this.signedExecution = signedExecution;
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    _this.presenter = presenter;
    return _this;
  }
  createClass._createClass(OpenAction, [{
    key: "charged",
    value: function () {
      var _charged = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.paidExecution.execute(request);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function charged(_x) {
        return _charged.apply(this, arguments);
      }
      return charged;
    }()
  }, {
    key: "sponsored",
    value: function () {
      var _sponsored = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee2(request) {
        var result;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!isPaidCollectRequest(request)) {
                _context2.next = 12;
                break;
              }
              _context2.next = 3;
              return this.tokenAvailability.checkAvailability({
                amount: request.fee.amount,
                spender: request.fee.contractAddress
              });
            case 3:
              result = _context2.sent;
              if (!result.isFailure()) {
                _context2.next = 7;
                break;
              }
              this.presenter.present(result);
              return _context2.abrupt("return");
            case 7:
              if (!isPublicOpenActionRequest(request)) {
                _context2.next = 9;
                break;
              }
              return _context2.abrupt("return", this.charged(request));
            case 9:
              _context2.next = 11;
              return this.signedExecution.execute(request);
            case 11:
              return _context2.abrupt("return");
            case 12:
              if (!isPublicOpenActionRequest(request)) {
                _context2.next = 14;
                break;
              }
              return _context2.abrupt("return", this.charged(request));
            case 14:
              _context2.next = 16;
              return this.delegableExecution.execute(request);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function sponsored(_x2) {
        return _sponsored.apply(this, arguments);
      }
      return sponsored;
    }()
  }]);
  return OpenAction;
}(SponsorshipReady.SponsorshipReady);

var OpenActionType = /*#__PURE__*/function (OpenActionType) {
  OpenActionType["SIMPLE_COLLECT"] = "SIMPLE_COLLECT";
  OpenActionType["MULTIRECIPIENT_COLLECT"] = "MULTIRECIPIENT_COLLECT";
  OpenActionType["UNKNOWN_OPEN_ACTION"] = "UNKNOWN_OPEN_ACTION";
  return OpenActionType;
}({});

var ReferencePolicyType = /*#__PURE__*/function (ReferencePolicyType) {
  ReferencePolicyType["UNKNOWN"] = "UNKNOWN";
  ReferencePolicyType["DEGREES_OF_SEPARATION"] = "DEGREES_OF_SEPARATION";
  ReferencePolicyType["FOLLOWERS_ONLY"] = "FOLLOWERS_ONLY";
  ReferencePolicyType["NO_ONE"] = "NO_ONE";
  ReferencePolicyType["ANYONE"] = "ANYONE";
  return ReferencePolicyType;
}({});

exports.AllOpenActionType = AllOpenActionType;
exports.OpenAction = OpenAction;
exports.OpenActionType = OpenActionType;
exports.ReferencePolicyType = ReferencePolicyType;
exports.isPaidCollectRequest = isPaidCollectRequest;
