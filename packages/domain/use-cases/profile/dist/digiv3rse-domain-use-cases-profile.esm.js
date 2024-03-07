import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../../../dist/asyncToGenerator-0859ab5c.esm.js';
import { _ as _classCallCheck, a as _createClass } from '../../../dist/createClass-ec354b47.esm.js';
import { _ as _inherits, a as _callSuper, b as _assertThisInitialized } from '../../../dist/inherits-241db0b5.esm.js';
import { S as SponsorshipReady } from '../../../dist/SponsorshipReady-9ac7d611.esm.js';
import { _ as _defineProperty, a as _wrapNativeSuper } from '../../../dist/wrapNativeSuper-2b6372d3.esm.js';
export { F as FollowPolicyType } from '../../../dist/FollowPolicy-c599dac9.esm.js';
import { success } from '@digiv3rse/shared-kernel';

var BlockProfiles = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(BlockProfiles, _SponsorshipReady);
  function BlockProfiles(delegableExecution, paidExecution) {
    var _this;
    _classCallCheck(this, BlockProfiles);
    _this = _callSuper(this, BlockProfiles);
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    return _this;
  }
  _createClass(BlockProfiles, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.delegableExecution.execute(request);
            case 2:
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
  return BlockProfiles;
}(SponsorshipReady);

function isClaimReservedHandleRequest(request) {
  return 'id' in request;
}
var ClaimHandleError = /*#__PURE__*/function (_Error) {
  _inherits(ClaimHandleError, _Error);
  function ClaimHandleError(localName, reason) {
    var _this;
    _classCallCheck(this, ClaimHandleError);
    _this = _callSuper(this, ClaimHandleError, ["Cannot claim\"".concat(localName, "\" because: ").concat(reason)]);
    _defineProperty(_assertThisInitialized(_this), "name", 'ClaimHandleError');
    _this.localName = localName;
    _this.reason = reason;
    return _this;
  }
  return _createClass(ClaimHandleError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ClaimHandle = /*#__PURE__*/function () {
  function ClaimHandle(gateway, transactionQueue, presenter) {
    _classCallCheck(this, ClaimHandle);
    this.gateway = gateway;
    this.transactionQueue = transactionQueue;
    this.presenter = presenter;
  }
  _createClass(ClaimHandle, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.gateway.claimHandleTransaction(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 6;
                break;
              }
              this.presenter.present(result);
              return _context.abrupt("return");
            case 6:
              transaction = result.value;
              _context.next = 9;
              return this.transactionQueue.push(transaction, this.presenter);
            case 9:
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
  return ClaimHandle;
}();

var CreateProfile = /*#__PURE__*/function () {
  function CreateProfile(wallets, gateway, presenter, queue) {
    _classCallCheck(this, CreateProfile);
    this.wallets = wallets;
    this.gateway = gateway;
    this.presenter = presenter;
    this.queue = queue;
  }
  _createClass(CreateProfile, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var wallet, unsigned, result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.wallets.getByAddress(request.to);
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
  return CreateProfile;
}();

var DismissRecommendedProfiles = /*#__PURE__*/function () {
  function DismissRecommendedProfiles(gateway, presenter) {
    _classCallCheck(this, DismissRecommendedProfiles);
    this.gateway = gateway;
    this.presenter = presenter;
  }
  _createClass(DismissRecommendedProfiles, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.gateway.dismiss(request);
            case 2:
              _context.next = 4;
              return this.presenter.present();
            case 4:
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
  return DismissRecommendedProfiles;
}();

function isPaidFollowRequest(request) {
  return 'fee' in request && request.fee !== undefined;
}
function isUnknownFollowRequest(request) {
  return 'address' in request;
}
var FollowProfile = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(FollowProfile, _SponsorshipReady);
  function FollowProfile(tokenAvailability, signedExecution, delegableExecution, paidExecution, presenter) {
    var _this;
    _classCallCheck(this, FollowProfile);
    _this = _callSuper(this, FollowProfile);
    _this.tokenAvailability = tokenAvailability;
    _this.signedExecution = signedExecution;
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    _this.presenter = presenter;
    return _this;
  }
  _createClass(FollowProfile, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!isPaidFollowRequest(request)) {
                _context2.next = 10;
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
              _context2.next = 9;
              return this.signedExecution.execute(request);
            case 9:
              return _context2.abrupt("return");
            case 10:
              _context2.next = 12;
              return this.delegableExecution.execute(request);
            case 12:
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
  return FollowProfile;
}(SponsorshipReady);

var LinkHandle = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(LinkHandle, _SponsorshipReady);
  function LinkHandle(delegableExecution, paidExecution) {
    var _this;
    _classCallCheck(this, LinkHandle);
    _this = _callSuper(this, LinkHandle);
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    return _this;
  }
  _createClass(LinkHandle, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.delegableExecution.execute(request);
            case 2:
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
  return LinkHandle;
}(SponsorshipReady);

var ReportProfile = /*#__PURE__*/function () {
  function ReportProfile(gateway, presenter) {
    _classCallCheck(this, ReportProfile);
    this.gateway = gateway;
    this.presenter = presenter;
  }
  _createClass(ReportProfile, [{
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
  return ReportProfile;
}();

var SetProfileMetadata = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(SetProfileMetadata, _SponsorshipReady);
  function SetProfileMetadata(delegableExecution, paidExecution) {
    var _this;
    _classCallCheck(this, SetProfileMetadata);
    _this = _callSuper(this, SetProfileMetadata);
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    return _this;
  }
  _createClass(SetProfileMetadata, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.delegableExecution.execute(request);
            case 2:
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
  return SetProfileMetadata;
}(SponsorshipReady);

var UnblockProfiles = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(UnblockProfiles, _SponsorshipReady);
  function UnblockProfiles(delegableExecution, paidExecution) {
    var _this;
    _classCallCheck(this, UnblockProfiles);
    _this = _callSuper(this, UnblockProfiles);
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    return _this;
  }
  _createClass(UnblockProfiles, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.delegableExecution.execute(request);
            case 2:
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
  return UnblockProfiles;
}(SponsorshipReady);

var UnfollowProfile = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(UnfollowProfile, _SponsorshipReady);
  function UnfollowProfile(delegableExecution, paidExecution) {
    var _this;
    _classCallCheck(this, UnfollowProfile);
    _this = _callSuper(this, UnfollowProfile);
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    return _this;
  }
  _createClass(UnfollowProfile, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.delegableExecution.execute(request);
            case 2:
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
  return UnfollowProfile;
}(SponsorshipReady);

var UnlinkHandle = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(UnlinkHandle, _SponsorshipReady);
  function UnlinkHandle(delegableExecution, paidExecution) {
    var _this;
    _classCallCheck(this, UnlinkHandle);
    _this = _callSuper(this, UnlinkHandle);
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    return _this;
  }
  _createClass(UnlinkHandle, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.delegableExecution.execute(request);
            case 2:
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
  return UnlinkHandle;
}(SponsorshipReady);

var UpdateFollowPolicy = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(UpdateFollowPolicy, _SponsorshipReady);
  function UpdateFollowPolicy(delegableExecution, paidExecution) {
    var _this;
    _classCallCheck(this, UpdateFollowPolicy);
    _this = _callSuper(this, UpdateFollowPolicy);
    _this.delegableExecution = delegableExecution;
    _this.paidExecution = paidExecution;
    return _this;
  }
  _createClass(UpdateFollowPolicy, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.delegableExecution.execute(request);
            case 2:
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
  return UpdateFollowPolicy;
}(SponsorshipReady);

var UpdateProfileManagers = /*#__PURE__*/function (_SponsorshipReady) {
  _inherits(UpdateProfileManagers, _SponsorshipReady);
  function UpdateProfileManagers(sponsoredExecution, paidExecution) {
    var _this;
    _classCallCheck(this, UpdateProfileManagers);
    _this = _callSuper(this, UpdateProfileManagers);
    _this.sponsoredExecution = sponsoredExecution;
    _this.paidExecution = paidExecution;
    return _this;
  }
  _createClass(UpdateProfileManagers, [{
    key: "charged",
    value: function () {
      var _charged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
      var _sponsored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.sponsoredExecution.execute(request);
            case 2:
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
  return UpdateProfileManagers;
}(SponsorshipReady);

export { BlockProfiles, ClaimHandle, ClaimHandleError, CreateProfile, DismissRecommendedProfiles, FollowProfile, LinkHandle, ReportProfile, SetProfileMetadata, UnblockProfiles, UnfollowProfile, UnlinkHandle, UpdateFollowPolicy, UpdateProfileManagers, isClaimReservedHandleRequest, isPaidFollowRequest, isUnknownFollowRequest };