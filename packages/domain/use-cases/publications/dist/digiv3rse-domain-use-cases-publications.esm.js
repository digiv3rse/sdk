import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../../../dist/asyncToGenerator-0859ab5c.esm.js';
import { _ as _classCallCheck, a as _createClass } from '../../../dist/createClass-ec354b47.esm.js';
import { _ as _inherits, a as _callSuper } from '../../../dist/inherits-241db0b5.esm.js';
import { S as SponsorshipReady } from '../../../dist/SponsorshipReady-9ac7d611.esm.js';
import { R as ReferencePolicyType } from '../../../dist/ReferencePolicyConfig-c94a2b29.esm.js';
export { A as AllOpenActionType, a as OpenAction, O as OpenActionType, R as ReferencePolicyType, i as isPaidCollectRequest } from '../../../dist/ReferencePolicyConfig-c94a2b29.esm.js';
import { i as isMomokaPublicationId } from '../../../dist/Publication-713a9bb6.esm.js';
import { success } from '@digiv3rse/shared-kernel';
import '../../../dist/unsupportedIterableToArray-51bb61c2.esm.js';

var CreateComment = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(CreateComment, _SponsorshipReady);
  function CreateComment(sponsoredOnChain, sponsoredOnMomoka, paidOnChain) {
    var _this;
    _classCallCheck(this, CreateComment);
    _this = _callSuper(this, CreateComment);
    _this.sponsoredOnChain = sponsoredOnChain;
    _this.sponsoredOnMomoka = sponsoredOnMomoka;
    _this.paidOnChain = paidOnChain;
    return _this;
  }
  _createClass(CreateComment, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(request.reference.type === ReferencePolicyType.ANYONE && request.actions.length === 0 && isMomokaPublicationId(request.commentOn))) {
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
}(SponsorshipReady);

var CreateMirror = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(CreateMirror, _SponsorshipReady);
  function CreateMirror(sponsoredOnChain, sponsoredOnMomoka, paidOnChain) {
    var _this;
    _classCallCheck(this, CreateMirror);
    _this = _callSuper(this, CreateMirror);
    _this.sponsoredOnChain = sponsoredOnChain;
    _this.sponsoredOnMomoka = sponsoredOnMomoka;
    _this.paidOnChain = paidOnChain;
    return _this;
  }
  _createClass(CreateMirror, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!isMomokaPublicationId(request.mirrorOn)) {
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
}(SponsorshipReady);

var CreatePost = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(CreatePost, _SponsorshipReady);
  function CreatePost(sponsoredOnChain, sponsoredOnMomoka, paidOnChain) {
    var _this;
    _classCallCheck(this, CreatePost);
    _this = _callSuper(this, CreatePost);
    _this.sponsoredOnChain = sponsoredOnChain;
    _this.sponsoredOnMomoka = sponsoredOnMomoka;
    _this.paidOnChain = paidOnChain;
    return _this;
  }
  _createClass(CreatePost, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(request.reference.type === ReferencePolicyType.ANYONE && request.actions.length === 0)) {
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
}(SponsorshipReady);

var CreateQuote = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(CreateQuote, _SponsorshipReady);
  function CreateQuote(sponsoredOnChain, sponsoredOnMomoka, paidOnChain) {
    var _this;
    _classCallCheck(this, CreateQuote);
    _this = _callSuper(this, CreateQuote);
    _this.sponsoredOnChain = sponsoredOnChain;
    _this.sponsoredOnMomoka = sponsoredOnMomoka;
    _this.paidOnChain = paidOnChain;
    return _this;
  }
  _createClass(CreateQuote, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(request.reference.type === ReferencePolicyType.ANYONE && request.actions.length === 0 && isMomokaPublicationId(request.quoteOn))) {
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
}(SponsorshipReady);

var HidePublication = /*#__PURE__*/function () {
  function HidePublication(hidePublicationGateway, hidePublicationPresenter) {
    _classCallCheck(this, HidePublication);
    this.hidePublicationGateway = hidePublicationGateway;
    this.hidePublicationPresenter = hidePublicationPresenter;
  }
  _createClass(HidePublication, [{
    key: "hide",
    value: function () {
      var _hide = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
    _classCallCheck(this, ReportPublication);
    this.gateway = gateway;
    this.presenter = presenter;
  }
  _createClass(ReportPublication, [{
    key: "report",
    value: function () {
      var _report = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.gateway.report(request);
            case 2:
              this.presenter.present(success());
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
    _classCallCheck(this, ToggleProperty);
    this.gateway = gateway;
    this.presenter = presenter;
  }
  _createClass(ToggleProperty, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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

export { CreateComment, CreateMirror, CreatePost, CreateQuote, HidePublication, ReportPublication, ToggleProperty };
