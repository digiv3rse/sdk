export { B as BroadcastingError, a as BroadcastingErrorReason, P as PaidTransaction, b as TokenAllowance, T as TokenAllowanceLimit } from '../../../dist/TokenAllowance-72b1a48b.esm.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../../../dist/asyncToGenerator-0859ab5c.esm.js';
import { a as _createClass, _ as _classCallCheck } from '../../../dist/createClass-ec354b47.esm.js';
import { _ as _unsupportedIterableToArray } from '../../../dist/unsupportedIterableToArray-51bb61c2.esm.js';
import { success } from '@digiv3rse/shared-kernel';
import { c as TransactionEvent } from '../../../dist/Transactions-c61bd9da.esm.js';
import '../../../dist/inherits-241db0b5.esm.js';
import '../../../dist/wrapNativeSuper-2b6372d3.esm.js';

var DelegableSigning = /*#__PURE__*/function () {
  function DelegableSigning(signedOperation, transactionGateway, transactionQueue, presenter) {
    _classCallCheck(this, DelegableSigning);
    this.signedOperation = signedOperation;
    this.transactionGateway = transactionGateway;
    this.transactionQueue = transactionQueue;
    this.presenter = presenter;
  }
  _createClass(DelegableSigning, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!request.signless) {
                _context.next = 11;
                break;
              }
              _context.next = 3;
              return this.transactionGateway.createDelegatedTransaction(request);
            case 3:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 7;
                break;
              }
              this.presenter.present(result);
              return _context.abrupt("return");
            case 7:
              transaction = result.value;
              _context.next = 10;
              return this.transactionQueue.push(transaction, this.presenter);
            case 10:
              return _context.abrupt("return");
            case 11:
              return _context.abrupt("return", this.signedOperation.execute(request));
            case 12:
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
  return DelegableSigning;
}();

var SubsidizeOffChain = /*#__PURE__*/function () {
  function SubsidizeOffChain(activeWallet, gateway, relayer, queue, presenter) {
    _classCallCheck(this, SubsidizeOffChain);
    this.activeWallet = activeWallet;
    this.gateway = gateway;
    this.relayer = relayer;
    this.queue = queue;
    this.presenter = presenter;
  }
  _createClass(SubsidizeOffChain, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var wallet, unsignedCall, signingResult, relayResult, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.activeWallet.requireActiveWallet();
            case 2:
              wallet = _context.sent;
              _context.next = 5;
              return this.gateway.createUnsignedProtocolCall(request);
            case 5:
              unsignedCall = _context.sent;
              _context.next = 8;
              return wallet.signProtocolCall(unsignedCall);
            case 8:
              signingResult = _context.sent;
              if (!signingResult.isFailure()) {
                _context.next = 12;
                break;
              }
              this.presenter.present(signingResult);
              return _context.abrupt("return");
            case 12:
              _context.next = 14;
              return this.relayer.relaySignedMomoka(signingResult.value);
            case 14:
              relayResult = _context.sent;
              if (!relayResult.isFailure()) {
                _context.next = 18;
                break;
              }
              this.presenter.present(relayResult);
              return _context.abrupt("return");
            case 18:
              transaction = relayResult.value;
              _context.next = 21;
              return this.queue.push(transaction, this.presenter);
            case 21:
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
  return SubsidizeOffChain;
}();

var SignedOnChain = /*#__PURE__*/function () {
  function SignedOnChain(activeWallet, metaTransactionNonceGateway, signedOnChainGateway, relayer, transactionQueue, presenter) {
    _classCallCheck(this, SignedOnChain);
    this.activeWallet = activeWallet;
    this.metaTransactionNonceGateway = metaTransactionNonceGateway;
    this.signedOnChainGateway = signedOnChainGateway;
    this.relayer = relayer;
    this.transactionQueue = transactionQueue;
    this.presenter = presenter;
  }
  _createClass(SignedOnChain, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var wallet, nonce, unsignedCall, signingResult, relayResult, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.activeWallet.requireActiveWallet();
            case 2:
              wallet = _context.sent;
              _context.next = 5;
              return this.metaTransactionNonceGateway.getNextMetaTransactionNonceFor(request.kind);
            case 5:
              nonce = _context.sent;
              _context.next = 8;
              return this.signedOnChainGateway.createUnsignedProtocolCall(request, nonce);
            case 8:
              unsignedCall = _context.sent;
              _context.next = 11;
              return wallet.signProtocolCall(unsignedCall);
            case 11:
              signingResult = _context.sent;
              if (!signingResult.isFailure()) {
                _context.next = 15;
                break;
              }
              this.presenter.present(signingResult);
              return _context.abrupt("return");
            case 15:
              _context.next = 17;
              return this.relayer.relayProtocolCall(signingResult.value);
            case 17:
              relayResult = _context.sent;
              if (!relayResult.isFailure()) {
                _context.next = 21;
                break;
              }
              this.presenter.present(relayResult);
              return _context.abrupt("return");
            case 21:
              transaction = relayResult.value;
              _context.next = 24;
              return this.transactionQueue.push(transaction, this.presenter);
            case 24:
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
  return SignedOnChain;
}();

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function transactionData(tx) {
  if ('hash' in tx && tx.hash) {
    return {
      id: tx.id,
      request: tx.request,
      txHash: tx.hash
    };
  }
  return {
    id: tx.id,
    request: tx.request
  };
}
var TransactionQueue = /*#__PURE__*/function () {
  function TransactionQueue(responders, transactionGateway, transactionQueuePresenter) {
    _classCallCheck(this, TransactionQueue);
    this.responders = responders;
    this.transactionGateway = transactionGateway;
    this.transactionQueuePresenter = transactionQueuePresenter;
  }
  _createClass(TransactionQueue, [{
    key: "clearRecent",
    value: function clearRecent() {
      // This method might seem a bit weird, but it's actually a precursor to the
      // fully fledged solution which will store the transactions in the localStorage (at first).
      this.transactionQueuePresenter.clearRecent();
    }
  }, {
    key: "push",
    value: function () {
      var _push = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(transaction, presenter) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.transactionGateway.save(transaction);
            case 2:
              _context.next = 4;
              return this.handle(transaction, presenter);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function push(_x, _x2) {
        return _push.apply(this, arguments);
      }
      return push;
    }()
  }, {
    key: "resume",
    value: function () {
      var _resume = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var transactions, _iterator, _step, transaction;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.transactionGateway.getAll();
            case 2:
              transactions = _context2.sent;
              _iterator = _createForOfIteratorHelper(transactions);
              _context2.prev = 4;
              _iterator.s();
            case 6:
              if ((_step = _iterator.n()).done) {
                _context2.next = 12;
                break;
              }
              transaction = _step.value;
              _context2.next = 10;
              return this.handle(transaction);
            case 10:
              _context2.next = 6;
              break;
            case 12:
              _context2.next = 17;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](4);
              _iterator.e(_context2.t0);
            case 17:
              _context2.prev = 17;
              _iterator.f();
              return _context2.finish(17);
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[4, 14, 17, 20]]);
      }));
      function resume() {
        return _resume.apply(this, arguments);
      }
      return resume;
    }()
  }, {
    key: "handle",
    value: function () {
      var _handle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(transaction, presenter) {
        var txData;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              txData = transactionData(transaction);
              _context3.next = 3;
              return this.prepare(txData);
            case 3:
              void this.observe(transaction, presenter);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function handle(_x3, _x4) {
        return _handle.apply(this, arguments);
      }
      return handle;
    }()
  }, {
    key: "observe",
    value: function () {
      var _observe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(transaction, presenter) {
        var result, _txData, txData;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.waitCompletion(transaction);
            case 2:
              result = _context4.sent;
              _context4.next = 5;
              return this.transactionGateway.remove(transaction.id);
            case 5:
              if (!result.isFailure()) {
                _context4.next = 11;
                break;
              }
              _txData = transactionData(transaction);
              _context4.next = 9;
              return this.rollback(result.error, _txData);
            case 9:
              presenter === null || presenter === void 0 || presenter.present(result);
              return _context4.abrupt("return");
            case 11:
              txData = transactionData(transaction);
              _context4.next = 14;
              return this.commit(txData);
            case 14:
              presenter === null || presenter === void 0 || presenter.present(success(txData));
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function observe(_x5, _x6) {
        return _observe.apply(this, arguments);
      }
      return observe;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(txData) {
        var _responder$prepare;
        var responder;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              responder = this.getResponderFor(txData.request.kind);
              _context5.next = 3;
              return (_responder$prepare = responder.prepare) === null || _responder$prepare === void 0 ? void 0 : _responder$prepare.call(responder, txData);
            case 3:
              this.transactionQueuePresenter.pending(txData);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function prepare(_x7) {
        return _prepare.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(txData) {
        var responder;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              responder = this.getResponderFor(txData.request.kind);
              _context6.next = 3;
              return responder.commit(txData);
            case 3:
              this.transactionQueuePresenter.settled(txData);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function commit(_x8) {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }, {
    key: "rollback",
    value: function () {
      var _rollback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(error, txData) {
        var _responder$rollback;
        var responder;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              responder = this.getResponderFor(txData.request.kind);
              _context7.next = 3;
              return (_responder$rollback = responder.rollback) === null || _responder$rollback === void 0 ? void 0 : _responder$rollback.call(responder, txData);
            case 3:
              this.transactionQueuePresenter.failed(error, txData);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function rollback(_x9, _x10) {
        return _rollback.apply(this, arguments);
      }
      return rollback;
    }()
  }, {
    key: "waitCompletion",
    value: function () {
      var _waitCompletion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(transaction) {
        var _result;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 3;
              return transaction.waitNextEvent();
            case 3:
              _result = _context8.sent;
              if (!_result.isFailure()) {
                _context8.next = 6;
                break;
              }
              return _context8.abrupt("return", _result);
            case 6:
              if (!(_result.value === TransactionEvent.SETTLED)) {
                _context8.next = 8;
                break;
              }
              return _context8.abrupt("return", success());
            case 8:
              this.transactionQueuePresenter.pending(transactionData(transaction));
              _context8.next = 11;
              return this.transactionGateway.save(transaction);
            case 11:
              _context8.next = 0;
              break;
            case 13:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function waitCompletion(_x11) {
        return _waitCompletion.apply(this, arguments);
      }
      return waitCompletion;
    }()
  }, {
    key: "getResponderFor",
    value: function getResponderFor(kind) {
      return this.responders[kind];
    }
  }], [{
    key: "create",
    value: function create(responders, transactionGateway, transactionQueuePresenter) {
      var queue = new TransactionQueue(responders, transactionGateway, transactionQueuePresenter);
      transactionGateway.subscribe( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(newTransactions) {
          var _iterator2, _step2, transaction;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper(newTransactions);
                _context9.prev = 1;
                _iterator2.s();
              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context9.next = 9;
                  break;
                }
                transaction = _step2.value;
                _context9.next = 7;
                return queue.handle(transaction);
              case 7:
                _context9.next = 3;
                break;
              case 9:
                _context9.next = 14;
                break;
              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](1);
                _iterator2.e(_context9.t0);
              case 14:
                _context9.prev = 14;
                _iterator2.f();
                return _context9.finish(14);
              case 17:
              case "end":
                return _context9.stop();
            }
          }, _callee9, null, [[1, 11, 14, 17]]);
        }));
        return function (_x12) {
          return _ref.apply(this, arguments);
        };
      }());
      return queue;
    }
  }]);
  return TransactionQueue;
}();

export { DelegableSigning, SignedOnChain, SubsidizeOffChain, TransactionQueue };
