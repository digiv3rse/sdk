'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var asyncToGenerator = require('../../../dist/asyncToGenerator-3551d940.cjs.prod.js');
var createClass = require('../../../dist/createClass-a52f56fd.cjs.prod.js');
var inherits = require('../../../dist/inherits-21b1f04d.cjs.prod.js');
var SponsorshipReady = require('../../../dist/SponsorshipReady-3239fb78.cjs.prod.js');
var ReferencePolicyConfig = require('../../../dist/ReferencePolicyConfig-57e35af5.cjs.prod.js');
var Publication = require('../../../dist/Publication-5ba726a5.cjs.prod.js');
var sharedKernel = require('@digiv3rse/shared-kernel');
require('../../../dist/unsupportedIterableToArray-afbea1dd.cjs.prod.js');

var CreateComment = /*#__PURE__*/function (_SponsorshipReady) {
  inherits._inherits(CreateComment, _SponsorshipReady);
  function CreateComment(sponsoredOnChain, sponsoredOnMomoka, paidOnChain) {
    var _this;
    createClass._classCallCheck(this, CreateComment);
    _this = inherits._callSuper(this, CreateComment);
    _this.sponsoredOnChain = sponsoredOnChain;
    _this.sponsoredOnMomoka = sponsoredOnMomoka;
    _this.paidOnChain = paidOnChain;
    return _this;
  }
  createClass._createClass(CreateComment, [{
    key: "charged",
    value: function () {
      var _charged = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.paidOnChain.execute(request));
            case 1:
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
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(request.reference.type === ReferencePolicyConfig.ReferencePolicyType.ANYONE && request.actions.length === 0 && Publication.isMomokaPublicationId(request.commentOn))) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", this.sponsoredOnMomoka.execute(request));
            case 2:
              return _context2.abrupt("return", this.sponsoredOnChain.execute(request));
            case 3:
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
  return CreateComment;
}(SponsorshipReady.SponsorshipReady);

var CreateMirror = /*#__PURE__*/function (_SponsorshipReady) {
  inherits._inherits(CreateMirror, _SponsorshipReady);
  function CreateMirror(sponsoredOnChain, sponsoredOnMomoka, paidOnChain) {
    var _this;
    createClass._classCallCheck(this, CreateMirror);
    _this = inherits._callSuper(this, CreateMirror);
    _this.sponsoredOnChain = sponsoredOnChain;
    _this.sponsoredOnMomoka = sponsoredOnMomoka;
    _this.paidOnChain = paidOnChain;
    return _this;
  }
  createClass._createClass(CreateMirror, [{
    key: "charged",
    value: function () {
      var _charged = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.paidOnChain.execute(request));
            case 1:
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
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!Publication.isMomokaPublicationId(request.mirrorOn)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", this.sponsoredOnMomoka.execute(request));
            case 2:
              return _context2.abrupt("return", this.sponsoredOnChain.execute(request));
            case 3:
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
  return CreateMirror;
}(SponsorshipReady.SponsorshipReady);

var CreatePost = /*#__PURE__*/function (_SponsorshipReady) {
  inherits._inherits(CreatePost, _SponsorshipReady);
  function CreatePost(sponsoredOnChain, sponsoredOnMomoka, paidOnChain) {
    var _this;
    createClass._classCallCheck(this, CreatePost);
    _this = inherits._callSuper(this, CreatePost);
    _this.sponsoredOnChain = sponsoredOnChain;
    _this.sponsoredOnMomoka = sponsoredOnMomoka;
    _this.paidOnChain = paidOnChain;
    return _this;
  }
  createClass._createClass(CreatePost, [{
    key: "charged",
    value: function () {
      var _charged = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.paidOnChain.execute(request));
            case 1:
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
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(request.reference.type === ReferencePolicyConfig.ReferencePolicyType.ANYONE && request.actions.length === 0)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", this.sponsoredOnMomoka.execute(request));
            case 2:
              return _context2.abrupt("return", this.sponsoredOnChain.execute(request));
            case 3:
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
  return CreatePost;
}(SponsorshipReady.SponsorshipReady);

var CreateQuote = /*#__PURE__*/function (_SponsorshipReady) {
  inherits._inherits(CreateQuote, _SponsorshipReady);
  function CreateQuote(sponsoredOnChain, sponsoredOnMomoka, paidOnChain) {
    var _this;
    createClass._classCallCheck(this, CreateQuote);
    _this = inherits._callSuper(this, CreateQuote);
    _this.sponsoredOnChain = sponsoredOnChain;
    _this.sponsoredOnMomoka = sponsoredOnMomoka;
    _this.paidOnChain = paidOnChain;
    return _this;
  }
  createClass._createClass(CreateQuote, [{
    key: "charged",
    value: function () {
      var _charged = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.paidOnChain.execute(request));
            case 1:
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
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(request.reference.type === ReferencePolicyConfig.ReferencePolicyType.ANYONE && request.actions.length === 0 && Publication.isMomokaPublicationId(request.quoteOn))) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", this.sponsoredOnMomoka.execute(request));
            case 2:
              return _context2.abrupt("return", this.sponsoredOnChain.execute(request));
            case 3:
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
  return CreateQuote;
}(SponsorshipReady.SponsorshipReady);

var HidePublication = /*#__PURE__*/function () {
  function HidePublication(hidePublicationGateway, hidePublicationPresenter) {
    createClass._classCallCheck(this, HidePublication);
    this.hidePublicationGateway = hidePublicationGateway;
    this.hidePublicationPresenter = hidePublicationPresenter;
  }
  createClass._createClass(HidePublication, [{
    key: "hide",
    value: function () {
      var _hide = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.hidePublicationGateway.hide(request);
            case 2:
              this.hidePublicationPresenter.present(request.publicationId);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function hide(_x) {
        return _hide.apply(this, arguments);
      }
      return hide;
    }()
  }]);
  return HidePublication;
}();

var ReportPublication = /*#__PURE__*/function () {
  function ReportPublication(gateway, presenter) {
    createClass._classCallCheck(this, ReportPublication);
    this.gateway = gateway;
    this.presenter = presenter;
  }
  createClass._createClass(ReportPublication, [{
    key: "report",
    value: function () {
      var _report = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.gateway.report(request);
            case 2:
              this.presenter.present(sharedKernel.success());
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function report(_x) {
        return _report.apply(this, arguments);
      }
      return report;
    }()
  }]);
  return ReportPublication;
}();

var ToggleProperty = /*#__PURE__*/function () {
  function ToggleProperty(gateway, presenter) {
    createClass._classCallCheck(this, ToggleProperty);
    this.gateway = gateway;
    this.presenter = presenter;
  }
  createClass._createClass(ToggleProperty, [{
    key: "add",
    value: function () {
      var _add = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.presenter.add(request);
            case 2:
              _context.prev = 2;
              _context.next = 5;
              return this.gateway.add(request);
            case 5:
              _context.next = 12;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);
              _context.next = 11;
              return this.presenter.remove(request);
            case 11:
              throw _context.t0;
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 7]]);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee2(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.presenter.remove(request);
            case 2:
              _context2.prev = 2;
              _context2.next = 5;
              return this.gateway.remove(request);
            case 5:
              _context2.next = 12;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);
              _context2.next = 11;
              return this.presenter.add(request);
            case 11:
              throw _context2.t0;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 7]]);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return ToggleProperty;
}();

exports.AllOpenActionType = ReferencePolicyConfig.AllOpenActionType;
exports.OpenAction = ReferencePolicyConfig.OpenAction;
exports.OpenActionType = ReferencePolicyConfig.OpenActionType;
exports.ReferencePolicyType = ReferencePolicyConfig.ReferencePolicyType;
exports.isPaidCollectRequest = ReferencePolicyConfig.isPaidCollectRequest;
exports.CreateComment = CreateComment;
exports.CreateMirror = CreateMirror;
exports.CreatePost = CreatePost;
exports.CreateQuote = CreateQuote;
exports.HidePublication = HidePublication;
exports.ReportPublication = ReportPublication;
exports.ToggleProperty = ToggleProperty;
