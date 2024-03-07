import * as Apollo from '@apollo/client';
import { ApolloError, Observable, ApolloClient, defaultDataIdFromObject, makeVar, useReactiveVar, InMemoryCache } from '@apollo/client';
import { getOperationName } from '@apollo/client/utilities';
import { invariant, CausedError, assertError, erc20, ChainType, Amount, never, DateUtils, hasJustOne, isNonNullable, assertJustOne, hasTwoOrMore, assertNever, hasAtLeastOne } from '@digiv3rse/shared-kernel';
import gql from 'graphql-tag';
import { FollowPolicyType } from '@digiv3rse/domain/use-cases/profile';
import { TransactionKind, TransactionError, TransactionErrorReason, DecryptionCriteriaType, NftContractType } from '@digiv3rse/domain/entities';
import { CollectType, CollectPolicyType, ReferencePolicyType } from '@digiv3rse/domain/use-cases/publications';

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function assertGraphQLClientQueryResult(result, operationName) {
  invariant(result.data, "No data received for query: ".concat(operationName));
}
function assertGraphQLClientMutationResult(result, operationName) {
  invariant(result.data, "No data received for mutation: ".concat(operationName));
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var UnspecifiedError = /*#__PURE__*/function (_CausedError) {
  _inherits(UnspecifiedError, _CausedError);
  var _super = _createSuper(UnspecifiedError);
  function UnspecifiedError(cause) {
    var _this;
    _classCallCheck(this, UnspecifiedError);
    _this = _super.call(this, cause.message, {
      cause: cause
    });
    _defineProperty(_assertThisInitialized(_this), "name", 'UnspecifiedError');
    return _this;
  }
  return _createClass(UnspecifiedError);
}(CausedError);
var ValidationError = /*#__PURE__*/function (_CausedError2) {
  _inherits(ValidationError, _CausedError2);
  var _super2 = _createSuper(ValidationError);
  function ValidationError(cause) {
    var _this2;
    _classCallCheck(this, ValidationError);
    _this2 = _super2.call(this, 'A validation error occurred', {
      cause: cause
    });
    _defineProperty(_assertThisInitialized(_this2), "name", 'ValidationError');
    return _this2;
  }
  return _createClass(ValidationError);
}(CausedError);

var ApolloServerErrorCode;
(function (ApolloServerErrorCode) {
  ApolloServerErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
  ApolloServerErrorCode["GRAPHQL_PARSE_FAILED"] = "GRAPHQL_PARSE_FAILED";
  ApolloServerErrorCode["GRAPHQL_VALIDATION_FAILED"] = "GRAPHQL_VALIDATION_FAILED";
  ApolloServerErrorCode["PERSISTED_QUERY_NOT_FOUND"] = "PERSISTED_QUERY_NOT_FOUND";
  ApolloServerErrorCode["PERSISTED_QUERY_NOT_SUPPORTED"] = "PERSISTED_QUERY_NOT_SUPPORTED";
  ApolloServerErrorCode["BAD_USER_INPUT"] = "BAD_USER_INPUT";
  ApolloServerErrorCode["OPERATION_RESOLUTION_FAILURE"] = "OPERATION_RESOLUTION_FAILURE";
  ApolloServerErrorCode["BAD_REQUEST"] = "BAD_REQUEST";
})(ApolloServerErrorCode || (ApolloServerErrorCode = {}));
function isGraphQLValidationError(e) {
  if (e instanceof ApolloError) {
    if (e.graphQLErrors[0] && e.graphQLErrors[0].extensions && e.graphQLErrors[0].extensions.code === ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED) {
      return true;
    }
  }
  return false;
}

var clientName = 'digi-sdk';
var defaultPollingInterval = 3000;
function resolveError(error) {
  assertError(error);
  if (isGraphQLValidationError(error)) {
    return new ValidationError(error);
  }
  return new UnspecifiedError(error);
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var SafeApolloClient = /*#__PURE__*/function (_ref) {
  _inherits(SafeApolloClient, _ref);
  var _super = _createSuper(SafeApolloClient);
  function SafeApolloClient(_ref2) {
    var _this;
    var cache = _ref2.cache,
      link = _ref2.link,
      _ref2$pollingInterval = _ref2.pollingInterval,
      pollingInterval = _ref2$pollingInterval === void 0 ? defaultPollingInterval : _ref2$pollingInterval,
      version = _ref2.version,
      _ref2$connectToDevToo = _ref2.connectToDevTools,
      connectToDevTools = _ref2$connectToDevToo === void 0 ? false : _ref2$connectToDevToo;
    _classCallCheck(this, SafeApolloClient);
    invariant(isTerminating(link), 'The link passed to SafeApolloClient must be a terminating link.');
    _this = _super.call(this, {
      cache: cache,
      defaultOptions: {
        query: {
          errorPolicy: 'none'
        },
        mutate: {
          errorPolicy: 'none'
        },
        watchQuery: {
          errorPolicy: 'none'
        }
      },
      link: link,
      name: clientName,
      version: version,
      connectToDevTools: connectToDevTools
    });
    _this.pollingInterval = pollingInterval;
    return _this;
  }
  _createClass(SafeApolloClient, [{
    key: "query",
    value: function () {
      var _query = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
        var _getOperationName, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _get(_getPrototypeOf(SafeApolloClient.prototype), "query", this).call(this, options);
            case 3:
              result = _context.sent;
              assertGraphQLClientQueryResult(result, (_getOperationName = getOperationName(options.query)) !== null && _getOperationName !== void 0 ? _getOperationName : 'unknown');
              return _context.abrupt("return", result);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              throw resolveError(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 8]]);
      }));
      function query(_x) {
        return _query.apply(this, arguments);
      }
      return query;
    }()
  }, {
    key: "mutate",
    value: function () {
      var _mutate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
        var _getOperationName2, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _get(_getPrototypeOf(SafeApolloClient.prototype), "mutate", this).call(this, options);
            case 3:
              result = _context2.sent;
              assertGraphQLClientMutationResult(result, (_getOperationName2 = getOperationName(options.mutation)) !== null && _getOperationName2 !== void 0 ? _getOperationName2 : 'unknown');
              return _context2.abrupt("return", result);
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              throw resolveError(_context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 8]]);
      }));
      function mutate(_x2) {
        return _mutate.apply(this, arguments);
      }
      return mutate;
    }()
  }, {
    key: "poll",
    value: function poll(options) {
      var observable = _get(_getPrototypeOf(SafeApolloClient.prototype), "watchQuery", this).call(this, options);
      observable.startPolling(this.pollingInterval);
      return new Observable(function (observer) {
        return observable.subscribe({
          next: function next(_ref3) {
            var data = _ref3.data;
            observer.next(data);
          },
          error: function error(err) {
            observer.error(resolveError(err));
          },
          complete: function complete() {
            observer.complete();
          }
        });
      });
    }
  }]);
  return SafeApolloClient;
}(ApolloClient);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155;
var defaultOptions$1 = {};
/** All built-in and custom scalars, mapped to their actual values */

/** The claim status */
var ClaimStatus;

/** Condition that signifies if address or profile has collected a publication */
(function (ClaimStatus) {
  ClaimStatus["AlreadyClaimed"] = "ALREADY_CLAIMED";
  ClaimStatus["ClaimFailed"] = "CLAIM_FAILED";
  ClaimStatus["NotClaimed"] = "NOT_CLAIMED";
})(ClaimStatus || (ClaimStatus = {}));
/** The collect module types */
var CollectModules;
(function (CollectModules) {
  CollectModules["AaveFeeCollectModule"] = "AaveFeeCollectModule";
  CollectModules["Erc4626FeeCollectModule"] = "ERC4626FeeCollectModule";
  CollectModules["FeeCollectModule"] = "FeeCollectModule";
  CollectModules["FreeCollectModule"] = "FreeCollectModule";
  CollectModules["LimitedFeeCollectModule"] = "LimitedFeeCollectModule";
  CollectModules["LimitedTimedFeeCollectModule"] = "LimitedTimedFeeCollectModule";
  CollectModules["MultirecipientFeeCollectModule"] = "MultirecipientFeeCollectModule";
  CollectModules["RevertCollectModule"] = "RevertCollectModule";
  CollectModules["SimpleCollectModule"] = "SimpleCollectModule";
  CollectModules["TimedFeeCollectModule"] = "TimedFeeCollectModule";
  CollectModules["UnknownCollectModule"] = "UnknownCollectModule";
})(CollectModules || (CollectModules = {}));
/** The comment ordering types */
var CommentOrderingTypes;

/** The comment ranking filter types */
(function (CommentOrderingTypes) {
  CommentOrderingTypes["Desc"] = "DESC";
  CommentOrderingTypes["Ranking"] = "RANKING";
})(CommentOrderingTypes || (CommentOrderingTypes = {}));
var CommentRankingFilter;

/** The gated publication access criteria contract types */
(function (CommentRankingFilter) {
  CommentRankingFilter["NoneRelevant"] = "NONE_RELEVANT";
  CommentRankingFilter["Relevant"] = "RELEVANT";
})(CommentRankingFilter || (CommentRankingFilter = {}));
var ContractType;
(function (ContractType) {
  ContractType["Erc20"] = "ERC20";
  ContractType["Erc721"] = "ERC721";
  ContractType["Erc1155"] = "ERC1155";
})(ContractType || (ContractType = {}));
/** The custom filters types */
var CustomFiltersTypes;
(function (CustomFiltersTypes) {
  CustomFiltersTypes["Gardeners"] = "GARDENERS";
})(CustomFiltersTypes || (CustomFiltersTypes = {}));
/** The reason why a profile cannot decrypt a publication */
var DecryptFailReason;
(function (DecryptFailReason) {
  DecryptFailReason["CanNotDecrypt"] = "CAN_NOT_DECRYPT";
  DecryptFailReason["CollectNotFinalisedOnChain"] = "COLLECT_NOT_FINALISED_ON_CHAIN";
  DecryptFailReason["DoesNotFollowProfile"] = "DOES_NOT_FOLLOW_PROFILE";
  DecryptFailReason["DoesNotOwnNft"] = "DOES_NOT_OWN_NFT";
  DecryptFailReason["DoesNotOwnProfile"] = "DOES_NOT_OWN_PROFILE";
  DecryptFailReason["FollowNotFinalisedOnChain"] = "FOLLOW_NOT_FINALISED_ON_CHAIN";
  DecryptFailReason["HasNotCollectedPublication"] = "HAS_NOT_COLLECTED_PUBLICATION";
  DecryptFailReason["MissingEncryptionParams"] = "MISSING_ENCRYPTION_PARAMS";
  DecryptFailReason["ProfileDoesNotExist"] = "PROFILE_DOES_NOT_EXIST";
  DecryptFailReason["UnauthorizedAddress"] = "UNAUTHORIZED_ADDRESS";
  DecryptFailReason["UnauthorizedBalance"] = "UNAUTHORIZED_BALANCE";
})(DecryptFailReason || (DecryptFailReason = {}));
/** The gated publication encryption provider */
var EncryptionProvider;
(function (EncryptionProvider) {
  EncryptionProvider["LitProtocol"] = "LIT_PROTOCOL";
})(EncryptionProvider || (EncryptionProvider = {}));
/** The feed event item filter types */
var FeedEventItemType;
(function (FeedEventItemType) {
  FeedEventItemType["CollectComment"] = "COLLECT_COMMENT";
  FeedEventItemType["CollectPost"] = "COLLECT_POST";
  FeedEventItemType["Comment"] = "COMMENT";
  FeedEventItemType["Mirror"] = "MIRROR";
  FeedEventItemType["Post"] = "POST";
  FeedEventItemType["ReactionComment"] = "REACTION_COMMENT";
  FeedEventItemType["ReactionPost"] = "REACTION_POST";
})(FeedEventItemType || (FeedEventItemType = {}));
/** The follow module types */
var FollowModules;
(function (FollowModules) {
  FollowModules["FeeFollowModule"] = "FeeFollowModule";
  FollowModules["ProfileFollowModule"] = "ProfileFollowModule";
  FollowModules["RevertFollowModule"] = "RevertFollowModule";
  FollowModules["UnknownFollowModule"] = "UnknownFollowModule";
})(FollowModules || (FollowModules = {}));
/** The verify webhook result status type */
var IdKitPhoneVerifyWebhookResultStatusType;
(function (IdKitPhoneVerifyWebhookResultStatusType) {
  IdKitPhoneVerifyWebhookResultStatusType["AlreadyVerified"] = "ALREADY_VERIFIED";
  IdKitPhoneVerifyWebhookResultStatusType["Success"] = "SUCCESS";
})(IdKitPhoneVerifyWebhookResultStatusType || (IdKitPhoneVerifyWebhookResultStatusType = {}));
/** The momka validator error */
var MomokaValidatorError;
(function (MomokaValidatorError) {
  MomokaValidatorError["BlockCantBeReadFromNode"] = "BLOCK_CANT_BE_READ_FROM_NODE";
  MomokaValidatorError["BlockTooFar"] = "BLOCK_TOO_FAR";
  MomokaValidatorError["CanNotConnectToBundlr"] = "CAN_NOT_CONNECT_TO_BUNDLR";
  MomokaValidatorError["ChainSignatureAlreadyUsed"] = "CHAIN_SIGNATURE_ALREADY_USED";
  MomokaValidatorError["DataCantBeReadFromNode"] = "DATA_CANT_BE_READ_FROM_NODE";
  MomokaValidatorError["EventMismatch"] = "EVENT_MISMATCH";
  MomokaValidatorError["GeneratedPublicationIdMismatch"] = "GENERATED_PUBLICATION_ID_MISMATCH";
  MomokaValidatorError["InvalidEventTimestamp"] = "INVALID_EVENT_TIMESTAMP";
  MomokaValidatorError["InvalidFormattedTypedData"] = "INVALID_FORMATTED_TYPED_DATA";
  MomokaValidatorError["InvalidPointerSetNotNeeded"] = "INVALID_POINTER_SET_NOT_NEEDED";
  MomokaValidatorError["InvalidSignatureSubmitter"] = "INVALID_SIGNATURE_SUBMITTER";
  MomokaValidatorError["InvalidTxId"] = "INVALID_TX_ID";
  MomokaValidatorError["InvalidTypedDataDeadlineTimestamp"] = "INVALID_TYPED_DATA_DEADLINE_TIMESTAMP";
  MomokaValidatorError["NotClosestBlock"] = "NOT_CLOSEST_BLOCK";
  MomokaValidatorError["NoSignatureSubmitter"] = "NO_SIGNATURE_SUBMITTER";
  MomokaValidatorError["PointerFailedVerification"] = "POINTER_FAILED_VERIFICATION";
  MomokaValidatorError["PotentialReorg"] = "POTENTIAL_REORG";
  MomokaValidatorError["PublicationNonceInvalid"] = "PUBLICATION_NONCE_INVALID";
  MomokaValidatorError["PublicationNoneDa"] = "PUBLICATION_NONE_DA";
  MomokaValidatorError["PublicationNoPointer"] = "PUBLICATION_NO_POINTER";
  MomokaValidatorError["PublicationSignerNotAllowed"] = "PUBLICATION_SIGNER_NOT_ALLOWED";
  MomokaValidatorError["SimulationFailed"] = "SIMULATION_FAILED";
  MomokaValidatorError["SimulationNodeCouldNotRun"] = "SIMULATION_NODE_COULD_NOT_RUN";
  MomokaValidatorError["TimestampProofInvalidDaId"] = "TIMESTAMP_PROOF_INVALID_DA_ID";
  MomokaValidatorError["TimestampProofInvalidSignature"] = "TIMESTAMP_PROOF_INVALID_SIGNATURE";
  MomokaValidatorError["TimestampProofInvalidType"] = "TIMESTAMP_PROOF_INVALID_TYPE";
  MomokaValidatorError["TimestampProofNotSubmitter"] = "TIMESTAMP_PROOF_NOT_SUBMITTER";
  MomokaValidatorError["Unknown"] = "UNKNOWN";
})(MomokaValidatorError || (MomokaValidatorError = {}));
/** The notification filter types */
var NotificationTypes;
(function (NotificationTypes) {
  NotificationTypes["CollectedComment"] = "COLLECTED_COMMENT";
  NotificationTypes["CollectedPost"] = "COLLECTED_POST";
  NotificationTypes["CommentedComment"] = "COMMENTED_COMMENT";
  NotificationTypes["CommentedPost"] = "COMMENTED_POST";
  NotificationTypes["Followed"] = "FOLLOWED";
  NotificationTypes["MentionComment"] = "MENTION_COMMENT";
  NotificationTypes["MentionPost"] = "MENTION_POST";
  NotificationTypes["MirroredComment"] = "MIRRORED_COMMENT";
  NotificationTypes["MirroredPost"] = "MIRRORED_POST";
  NotificationTypes["ReactionComment"] = "REACTION_COMMENT";
  NotificationTypes["ReactionPost"] = "REACTION_POST";
})(NotificationTypes || (NotificationTypes = {}));
/** profile sort criteria */
var ProfileSortCriteria;
(function (ProfileSortCriteria) {
  ProfileSortCriteria["CreatedOn"] = "CREATED_ON";
  ProfileSortCriteria["LatestCreated"] = "LATEST_CREATED";
  ProfileSortCriteria["MostCollects"] = "MOST_COLLECTS";
  ProfileSortCriteria["MostComments"] = "MOST_COMMENTS";
  ProfileSortCriteria["MostFollowers"] = "MOST_FOLLOWERS";
  ProfileSortCriteria["MostMirrors"] = "MOST_MIRRORS";
  ProfileSortCriteria["MostPosts"] = "MOST_POSTS";
  ProfileSortCriteria["MostPublication"] = "MOST_PUBLICATION";
})(ProfileSortCriteria || (ProfileSortCriteria = {}));
/** The proxy action status */
var ProxyActionStatusTypes;
(function (ProxyActionStatusTypes) {
  ProxyActionStatusTypes["Complete"] = "COMPLETE";
  ProxyActionStatusTypes["Minting"] = "MINTING";
  ProxyActionStatusTypes["Transferring"] = "TRANSFERRING";
})(ProxyActionStatusTypes || (ProxyActionStatusTypes = {}));
/** The publication content warning */
var PublicationContentWarning;
(function (PublicationContentWarning) {
  PublicationContentWarning["Nsfw"] = "NSFW";
  PublicationContentWarning["Sensitive"] = "SENSITIVE";
  PublicationContentWarning["Spoiler"] = "SPOILER";
})(PublicationContentWarning || (PublicationContentWarning = {}));
/** The publication main focus */
var PublicationMainFocus;

/** The source of the media */
(function (PublicationMainFocus) {
  PublicationMainFocus["Article"] = "ARTICLE";
  PublicationMainFocus["Audio"] = "AUDIO";
  PublicationMainFocus["Embed"] = "EMBED";
  PublicationMainFocus["Image"] = "IMAGE";
  PublicationMainFocus["Link"] = "LINK";
  PublicationMainFocus["TextOnly"] = "TEXT_ONLY";
  PublicationMainFocus["Video"] = "VIDEO";
})(PublicationMainFocus || (PublicationMainFocus = {}));
var PublicationMediaSource;

/** Publication metadata content warning filters */
(function (PublicationMediaSource) {
  PublicationMediaSource["DiGi"] = "DIGI";
})(PublicationMediaSource || (PublicationMediaSource = {}));
/** The publication metadata display types */
var PublicationMetadataDisplayTypes;

/** Publication metadata filters */
(function (PublicationMetadataDisplayTypes) {
  PublicationMetadataDisplayTypes["Date"] = "date";
  PublicationMetadataDisplayTypes["Number"] = "number";
  PublicationMetadataDisplayTypes["String"] = "string";
})(PublicationMetadataDisplayTypes || (PublicationMetadataDisplayTypes = {}));
/** publication metadata status type */
var PublicationMetadataStatusType;

/** Publication metadata tag filter */
(function (PublicationMetadataStatusType) {
  PublicationMetadataStatusType["MetadataValidationFailed"] = "METADATA_VALIDATION_FAILED";
  PublicationMetadataStatusType["NotFound"] = "NOT_FOUND";
  PublicationMetadataStatusType["Pending"] = "PENDING";
  PublicationMetadataStatusType["Success"] = "SUCCESS";
})(PublicationMetadataStatusType || (PublicationMetadataStatusType = {}));
/** Publication reporting fraud subreason */
var PublicationReportingFraudSubreason;

/** Publication reporting illegal subreason */
(function (PublicationReportingFraudSubreason) {
  PublicationReportingFraudSubreason["Impersonation"] = "IMPERSONATION";
  PublicationReportingFraudSubreason["Scam"] = "SCAM";
})(PublicationReportingFraudSubreason || (PublicationReportingFraudSubreason = {}));
var PublicationReportingIllegalSubreason;

/** Publication reporting reason */
(function (PublicationReportingIllegalSubreason) {
  PublicationReportingIllegalSubreason["AnimalAbuse"] = "ANIMAL_ABUSE";
  PublicationReportingIllegalSubreason["DirectThreat"] = "DIRECT_THREAT";
  PublicationReportingIllegalSubreason["HumanAbuse"] = "HUMAN_ABUSE";
  PublicationReportingIllegalSubreason["ThreatIndividual"] = "THREAT_INDIVIDUAL";
  PublicationReportingIllegalSubreason["Violence"] = "VIOLENCE";
})(PublicationReportingIllegalSubreason || (PublicationReportingIllegalSubreason = {}));
var PublicationReportingReason;

/** Publication reporting sensitive subreason */
(function (PublicationReportingReason) {
  PublicationReportingReason["Fraud"] = "FRAUD";
  PublicationReportingReason["Illegal"] = "ILLEGAL";
  PublicationReportingReason["Sensitive"] = "SENSITIVE";
  PublicationReportingReason["Spam"] = "SPAM";
})(PublicationReportingReason || (PublicationReportingReason = {}));
var PublicationReportingSensitiveSubreason;

/** Publication reporting spam subreason */
(function (PublicationReportingSensitiveSubreason) {
  PublicationReportingSensitiveSubreason["Nsfw"] = "NSFW";
  PublicationReportingSensitiveSubreason["Offensive"] = "OFFENSIVE";
})(PublicationReportingSensitiveSubreason || (PublicationReportingSensitiveSubreason = {}));
var PublicationReportingSpamSubreason;
(function (PublicationReportingSpamSubreason) {
  PublicationReportingSpamSubreason["FakeEngagement"] = "FAKE_ENGAGEMENT";
  PublicationReportingSpamSubreason["LowSignal"] = "LOW_SIGNAL";
  PublicationReportingSpamSubreason["ManipulationAlgo"] = "MANIPULATION_ALGO";
  PublicationReportingSpamSubreason["Misleading"] = "MISLEADING";
  PublicationReportingSpamSubreason["MisuseHashtags"] = "MISUSE_HASHTAGS";
  PublicationReportingSpamSubreason["Repetitive"] = "REPETITIVE";
  PublicationReportingSpamSubreason["SomethingElse"] = "SOMETHING_ELSE";
  PublicationReportingSpamSubreason["Unrelated"] = "UNRELATED";
})(PublicationReportingSpamSubreason || (PublicationReportingSpamSubreason = {}));
/** Publication sort criteria */
var PublicationSortCriteria;

/** The publication types */
(function (PublicationSortCriteria) {
  PublicationSortCriteria["CuratedProfiles"] = "CURATED_PROFILES";
  PublicationSortCriteria["Latest"] = "LATEST";
  PublicationSortCriteria["TopCollected"] = "TOP_COLLECTED";
  PublicationSortCriteria["TopCommented"] = "TOP_COMMENTED";
  PublicationSortCriteria["TopMirrored"] = "TOP_MIRRORED";
})(PublicationSortCriteria || (PublicationSortCriteria = {}));
var PublicationTypes;
(function (PublicationTypes) {
  PublicationTypes["Comment"] = "COMMENT";
  PublicationTypes["Mirror"] = "MIRROR";
  PublicationTypes["Post"] = "POST";
})(PublicationTypes || (PublicationTypes = {}));
/** Reaction types */
var ReactionTypes;
(function (ReactionTypes) {
  ReactionTypes["Downvote"] = "DOWNVOTE";
  ReactionTypes["Upvote"] = "UPVOTE";
})(ReactionTypes || (ReactionTypes = {}));
/** The reference module types */
var ReferenceModules;

/** The refresh request */
(function (ReferenceModules) {
  ReferenceModules["DegreesOfSeparationReferenceModule"] = "DegreesOfSeparationReferenceModule";
  ReferenceModules["FollowerOnlyReferenceModule"] = "FollowerOnlyReferenceModule";
  ReferenceModules["UnknownReferenceModule"] = "UnknownReferenceModule";
})(ReferenceModules || (ReferenceModules = {}));
/** Relay error reason */
var RelayErrorReasons;

/** The relay role key */
(function (RelayErrorReasons) {
  RelayErrorReasons["Expired"] = "EXPIRED";
  RelayErrorReasons["HandleTaken"] = "HANDLE_TAKEN";
  RelayErrorReasons["NotAllowed"] = "NOT_ALLOWED";
  RelayErrorReasons["Rejected"] = "REJECTED";
  RelayErrorReasons["WrongWalletSigned"] = "WRONG_WALLET_SIGNED";
})(RelayErrorReasons || (RelayErrorReasons = {}));
var RelayRoleKey;

/** The request object to remove interests from a profile */
(function (RelayRoleKey) {
  RelayRoleKey["CreateProfile"] = "CREATE_PROFILE";
  RelayRoleKey["Dispatcher_1"] = "DISPATCHER_1";
  RelayRoleKey["Dispatcher_2"] = "DISPATCHER_2";
  RelayRoleKey["Dispatcher_3"] = "DISPATCHER_3";
  RelayRoleKey["Dispatcher_4"] = "DISPATCHER_4";
  RelayRoleKey["Dispatcher_5"] = "DISPATCHER_5";
  RelayRoleKey["Dispatcher_6"] = "DISPATCHER_6";
  RelayRoleKey["Dispatcher_7"] = "DISPATCHER_7";
  RelayRoleKey["Dispatcher_8"] = "DISPATCHER_8";
  RelayRoleKey["Dispatcher_9"] = "DISPATCHER_9";
  RelayRoleKey["Dispatcher_10"] = "DISPATCHER_10";
  RelayRoleKey["ProxyActionCollect_1"] = "PROXY_ACTION_COLLECT_1";
  RelayRoleKey["ProxyActionCollect_2"] = "PROXY_ACTION_COLLECT_2";
  RelayRoleKey["ProxyActionCollect_3"] = "PROXY_ACTION_COLLECT_3";
  RelayRoleKey["ProxyActionCollect_4"] = "PROXY_ACTION_COLLECT_4";
  RelayRoleKey["ProxyActionCollect_5"] = "PROXY_ACTION_COLLECT_5";
  RelayRoleKey["ProxyActionCollect_6"] = "PROXY_ACTION_COLLECT_6";
  RelayRoleKey["ProxyActionFollow_1"] = "PROXY_ACTION_FOLLOW_1";
  RelayRoleKey["ProxyActionFollow_2"] = "PROXY_ACTION_FOLLOW_2";
  RelayRoleKey["ProxyActionFollow_3"] = "PROXY_ACTION_FOLLOW_3";
  RelayRoleKey["ProxyActionFollow_4"] = "PROXY_ACTION_FOLLOW_4";
  RelayRoleKey["ProxyActionFollow_5"] = "PROXY_ACTION_FOLLOW_5";
  RelayRoleKey["ProxyActionFollow_6"] = "PROXY_ACTION_FOLLOW_6";
  RelayRoleKey["ProxyActionFollow_7"] = "PROXY_ACTION_FOLLOW_7";
  RelayRoleKey["ProxyActionFollow_8"] = "PROXY_ACTION_FOLLOW_8";
  RelayRoleKey["ProxyActionFollow_9"] = "PROXY_ACTION_FOLLOW_9";
  RelayRoleKey["ProxyActionFollow_10"] = "PROXY_ACTION_FOLLOW_10";
  RelayRoleKey["WithSig_1"] = "WITH_SIG_1";
  RelayRoleKey["WithSig_2"] = "WITH_SIG_2";
  RelayRoleKey["WithSig_3"] = "WITH_SIG_3";
  RelayRoleKey["ZkRelayer_1"] = "ZK_RELAYER_1";
})(RelayRoleKey || (RelayRoleKey = {}));
/** The gated publication access criteria scalar operators */
var ScalarOperator;
(function (ScalarOperator) {
  ScalarOperator["Equal"] = "EQUAL";
  ScalarOperator["GreaterThan"] = "GREATER_THAN";
  ScalarOperator["GreaterThanOrEqual"] = "GREATER_THAN_OR_EQUAL";
  ScalarOperator["LessThan"] = "LESS_THAN";
  ScalarOperator["LessThanOrEqual"] = "LESS_THAN_OR_EQUAL";
  ScalarOperator["NotEqual"] = "NOT_EQUAL";
})(ScalarOperator || (ScalarOperator = {}));
/** Search request types */
var SearchRequestTypes;
(function (SearchRequestTypes) {
  SearchRequestTypes["Profile"] = "PROFILE";
  SearchRequestTypes["Publication"] = "PUBLICATION";
})(SearchRequestTypes || (SearchRequestTypes = {}));
/** The publications tags sort criteria */
var TagSortCriteria;
(function (TagSortCriteria) {
  TagSortCriteria["Alphabetical"] = "ALPHABETICAL";
  TagSortCriteria["MostPopular"] = "MOST_POPULAR";
})(TagSortCriteria || (TagSortCriteria = {}));
/** Transaction error reason */
var TransactionErrorReasons;
(function (TransactionErrorReasons) {
  TransactionErrorReasons["Reverted"] = "REVERTED";
})(TransactionErrorReasons || (TransactionErrorReasons = {}));
/** The worldcoin signal type */
var WorldcoinPhoneVerifyType;
(function (WorldcoinPhoneVerifyType) {
  WorldcoinPhoneVerifyType["Orb"] = "ORB";
  WorldcoinPhoneVerifyType["Phone"] = "PHONE";
})(WorldcoinPhoneVerifyType || (WorldcoinPhoneVerifyType = {}));
var FragmentEip712TypedDataDomain = /*#__PURE__*/gql(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  fragment EIP712TypedDataDomain on EIP712TypedDataDomain {\n    __typename\n    name\n    chainId\n    version\n    verifyingContract\n  }\n"])));
var FragmentCreateCommentEip712TypedData = /*#__PURE__*/gql(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  fragment CreateCommentEIP712TypedData on CreateCommentEIP712TypedData {\n    types {\n      CommentWithSig {\n        name\n        type\n      }\n    }\n    domain {\n      ...EIP712TypedDataDomain\n    }\n    message: value {\n      nonce\n      deadline\n      profileId\n      contentURI\n      profileIdPointed\n      pubIdPointed\n      collectModule\n      collectModuleInitData\n      referenceModuleData\n      referenceModule\n      referenceModuleInitData\n    }\n  }\n  ", "\n"])), FragmentEip712TypedDataDomain);
var FragmentPaginatedResultInfo = /*#__PURE__*/gql(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  fragment PaginatedResultInfo on PaginatedResultInfo {\n    __typename\n    moreAfter @client\n    prev\n    next\n    totalCount\n  }\n"])));
var FragmentPublicationStats = /*#__PURE__*/gql(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  fragment PublicationStats on PublicationStats {\n    __typename\n    totalAmountOfMirrors\n    totalUpvotes\n    totalDownvotes\n    totalAmountOfCollects\n    totalAmountOfComments\n    totalBookmarks\n    commentsCount: commentsTotal(forSources: $sources)\n  }\n"])));
var FragmentMedia = /*#__PURE__*/gql(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  fragment Media on Media {\n    __typename\n    altTag\n    cover\n    mimeType\n    url\n  }\n"])));
var FragmentPublicationMediaSet = /*#__PURE__*/gql(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  fragment PublicationMediaSet on MediaSet {\n    __typename\n    original {\n      ...Media\n    }\n    optimized {\n      ...Media\n    }\n    small: transformed(params: $mediaTransformPublicationSmall) {\n      ...Media\n    }\n    medium: transformed(params: $mediaTransformPublicationMedium) {\n      ...Media\n    }\n  }\n  ", "\n"])), FragmentMedia);
var FragmentMetadataAttributeOutput = /*#__PURE__*/gql(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  fragment MetadataAttributeOutput on MetadataAttributeOutput {\n    __typename\n    traitType\n    value\n  }\n"])));
var FragmentNftOwnershipOutput = /*#__PURE__*/gql(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  fragment NftOwnershipOutput on NftOwnershipOutput {\n    __typename\n    contractAddress\n    chainID\n    contractType\n    tokenIds\n  }\n"])));
var FragmentErc20OwnershipOutput = /*#__PURE__*/gql(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  fragment Erc20OwnershipOutput on Erc20OwnershipOutput {\n    __typename\n    amount\n    chainID\n    condition\n    contractAddress\n    decimals\n    name\n    symbol\n  }\n"])));
var FragmentEoaOwnershipOutput = /*#__PURE__*/gql(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  fragment EoaOwnershipOutput on EoaOwnershipOutput {\n    __typename\n    address\n  }\n"])));
var FragmentProfileOwnershipOutput = /*#__PURE__*/gql(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  fragment ProfileOwnershipOutput on ProfileOwnershipOutput {\n    __typename\n    profileId\n  }\n"])));
var FragmentFollowConditionOutput = /*#__PURE__*/gql(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  fragment FollowConditionOutput on FollowConditionOutput {\n    __typename\n    profileId\n  }\n"])));
var FragmentCollectConditionOutput = /*#__PURE__*/gql(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  fragment CollectConditionOutput on CollectConditionOutput {\n    __typename\n    publicationId\n    thisPublication\n  }\n"])));
var FragmentLeafConditionOutput = /*#__PURE__*/gql(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  fragment LeafConditionOutput on AccessConditionOutput {\n    __typename\n    nft {\n      ...NftOwnershipOutput\n    }\n    token {\n      ...Erc20OwnershipOutput\n    }\n    eoa {\n      ...EoaOwnershipOutput\n    }\n    profile {\n      ...ProfileOwnershipOutput\n    }\n    follow {\n      ...FollowConditionOutput\n    }\n    collect {\n      ...CollectConditionOutput\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentNftOwnershipOutput, FragmentErc20OwnershipOutput, FragmentEoaOwnershipOutput, FragmentProfileOwnershipOutput, FragmentFollowConditionOutput, FragmentCollectConditionOutput);
var FragmentOrConditionOutput = /*#__PURE__*/gql(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  fragment OrConditionOutput on OrConditionOutput {\n    __typename\n    criteria {\n      ...LeafConditionOutput\n    }\n  }\n  ", "\n"])), FragmentLeafConditionOutput);
var FragmentAndConditionOutput = /*#__PURE__*/gql(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  fragment AndConditionOutput on AndConditionOutput {\n    __typename\n    criteria {\n      ...LeafConditionOutput\n    }\n  }\n  ", "\n"])), FragmentLeafConditionOutput);
var FragmentAnyConditionOutput = /*#__PURE__*/gql(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  fragment AnyConditionOutput on AccessConditionOutput {\n    __typename\n    ...LeafConditionOutput\n    or {\n      ...OrConditionOutput\n    }\n    and {\n      ...AndConditionOutput\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentLeafConditionOutput, FragmentOrConditionOutput, FragmentAndConditionOutput);
var FragmentRootConditionOutput = /*#__PURE__*/gql(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  fragment RootConditionOutput on AccessConditionOutput {\n    __typename\n    or {\n      criteria {\n        ...AnyConditionOutput\n      }\n    }\n  }\n  ", "\n"])), FragmentAnyConditionOutput);
var FragmentEncryptedMedia = /*#__PURE__*/gql(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  fragment EncryptedMedia on EncryptedMedia {\n    __typename\n    altTag\n    cover\n    mimeType\n    url\n  }\n"])));
var FragmentEncryptedFieldsOutput = /*#__PURE__*/gql(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  fragment EncryptedFieldsOutput on EncryptedFieldsOutput {\n    __typename\n    animation_url\n    content\n    external_url\n    image\n    media {\n      original {\n        ...EncryptedMedia\n      }\n    }\n  }\n  ", "\n"])), FragmentEncryptedMedia);
var FragmentEncryptionParamsOutput = /*#__PURE__*/gql(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  fragment EncryptionParamsOutput on EncryptionParamsOutput {\n    __typename\n    accessCondition {\n      ...RootConditionOutput\n    }\n    encryptionProvider\n    encryptedFields {\n      ...EncryptedFieldsOutput\n    }\n    providerSpecificParams {\n      encryptionKey\n    }\n  }\n  ", "\n  ", "\n"])), FragmentRootConditionOutput, FragmentEncryptedFieldsOutput);
var FragmentMetadataOutput = /*#__PURE__*/gql(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  fragment MetadataOutput on MetadataOutput {\n    __typename\n    animatedUrl\n    content\n    contentWarning\n    description\n    image\n    locale\n    mainContentFocus\n    name\n    media {\n      ...PublicationMediaSet\n    }\n    attributes {\n      ...MetadataAttributeOutput\n    }\n    encryptionParams {\n      ...EncryptionParamsOutput\n    }\n    tags\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentPublicationMediaSet, FragmentMetadataAttributeOutput, FragmentEncryptionParamsOutput);
var FragmentNftImage = /*#__PURE__*/gql(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  fragment NftImage on NftImage {\n    __typename\n    contractAddress\n    tokenId\n    uri\n    verified\n  }\n"])));
var FragmentProfilePictureSet = /*#__PURE__*/gql(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  fragment ProfilePictureSet on MediaSet {\n    __typename\n    original {\n      ...Media\n    }\n    optimized {\n      ...Media\n    }\n    thumbnail: transformed(params: $mediaTransformProfileThumbnail) {\n      ...Media\n    }\n  }\n  ", "\n"])), FragmentMedia);
var FragmentProfileCoverSet = /*#__PURE__*/gql(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  fragment ProfileCoverSet on MediaSet {\n    __typename\n    original {\n      ...Media\n    }\n    optimized {\n      ...Media\n    }\n  }\n  ", "\n"])), FragmentMedia);
var FragmentProfileStats = /*#__PURE__*/gql(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  fragment ProfileStats on ProfileStats {\n    __typename\n    totalCollects\n    totalComments\n    totalFollowers\n    totalFollowing\n    totalMirrors\n    totalPosts\n    totalPublications\n    commentsCount: commentsTotal(forSources: $sources)\n    postsCount: postsTotal(forSources: $sources)\n    mirrorsCount: mirrorsTotal(forSources: $sources)\n  }\n"])));
var FragmentErc20Fields = /*#__PURE__*/gql(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  fragment Erc20Fields on Erc20 {\n    __typename\n    name\n    symbol\n    decimals\n    address\n  }\n"])));
var FragmentModuleFeeAmount = /*#__PURE__*/gql(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  fragment ModuleFeeAmount on ModuleFeeAmount {\n    __typename\n    asset {\n      ...Erc20Fields\n    }\n    value\n  }\n  ", "\n"])), FragmentErc20Fields);
var FragmentFeeFollowModuleSettings = /*#__PURE__*/gql(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  fragment FeeFollowModuleSettings on FeeFollowModuleSettings {\n    __typename\n    amount {\n      ...ModuleFeeAmount\n    }\n    contractAddress\n    recipient\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentProfileFollowModuleSettings = /*#__PURE__*/gql(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  fragment ProfileFollowModuleSettings on ProfileFollowModuleSettings {\n    __typename\n    contractAddress\n  }\n"])));
var FragmentRevertFollowModuleSettings = /*#__PURE__*/gql(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  fragment RevertFollowModuleSettings on RevertFollowModuleSettings {\n    __typename\n    contractAddress\n  }\n"])));
var FragmentUnknownFollowModuleSettings = /*#__PURE__*/gql(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  fragment UnknownFollowModuleSettings on UnknownFollowModuleSettings {\n    __typename\n    contractAddress\n  }\n"])));
var FragmentAttribute = /*#__PURE__*/gql(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  fragment Attribute on Attribute {\n    __typename\n    displayType\n    key\n    value\n  }\n"])));
var FragmentProfileFields = /*#__PURE__*/gql(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  fragment ProfileFields on Profile {\n    __typename\n    id\n    name\n    bio\n    handle\n    ownedBy\n    interests\n    followNftAddress\n    picture {\n      ... on NftImage {\n        ...NftImage\n      }\n      ... on MediaSet {\n        ...ProfilePictureSet\n      }\n    }\n    coverPicture {\n      ... on NftImage {\n        ...NftImage\n      }\n      ... on MediaSet {\n        ...ProfileCoverSet\n      }\n    }\n    stats {\n      ...ProfileStats\n    }\n    followModule {\n      ... on FeeFollowModuleSettings {\n        ...FeeFollowModuleSettings\n      }\n      ... on ProfileFollowModuleSettings {\n        ...ProfileFollowModuleSettings\n      }\n      ... on RevertFollowModuleSettings {\n        ...RevertFollowModuleSettings\n      }\n      ... on UnknownFollowModuleSettings {\n        ...UnknownFollowModuleSettings\n      }\n    }\n    followPolicy @client\n    __attributes: attributes {\n      ...Attribute\n    }\n    attributes: attributesMap @client\n    dispatcher {\n      address\n      canUseRelay\n    }\n    onChainIdentity {\n      proofOfHumanity\n      ens {\n        name\n      }\n      sybilDotOrg {\n        verified\n        source {\n          twitter {\n            handle\n          }\n        }\n      }\n      worldcoin {\n        isHuman\n      }\n    }\n    isFollowedByMe\n    isFollowingObserver: isFollowing(who: $observerId)\n    followStatus @client\n    ownedByMe @client\n    observedBy @client\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentNftImage, FragmentProfilePictureSet, FragmentProfileCoverSet, FragmentProfileStats, FragmentFeeFollowModuleSettings, FragmentProfileFollowModuleSettings, FragmentRevertFollowModuleSettings, FragmentUnknownFollowModuleSettings, FragmentAttribute);
var FragmentProfile = /*#__PURE__*/gql(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  fragment Profile on Profile {\n    ...ProfileFields\n    invitedBy {\n      ...ProfileFields\n    }\n  }\n  ", "\n"])), FragmentProfileFields);
var FragmentWallet = /*#__PURE__*/gql(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  fragment Wallet on Wallet {\n    __typename\n    address\n    defaultProfile {\n      ...Profile\n    }\n  }\n  ", "\n"])), FragmentProfile);
var FragmentAaveFeeCollectModuleSettings = /*#__PURE__*/gql(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  fragment AaveFeeCollectModuleSettings on AaveFeeCollectModuleSettings {\n    __typename\n    amount {\n      ...ModuleFeeAmount\n    }\n    collectLimitOptional: collectLimit\n    contractAddress\n    followerOnly\n    endTimestampOptional: endTimestamp\n    recipient\n    referralFee\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentErc4626FeeCollectModuleSettings = /*#__PURE__*/gql(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  fragment Erc4626FeeCollectModuleSettings on ERC4626FeeCollectModuleSettings {\n    __typename\n    amount {\n      ...ModuleFeeAmount\n    }\n    collectLimitOptional: collectLimit\n    contractAddress\n    followerOnly\n    endTimestampOptional: endTimestamp\n    recipient\n    referralFee\n    vault\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentMultirecipientFeeCollectModuleSettings = /*#__PURE__*/gql(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  fragment MultirecipientFeeCollectModuleSettings on MultirecipientFeeCollectModuleSettings {\n    __typename\n    amount {\n      ...ModuleFeeAmount\n    }\n    collectLimitOptional: collectLimit\n    contractAddress\n    followerOnly\n    endTimestampOptional: endTimestamp\n    recipients {\n      recipient\n      split\n    }\n    referralFee\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentUnknownCollectModuleSettings = /*#__PURE__*/gql(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  fragment UnknownCollectModuleSettings on UnknownCollectModuleSettings {\n    __typename\n    contractAddress\n    collectModuleReturnData\n  }\n"])));
var FragmentFreeCollectModuleSettings = /*#__PURE__*/gql(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  fragment FreeCollectModuleSettings on FreeCollectModuleSettings {\n    __typename\n    contractAddress\n    followerOnly\n  }\n"])));
var FragmentFeeCollectModuleSettings = /*#__PURE__*/gql(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  fragment FeeCollectModuleSettings on FeeCollectModuleSettings {\n    __typename\n    amount {\n      ...ModuleFeeAmount\n    }\n    contractAddress\n    followerOnly\n    recipient\n    referralFee\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentLimitedFeeCollectModuleSettings = /*#__PURE__*/gql(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  fragment LimitedFeeCollectModuleSettings on LimitedFeeCollectModuleSettings {\n    __typename\n    amount {\n      ...ModuleFeeAmount\n    }\n    collectLimit\n    contractAddress\n    followerOnly\n    recipient\n    referralFee\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentLimitedTimedFeeCollectModuleSettings = /*#__PURE__*/gql(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  fragment LimitedTimedFeeCollectModuleSettings on LimitedTimedFeeCollectModuleSettings {\n    __typename\n    amount {\n      ...ModuleFeeAmount\n    }\n    collectLimit\n    contractAddress\n    followerOnly\n    endTimestamp\n    recipient\n    referralFee\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentRevertCollectModuleSettings = /*#__PURE__*/gql(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  fragment RevertCollectModuleSettings on RevertCollectModuleSettings {\n    __typename\n    contractAddress\n  }\n"])));
var FragmentTimedFeeCollectModuleSettings = /*#__PURE__*/gql(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  fragment TimedFeeCollectModuleSettings on TimedFeeCollectModuleSettings {\n    __typename\n    amount {\n      ...ModuleFeeAmount\n    }\n    contractAddress\n    followerOnly\n    endTimestamp\n    recipient\n    referralFee\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentSimpleCollectModuleSettings = /*#__PURE__*/gql(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  fragment SimpleCollectModuleSettings on SimpleCollectModuleSettings {\n    __typename\n    contractAddress\n    followerOnly\n    feeOptional: fee {\n      amount {\n        ...ModuleFeeAmount\n      }\n      referralFee\n      recipient\n    }\n    collectLimitOptional: collectLimit\n    endTimestampOptional: endTimestamp\n  }\n  ", "\n"])), FragmentModuleFeeAmount);
var FragmentFollowOnlyReferenceModuleSettings = /*#__PURE__*/gql(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  fragment FollowOnlyReferenceModuleSettings on FollowOnlyReferenceModuleSettings {\n    __typename\n    contractAddress\n  }\n"])));
var FragmentDegreesOfSeparationReferenceModuleSettings = /*#__PURE__*/gql(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  fragment DegreesOfSeparationReferenceModuleSettings on DegreesOfSeparationReferenceModuleSettings {\n    __typename\n    contractAddress\n    commentsRestricted\n    degreesOfSeparation\n    mirrorsRestricted\n  }\n"])));
var FragmentUnknownReferenceModuleSettings = /*#__PURE__*/gql(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  fragment UnknownReferenceModuleSettings on UnknownReferenceModuleSettings {\n    __typename\n    contractAddress\n    referenceModuleReturnData\n  }\n"])));
var FragmentCommentBase = /*#__PURE__*/gql(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  fragment CommentBase on Comment {\n    __typename\n    id\n    appId\n    stats {\n      ...PublicationStats\n    }\n    metadata {\n      ...MetadataOutput\n    }\n    profile {\n      ...Profile\n    }\n    collectedBy {\n      ...Wallet\n    }\n    collectModule {\n      ... on AaveFeeCollectModuleSettings {\n        ...AaveFeeCollectModuleSettings\n      }\n      ... on ERC4626FeeCollectModuleSettings {\n        ...Erc4626FeeCollectModuleSettings\n      }\n      ... on MultirecipientFeeCollectModuleSettings {\n        ...MultirecipientFeeCollectModuleSettings\n      }\n      ... on UnknownCollectModuleSettings {\n        ...UnknownCollectModuleSettings\n      }\n      ... on FreeCollectModuleSettings {\n        ...FreeCollectModuleSettings\n      }\n      ... on FeeCollectModuleSettings {\n        ...FeeCollectModuleSettings\n      }\n      ... on LimitedFeeCollectModuleSettings {\n        ...LimitedFeeCollectModuleSettings\n      }\n      ... on LimitedTimedFeeCollectModuleSettings {\n        ...LimitedTimedFeeCollectModuleSettings\n      }\n      ... on RevertCollectModuleSettings {\n        ...RevertCollectModuleSettings\n      }\n      ... on TimedFeeCollectModuleSettings {\n        ...TimedFeeCollectModuleSettings\n      }\n      ... on SimpleCollectModuleSettings {\n        ...SimpleCollectModuleSettings\n      }\n    }\n    collectNftAddress\n    referenceModule {\n      ... on FollowOnlyReferenceModuleSettings {\n        ...FollowOnlyReferenceModuleSettings\n      }\n      ... on DegreesOfSeparationReferenceModuleSettings {\n        ...DegreesOfSeparationReferenceModuleSettings\n      }\n      ... on UnknownReferenceModuleSettings {\n        ...UnknownReferenceModuleSettings\n      }\n    }\n    createdAt\n    hidden\n    isGated\n    reaction(request: { profileId: $observerId })\n    hasCollectedByMe\n    canComment(profileId: $observerId) {\n      result\n    }\n    canMirror(profileId: $observerId) {\n      result\n    }\n    canObserverDecrypt: canDecrypt(profileId: $observerId) {\n      result\n      reasons\n    }\n    mirrors(by: $observerId)\n    notInterested(by: $observerId)\n    bookmarked(by: $observerId)\n    hasOptimisticCollectedByMe @client\n    isOptimisticMirroredByMe @client\n    isMirroredByMe @client\n    collectPolicy @client\n    referencePolicy @client\n    decryptionCriteria @client\n    contentInsight @client\n    observedBy @client\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentPublicationStats, FragmentMetadataOutput, FragmentProfile, FragmentWallet, FragmentAaveFeeCollectModuleSettings, FragmentErc4626FeeCollectModuleSettings, FragmentMultirecipientFeeCollectModuleSettings, FragmentUnknownCollectModuleSettings, FragmentFreeCollectModuleSettings, FragmentFeeCollectModuleSettings, FragmentLimitedFeeCollectModuleSettings, FragmentLimitedTimedFeeCollectModuleSettings, FragmentRevertCollectModuleSettings, FragmentTimedFeeCollectModuleSettings, FragmentSimpleCollectModuleSettings, FragmentFollowOnlyReferenceModuleSettings, FragmentDegreesOfSeparationReferenceModuleSettings, FragmentUnknownReferenceModuleSettings);
var FragmentPost = /*#__PURE__*/gql(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n  fragment Post on Post {\n    __typename\n    id\n    appId\n    stats {\n      ...PublicationStats\n    }\n    metadata {\n      ...MetadataOutput\n    }\n    profile {\n      ...Profile\n    }\n    collectedBy {\n      ...Wallet\n    }\n    collectModule {\n      ... on AaveFeeCollectModuleSettings {\n        ...AaveFeeCollectModuleSettings\n      }\n      ... on ERC4626FeeCollectModuleSettings {\n        ...Erc4626FeeCollectModuleSettings\n      }\n      ... on MultirecipientFeeCollectModuleSettings {\n        ...MultirecipientFeeCollectModuleSettings\n      }\n      ... on UnknownCollectModuleSettings {\n        ...UnknownCollectModuleSettings\n      }\n      ... on FreeCollectModuleSettings {\n        ...FreeCollectModuleSettings\n      }\n      ... on FeeCollectModuleSettings {\n        ...FeeCollectModuleSettings\n      }\n      ... on LimitedFeeCollectModuleSettings {\n        ...LimitedFeeCollectModuleSettings\n      }\n      ... on LimitedTimedFeeCollectModuleSettings {\n        ...LimitedTimedFeeCollectModuleSettings\n      }\n      ... on RevertCollectModuleSettings {\n        ...RevertCollectModuleSettings\n      }\n      ... on TimedFeeCollectModuleSettings {\n        ...TimedFeeCollectModuleSettings\n      }\n      ... on SimpleCollectModuleSettings {\n        ...SimpleCollectModuleSettings\n      }\n    }\n    collectNftAddress\n    referenceModule {\n      ... on FollowOnlyReferenceModuleSettings {\n        ...FollowOnlyReferenceModuleSettings\n      }\n      ... on DegreesOfSeparationReferenceModuleSettings {\n        ...DegreesOfSeparationReferenceModuleSettings\n      }\n      ... on UnknownReferenceModuleSettings {\n        ...UnknownReferenceModuleSettings\n      }\n    }\n    createdAt\n    hidden\n    isGated\n    reaction(request: { profileId: $observerId })\n    hasCollectedByMe\n    canComment(profileId: $observerId) {\n      result\n    }\n    canMirror(profileId: $observerId) {\n      result\n    }\n    canObserverDecrypt: canDecrypt(profileId: $observerId) {\n      result\n      reasons\n    }\n    mirrors(by: $observerId)\n    notInterested(by: $observerId)\n    bookmarked(by: $observerId)\n    hasOptimisticCollectedByMe @client\n    isOptimisticMirroredByMe @client\n    isMirroredByMe @client\n    collectPolicy @client\n    referencePolicy @client\n    decryptionCriteria @client\n    contentInsight @client\n    observedBy @client\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentPublicationStats, FragmentMetadataOutput, FragmentProfile, FragmentWallet, FragmentAaveFeeCollectModuleSettings, FragmentErc4626FeeCollectModuleSettings, FragmentMultirecipientFeeCollectModuleSettings, FragmentUnknownCollectModuleSettings, FragmentFreeCollectModuleSettings, FragmentFeeCollectModuleSettings, FragmentLimitedFeeCollectModuleSettings, FragmentLimitedTimedFeeCollectModuleSettings, FragmentRevertCollectModuleSettings, FragmentTimedFeeCollectModuleSettings, FragmentSimpleCollectModuleSettings, FragmentFollowOnlyReferenceModuleSettings, FragmentDegreesOfSeparationReferenceModuleSettings, FragmentUnknownReferenceModuleSettings);
var FragmentMirrorBase = /*#__PURE__*/gql(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  fragment MirrorBase on Mirror {\n    __typename\n    id\n    createdAt\n    profile {\n      ...Profile\n    }\n    hidden\n  }\n  ", "\n"])), FragmentProfile);
var FragmentComment = /*#__PURE__*/gql(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  fragment Comment on Comment {\n    __typename\n    ...CommentBase\n    commentOn {\n      ... on Post {\n        ...Post\n      }\n      ... on Mirror {\n        ...MirrorBase\n      }\n      ... on Comment {\n        ...CommentBase\n      }\n    }\n    mainPost {\n      ... on Post {\n        ...Post\n      }\n      ... on Mirror {\n        ...MirrorBase\n      }\n    }\n    firstComment {\n      ...CommentBase\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentCommentBase, FragmentPost, FragmentMirrorBase);
var FragmentMirror = /*#__PURE__*/gql(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  fragment Mirror on Mirror {\n    __typename\n    ...MirrorBase\n    mirrorOf {\n      ... on Post {\n        ...Post\n      }\n      ... on Comment {\n        ...Comment\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentMirrorBase, FragmentPost, FragmentComment);
var FragmentPublication = /*#__PURE__*/gql(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  fragment Publication on Publication {\n    ... on Comment {\n      ...Comment\n    }\n    ... on Post {\n      ...Post\n    }\n    ... on Mirror {\n      ...Mirror\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentComment, FragmentPost, FragmentMirror);
var FragmentPendingPost = /*#__PURE__*/gql(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n  fragment PendingPost on PendingPost {\n    __typename\n    id\n    content\n    media {\n      ...Media\n    }\n    profile {\n      ...Profile\n    }\n    locale\n    mainContentFocus\n  }\n  ", "\n  ", "\n"])), FragmentMedia, FragmentProfile);
var FragmentElectedMirror = /*#__PURE__*/gql(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n  fragment ElectedMirror on ElectedMirror {\n    __typename\n    mirrorId\n    profile {\n      ...Profile\n    }\n    timestamp\n  }\n  ", "\n"])), FragmentProfile);
var FragmentMirrorEvent = /*#__PURE__*/gql(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n  fragment MirrorEvent on MirrorEvent {\n    __typename\n    profile {\n      ...Profile\n    }\n    timestamp\n  }\n  ", "\n"])), FragmentProfile);
var FragmentCollectedEvent = /*#__PURE__*/gql(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  fragment CollectedEvent on CollectedEvent {\n    __typename\n    profile {\n      ...Profile\n    }\n    timestamp\n  }\n  ", "\n"])), FragmentProfile);
var FragmentReactionEvent = /*#__PURE__*/gql(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n  fragment ReactionEvent on ReactionEvent {\n    __typename\n    profile {\n      ...Profile\n    }\n    reaction\n    timestamp\n  }\n  ", "\n"])), FragmentProfile);
var FragmentFeedItem = /*#__PURE__*/gql(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n  fragment FeedItem on FeedItem {\n    __typename\n    root {\n      ... on Post {\n        ...Post\n      }\n      ... on Comment {\n        ...Comment\n      }\n    }\n    comments {\n      ...Comment\n    }\n    electedMirror {\n      ...ElectedMirror\n    }\n    mirrors {\n      ...MirrorEvent\n    }\n    collects {\n      ...CollectedEvent\n    }\n    reactions {\n      ...ReactionEvent\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentPost, FragmentComment, FragmentElectedMirror, FragmentMirrorEvent, FragmentCollectedEvent, FragmentReactionEvent);
var FragmentEncryptedMediaSet = /*#__PURE__*/gql(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  fragment EncryptedMediaSet on EncryptedMediaSet {\n    __typename\n    original {\n      ...EncryptedMedia\n    }\n  }\n  ", "\n"])), FragmentEncryptedMedia);
var FragmentCreateMirrorEip712TypedData = /*#__PURE__*/gql(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n  fragment CreateMirrorEIP712TypedData on CreateMirrorEIP712TypedData {\n    types {\n      MirrorWithSig {\n        name\n        type\n      }\n    }\n    domain {\n      ...EIP712TypedDataDomain\n    }\n    message: value {\n      nonce\n      deadline\n      profileId\n      profileIdPointed\n      pubIdPointed\n      referenceModuleData\n      referenceModule\n      referenceModuleInitData\n    }\n  }\n  ", "\n"])), FragmentEip712TypedDataDomain);
var FragmentModuleInfo = /*#__PURE__*/gql(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n  fragment ModuleInfo on ModuleInfo {\n    __typename\n    name\n    type\n  }\n"])));
var FragmentEnabledModule = /*#__PURE__*/gql(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  fragment EnabledModule on EnabledModule {\n    __typename\n    moduleName\n    contractAddress\n    inputParams {\n      ...ModuleInfo\n    }\n    redeemParams {\n      ...ModuleInfo\n    }\n    returnDataParams: returnDataParms {\n      ...ModuleInfo\n    }\n  }\n  ", "\n"])), FragmentModuleInfo);
var FragmentEnabledModules = /*#__PURE__*/gql(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n  fragment EnabledModules on EnabledModules {\n    __typename\n    collectModules {\n      ...EnabledModule\n    }\n    followModules {\n      ...EnabledModule\n    }\n    referenceModules {\n      ...EnabledModule\n    }\n  }\n  ", "\n"])), FragmentEnabledModule);
var FragmentNewFollowerNotification = /*#__PURE__*/gql(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  fragment NewFollowerNotification on NewFollowerNotification {\n    __typename\n    notificationId\n    createdAt\n    isFollowedByMe\n    wallet {\n      ...Wallet\n    }\n  }\n  ", "\n"])), FragmentWallet);
var FragmentNewCollectNotification = /*#__PURE__*/gql(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  fragment NewCollectNotification on NewCollectNotification {\n    __typename\n    notificationId\n    createdAt\n    wallet {\n      ...Wallet\n    }\n    collectedPublication {\n      ... on Post {\n        ...Post\n      }\n      ... on Mirror {\n        ...Mirror\n      }\n      ... on Comment {\n        ...Comment\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentWallet, FragmentPost, FragmentMirror, FragmentComment);
var FragmentNewMirrorNotification = /*#__PURE__*/gql(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  fragment NewMirrorNotification on NewMirrorNotification {\n    __typename\n    notificationId\n    createdAt\n    profile {\n      ...Profile\n    }\n    publication {\n      ... on Post {\n        ...Post\n      }\n      ... on Comment {\n        ...Comment\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentProfile, FragmentPost, FragmentComment);
var FragmentNewCommentNotification = /*#__PURE__*/gql(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n  fragment NewCommentNotification on NewCommentNotification {\n    __typename\n    notificationId\n    createdAt\n    profile {\n      ...Profile\n    }\n    comment {\n      ...Comment\n    }\n  }\n  ", "\n  ", "\n"])), FragmentProfile, FragmentComment);
var FragmentNewMentionNotification = /*#__PURE__*/gql(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n  fragment NewMentionNotification on NewMentionNotification {\n    __typename\n    notificationId\n    createdAt\n    mentionPublication {\n      ... on Post {\n        ...Post\n      }\n      ... on Comment {\n        ...Comment\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentPost, FragmentComment);
var FragmentNewReactionNotification = /*#__PURE__*/gql(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n  fragment NewReactionNotification on NewReactionNotification {\n    __typename\n    notificationId\n    createdAt\n    profile {\n      ...Profile\n    }\n    reaction\n    publication {\n      ... on Post {\n        ...Post\n      }\n      ... on Comment {\n        ...Comment\n      }\n      ... on Mirror {\n        ...Mirror\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentProfile, FragmentPost, FragmentComment, FragmentMirror);
var FragmentCreatePostEip712TypedData = /*#__PURE__*/gql(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["\n  fragment CreatePostEIP712TypedData on CreatePostEIP712TypedData {\n    types {\n      PostWithSig {\n        name\n        type\n      }\n    }\n    domain {\n      ...EIP712TypedDataDomain\n    }\n    message: value {\n      nonce\n      deadline\n      profileId\n      contentURI\n      collectModule\n      collectModuleInitData\n      referenceModule\n      referenceModuleInitData\n    }\n  }\n  ", "\n"])), FragmentEip712TypedDataDomain);
var FragmentProfileGuardianResult = /*#__PURE__*/gql(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n  fragment ProfileGuardianResult on ProfileGuardianResult {\n    protected\n    disablingProtectionTimestamp\n  }\n"])));
var FragmentFollower = /*#__PURE__*/gql(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n  fragment Follower on Follower {\n    __typename\n    wallet {\n      ...Wallet\n    }\n  }\n  ", "\n"])), FragmentWallet);
var FragmentFollowing = /*#__PURE__*/gql(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n  fragment Following on Following {\n    __typename\n    profile {\n      ...Profile\n    }\n  }\n  ", "\n"])), FragmentProfile);
var FragmentProxyActionStatusResult = /*#__PURE__*/gql(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n  fragment ProxyActionStatusResult on ProxyActionStatusResult {\n    __typename\n    txHash\n    txId\n    status\n  }\n"])));
var FragmentProxyActionError = /*#__PURE__*/gql(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n  fragment ProxyActionError on ProxyActionError {\n    __typename\n    reason\n    lastKnownTxId\n  }\n"])));
var FragmentProxyActionQueued = /*#__PURE__*/gql(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n  fragment ProxyActionQueued on ProxyActionQueued {\n    __typename\n    queuedAt\n  }\n"])));
var FragmentWhoReactedResult = /*#__PURE__*/gql(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n  fragment WhoReactedResult on WhoReactedResult {\n    __typename\n    reactionId\n    reaction\n    reactionAt\n    profile {\n      ...Profile\n    }\n  }\n  ", "\n"])), FragmentProfile);
var FragmentErc20AmountFields = /*#__PURE__*/gql(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["\n  fragment Erc20AmountFields on Erc20Amount {\n    __typename\n    asset {\n      ...Erc20Fields\n    }\n    value\n  }\n  ", "\n"])), FragmentErc20Fields);
var FragmentRevenueAggregate = /*#__PURE__*/gql(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n  fragment RevenueAggregate on RevenueAggregate {\n    __typename\n    __total: total {\n      ...Erc20AmountFields\n    }\n    totalAmount @client\n  }\n  ", "\n"])), FragmentErc20AmountFields);
var FragmentPublicationRevenue = /*#__PURE__*/gql(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n  fragment PublicationRevenue on PublicationRevenue {\n    __typename\n    publication {\n      ... on Post {\n        ...Post\n      }\n      ... on Mirror {\n        ...Mirror\n      }\n      ... on Comment {\n        ...Comment\n      }\n    }\n    revenue {\n      ...RevenueAggregate\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentPost, FragmentMirror, FragmentComment, FragmentRevenueAggregate);
var FragmentProfileFollowRevenue = /*#__PURE__*/gql(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n  fragment ProfileFollowRevenue on FollowRevenueResult {\n    __typename\n    revenues {\n      ...RevenueAggregate\n    }\n  }\n  ", "\n"])), FragmentRevenueAggregate);
var FragmentRelayerResult = /*#__PURE__*/gql(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n  fragment RelayerResult on RelayerResult {\n    __typename\n    txHash\n    txId\n  }\n"])));
var FragmentRelayError = /*#__PURE__*/gql(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["\n  fragment RelayError on RelayError {\n    __typename\n    reason\n  }\n"])));
var FragmentBroadcastOnChainResult = /*#__PURE__*/gql(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["\n  fragment BroadcastOnChainResult on RelayResult {\n    ... on RelayerResult {\n      ...RelayerResult\n    }\n    ... on RelayError {\n      ...RelayError\n    }\n  }\n  ", "\n  ", "\n"])), FragmentRelayerResult, FragmentRelayError);
var FragmentDataAvailabilityPublicationResult = /*#__PURE__*/gql(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["\n  fragment DataAvailabilityPublicationResult on CreateDataAvailabilityPublicationResult {\n    __typename\n    id\n    dataAvailabilityId\n  }\n"])));
var FragmentBroadcastOffChainResult = /*#__PURE__*/gql(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["\n  fragment BroadcastOffChainResult on BroadcastDataAvailabilityUnion {\n    ... on CreateDataAvailabilityPublicationResult {\n      ...DataAvailabilityPublicationResult\n    }\n    ... on RelayError {\n      ...RelayError\n    }\n  }\n  ", "\n  ", "\n"])), FragmentDataAvailabilityPublicationResult, FragmentRelayError);
var FragmentTransactionIndexedResult = /*#__PURE__*/gql(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["\n  fragment TransactionIndexedResult on TransactionIndexedResult {\n    __typename\n    indexed\n    txHash\n  }\n"])));
var FragmentTransactionError = /*#__PURE__*/gql(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["\n  fragment TransactionError on TransactionError {\n    __typename\n    reason\n  }\n"])));
var AuthChallengeDocument = /*#__PURE__*/gql(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["\n  query AuthChallenge($address: EthereumAddress!) {\n    result: challenge(request: { address: $address }) {\n      text\n    }\n  }\n"])));

/**
 * __useAuthChallenge__
 *
 * To run a query within a React component, call `useAuthChallenge` and pass it any options that fit your needs.
 * When your component renders, `useAuthChallenge` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthChallenge({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
function useAuthChallenge(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(AuthChallengeDocument, options);
}
function useAuthChallengeLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(AuthChallengeDocument, options);
}
var AuthAuthenticateDocument = /*#__PURE__*/gql(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["\n  mutation AuthAuthenticate($address: EthereumAddress!, $signature: Signature!) {\n    result: authenticate(request: { address: $address, signature: $signature }) {\n      accessToken\n      refreshToken\n    }\n  }\n"])));
/**
 * __useAuthAuthenticate__
 *
 * To run a mutation, you first call `useAuthAuthenticate` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthAuthenticate` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authAuthenticate, { data, loading, error }] = useAuthAuthenticate({
 *   variables: {
 *      address: // value for 'address'
 *      signature: // value for 'signature'
 *   },
 * });
 */
function useAuthAuthenticate(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(AuthAuthenticateDocument, options);
}
var AuthRefreshDocument = /*#__PURE__*/gql(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["\n  mutation AuthRefresh($refreshToken: Jwt!) {\n    result: refresh(request: { refreshToken: $refreshToken }) {\n      accessToken\n      refreshToken\n    }\n  }\n"])));
/**
 * __useAuthRefresh__
 *
 * To run a mutation, you first call `useAuthRefresh` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRefresh` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRefresh, { data, loading, error }] = useAuthRefresh({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
function useAuthRefresh(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(AuthRefreshDocument, options);
}
var CreateCollectTypedDataDocument = /*#__PURE__*/gql(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["\n  mutation CreateCollectTypedData($request: CreateCollectRequest!, $options: TypedDataOptions) {\n    result: createCollectTypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        types {\n          CollectWithSig {\n            name\n            type\n          }\n        }\n        domain {\n          ...EIP712TypedDataDomain\n        }\n        message: value {\n          nonce\n          deadline\n          profileId\n          pubId\n          data\n        }\n      }\n    }\n  }\n  ", "\n"])), FragmentEip712TypedDataDomain);
/**
 * __useCreateCollectTypedData__
 *
 * To run a mutation, you first call `useCreateCollectTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectTypedData, { data, loading, error }] = useCreateCollectTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreateCollectTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateCollectTypedDataDocument, options);
}
var CreateCommentTypedDataDocument = /*#__PURE__*/gql(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["\n  mutation CreateCommentTypedData(\n    $request: CreatePublicCommentRequest!\n    $options: TypedDataOptions\n  ) {\n    result: createCommentTypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        ...CreateCommentEIP712TypedData\n      }\n    }\n  }\n  ", "\n"])), FragmentCreateCommentEip712TypedData);
/**
 * __useCreateCommentTypedData__
 *
 * To run a mutation, you first call `useCreateCommentTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentTypedData, { data, loading, error }] = useCreateCommentTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreateCommentTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateCommentTypedDataDocument, options);
}
var CreateCommentViaDispatcherDocument = /*#__PURE__*/gql(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["\n  mutation CreateCommentViaDispatcher($request: CreatePublicCommentRequest!) {\n    result: createCommentViaDispatcher(request: $request) {\n      ...BroadcastOnChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOnChainResult);
/**
 * __useCreateCommentViaDispatcher__
 *
 * To run a mutation, you first call `useCreateCommentViaDispatcher` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentViaDispatcher` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentViaDispatcher, { data, loading, error }] = useCreateCommentViaDispatcher({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateCommentViaDispatcher(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateCommentViaDispatcherDocument, options);
}
var CreateDataAvailabilityCommentTypedDataDocument = /*#__PURE__*/gql(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["\n  mutation CreateDataAvailabilityCommentTypedData($request: CreateDataAvailabilityCommentRequest!) {\n    result: createDataAvailabilityCommentTypedData(request: $request) {\n      id\n      expiresAt\n      typedData {\n        ...CreateCommentEIP712TypedData\n      }\n    }\n  }\n  ", "\n"])), FragmentCreateCommentEip712TypedData);
/**
 * __useCreateDataAvailabilityCommentTypedData__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityCommentTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityCommentTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityCommentTypedData, { data, loading, error }] = useCreateDataAvailabilityCommentTypedData({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateDataAvailabilityCommentTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateDataAvailabilityCommentTypedDataDocument, options);
}
var CreateDataAvailabilityCommentViaDispatcherDocument = /*#__PURE__*/gql(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["\n  mutation CreateDataAvailabilityCommentViaDispatcher(\n    $request: CreateDataAvailabilityCommentRequest!\n  ) {\n    result: createDataAvailabilityCommentViaDispatcher(request: $request) {\n      ...BroadcastOffChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOffChainResult);
/**
 * __useCreateDataAvailabilityCommentViaDispatcher__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityCommentViaDispatcher` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityCommentViaDispatcher` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityCommentViaDispatcher, { data, loading, error }] = useCreateDataAvailabilityCommentViaDispatcher({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateDataAvailabilityCommentViaDispatcher(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateDataAvailabilityCommentViaDispatcherDocument, options);
}
var EnabledModuleCurrenciesDocument = /*#__PURE__*/gql(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["\n  query EnabledModuleCurrencies {\n    result: enabledModuleCurrencies {\n      ...Erc20Fields\n    }\n  }\n  ", "\n"])), FragmentErc20Fields);

/**
 * __useEnabledModuleCurrencies__
 *
 * To run a query within a React component, call `useEnabledModuleCurrencies` and pass it any options that fit your needs.
 * When your component renders, `useEnabledModuleCurrencies` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledModuleCurrencies({
 *   variables: {
 *   },
 * });
 */
function useEnabledModuleCurrencies(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(EnabledModuleCurrenciesDocument, options);
}
function useEnabledModuleCurrenciesLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(EnabledModuleCurrenciesDocument, options);
}
var FeedDocument = /*#__PURE__*/gql(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["\n  query Feed(\n    $profileId: ProfileId!\n    $restrictEventTypesTo: [FeedEventItemType!]\n    $observerId: ProfileId\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $sources: [Sources!]!\n    $metadata: PublicationMetadataFilters\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: feed(\n      request: {\n        profileId: $profileId\n        feedEventItemTypes: $restrictEventTypesTo\n        limit: $limit\n        cursor: $cursor\n        sources: $sources\n        metadata: $metadata\n      }\n    ) {\n      items {\n        ...FeedItem\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentFeedItem, FragmentPaginatedResultInfo);

/**
 * __useFeed__
 *
 * To run a query within a React component, call `useFeed` and pass it any options that fit your needs.
 * When your component renders, `useFeed` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeed({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      restrictEventTypesTo: // value for 'restrictEventTypesTo'
 *      observerId: // value for 'observerId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      sources: // value for 'sources'
 *      metadata: // value for 'metadata'
 *      mediaTransformPublicationSmall: // value for 'mediaTransformPublicationSmall'
 *      mediaTransformPublicationMedium: // value for 'mediaTransformPublicationMedium'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useFeed(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(FeedDocument, options);
}
function useFeedLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(FeedDocument, options);
}
var ExploreProfilesDocument = /*#__PURE__*/gql(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["\n  query ExploreProfiles(\n    $sortCriteria: ProfileSortCriteria!\n    $limit: LimitScalar\n    $cursor: Cursor\n    $observerId: ProfileId\n    $sources: [Sources!]!\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: exploreProfiles(\n      request: { limit: $limit, cursor: $cursor, sortCriteria: $sortCriteria }\n    ) {\n      items {\n        ...Profile\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentProfile, FragmentPaginatedResultInfo);

/**
 * __useExploreProfiles__
 *
 * To run a query within a React component, call `useExploreProfiles` and pass it any options that fit your needs.
 * When your component renders, `useExploreProfiles` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExploreProfiles({
 *   variables: {
 *      sortCriteria: // value for 'sortCriteria'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      observerId: // value for 'observerId'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useExploreProfiles(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ExploreProfilesDocument, options);
}
function useExploreProfilesLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ExploreProfilesDocument, options);
}
var CreateFollowTypedDataDocument = /*#__PURE__*/gql(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["\n  mutation CreateFollowTypedData($request: FollowRequest!, $options: TypedDataOptions) {\n    result: createFollowTypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        types {\n          FollowWithSig {\n            name\n            type\n          }\n        }\n        domain {\n          ...EIP712TypedDataDomain\n        }\n        message: value {\n          nonce\n          deadline\n          profileIds\n          datas\n        }\n      }\n    }\n  }\n  ", "\n"])), FragmentEip712TypedDataDomain);
/**
 * __useCreateFollowTypedData__
 *
 * To run a mutation, you first call `useCreateFollowTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFollowTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFollowTypedData, { data, loading, error }] = useCreateFollowTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreateFollowTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateFollowTypedDataDocument, options);
}
var CreateMirrorTypedDataDocument = /*#__PURE__*/gql(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["\n  mutation CreateMirrorTypedData($request: CreateMirrorRequest!, $options: TypedDataOptions) {\n    result: createMirrorTypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        ...CreateMirrorEIP712TypedData\n      }\n    }\n  }\n  ", "\n"])), FragmentCreateMirrorEip712TypedData);
/**
 * __useCreateMirrorTypedData__
 *
 * To run a mutation, you first call `useCreateMirrorTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMirrorTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMirrorTypedData, { data, loading, error }] = useCreateMirrorTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreateMirrorTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateMirrorTypedDataDocument, options);
}
var CreateMirrorViaDispatcherDocument = /*#__PURE__*/gql(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["\n  mutation CreateMirrorViaDispatcher($request: CreateMirrorRequest!) {\n    result: createMirrorViaDispatcher(request: $request) {\n      ...BroadcastOnChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOnChainResult);
/**
 * __useCreateMirrorViaDispatcher__
 *
 * To run a mutation, you first call `useCreateMirrorViaDispatcher` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMirrorViaDispatcher` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMirrorViaDispatcher, { data, loading, error }] = useCreateMirrorViaDispatcher({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateMirrorViaDispatcher(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateMirrorViaDispatcherDocument, options);
}
var CreateDataAvailabilityMirrorTypedDataDocument = /*#__PURE__*/gql(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["\n  mutation CreateDataAvailabilityMirrorTypedData($request: CreateDataAvailabilityMirrorRequest!) {\n    result: createDataAvailabilityMirrorTypedData(request: $request) {\n      id\n      expiresAt\n      typedData {\n        ...CreateMirrorEIP712TypedData\n      }\n    }\n  }\n  ", "\n"])), FragmentCreateMirrorEip712TypedData);
/**
 * __useCreateDataAvailabilityMirrorTypedData__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityMirrorTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityMirrorTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityMirrorTypedData, { data, loading, error }] = useCreateDataAvailabilityMirrorTypedData({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateDataAvailabilityMirrorTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateDataAvailabilityMirrorTypedDataDocument, options);
}
var CreateDataAvailabilityMirrorViaDispatcherDocument = /*#__PURE__*/gql(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["\n  mutation CreateDataAvailabilityMirrorViaDispatcher(\n    $request: CreateDataAvailabilityMirrorRequest!\n  ) {\n    result: createDataAvailabilityMirrorViaDispatcher(request: $request) {\n      ...BroadcastOffChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOffChainResult);
/**
 * __useCreateDataAvailabilityMirrorViaDispatcher__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityMirrorViaDispatcher` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityMirrorViaDispatcher` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityMirrorViaDispatcher, { data, loading, error }] = useCreateDataAvailabilityMirrorViaDispatcher({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateDataAvailabilityMirrorViaDispatcher(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateDataAvailabilityMirrorViaDispatcherDocument, options);
}
var EnabledModulesDocument = /*#__PURE__*/gql(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["\n  query EnabledModules {\n    result: enabledModules {\n      ...EnabledModules\n    }\n  }\n  ", "\n"])), FragmentEnabledModules);

/**
 * __useEnabledModules__
 *
 * To run a query within a React component, call `useEnabledModules` and pass it any options that fit your needs.
 * When your component renders, `useEnabledModules` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledModules({
 *   variables: {
 *   },
 * });
 */
function useEnabledModules(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(EnabledModulesDocument, options);
}
function useEnabledModulesLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(EnabledModulesDocument, options);
}
var NotificationsDocument = /*#__PURE__*/gql(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["\n  query Notifications(\n    $observerId: ProfileId!\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $sources: [Sources!]!\n    $notificationTypes: [NotificationTypes!]\n    $highSignalFilter: Boolean!\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: notifications(\n      request: {\n        profileId: $observerId\n        limit: $limit\n        cursor: $cursor\n        sources: $sources\n        notificationTypes: $notificationTypes\n        highSignalFilter: $highSignalFilter\n      }\n    ) {\n      items {\n        ... on NewFollowerNotification {\n          ...NewFollowerNotification\n        }\n        ... on NewMirrorNotification {\n          ...NewMirrorNotification\n        }\n        ... on NewCollectNotification {\n          ...NewCollectNotification\n        }\n        ... on NewCommentNotification {\n          ...NewCommentNotification\n        }\n        ... on NewMentionNotification {\n          ...NewMentionNotification\n        }\n        ... on NewReactionNotification {\n          ...NewReactionNotification\n        }\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentNewFollowerNotification, FragmentNewMirrorNotification, FragmentNewCollectNotification, FragmentNewCommentNotification, FragmentNewMentionNotification, FragmentNewReactionNotification, FragmentPaginatedResultInfo);

/**
 * __useNotifications__
 *
 * To run a query within a React component, call `useNotifications` and pass it any options that fit your needs.
 * When your component renders, `useNotifications` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotifications({
 *   variables: {
 *      observerId: // value for 'observerId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      sources: // value for 'sources'
 *      notificationTypes: // value for 'notificationTypes'
 *      highSignalFilter: // value for 'highSignalFilter'
 *      mediaTransformPublicationSmall: // value for 'mediaTransformPublicationSmall'
 *      mediaTransformPublicationMedium: // value for 'mediaTransformPublicationMedium'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useNotifications(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(NotificationsDocument, options);
}
function useNotificationsLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(NotificationsDocument, options);
}
var UnreadNotificationCountDocument = /*#__PURE__*/gql(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["\n  query UnreadNotificationCount(\n    $profileId: ProfileId!\n    $sources: [Sources!]\n    $notificationTypes: [NotificationTypes!]\n  ) {\n    result: notifications(\n      request: { profileId: $profileId, sources: $sources, notificationTypes: $notificationTypes }\n    ) {\n      pageInfo {\n        totalCount\n      }\n    }\n  }\n"])));

/**
 * __useUnreadNotificationCount__
 *
 * To run a query within a React component, call `useUnreadNotificationCount` and pass it any options that fit your needs.
 * When your component renders, `useUnreadNotificationCount` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnreadNotificationCount({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      sources: // value for 'sources'
 *      notificationTypes: // value for 'notificationTypes'
 *   },
 * });
 */
function useUnreadNotificationCount(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(UnreadNotificationCountDocument, options);
}
function useUnreadNotificationCountLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(UnreadNotificationCountDocument, options);
}
var CreatePostTypedDataDocument = /*#__PURE__*/gql(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["\n  mutation CreatePostTypedData($request: CreatePublicPostRequest!, $options: TypedDataOptions) {\n    result: createPostTypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        ...CreatePostEIP712TypedData\n      }\n    }\n  }\n  ", "\n"])), FragmentCreatePostEip712TypedData);
/**
 * __useCreatePostTypedData__
 *
 * To run a mutation, you first call `useCreatePostTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostTypedData, { data, loading, error }] = useCreatePostTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreatePostTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreatePostTypedDataDocument, options);
}
var CreatePostViaDispatcherDocument = /*#__PURE__*/gql(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["\n  mutation CreatePostViaDispatcher($request: CreatePublicPostRequest!) {\n    result: createPostViaDispatcher(request: $request) {\n      ...BroadcastOnChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOnChainResult);
/**
 * __useCreatePostViaDispatcher__
 *
 * To run a mutation, you first call `useCreatePostViaDispatcher` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostViaDispatcher` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostViaDispatcher, { data, loading, error }] = useCreatePostViaDispatcher({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreatePostViaDispatcher(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreatePostViaDispatcherDocument, options);
}
var CreateDataAvailabilityPostTypedDataDocument = /*#__PURE__*/gql(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["\n  mutation CreateDataAvailabilityPostTypedData($request: CreateDataAvailabilityPostRequest!) {\n    result: createDataAvailabilityPostTypedData(request: $request) {\n      id\n      expiresAt\n      typedData {\n        ...CreatePostEIP712TypedData\n      }\n    }\n  }\n  ", "\n"])), FragmentCreatePostEip712TypedData);
/**
 * __useCreateDataAvailabilityPostTypedData__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityPostTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityPostTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityPostTypedData, { data, loading, error }] = useCreateDataAvailabilityPostTypedData({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateDataAvailabilityPostTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateDataAvailabilityPostTypedDataDocument, options);
}
var CreateDataAvailabilityPostViaDispatcherDocument = /*#__PURE__*/gql(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["\n  mutation CreateDataAvailabilityPostViaDispatcher($request: CreateDataAvailabilityPostRequest!) {\n    result: createDataAvailabilityPostViaDispatcher(request: $request) {\n      ...BroadcastOffChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOffChainResult);
/**
 * __useCreateDataAvailabilityPostViaDispatcher__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityPostViaDispatcher` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityPostViaDispatcher` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityPostViaDispatcher, { data, loading, error }] = useCreateDataAvailabilityPostViaDispatcher({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateDataAvailabilityPostViaDispatcher(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateDataAvailabilityPostViaDispatcherDocument, options);
}
var CreateSetDispatcherTypedDataDocument = /*#__PURE__*/gql(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["\n  mutation CreateSetDispatcherTypedData(\n    $request: SetDispatcherRequest!\n    $options: TypedDataOptions\n  ) {\n    result: createSetDispatcherTypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        types {\n          SetDispatcherWithSig {\n            name\n            type\n          }\n        }\n        domain {\n          name\n          chainId\n          version\n          verifyingContract\n        }\n        message: value {\n          nonce\n          deadline\n          profileId\n          dispatcher\n        }\n      }\n    }\n  }\n"])));
/**
 * __useCreateSetDispatcherTypedData__
 *
 * To run a mutation, you first call `useCreateSetDispatcherTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetDispatcherTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetDispatcherTypedData, { data, loading, error }] = useCreateSetDispatcherTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreateSetDispatcherTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateSetDispatcherTypedDataDocument, options);
}
var ProfileGuardianDocument = /*#__PURE__*/gql(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["\n  query ProfileGuardian($request: ProfileGuardianRequest!) {\n    result: profileGuardianInformation(request: $request) {\n      ...ProfileGuardianResult\n    }\n  }\n  ", "\n"])), FragmentProfileGuardianResult);

/**
 * __useProfileGuardian__
 *
 * To run a query within a React component, call `useProfileGuardian` and pass it any options that fit your needs.
 * When your component renders, `useProfileGuardian` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileGuardian({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useProfileGuardian(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ProfileGuardianDocument, options);
}
function useProfileGuardianLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ProfileGuardianDocument, options);
}
var ProfilesToFollowDocument = /*#__PURE__*/gql(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["\n  query ProfilesToFollow(\n    $observerId: ProfileId\n    $sources: [Sources!]!\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: recommendedProfiles {\n      ...Profile\n    }\n  }\n  ", "\n"])), FragmentProfile);

/**
 * __useProfilesToFollow__
 *
 * To run a query within a React component, call `useProfilesToFollow` and pass it any options that fit your needs.
 * When your component renders, `useProfilesToFollow` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesToFollow({
 *   variables: {
 *      observerId: // value for 'observerId'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useProfilesToFollow(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ProfilesToFollowDocument, options);
}
function useProfilesToFollowLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ProfilesToFollowDocument, options);
}
var GetProfileDocument = /*#__PURE__*/gql(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["\n  query GetProfile(\n    $request: SingleProfileQueryRequest!\n    $observerId: ProfileId\n    $sources: [Sources!] = []\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: profile(request: $request) {\n      ...Profile\n    }\n  }\n  ", "\n"])), FragmentProfile);

/**
 * __useGetProfile__
 *
 * To run a query within a React component, call `useGetProfile` and pass it any options that fit your needs.
 * When your component renders, `useGetProfile` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfile({
 *   variables: {
 *      request: // value for 'request'
 *      observerId: // value for 'observerId'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useGetProfile(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(GetProfileDocument, options);
}
function useGetProfileLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(GetProfileDocument, options);
}
var GetAllProfilesDocument = /*#__PURE__*/gql(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["\n  query GetAllProfiles(\n    $byProfileIds: [ProfileId!]\n    $byHandles: [Handle!]\n    $byOwnerAddresses: [EthereumAddress!]\n    $byWhoMirroredPublicationId: InternalPublicationId\n    $observerId: ProfileId\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $sources: [Sources!] = []\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: profiles(\n      request: {\n        whoMirroredPublicationId: $byWhoMirroredPublicationId\n        ownedBy: $byOwnerAddresses\n        profileIds: $byProfileIds\n        handles: $byHandles\n        limit: $limit\n        cursor: $cursor\n      }\n    ) {\n      items {\n        ...Profile\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentProfile, FragmentPaginatedResultInfo);

/**
 * __useGetAllProfiles__
 *
 * To run a query within a React component, call `useGetAllProfiles` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProfiles` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProfiles({
 *   variables: {
 *      byProfileIds: // value for 'byProfileIds'
 *      byHandles: // value for 'byHandles'
 *      byOwnerAddresses: // value for 'byOwnerAddresses'
 *      byWhoMirroredPublicationId: // value for 'byWhoMirroredPublicationId'
 *      observerId: // value for 'observerId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useGetAllProfiles(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(GetAllProfilesDocument, options);
}
function useGetAllProfilesLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(GetAllProfilesDocument, options);
}
var CreateProfileDocument = /*#__PURE__*/gql(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["\n  mutation CreateProfile($request: CreateProfileRequest!) {\n    result: createProfile(request: $request) {\n      ...BroadcastOnChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOnChainResult);
/**
 * __useCreateProfile__
 *
 * To run a mutation, you first call `useCreateProfile` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfile` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfile, { data, loading, error }] = useCreateProfile({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateProfile(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateProfileDocument, options);
}
var MutualFollowersProfilesDocument = /*#__PURE__*/gql(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["\n  query MutualFollowersProfiles(\n    $observerId: ProfileId!\n    $viewingProfileId: ProfileId!\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $sources: [Sources!]!\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: mutualFollowersProfiles(\n      request: {\n        yourProfileId: $observerId\n        viewingProfileId: $viewingProfileId\n        limit: $limit\n        cursor: $cursor\n      }\n    ) {\n      items {\n        ...Profile\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentProfile, FragmentPaginatedResultInfo);

/**
 * __useMutualFollowersProfiles__
 *
 * To run a query within a React component, call `useMutualFollowersProfiles` and pass it any options that fit your needs.
 * When your component renders, `useMutualFollowersProfiles` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMutualFollowersProfiles({
 *   variables: {
 *      observerId: // value for 'observerId'
 *      viewingProfileId: // value for 'viewingProfileId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useMutualFollowersProfiles(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(MutualFollowersProfilesDocument, options);
}
function useMutualFollowersProfilesLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(MutualFollowersProfilesDocument, options);
}
var CreateSetFollowModuleTypedDataDocument = /*#__PURE__*/gql(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["\n  mutation CreateSetFollowModuleTypedData(\n    $request: CreateSetFollowModuleRequest!\n    $options: TypedDataOptions\n  ) {\n    result: createSetFollowModuleTypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        types {\n          SetFollowModuleWithSig {\n            name\n            type\n          }\n        }\n        domain {\n          name\n          chainId\n          version\n          verifyingContract\n        }\n        message: value {\n          nonce\n          deadline\n          profileId\n          followModule\n          followModuleInitData\n        }\n      }\n    }\n  }\n"])));
/**
 * __useCreateSetFollowModuleTypedData__
 *
 * To run a mutation, you first call `useCreateSetFollowModuleTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetFollowModuleTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetFollowModuleTypedData, { data, loading, error }] = useCreateSetFollowModuleTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreateSetFollowModuleTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateSetFollowModuleTypedDataDocument, options);
}
var CreateSetProfileImageUriTypedDataDocument = /*#__PURE__*/gql(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["\n  mutation CreateSetProfileImageURITypedData(\n    $request: UpdateProfileImageRequest!\n    $options: TypedDataOptions\n  ) {\n    result: createSetProfileImageURITypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        types {\n          SetProfileImageURIWithSig {\n            name\n            type\n          }\n        }\n        domain {\n          name\n          chainId\n          version\n          verifyingContract\n        }\n        message: value {\n          nonce\n          deadline\n          profileId\n          imageURI\n        }\n      }\n    }\n  }\n"])));
/**
 * __useCreateSetProfileImageUriTypedData__
 *
 * To run a mutation, you first call `useCreateSetProfileImageUriTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileImageUriTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileImageUriTypedData, { data, loading, error }] = useCreateSetProfileImageUriTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreateSetProfileImageUriTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateSetProfileImageUriTypedDataDocument, options);
}
var CreateSetProfileImageUriViaDispatcherDocument = /*#__PURE__*/gql(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["\n  mutation CreateSetProfileImageURIViaDispatcher($request: UpdateProfileImageRequest!) {\n    result: createSetProfileImageURIViaDispatcher(request: $request) {\n      ...BroadcastOnChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOnChainResult);
/**
 * __useCreateSetProfileImageUriViaDispatcher__
 *
 * To run a mutation, you first call `useCreateSetProfileImageUriViaDispatcher` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileImageUriViaDispatcher` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileImageUriViaDispatcher, { data, loading, error }] = useCreateSetProfileImageUriViaDispatcher({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateSetProfileImageUriViaDispatcher(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateSetProfileImageUriViaDispatcherDocument, options);
}
var CreateSetProfileMetadataTypedDataDocument = /*#__PURE__*/gql(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["\n  mutation CreateSetProfileMetadataTypedData(\n    $request: CreatePublicSetProfileMetadataURIRequest!\n    $options: TypedDataOptions\n  ) {\n    result: createSetProfileMetadataTypedData(request: $request, options: $options) {\n      id\n      expiresAt\n      typedData {\n        types {\n          SetProfileMetadataURIWithSig {\n            name\n            type\n          }\n        }\n        domain {\n          name\n          chainId\n          version\n          verifyingContract\n        }\n        message: value {\n          nonce\n          deadline\n          profileId\n          metadata\n        }\n      }\n    }\n  }\n"])));
/**
 * __useCreateSetProfileMetadataTypedData__
 *
 * To run a mutation, you first call `useCreateSetProfileMetadataTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileMetadataTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileMetadataTypedData, { data, loading, error }] = useCreateSetProfileMetadataTypedData({
 *   variables: {
 *      request: // value for 'request'
 *      options: // value for 'options'
 *   },
 * });
 */
function useCreateSetProfileMetadataTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateSetProfileMetadataTypedDataDocument, options);
}
var CreateSetProfileMetadataViaDispatcherDocument = /*#__PURE__*/gql(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["\n  mutation CreateSetProfileMetadataViaDispatcher(\n    $request: CreatePublicSetProfileMetadataURIRequest!\n  ) {\n    result: createSetProfileMetadataViaDispatcher(request: $request) {\n      ...BroadcastOnChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOnChainResult);
/**
 * __useCreateSetProfileMetadataViaDispatcher__
 *
 * To run a mutation, you first call `useCreateSetProfileMetadataViaDispatcher` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileMetadataViaDispatcher` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileMetadataViaDispatcher, { data, loading, error }] = useCreateSetProfileMetadataViaDispatcher({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateSetProfileMetadataViaDispatcher(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateSetProfileMetadataViaDispatcherDocument, options);
}
var ProfileFollowersDocument = /*#__PURE__*/gql(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["\n  query ProfileFollowers(\n    $profileId: ProfileId!\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $observerId: ProfileId\n    $sources: [Sources!]!\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: followers(request: { profileId: $profileId, limit: $limit, cursor: $cursor }) {\n      items {\n        ...Follower\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentFollower, FragmentPaginatedResultInfo);

/**
 * __useProfileFollowers__
 *
 * To run a query within a React component, call `useProfileFollowers` and pass it any options that fit your needs.
 * When your component renders, `useProfileFollowers` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileFollowers({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      observerId: // value for 'observerId'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useProfileFollowers(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ProfileFollowersDocument, options);
}
function useProfileFollowersLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ProfileFollowersDocument, options);
}
var ProfileFollowingDocument = /*#__PURE__*/gql(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["\n  query ProfileFollowing(\n    $walletAddress: EthereumAddress!\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $observerId: ProfileId\n    $sources: [Sources!]!\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: following(request: { address: $walletAddress, limit: $limit, cursor: $cursor }) {\n      items {\n        ...Following\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentFollowing, FragmentPaginatedResultInfo);

/**
 * __useProfileFollowing__
 *
 * To run a query within a React component, call `useProfileFollowing` and pass it any options that fit your needs.
 * When your component renders, `useProfileFollowing` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileFollowing({
 *   variables: {
 *      walletAddress: // value for 'walletAddress'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      observerId: // value for 'observerId'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useProfileFollowing(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ProfileFollowingDocument, options);
}
function useProfileFollowingLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ProfileFollowingDocument, options);
}
var ProxyActionStatusDocument = /*#__PURE__*/gql(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["\n  query ProxyActionStatus($proxyActionId: ProxyActionId!) {\n    result: proxyActionStatus(proxyActionId: $proxyActionId) {\n      ... on ProxyActionStatusResult {\n        ...ProxyActionStatusResult\n      }\n      ... on ProxyActionError {\n        ...ProxyActionError\n      }\n      ... on ProxyActionQueued {\n        ...ProxyActionQueued\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentProxyActionStatusResult, FragmentProxyActionError, FragmentProxyActionQueued);

/**
 * __useProxyActionStatus__
 *
 * To run a query within a React component, call `useProxyActionStatus` and pass it any options that fit your needs.
 * When your component renders, `useProxyActionStatus` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProxyActionStatus({
 *   variables: {
 *      proxyActionId: // value for 'proxyActionId'
 *   },
 * });
 */
function useProxyActionStatus(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ProxyActionStatusDocument, options);
}
function useProxyActionStatusLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ProxyActionStatusDocument, options);
}
var ProxyActionDocument = /*#__PURE__*/gql(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["\n  mutation ProxyAction($request: ProxyActionRequest!) {\n    result: proxyAction(request: $request)\n  }\n"])));
/**
 * __useProxyAction__
 *
 * To run a mutation, you first call `useProxyAction` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProxyAction` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [proxyAction, { data, loading, error }] = useProxyAction({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useProxyAction(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(ProxyActionDocument, options);
}
var GetPublicationDocument = /*#__PURE__*/gql(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["\n  query GetPublication(\n    $request: PublicationQueryRequest!\n    $observerId: ProfileId\n    $sources: [Sources!]!\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: publication(request: $request) {\n      ... on Post {\n        ...Post\n      }\n      ... on Mirror {\n        ...Mirror\n      }\n      ... on Comment {\n        ...Comment\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentPost, FragmentMirror, FragmentComment);

/**
 * __useGetPublication__
 *
 * To run a query within a React component, call `useGetPublication` and pass it any options that fit your needs.
 * When your component renders, `useGetPublication` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublication({
 *   variables: {
 *      request: // value for 'request'
 *      observerId: // value for 'observerId'
 *      sources: // value for 'sources'
 *      mediaTransformPublicationSmall: // value for 'mediaTransformPublicationSmall'
 *      mediaTransformPublicationMedium: // value for 'mediaTransformPublicationMedium'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useGetPublication(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(GetPublicationDocument, options);
}
function useGetPublicationLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(GetPublicationDocument, options);
}
var HidePublicationDocument = /*#__PURE__*/gql(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["\n  mutation HidePublication($publicationId: InternalPublicationId!) {\n    hidePublication(request: { publicationId: $publicationId })\n  }\n"])));
/**
 * __useHidePublication__
 *
 * To run a mutation, you first call `useHidePublication` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHidePublication` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [hidePublication, { data, loading, error }] = useHidePublication({
 *   variables: {
 *      publicationId: // value for 'publicationId'
 *   },
 * });
 */
function useHidePublication(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(HidePublicationDocument, options);
}
var AddNotInterestedDocument = /*#__PURE__*/gql(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["\n  mutation AddNotInterested($request: PublicationProfileNotInterestedRequest!) {\n    result: addPublicationProfileNotInterested(request: $request)\n  }\n"])));
/**
 * __useAddNotInterested__
 *
 * To run a mutation, you first call `useAddNotInterested` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNotInterested` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNotInterested, { data, loading, error }] = useAddNotInterested({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useAddNotInterested(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(AddNotInterestedDocument, options);
}
var RemoveNotInterestedDocument = /*#__PURE__*/gql(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["\n  mutation RemoveNotInterested($request: PublicationProfileNotInterestedRequest!) {\n    result: removePublicationProfileNotInterested(request: $request)\n  }\n"])));
/**
 * __useRemoveNotInterested__
 *
 * To run a mutation, you first call `useRemoveNotInterested` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveNotInterested` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeNotInterested, { data, loading, error }] = useRemoveNotInterested({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useRemoveNotInterested(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(RemoveNotInterestedDocument, options);
}
var AddToMyBookmarksDocument = /*#__PURE__*/gql(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["\n  mutation AddToMyBookmarks($request: PublicationProfileBookmarkRequest!) {\n    result: addPublicationProfileBookmark(request: $request)\n  }\n"])));
/**
 * __useAddToMyBookmarks__
 *
 * To run a mutation, you first call `useAddToMyBookmarks` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToMyBookmarks` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToMyBookmarks, { data, loading, error }] = useAddToMyBookmarks({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useAddToMyBookmarks(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(AddToMyBookmarksDocument, options);
}
var RemoveFromMyBookmarksDocument = /*#__PURE__*/gql(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["\n  mutation RemoveFromMyBookmarks($request: PublicationProfileBookmarkRequest!) {\n    result: removePublicationProfileBookmark(request: $request)\n  }\n"])));
/**
 * __useRemoveFromMyBookmarks__
 *
 * To run a mutation, you first call `useRemoveFromMyBookmarks` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromMyBookmarks` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromMyBookmarks, { data, loading, error }] = useRemoveFromMyBookmarks({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useRemoveFromMyBookmarks(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(RemoveFromMyBookmarksDocument, options);
}
var GetPublicationsDocument = /*#__PURE__*/gql(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["\n  query GetPublications(\n    $profileId: ProfileId\n    $profileIds: [ProfileId!]\n    $publicationIds: [InternalPublicationId!]\n    $observerId: ProfileId\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $publicationTypes: [PublicationTypes!]\n    $sources: [Sources!]!\n    $metadata: PublicationMetadataFilters\n    $commentsOf: InternalPublicationId\n    $commentsOfOrdering: CommentOrderingTypes\n    $commentsRankingFilter: CommentRankingFilter\n    $walletAddress: EthereumAddress\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: publications(\n      request: {\n        profileId: $profileId\n        profileIds: $profileIds\n        publicationIds: $publicationIds\n        limit: $limit\n        collectedBy: $walletAddress\n        cursor: $cursor\n        publicationTypes: $publicationTypes\n        commentsOf: $commentsOf\n        commentsOfOrdering: $commentsOfOrdering\n        commentsRankingFilter: $commentsRankingFilter\n        sources: $sources\n        metadata: $metadata\n      }\n    ) {\n      items {\n        ... on Post {\n          ...Post\n        }\n        ... on Mirror {\n          ...Mirror\n        }\n        ... on Comment {\n          ...Comment\n        }\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentPost, FragmentMirror, FragmentComment, FragmentPaginatedResultInfo);

/**
 * __useGetPublications__
 *
 * To run a query within a React component, call `useGetPublications` and pass it any options that fit your needs.
 * When your component renders, `useGetPublications` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublications({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      profileIds: // value for 'profileIds'
 *      publicationIds: // value for 'publicationIds'
 *      observerId: // value for 'observerId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      publicationTypes: // value for 'publicationTypes'
 *      sources: // value for 'sources'
 *      metadata: // value for 'metadata'
 *      commentsOf: // value for 'commentsOf'
 *      commentsOfOrdering: // value for 'commentsOfOrdering'
 *      commentsRankingFilter: // value for 'commentsRankingFilter'
 *      walletAddress: // value for 'walletAddress'
 *      mediaTransformPublicationSmall: // value for 'mediaTransformPublicationSmall'
 *      mediaTransformPublicationMedium: // value for 'mediaTransformPublicationMedium'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useGetPublications(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(GetPublicationsDocument, options);
}
function useGetPublicationsLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(GetPublicationsDocument, options);
}
var ExplorePublicationsDocument = /*#__PURE__*/gql(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["\n  query ExplorePublications(\n    $cursor: Cursor\n    $excludeProfileIds: [ProfileId!]\n    $limit: LimitScalar!\n    $metadata: PublicationMetadataFilters\n    $observerId: ProfileId\n    $publicationTypes: [PublicationTypes!]\n    $sortCriteria: PublicationSortCriteria!\n    $sources: [Sources!]!\n    $timestamp: TimestampScalar\n    $noRandomize: Boolean\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: explorePublications(\n      request: {\n        cursor: $cursor\n        excludeProfileIds: $excludeProfileIds\n        limit: $limit\n        metadata: $metadata\n        publicationTypes: $publicationTypes\n        sortCriteria: $sortCriteria\n        sources: $sources\n        timestamp: $timestamp\n        noRandomize: $noRandomize\n      }\n    ) {\n      items {\n        ... on Post {\n          ...Post\n        }\n        ... on Mirror {\n          ...Mirror\n        }\n        ... on Comment {\n          ...Comment\n        }\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), FragmentPost, FragmentMirror, FragmentComment, FragmentPaginatedResultInfo);

/**
 * __useExplorePublications__
 *
 * To run a query within a React component, call `useExplorePublications` and pass it any options that fit your needs.
 * When your component renders, `useExplorePublications` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExplorePublications({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      excludeProfileIds: // value for 'excludeProfileIds'
 *      limit: // value for 'limit'
 *      metadata: // value for 'metadata'
 *      observerId: // value for 'observerId'
 *      publicationTypes: // value for 'publicationTypes'
 *      sortCriteria: // value for 'sortCriteria'
 *      sources: // value for 'sources'
 *      timestamp: // value for 'timestamp'
 *      noRandomize: // value for 'noRandomize'
 *      mediaTransformPublicationSmall: // value for 'mediaTransformPublicationSmall'
 *      mediaTransformPublicationMedium: // value for 'mediaTransformPublicationMedium'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useExplorePublications(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ExplorePublicationsDocument, options);
}
function useExplorePublicationsLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ExplorePublicationsDocument, options);
}
var WhoCollectedPublicationDocument = /*#__PURE__*/gql(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["\n  query WhoCollectedPublication(\n    $publicationId: InternalPublicationId!\n    $observerId: ProfileId\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $sources: [Sources!]!\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: whoCollectedPublication(\n      request: { publicationId: $publicationId, limit: $limit, cursor: $cursor }\n    ) {\n      items {\n        ...Wallet\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentWallet, FragmentPaginatedResultInfo);

/**
 * __useWhoCollectedPublication__
 *
 * To run a query within a React component, call `useWhoCollectedPublication` and pass it any options that fit your needs.
 * When your component renders, `useWhoCollectedPublication` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoCollectedPublication({
 *   variables: {
 *      publicationId: // value for 'publicationId'
 *      observerId: // value for 'observerId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useWhoCollectedPublication(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(WhoCollectedPublicationDocument, options);
}
function useWhoCollectedPublicationLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(WhoCollectedPublicationDocument, options);
}
var ProfilePublicationsForSaleDocument = /*#__PURE__*/gql(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["\n  query ProfilePublicationsForSale(\n    $profileId: ProfileId!\n    $observerId: ProfileId\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $sources: [Sources!]!\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: profilePublicationsForSale(\n      request: { profileId: $profileId, limit: $limit, cursor: $cursor, sources: $sources }\n    ) {\n      items {\n        ... on Post {\n          ...Post\n        }\n        ... on Comment {\n          ...Comment\n        }\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentPost, FragmentComment, FragmentPaginatedResultInfo);

/**
 * __useProfilePublicationsForSale__
 *
 * To run a query within a React component, call `useProfilePublicationsForSale` and pass it any options that fit your needs.
 * When your component renders, `useProfilePublicationsForSale` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilePublicationsForSale({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      observerId: // value for 'observerId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      sources: // value for 'sources'
 *      mediaTransformPublicationSmall: // value for 'mediaTransformPublicationSmall'
 *      mediaTransformPublicationMedium: // value for 'mediaTransformPublicationMedium'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useProfilePublicationsForSale(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ProfilePublicationsForSaleDocument, options);
}
function useProfilePublicationsForSaleLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ProfilePublicationsForSaleDocument, options);
}
var GetProfileBookmarksDocument = /*#__PURE__*/gql(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["\n  query GetProfileBookmarks(\n    $profileId: ProfileId!\n    $limit: LimitScalar!\n    $sources: [Sources!]!\n    $metadata: PublicationMetadataFilters\n    $cursor: Cursor\n    $observerId: ProfileId\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: publicationsProfileBookmarks(\n      request: {\n        cursor: $cursor\n        limit: $limit\n        metadata: $metadata\n        profileId: $profileId\n        sources: $sources\n      }\n    ) {\n      items {\n        ... on Post {\n          ...Post\n        }\n        ... on Comment {\n          ...Comment\n        }\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentPost, FragmentComment, FragmentPaginatedResultInfo);
function useGetProfileBookmarksLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(GetProfileBookmarksDocument, options);
}
var AddReactionDocument = /*#__PURE__*/gql(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["\n  mutation AddReaction(\n    $publicationId: InternalPublicationId!\n    $reaction: ReactionTypes!\n    $profileId: ProfileId!\n  ) {\n    addReaction(\n      request: { publicationId: $publicationId, reaction: $reaction, profileId: $profileId }\n    )\n  }\n"])));
/**
 * __useAddReaction__
 *
 * To run a mutation, you first call `useAddReaction` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReaction` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReaction, { data, loading, error }] = useAddReaction({
 *   variables: {
 *      publicationId: // value for 'publicationId'
 *      reaction: // value for 'reaction'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
function useAddReaction(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(AddReactionDocument, options);
}
var RemoveReactionDocument = /*#__PURE__*/gql(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["\n  mutation RemoveReaction(\n    $publicationId: InternalPublicationId!\n    $reaction: ReactionTypes!\n    $profileId: ProfileId!\n  ) {\n    removeReaction(\n      request: { publicationId: $publicationId, reaction: $reaction, profileId: $profileId }\n    )\n  }\n"])));
/**
 * __useRemoveReaction__
 *
 * To run a mutation, you first call `useRemoveReaction` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReaction` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReaction, { data, loading, error }] = useRemoveReaction({
 *   variables: {
 *      publicationId: // value for 'publicationId'
 *      reaction: // value for 'reaction'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
function useRemoveReaction(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(RemoveReactionDocument, options);
}
var WhoReactedPublicationDocument = /*#__PURE__*/gql(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["\n  query WhoReactedPublication(\n    $limit: LimitScalar\n    $cursor: Cursor\n    $publicationId: InternalPublicationId!\n    $observerId: ProfileId\n    $sources: [Sources!]!\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: whoReactedPublication(\n      request: { limit: $limit, cursor: $cursor, publicationId: $publicationId }\n    ) {\n      items {\n        ...WhoReactedResult\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentWhoReactedResult, FragmentPaginatedResultInfo);

/**
 * __useWhoReactedPublication__
 *
 * To run a query within a React component, call `useWhoReactedPublication` and pass it any options that fit your needs.
 * When your component renders, `useWhoReactedPublication` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoReactedPublication({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      publicationId: // value for 'publicationId'
 *      observerId: // value for 'observerId'
 *      sources: // value for 'sources'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useWhoReactedPublication(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(WhoReactedPublicationDocument, options);
}
function useWhoReactedPublicationLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(WhoReactedPublicationDocument, options);
}
var ReportPublicationDocument = /*#__PURE__*/gql(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["\n  mutation ReportPublication(\n    $publicationId: InternalPublicationId!\n    $reason: ReportingReasonInputParams!\n    $additionalComments: String\n  ) {\n    reportPublication(\n      request: {\n        publicationId: $publicationId\n        reason: $reason\n        additionalComments: $additionalComments\n      }\n    )\n  }\n"])));
/**
 * __useReportPublication__
 *
 * To run a mutation, you first call `useReportPublication` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportPublication` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportPublication, { data, loading, error }] = useReportPublication({
 *   variables: {
 *      publicationId: // value for 'publicationId'
 *      reason: // value for 'reason'
 *      additionalComments: // value for 'additionalComments'
 *   },
 * });
 */
function useReportPublication(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(ReportPublicationDocument, options);
}
var GetPublicationRevenueDocument = /*#__PURE__*/gql(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["\n  query GetPublicationRevenue(\n    $publicationId: InternalPublicationId!\n    $observerId: ProfileId\n    $sources: [Sources!]!\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: publicationRevenue(request: { publicationId: $publicationId }) {\n      ...PublicationRevenue\n    }\n  }\n  ", "\n"])), FragmentPublicationRevenue);

/**
 * __useGetPublicationRevenue__
 *
 * To run a query within a React component, call `useGetPublicationRevenue` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicationRevenue` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicationRevenue({
 *   variables: {
 *      publicationId: // value for 'publicationId'
 *      observerId: // value for 'observerId'
 *      sources: // value for 'sources'
 *      mediaTransformPublicationSmall: // value for 'mediaTransformPublicationSmall'
 *      mediaTransformPublicationMedium: // value for 'mediaTransformPublicationMedium'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useGetPublicationRevenue(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(GetPublicationRevenueDocument, options);
}
function useGetPublicationRevenueLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(GetPublicationRevenueDocument, options);
}
var GetProfilePublicationRevenueDocument = /*#__PURE__*/gql(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["\n  query GetProfilePublicationRevenue(\n    $profileId: ProfileId!\n    $observerId: ProfileId\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $publicationTypes: [PublicationTypes!]\n    $sources: [Sources!]!\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: profilePublicationRevenue(\n      request: {\n        profileId: $profileId\n        limit: $limit\n        cursor: $cursor\n        types: $publicationTypes\n        sources: $sources\n      }\n    ) {\n      items {\n        ...PublicationRevenue\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentPublicationRevenue, FragmentPaginatedResultInfo);

/**
 * __useGetProfilePublicationRevenue__
 *
 * To run a query within a React component, call `useGetProfilePublicationRevenue` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilePublicationRevenue` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilePublicationRevenue({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      observerId: // value for 'observerId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      publicationTypes: // value for 'publicationTypes'
 *      sources: // value for 'sources'
 *      mediaTransformPublicationSmall: // value for 'mediaTransformPublicationSmall'
 *      mediaTransformPublicationMedium: // value for 'mediaTransformPublicationMedium'
 *      mediaTransformProfileThumbnail: // value for 'mediaTransformProfileThumbnail'
 *   },
 * });
 */
function useGetProfilePublicationRevenue(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(GetProfilePublicationRevenueDocument, options);
}
function useGetProfilePublicationRevenueLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(GetProfilePublicationRevenueDocument, options);
}
var ProfileFollowRevenueDocument = /*#__PURE__*/gql(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["\n  query ProfileFollowRevenue($profileId: ProfileId!) {\n    result: profileFollowRevenue(request: { profileId: $profileId }) {\n      ...ProfileFollowRevenue\n    }\n  }\n  ", "\n"])), FragmentProfileFollowRevenue);

/**
 * __useProfileFollowRevenue__
 *
 * To run a query within a React component, call `useProfileFollowRevenue` and pass it any options that fit your needs.
 * When your component renders, `useProfileFollowRevenue` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileFollowRevenue({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
function useProfileFollowRevenue(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(ProfileFollowRevenueDocument, options);
}
function useProfileFollowRevenueLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(ProfileFollowRevenueDocument, options);
}
var SearchPublicationsDocument = /*#__PURE__*/gql(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["\n  query SearchPublications(\n    $limit: LimitScalar\n    $cursor: Cursor\n    $query: Search!\n    $sources: [Sources!]!\n    $observerId: ProfileId\n    $mediaTransformPublicationSmall: MediaTransformParams = {}\n    $mediaTransformPublicationMedium: MediaTransformParams = {}\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: search(\n      request: {\n        query: $query\n        type: PUBLICATION\n        limit: $limit\n        cursor: $cursor\n        sources: $sources\n      }\n    ) {\n      ... on PublicationSearchResult {\n        __typename\n        items {\n          ... on Post {\n            ...Post\n          }\n          ... on Comment {\n            ...Comment\n          }\n        }\n        pageInfo {\n          ...PaginatedResultInfo\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentPost, FragmentComment, FragmentPaginatedResultInfo);
function useSearchPublicationsLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(SearchPublicationsDocument, options);
}
var SearchProfilesDocument = /*#__PURE__*/gql(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["\n  query SearchProfiles(\n    $limit: LimitScalar!\n    $cursor: Cursor\n    $query: Search!\n    $observerId: ProfileId\n    $sources: [Sources!]!\n    $mediaTransformProfileThumbnail: MediaTransformParams = {}\n  ) {\n    result: search(request: { query: $query, type: PROFILE, limit: $limit, cursor: $cursor }) {\n      ... on ProfileSearchResult {\n        __typename\n        items {\n          ...Profile\n        }\n        pageInfo {\n          ...PaginatedResultInfo\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentProfile, FragmentPaginatedResultInfo);
function useSearchProfilesLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(SearchProfilesDocument, options);
}
var HasTxHashBeenIndexedDocument = /*#__PURE__*/gql(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["\n  query HasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {\n    result: hasTxHashBeenIndexed(request: $request) {\n      ... on TransactionIndexedResult {\n        ...TransactionIndexedResult\n      }\n      ... on TransactionError {\n        ...TransactionError\n      }\n    }\n  }\n  ", "\n  ", "\n"])), FragmentTransactionIndexedResult, FragmentTransactionError);

/**
 * __useHasTxHashBeenIndexed__
 *
 * To run a query within a React component, call `useHasTxHashBeenIndexed` and pass it any options that fit your needs.
 * When your component renders, `useHasTxHashBeenIndexed` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasTxHashBeenIndexed({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useHasTxHashBeenIndexed(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useQuery(HasTxHashBeenIndexedDocument, options);
}
function useHasTxHashBeenIndexedLazyQuery(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useLazyQuery(HasTxHashBeenIndexedDocument, options);
}
var BroadcastOnChainDocument = /*#__PURE__*/gql(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["\n  mutation BroadcastOnChain($request: BroadcastRequest!) {\n    result: broadcast(request: $request) {\n      ...BroadcastOnChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOnChainResult);
/**
 * __useBroadcastOnChain__
 *
 * To run a mutation, you first call `useBroadcastOnChain` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBroadcastOnChain` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [broadcastOnChain, { data, loading, error }] = useBroadcastOnChain({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useBroadcastOnChain(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(BroadcastOnChainDocument, options);
}
var BroadcastOffChainDocument = /*#__PURE__*/gql(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["\n  mutation BroadcastOffChain($request: BroadcastRequest!) {\n    result: broadcastDataAvailability(request: $request) {\n      ...BroadcastOffChainResult\n    }\n  }\n  ", "\n"])), FragmentBroadcastOffChainResult);
/**
 * __useBroadcastOffChain__
 *
 * To run a mutation, you first call `useBroadcastOffChain` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBroadcastOffChain` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [broadcastOffChain, { data, loading, error }] = useBroadcastOffChain({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useBroadcastOffChain(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(BroadcastOffChainDocument, options);
}
var CreateUnfollowTypedDataDocument = /*#__PURE__*/gql(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["\n  mutation CreateUnfollowTypedData($request: UnfollowRequest!) {\n    result: createUnfollowTypedData(request: $request) {\n      id\n      expiresAt\n      typedData {\n        types {\n          BurnWithSig {\n            name\n            type\n          }\n        }\n        domain {\n          ...EIP712TypedDataDomain\n        }\n        message: value {\n          nonce\n          deadline\n          tokenId\n        }\n      }\n    }\n  }\n  ", "\n"])), FragmentEip712TypedDataDomain);
/**
 * __useCreateUnfollowTypedData__
 *
 * To run a mutation, you first call `useCreateUnfollowTypedData` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUnfollowTypedData` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUnfollowTypedData, { data, loading, error }] = useCreateUnfollowTypedData({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
function useCreateUnfollowTypedData(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions$1), baseOptions);
  return Apollo.useMutation(CreateUnfollowTypedDataDocument, options);
}
var result = {
  possibleTypes: {
    BroadcastDataAvailabilityUnion: ['CreateDataAvailabilityPublicationResult', 'RelayError'],
    CollectModule: ['AaveFeeCollectModuleSettings', 'ERC4626FeeCollectModuleSettings', 'FeeCollectModuleSettings', 'FreeCollectModuleSettings', 'LimitedFeeCollectModuleSettings', 'LimitedTimedFeeCollectModuleSettings', 'MultirecipientFeeCollectModuleSettings', 'RevertCollectModuleSettings', 'SimpleCollectModuleSettings', 'TimedFeeCollectModuleSettings', 'UnknownCollectModuleSettings'],
    DataAvailabilityTransactionUnion: ['DataAvailabilityComment', 'DataAvailabilityMirror', 'DataAvailabilityPost'],
    DataAvailabilityVerificationStatusUnion: ['DataAvailabilityVerificationStatusFailure', 'DataAvailabilityVerificationStatusSuccess'],
    FeedItemRoot: ['Comment', 'Post'],
    FollowModule: ['FeeFollowModuleSettings', 'ProfileFollowModuleSettings', 'RevertFollowModuleSettings', 'UnknownFollowModuleSettings'],
    MainPostReference: ['Mirror', 'Post'],
    MentionPublication: ['Comment', 'Post'],
    MirrorablePublication: ['Comment', 'Post'],
    Notification: ['NewCollectNotification', 'NewCommentNotification', 'NewFollowerNotification', 'NewMentionNotification', 'NewMirrorNotification', 'NewReactionNotification'],
    ProfileMedia: ['MediaSet', 'NftImage'],
    ProxyActionStatusResultUnion: ['ProxyActionError', 'ProxyActionQueued', 'ProxyActionStatusResult'],
    Publication: ['Comment', 'Mirror', 'Post'],
    PublicationForSale: ['Comment', 'Post'],
    PublicationSearchResultItem: ['Comment', 'Post'],
    ReferenceModule: ['DegreesOfSeparationReferenceModuleSettings', 'FollowOnlyReferenceModuleSettings', 'UnknownReferenceModuleSettings'],
    RelayDataAvailabilityResult: ['CreateDataAvailabilityPublicationResult', 'RelayError'],
    RelayResult: ['RelayError', 'RelayerResult'],
    SearchResult: ['ProfileSearchResult', 'PublicationSearchResult'],
    TransactionResult: ['TransactionError', 'TransactionIndexedResult']
  }
};

var createAttributeTypePolicy = function createAttributeTypePolicy() {
  return {
    keyFields: false
  };
};

var CollectState;
(function (CollectState) {
  CollectState["CAN_BE_COLLECTED"] = "CAN_BE_COLLECTED";
  CollectState["CANNOT_BE_COLLECTED"] = "CANNOT_BE_COLLECTED";
  CollectState["NOT_A_FOLLOWER"] = "NOT_A_FOLLOWER";
  CollectState["COLLECT_LIMIT_REACHED"] = "COLLECT_LIMIT_REACHED";
  CollectState["COLLECT_TIME_EXPIRED"] = "COLLECT_TIME_EXPIRED";
})(CollectState || (CollectState = {}));

/**
 * @internal
 */
var ContentInsightType;
(function (ContentInsightType) {
  ContentInsightType["SNAPSHOT_POLL"] = "SNAPSHOT_POLL";
  ContentInsightType["UNDETERMINED"] = "UNDETERMINED";
})(ContentInsightType || (ContentInsightType = {}));

function isCursor(value) {
  return typeof value === 'string';
}

var ProfileAttributeReader = /*#__PURE__*/function () {
  function ProfileAttributeReader(attribute) {
    _classCallCheck(this, ProfileAttributeReader);
    this.attribute = attribute;
  }
  _createClass(ProfileAttributeReader, [{
    key: "toBoolean",
    value: function toBoolean() {
      var parsed = this.jsonParse(this.attribute.value);
      if (typeof parsed === 'boolean') {
        return parsed;
      }
      return null;
    }
  }, {
    key: "toDate",
    value: function toDate() {
      var date = new Date(this.attribute.value);
      if (isNaN(date.getTime())) {
        return null;
      }
      return date;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      var parsed = this.jsonParse(this.attribute.value);
      if (typeof parsed === 'number' && isFinite(parsed)) {
        return parsed;
      }
      return null;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.attribute.value;
    }
  }, {
    key: "jsonParse",
    value: function jsonParse(value) {
      try {
        return JSON.parse(value);
      } catch (_unused) {
        return null;
      }
    }
  }]);
  return ProfileAttributeReader;
}();

function erc20Amount$1(_ref) {
  var from = _ref.from;
  var asset = erc20(_objectSpread2({
    chainType: ChainType.POLYGON
  }, from.asset));
  return Amount.erc20(asset, from.value);
}
function moduleFeeAmountParams(_ref2) {
  var from = _ref2.from;
  return {
    currency: from.asset.address,
    value: from.toFixed()
  };
}

/**
 * @group Helpers
 */
function isProfileOwnedByMe(profile) {
  return profile.ownedByMe;
}

/**
 * @group Helpers
 */
function isPostPublication(publication) {
  return publication.__typename === 'Post';
}

/**
 * @group Helpers
 */
function isCommentPublication(publication) {
  return publication.__typename === 'Comment';
}

/**
 * @group Helpers
 */
function isMirrorPublication(publication) {
  return publication.__typename === 'Mirror';
}

/**
 * @internal
 */
function isDataAvailabilityPublicationId(publicationId) {
  return publicationId.includes('-DA-');
}

/**
 * Any publication regardless of its type, or capabilities
 */

/**
 * @group Helpers
 */
function isGatedPublication(publication) {
  return publication.isGated;
}

/**
 * @internal
 */

/**
 * @group Helpers
 */
function isPollPublication(publication) {
  return isContentPublication(publication) && publication.contentInsight.type === ContentInsightType.SNAPSHOT_POLL;
}

/**
 * @group Helpers
 */
function isContentPublication(publication) {
  return isPostPublication(publication) || isCommentPublication(publication);
}
/**
 * @group Helpers
 */
function isPublicationOwnedByMe(publication) {
  return isProfileOwnedByMe(publication.profile);
}
function createCollectRequest(publication, collector) {
  var collectModule = publication.__typename === 'Mirror' ? publication.mirrorOf.collectModule : publication.collectModule;
  switch (collectModule.__typename) {
    case 'SimpleCollectModuleSettings':
      if (collectModule.feeOptional) {
        return {
          profileId: collector.id,
          kind: TransactionKind.COLLECT_PUBLICATION,
          publicationId: publication.id,
          type: CollectType.PAID,
          fee: {
            amount: erc20Amount$1({
              from: collectModule.feeOptional.amount
            }),
            contractAddress: collectModule.contractAddress
          }
        };
      }
      return {
        profileId: collector.id,
        kind: TransactionKind.COLLECT_PUBLICATION,
        publicationId: publication.id,
        followerOnly: collectModule.followerOnly,
        type: CollectType.FREE
      };
    case 'FreeCollectModuleSettings':
      return {
        profileId: collector.id,
        kind: TransactionKind.COLLECT_PUBLICATION,
        publicationId: publication.id,
        followerOnly: collectModule.followerOnly,
        type: CollectType.FREE
      };
    case 'FeeCollectModuleSettings':
    case 'LimitedFeeCollectModuleSettings':
    case 'TimedFeeCollectModuleSettings':
    case 'LimitedTimedFeeCollectModuleSettings':
      return {
        profileId: collector.id,
        kind: TransactionKind.COLLECT_PUBLICATION,
        publicationId: publication.id,
        type: CollectType.PAID,
        fee: {
          amount: erc20Amount$1({
            from: collectModule.amount
          }),
          contractAddress: collectModule.contractAddress
        }
      };
    case 'MultirecipientFeeCollectModuleSettings':
    case 'ERC4626FeeCollectModuleSettings':
    case 'AaveFeeCollectModuleSettings':
      return {
        profileId: collector.id,
        kind: TransactionKind.COLLECT_PUBLICATION,
        publicationId: publication.id,
        type: CollectType.PAID,
        fee: {
          amount: erc20Amount$1({
            from: collectModule.amount
          }),
          contractAddress: collectModule.contractAddress
        }
      };
    case 'RevertCollectModuleSettings':
    case 'UnknownCollectModuleSettings':
      never("Cannot collect publication (".concat(publication.id, ") with \"").concat(collectModule.__typename, "\" collect module"));
  }
}
function resolveTimeLimitReached(collectModule) {
  if (DateUtils.unix() > DateUtils.toUnix(collectModule.endTimestamp)) {
    return CollectState.COLLECT_TIME_EXPIRED;
  }
  return null;
}
function resolveOptionalTimeLimitReached(collectModule) {
  if (collectModule.endTimestampOptional && DateUtils.unix() > DateUtils.toUnix(collectModule.endTimestampOptional)) {
    return CollectState.COLLECT_TIME_EXPIRED;
  }
  return null;
}
function resolveLimitReached(collectModule, publicationStats) {
  if (publicationStats.totalAmountOfCollects >= parseInt(collectModule.collectLimit)) {
    return CollectState.COLLECT_LIMIT_REACHED;
  }
  return null;
}
function resolveOptionalLimitReached(collectModule, publicationStats) {
  if (collectModule.collectLimitOptional && publicationStats.totalAmountOfCollects >= parseInt(collectModule.collectLimitOptional)) {
    return CollectState.COLLECT_LIMIT_REACHED;
  }
  return null;
}
function resolveNotFollower(collectModule, isAuthorFollowedByMe) {
  if (collectModule.followerOnly && !isAuthorFollowedByMe) {
    return CollectState.NOT_A_FOLLOWER;
  }
  return null;
}
function resolveCollectPolicy(_ref) {
  var _resolveNotFollower3, _ref6, _resolveNotFollower4, _ref7, _resolveNotFollower5, _ref8, _ref9, _resolveNotFollower6, _resolveNotFollower7, _ref10, _ref11, _resolveNotFollower8;
  var collectModule = _ref.collectModule,
    isAuthorFollowedByMe = _ref.isAuthorFollowedByMe,
    publicationStats = _ref.publicationStats,
    collectNftAddress = _ref.collectNftAddress;
  switch (collectModule.__typename) {
    case 'SimpleCollectModuleSettings':
      {
        var _ref4, _ref5, _resolveNotFollower2;
        if (collectModule.feeOptional) {
          var _ref2, _ref3, _resolveNotFollower;
          return {
            type: CollectPolicyType.CHARGE,
            state: (_ref2 = (_ref3 = (_resolveNotFollower = resolveNotFollower(collectModule, isAuthorFollowedByMe)) !== null && _resolveNotFollower !== void 0 ? _resolveNotFollower : resolveOptionalLimitReached(collectModule, publicationStats)) !== null && _ref3 !== void 0 ? _ref3 : resolveOptionalTimeLimitReached(collectModule)) !== null && _ref2 !== void 0 ? _ref2 : CollectState.CAN_BE_COLLECTED,
            amount: erc20Amount$1({
              from: collectModule.feeOptional.amount
            }),
            collectLimit: collectModule.collectLimitOptional ? parseInt(collectModule.collectLimitOptional) : null,
            collectNftAddress: collectNftAddress,
            contractAddress: collectModule.contractAddress,
            endTimestamp: collectModule.endTimestampOptional,
            followerOnly: collectModule.followerOnly,
            referralFee: collectModule.feeOptional.referralFee
          };
        }
        return {
          type: CollectPolicyType.FREE,
          state: (_ref4 = (_ref5 = (_resolveNotFollower2 = resolveNotFollower(collectModule, isAuthorFollowedByMe)) !== null && _resolveNotFollower2 !== void 0 ? _resolveNotFollower2 : resolveOptionalLimitReached(collectModule, publicationStats)) !== null && _ref5 !== void 0 ? _ref5 : resolveOptionalTimeLimitReached(collectModule)) !== null && _ref4 !== void 0 ? _ref4 : CollectState.CAN_BE_COLLECTED,
          contractAddress: collectModule.contractAddress,
          collectLimit: collectModule.collectLimitOptional ? parseInt(collectModule.collectLimitOptional) : null,
          collectNftAddress: collectNftAddress,
          endTimestamp: collectModule.endTimestampOptional,
          followerOnly: collectModule.followerOnly
        };
      }
    case 'FeeCollectModuleSettings':
      return {
        type: CollectPolicyType.CHARGE,
        state: (_resolveNotFollower3 = resolveNotFollower(collectModule, isAuthorFollowedByMe)) !== null && _resolveNotFollower3 !== void 0 ? _resolveNotFollower3 : CollectState.CAN_BE_COLLECTED,
        amount: erc20Amount$1({
          from: collectModule.amount
        }),
        collectLimit: null,
        collectNftAddress: collectNftAddress,
        contractAddress: collectModule.contractAddress,
        endTimestamp: null,
        followerOnly: collectModule.followerOnly,
        referralFee: collectModule.referralFee
      };
    case 'LimitedFeeCollectModuleSettings':
      return {
        type: CollectPolicyType.CHARGE,
        state: (_ref6 = (_resolveNotFollower4 = resolveNotFollower(collectModule, isAuthorFollowedByMe)) !== null && _resolveNotFollower4 !== void 0 ? _resolveNotFollower4 : resolveLimitReached(collectModule, publicationStats)) !== null && _ref6 !== void 0 ? _ref6 : CollectState.CAN_BE_COLLECTED,
        amount: erc20Amount$1({
          from: collectModule.amount
        }),
        collectLimit: parseInt(collectModule.collectLimit),
        collectNftAddress: collectNftAddress,
        contractAddress: collectModule.contractAddress,
        endTimestamp: null,
        followerOnly: collectModule.followerOnly,
        referralFee: collectModule.referralFee
      };
    case 'TimedFeeCollectModuleSettings':
      return {
        type: CollectPolicyType.CHARGE,
        state: (_ref7 = (_resolveNotFollower5 = resolveNotFollower(collectModule, isAuthorFollowedByMe)) !== null && _resolveNotFollower5 !== void 0 ? _resolveNotFollower5 : resolveTimeLimitReached(collectModule)) !== null && _ref7 !== void 0 ? _ref7 : CollectState.CAN_BE_COLLECTED,
        amount: erc20Amount$1({
          from: collectModule.amount
        }),
        collectLimit: null,
        collectNftAddress: collectNftAddress,
        contractAddress: collectModule.contractAddress,
        endTimestamp: collectModule.endTimestamp,
        followerOnly: collectModule.followerOnly,
        referralFee: collectModule.referralFee
      };
    case 'LimitedTimedFeeCollectModuleSettings':
      return {
        type: CollectPolicyType.CHARGE,
        state: (_ref8 = (_ref9 = (_resolveNotFollower6 = resolveNotFollower(collectModule, isAuthorFollowedByMe)) !== null && _resolveNotFollower6 !== void 0 ? _resolveNotFollower6 : resolveLimitReached(collectModule, publicationStats)) !== null && _ref9 !== void 0 ? _ref9 : resolveTimeLimitReached(collectModule)) !== null && _ref8 !== void 0 ? _ref8 : CollectState.CAN_BE_COLLECTED,
        amount: erc20Amount$1({
          from: collectModule.amount
        }),
        referralFee: collectModule.referralFee,
        collectLimit: parseInt(collectModule.collectLimit),
        endTimestamp: collectModule.endTimestamp,
        followerOnly: collectModule.followerOnly,
        collectNftAddress: collectNftAddress,
        contractAddress: collectModule.contractAddress
      };
    case 'FreeCollectModuleSettings':
      return {
        type: CollectPolicyType.FREE,
        state: (_resolveNotFollower7 = resolveNotFollower(collectModule, isAuthorFollowedByMe)) !== null && _resolveNotFollower7 !== void 0 ? _resolveNotFollower7 : CollectState.CAN_BE_COLLECTED,
        collectLimit: null,
        collectNftAddress: collectNftAddress,
        contractAddress: collectModule.contractAddress,
        endTimestamp: null,
        followerOnly: collectModule.followerOnly
      };
    case 'MultirecipientFeeCollectModuleSettings':
    case 'ERC4626FeeCollectModuleSettings':
    case 'AaveFeeCollectModuleSettings':
      return {
        type: CollectPolicyType.CHARGE,
        state: (_ref10 = (_ref11 = (_resolveNotFollower8 = resolveNotFollower(collectModule, isAuthorFollowedByMe)) !== null && _resolveNotFollower8 !== void 0 ? _resolveNotFollower8 : resolveOptionalLimitReached(collectModule, publicationStats)) !== null && _ref11 !== void 0 ? _ref11 : resolveOptionalTimeLimitReached(collectModule)) !== null && _ref10 !== void 0 ? _ref10 : CollectState.CAN_BE_COLLECTED,
        amount: erc20Amount$1({
          from: collectModule.amount
        }),
        referralFee: collectModule.referralFee,
        collectLimit: collectModule.collectLimitOptional ? parseInt(collectModule.collectLimitOptional) : null,
        endTimestamp: collectModule.endTimestampOptional,
        followerOnly: collectModule.followerOnly,
        collectNftAddress: collectNftAddress,
        contractAddress: collectModule.contractAddress
      };
    case 'RevertCollectModuleSettings':
    case 'UnknownCollectModuleSettings':
    // Important: at any time backend can introduce new collect module
    // that older sdk version does not know about
    // eslint-disable-next-line no-fallthrough
    default:
      return {
        type: CollectPolicyType.NO_COLLECT,
        state: CollectState.CANNOT_BE_COLLECTED
      };
  }
}

// Note: Copied from apollo given it's not exposed publicly
// eslint-disable-next-line @typescript-eslint/ban-types

function isEndOfTheRoad(result) {
  return result.pageInfo.next === null && result.pageInfo.prev === null && result.items.length === 0;
}
function cursorBasedPagination(keyArgs) {
  return {
    keyArgs: keyArgs,
    read: function read(existing, _ref) {
      var _existing$pageInfo$mo;
      var canRead = _ref.canRead;
      if (!existing) {
        return existing;
      }
      var items = existing.items,
        pageInfo = existing.pageInfo;

      // items that are not in the cache anymore (for .e.g deleted publication)
      var danglingItems = items.filter(function (item) {
        return !canRead(item);
      });
      var readRes = _objectSpread2(_objectSpread2({}, existing), {}, {
        items: items,
        pageInfo: _objectSpread2(_objectSpread2({}, pageInfo), {}, {
          moreAfter: (_existing$pageInfo$mo = existing.pageInfo.moreAfter) !== null && _existing$pageInfo$mo !== void 0 ? _existing$pageInfo$mo : existing.pageInfo.next !== null,
          // reduce total count by excluding dangling items so it won't cause a new page query
          // after item was removed from the cache (for .e.g deleted publication)
          totalCount: pageInfo.totalCount !== null ? pageInfo.totalCount - danglingItems.length : null
        })
      });
      return readRes;
    },
    merge: function merge(existing, incoming, _ref2) {
      var _ref2$variables = _ref2.variables,
        variables = _ref2$variables === void 0 ? {} : _ref2$variables;
      if (!isCursor(variables.cursor) || !existing) {
        return incoming;
      }
      var existingItems = existing.items;
      var incomingItems = incoming.items;
      if (variables.cursor === existing.pageInfo.prev) {
        var _incoming$pageInfo$pr;
        if (isEndOfTheRoad(incoming)) {
          return _objectSpread2(_objectSpread2({}, incoming), {}, {
            items: existingItems,
            pageInfo: _objectSpread2(_objectSpread2({}, incoming.pageInfo), {}, {
              // future-proofing in case we add more fields to pageInfo
              moreAfter: existing.pageInfo.next !== null,
              next: existing.pageInfo.next,
              prev: existing.pageInfo.prev
            })
          });
        }
        return _objectSpread2(_objectSpread2({}, incoming), {}, {
          items: incomingItems.concat(existingItems),
          pageInfo: _objectSpread2(_objectSpread2({}, incoming.pageInfo), {}, {
            // future-proofing in case we add more fields to pageInfo
            moreAfter: existing.pageInfo.moreAfter,
            next: existing.pageInfo.next,
            prev: (_incoming$pageInfo$pr = incoming.pageInfo.prev) !== null && _incoming$pageInfo$pr !== void 0 ? _incoming$pageInfo$pr : existing.pageInfo.prev
          })
        });
      }
      if (variables.cursor === existing.pageInfo.next) {
        if (isEndOfTheRoad(incoming)) {
          return _objectSpread2(_objectSpread2({}, incoming), {}, {
            items: existingItems,
            pageInfo: _objectSpread2(_objectSpread2({}, incoming.pageInfo), {}, {
              // future-proofing in case we add more fields to pageInfo
              moreAfter: false,
              next: existing.pageInfo.next,
              prev: existing.pageInfo.prev
            })
          });
        }
        return _objectSpread2(_objectSpread2({}, incoming), {}, {
          items: existingItems.concat(incomingItems),
          pageInfo: _objectSpread2(_objectSpread2({}, incoming.pageInfo), {}, {
            // future-proofing in case we add more fields to pageInfo
            moreAfter: incoming.pageInfo.next !== null,
            next: incoming.pageInfo.next,
            prev: existing.pageInfo.prev
          })
        });
      }
      never('Unable to merge incoming cursor-based pagination result');
    }
  };
}

function createExploreProfilesFieldPolicy() {
  return cursorBasedPagination([['request', ['sortCriteria']], '$observerId', '$sources']);
}

function createExplorePublicationsFieldPolicy() {
  return cursorBasedPagination([['request', ['excludeProfileIds', 'metadata', 'publicationTypes', 'sortCriteria', 'sources', 'timestamp', 'noRandomize']], '$observerId']);
}

function createFeedFieldPolicy() {
  return cursorBasedPagination([['request', ['profileId', 'feedEventItemTypes', 'sources', 'metadata']], '$observerId']);
}

var createMediaSetTypePolicy = function createMediaSetTypePolicy() {
  return {
    keyFields: false,
    fields: {
      transformed: {
        keyArgs: false
      }
    }
  };
};

var createMediaTypePolicy = function createMediaTypePolicy() {
  return {
    keyFields: false
  };
};

var createNftImageTypePolicy = function createNftImageTypePolicy() {
  return {
    keyFields: false
  };
};

function createNotificationsFieldPolicy() {
  return cursorBasedPagination([['request', ['profileId', 'sources', 'notificationTypes']], '$observerId']);
}

var _defaultDataIdFromObj;
function isProfile(value) {
  return (value === null || value === void 0 ? void 0 : value.__typename) === 'Profile';
}
var identifierPattern = (_defaultDataIdFromObj = defaultDataIdFromObject({
  __typename: 'Profile',
  id: '0x[a-fA-F0-9]{2,}'
})) !== null && _defaultDataIdFromObj !== void 0 ? _defaultDataIdFromObj : never();
var identifierMatcher = new RegExp("^".concat(identifierPattern, "$"));
function createProfileFieldPolicy() {
  return {
    keyArgs: [['request', ['profileId', 'handle']], '$observerId', '$sources'],
    read: function read(_, _ref) {
      var args = _ref.args,
        toReference = _ref.toReference,
        cache = _ref.cache;
      if (args !== null && args !== void 0 && args.request.profileId) {
        return toReference({
          __typename: 'Profile',
          id: args.request.profileId
        });
      }
      var normalizedCacheObject = cache.extract(true);
      for (var key in normalizedCacheObject) {
        var value = normalizedCacheObject[key];
        if (identifierMatcher.test(key) && isProfile(value) && value.handle === (args === null || args === void 0 ? void 0 : args.request.handle)) {
          return toReference(value);
        }
      }
      return;
    }
  };
}

function createProfileFollowersFieldPolicy() {
  return cursorBasedPagination([['request', ['profileId']], '$observerId', '$sources']);
}

function createProfileFollowingFieldPolicy() {
  return cursorBasedPagination([['request', ['address']], '$observerId', '$sources']);
}

function createProfilePublicationRevenueFieldPolicy() {
  return cursorBasedPagination([['request', ['profileId', 'types', 'sources']], '$observerId']);
}

function createProfilePublicationsForSaleFieldPolicy() {
  return cursorBasedPagination([['request', ['profileId', 'sources']], '$observerId']);
}

var SessionType;

/**
 * @experimental
 */
(function (SessionType) {
  SessionType["Anonymous"] = "ANONYMOUS";
  SessionType["JustWallet"] = "JUST_WALLET";
  SessionType["WithProfile"] = "WITH_PROFILE";
})(SessionType || (SessionType = {}));
var NotAuthenticatedSession = /*#__PURE__*/function () {
  function NotAuthenticatedSession() {
    _classCallCheck(this, NotAuthenticatedSession);
    _defineProperty(this, "type", SessionType.Anonymous);
  }
  _createClass(NotAuthenticatedSession, [{
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return false;
    }
  }, {
    key: "isNotAuthenticated",
    value: function isNotAuthenticated() {
      return true;
    }
  }]);
  return NotAuthenticatedSession;
}();
/**
 * @experimental
 */
var AuthenticatedWalletSession = /*#__PURE__*/function () {
  function AuthenticatedWalletSession(wallet) {
    _classCallCheck(this, AuthenticatedWalletSession);
    _defineProperty(this, "type", SessionType.JustWallet);
    this.wallet = wallet;
  }
  _createClass(AuthenticatedWalletSession, [{
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return true;
    }
  }, {
    key: "isNotAuthenticated",
    value: function isNotAuthenticated() {
      return false;
    }
  }]);
  return AuthenticatedWalletSession;
}();
/**
 * @experimental
 */
var AuthenticatedProfileSession = /*#__PURE__*/function () {
  function AuthenticatedProfileSession(wallet, profile) {
    _classCallCheck(this, AuthenticatedProfileSession);
    _defineProperty(this, "type", SessionType.WithProfile);
    this.wallet = wallet;
    this.profile = profile;
  }
  _createClass(AuthenticatedProfileSession, [{
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return true;
    }
  }, {
    key: "isNotAuthenticated",
    value: function isNotAuthenticated() {
      return false;
    }
  }]);
  return AuthenticatedProfileSession;
}();
function notAuthenticated() {
  return new NotAuthenticatedSession();
}
function authenticatedWallet(wallet) {
  return new AuthenticatedWalletSession(wallet);
}
function authenticatedProfile(wallet, profile) {
  return new AuthenticatedProfileSession(wallet, profile);
}
function authenticatedWith(wallet, profile) {
  if (profile === null) {
    return authenticatedWallet(wallet);
  }
  return authenticatedProfile(wallet, profile);
}

/**
 * @experimental
 */

var sessionVar = makeVar(null);
function getSession() {
  return sessionVar();
}
function useSessionVar() {
  return useReactiveVar(sessionVar);
}
function resetSession() {
  sessionVar(null);
}
function updateSession(session) {
  sessionVar(session);
}

var TxStatus;
(function (TxStatus) {
  TxStatus["BROADCASTING"] = "pending";
  TxStatus["MINING"] = "pending";
  TxStatus["PENDING"] = "pending";
  TxStatus["SETTLED"] = "settled";
  TxStatus["FAILED"] = "failed";
})(TxStatus || (TxStatus = {}));
var PENDING_STATUSES = [TxStatus.BROADCASTING, TxStatus.MINING];

/**
 * @deprecated Use {@link TransactionState} instead. It will be removed in the next major version.
 */

var recentTransactionsVar = makeVar([]);
function hasTransactionWith(transactions, statuses, predicate) {
  return transactions.some(function (txState) {
    return statuses.includes(txState.status) && predicate(txState);
  });
}
function hasPendingTransactionWith(predicate) {
  return hasTransactionWith(recentTransactionsVar(), PENDING_STATUSES, predicate);
}
function hasSettledTransactionWith(predicate) {
  return hasTransactionWith(recentTransactionsVar(), [TxStatus.SETTLED], predicate);
}
function getAllPendingTransactions() {
  return recentTransactionsVar().filter(function (txState) {
    return PENDING_STATUSES.includes(txState.status);
  });
}
function delay(waitInMs) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, waitInMs);
  });
}
function useRecentTransactionsVar() {
  return useReactiveVar(recentTransactionsVar);
}
function useHasPendingTransaction(predicate) {
  var transactions = useRecentTransactionsVar();
  return hasTransactionWith(transactions, PENDING_STATUSES, predicate);
}
var FIFTEEN_SECONDS = DateUtils.secondsToMs(30);
function useWaitUntilTransactionSettled() {
  var waitTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FIFTEEN_SECONDS;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(predicate) {
      var resolveWhenNoPendingTransactions, waitForSpecifiedTime;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            resolveWhenNoPendingTransactions = new Promise(function (resolve) {
              var resolver = function resolver(value) {
                if (hasTransactionWith(value, [TxStatus.SETTLED], predicate)) {
                  return resolve();
                }
                return recentTransactionsVar.onNextChange(resolver);
              };
              recentTransactionsVar.onNextChange(resolver);
            });
            waitForSpecifiedTime = delay(waitTimeInMs).then(function () {
              throw new TransactionError(TransactionErrorReason.INDEXING_TIMEOUT);
            });
            _context.next = 4;
            return Promise.race([resolveWhenNoPendingTransactions, waitForSpecifiedTime]);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
function isFollowTransactionFor(_ref2) {
  var profileId = _ref2.profileId,
    followerAddress = _ref2.followerAddress;
  return function (transaction) {
    return transaction.request.kind === TransactionKind.FOLLOW_PROFILES && transaction.request.profileId === profileId && transaction.request.followerAddress === followerAddress;
  };
}
function isUnfollowTransactionFor(_ref3) {
  var profileId = _ref3.profileId;
  return function (transaction) {
    return transaction.request.kind === TransactionKind.UNFOLLOW_PROFILE && transaction.request.profileId === profileId;
  };
}
function isCollectTransactionFor(_ref4) {
  var publicationId = _ref4.publicationId,
    profileId = _ref4.profileId;
  return function (transaction) {
    return transaction.request.kind === TransactionKind.COLLECT_PUBLICATION && transaction.request.profileId === profileId && transaction.request.publicationId === publicationId;
  };
}
function isMirrorTransactionFor(_ref5) {
  var publicationId = _ref5.publicationId,
    profileId = _ref5.profileId;
  return function (transaction) {
    return transaction.request.kind === TransactionKind.MIRROR_PUBLICATION && transaction.request.profileId === profileId && transaction.request.publicationId === publicationId;
  };
}

var observedBy = function observedBy(_, _ref) {
  var variables = _ref.variables;
  if (variables !== null && variables !== void 0 && variables.observerId) {
    return variables.observerId;
  }
  return null;
};

function resolveFollowPolicy(_ref) {
  var followModule = _ref.followModule;
  if (followModule === null) {
    return {
      type: FollowPolicyType.ANYONE
    };
  }
  switch (followModule.__typename) {
    case 'FeeFollowModuleSettings':
      return {
        type: FollowPolicyType.CHARGE,
        amount: erc20Amount$1({
          from: followModule.amount
        }),
        recipient: followModule.recipient,
        contractAddress: followModule.contractAddress
      };
    case 'ProfileFollowModuleSettings':
      return {
        type: FollowPolicyType.ONLY_PROFILE_OWNERS,
        contractAddress: followModule.contractAddress
      };
    case 'RevertFollowModuleSettings':
      return {
        type: FollowPolicyType.NO_ONE,
        contractAddress: followModule.contractAddress
      };
    case 'UnknownFollowModuleSettings':
      return {
        type: FollowPolicyType.UNKNOWN,
        contractAddress: followModule.contractAddress
      };
  }
}
function createProfileTypePolicy() {
  return {
    fields: {
      isFollowing: {
        keyArgs: false
      },
      isFollowedByMe: {
        keyArgs: false,
        merge: function merge(_, incoming) {
          return incoming;
        }
      },
      followStatus: {
        read: function read(_, _ref2) {
          var _ref3, _ref4;
          var readField = _ref2.readField;
          var session = getSession();
          if (!session || session.isNotAuthenticated()) {
            return null;
          }
          var profileId = (_ref3 = readField('id')) !== null && _ref3 !== void 0 ? _ref3 : never('Cannot read profile id');
          var isFollowedByMe = (_ref4 = readField('isFollowedByMe')) !== null && _ref4 !== void 0 ? _ref4 : never('Cannot read profile isFollowedByMe');
          var isFollowTransactionForThisProfile = isFollowTransactionFor({
            profileId: profileId,
            followerAddress: session.wallet.address
          });
          var isUnfollowTransactionForThisProfile = isUnfollowTransactionFor({
            profileId: profileId
          });
          return getAllPendingTransactions().reduce(function (status, transaction) {
            if (isFollowTransactionForThisProfile(transaction)) {
              return {
                isFollowedByMe: true,
                canFollow: false,
                canUnfollow: false
              };
            }
            if (isUnfollowTransactionForThisProfile(transaction)) {
              return {
                isFollowedByMe: false,
                canFollow: false,
                canUnfollow: false
              };
            }
            return status;
          }, {
            isFollowedByMe: isFollowedByMe,
            canFollow: !isFollowedByMe,
            canUnfollow: isFollowedByMe
          });
        }
      },
      followPolicy: function followPolicy(existing, _ref5) {
        var readField = _ref5.readField;
        if (existing) return existing;
        return resolveFollowPolicy({
          followModule: readField('followModule')
        });
      },
      picture: {
        merge: function merge(_, incoming) {
          return incoming;
        }
      },
      coverPicture: {
        merge: function merge(_, incoming) {
          return incoming;
        }
      },
      attributes: {
        merge: function merge(_, incoming) {
          return incoming;
        }
      },
      attributesMap: function attributesMap(_, _ref6) {
        var readField = _ref6.readField;
        var attributes = readField('attributes');
        return (attributes !== null && attributes !== void 0 ? attributes : []).reduce(function (acc, attribute) {
          acc[attribute.key] = new ProfileAttributeReader(attribute);
          return acc;
        }, {});
      },
      ownedByMe: function ownedByMe(_, _ref7) {
        var readField = _ref7.readField;
        var session = getSession();
        if (!session || session.isNotAuthenticated()) {
          return false;
        }
        return readField('ownedBy') === session.wallet.address;
      },
      observedBy: observedBy
    }
  };
}

function createProfilesFieldPolicy() {
  return cursorBasedPagination([['request', ['ownedBy', 'handles', 'profileIds', 'whoMirroredPublicationId']], '$observerId', '$sources']);
}

function createPublicationsFieldPolicy() {
  return cursorBasedPagination([['request', ['profileId', 'profileIds', 'collectedBy', 'publicationTypes', 'commentsOf', 'commentsOfOrdering', 'commentsRankingFilter', 'sources', 'metadata', 'publicationIds']], '$observerId']);
}

function createPublicationsProfileBookmarks() {
  return cursorBasedPagination([['request', ['profileId', 'metadata', 'sources']], '$observerId']);
}

function createRevenueAggregateTypePolicy() {
  return {
    fields: {
      totalAmount: function totalAmount(_, _ref) {
        var _ref2;
        var readField = _ref.readField;
        var total = (_ref2 = readField('total')) !== null && _ref2 !== void 0 ? _ref2 : never('RevenueAggregate total is null');
        return erc20Amount$1({
          from: total
        });
      }
    }
  };
}

function createSearchFieldPolicy() {
  return cursorBasedPagination([['request', ['query', 'type', 'sources']], '$observerId']);
}

function createWhoReactedPublicationFieldPolicy() {
  return cursorBasedPagination([['request', ['publicationId']], '$observerId', '$sources']);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var _excluded = ["__typename"];
function allButPublicationAuthor(authorId) {
  return function (criterion) {
    var _criterion$profile;
    return ((_criterion$profile = criterion.profile) === null || _criterion$profile === void 0 ? void 0 : _criterion$profile.profileId) !== authorId;
  };
}
function toNftContractType(contractType) {
  switch (contractType) {
    case ContractType.Erc721:
      return NftContractType.Erc721;
    case ContractType.Erc1155:
      return NftContractType.Erc1155;
  }
  return null;
}
function nftOwnershipCriterion(_ref) {
  var chainID = _ref.chainID,
    contractAddress = _ref.contractAddress,
    contractType = _ref.contractType,
    tokenIds = _ref.tokenIds;
  var supportedNftContractType = toNftContractType(contractType);
  if (!supportedNftContractType) {
    return null;
  }
  switch (supportedNftContractType) {
    case NftContractType.Erc721:
      return {
        type: DecryptionCriteriaType.NFT_OWNERSHIP,
        chainId: chainID,
        contractAddress: contractAddress,
        contractType: supportedNftContractType,
        tokenIds: tokenIds !== null && tokenIds !== void 0 ? tokenIds : undefined
      };
    case NftContractType.Erc1155:
      if (tokenIds && hasAtLeastOne(tokenIds)) {
        return {
          type: DecryptionCriteriaType.NFT_OWNERSHIP,
          chainId: chainID,
          contractAddress: contractAddress,
          contractType: supportedNftContractType,
          tokenIds: tokenIds
        };
      }
      return null;
    default:
      assertNever(supportedNftContractType, 'NFT contract type is not supported');
  }
}
function erc20Amount(_ref2) {
  var from = _ref2.from;
  var asset = erc20({
    chainType: ChainType.POLYGON,
    // temporary while BE works on returning an Erc20Amount node
    address: from.contractAddress,
    decimals: from.decimals,
    name: from.name,
    symbol: from.symbol
  });
  return Amount.erc20(asset, from.amount);
}
function toErc20Comp(operator) {
  return operator;
}
function erc20OwnershipCriterion(condition) {
  return {
    type: DecryptionCriteriaType.ERC20_OWNERSHIP,
    amount: erc20Amount({
      from: condition
    }),
    condition: toErc20Comp(condition.condition)
  };
}
function addressOwnershipCriterion(condition) {
  return {
    type: DecryptionCriteriaType.ADDRESS_OWNERSHIP,
    address: condition.address
  };
}
function profileOwnershipCriterion(condition) {
  return {
    type: DecryptionCriteriaType.PROFILE_OWNERSHIP,
    profileId: condition.profileId
  };
}
function followProfile(condition) {
  return {
    type: DecryptionCriteriaType.FOLLOW_PROFILE,
    profileId: condition.profileId
  };
}
function collectPublication(condition) {
  var _condition$publicatio;
  if (condition.thisPublication) {
    return {
      type: DecryptionCriteriaType.COLLECT_THIS_PUBLICATION
    };
  }
  return {
    type: DecryptionCriteriaType.COLLECT_PUBLICATION,
    publicationId: (_condition$publicatio = condition.publicationId) !== null && _condition$publicatio !== void 0 ? _condition$publicatio : never('Expected publicationId to be defined')
  };
}
function sanitize(_ref3) {
  _ref3.__typename;
    var accessCondition = _objectWithoutProperties(_ref3, _excluded);
  var conditions = Object.values(accessCondition).filter(isNonNullable);
  assertJustOne(conditions);
  return conditions[0];
}
function resolveSimpleCriterion(accessCondition) {
  var condition = sanitize(accessCondition);
  switch (condition.__typename) {
    case 'EoaOwnershipOutput':
      return addressOwnershipCriterion(condition);
    case 'Erc20OwnershipOutput':
      return erc20OwnershipCriterion(condition);
    case 'NftOwnershipOutput':
      return nftOwnershipCriterion(condition);
    case 'ProfileOwnershipOutput':
      return profileOwnershipCriterion(condition);
    case 'FollowConditionOutput':
      return followProfile(condition);
    case 'CollectConditionOutput':
      return collectPublication(condition);
  }
  return null;
}
function andCondition(_ref4) {
  var criteria = _ref4.criteria;
  var conditions = criteria.map(function (condition) {
    return resolveSimpleCriterion(condition);
  }).filter(isNonNullable);
  if (!hasTwoOrMore(conditions)) return null;
  return {
    type: DecryptionCriteriaType.AND,
    and: conditions
  };
}
function orCondition(_ref5) {
  var criteria = _ref5.criteria;
  var conditions = criteria.map(function (condition) {
    return resolveSimpleCriterion(condition);
  }).filter(isNonNullable);
  if (!hasTwoOrMore(conditions)) return null;
  return {
    type: DecryptionCriteriaType.OR,
    or: conditions
  };
}
function resolveRootCriterion(accessCondition) {
  var condition = sanitize(accessCondition);
  switch (condition.__typename) {
    case 'AndConditionOutput':
      return andCondition(condition);
    case 'OrConditionOutput':
      return orCondition(condition);
  }
  return resolveSimpleCriterion(accessCondition);
}
var decryptionCriteria = function decryptionCriteria(_, _ref6) {
  var _readField, _ref7, _ref8;
  var canRead = _ref6.canRead,
    readField = _ref6.readField;
  var isGated = (_readField = readField('isGated')) !== null && _readField !== void 0 ? _readField : never();
  if (!isGated) return null;

  // we MUST be careful with these assertions as they rely on intrinsic knowledge of the schema
  var author = (_ref7 = readField('profile')) !== null && _ref7 !== void 0 ? _ref7 : never();
  var metadata = (_ref8 = readField('metadata')) !== null && _ref8 !== void 0 ? _ref8 : never();
  if (!metadata.encryptionParams || !metadata.encryptionParams.accessCondition.or) {
    return null;
  }
  invariant(canRead(author), 'Expected to be able to read publication author');
  var authorId = readField('id', author);
  var criteria = metadata.encryptionParams.accessCondition.or.criteria.filter(allButPublicationAuthor(authorId));
  if (hasJustOne(criteria)) {
    return resolveRootCriterion(criteria[0]);
  }
  return null;
};

function extractUrls(input) {
  var urlRegex = /(\w+:\/\/[^\s]+)/gi;
  var urls = input.match(urlRegex) || [];
  return urls;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

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

function firstMatch(candidates, matchers) {
  if (candidates.length === 0) {
    return null;
  }
  var _iterator = _createForOfIteratorHelper(candidates),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var candidate = _step.value;
      var _iterator2 = _createForOfIteratorHelper(matchers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var matcher = _step2.value;
          var result = matcher(candidate);
          if (result !== null) {
            return result;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}

function noCachedField() {
  return {
    // no arguments involved in caching this edge
    keyArgs: false
  };
}

function resolveReferencePolicy(module) {
  if (module === null) {
    return {
      type: ReferencePolicyType.ANYONE
    };
  }
  switch (module.__typename) {
    case 'DegreesOfSeparationReferenceModuleSettings':
      return {
        type: ReferencePolicyType.DEGREES_OF_SEPARATION,
        degreesOfSeparation: module.degreesOfSeparation
      };
    case 'FollowOnlyReferenceModuleSettings':
      return {
        type: ReferencePolicyType.FOLLOWERS_ONLY
      };
    case 'UnknownReferenceModuleSettings':
      return {
        type: ReferencePolicyType.UNKNOWN,
        contractAddress: module.contractAddress,
        data: module.referenceModuleReturnData
      };
  }
}
var referencePolicy = function referencePolicy(existing, _ref) {
  var readField = _ref.readField;
  if (existing) return existing;
  var module = readField('referenceModule');
  return resolveReferencePolicy(module !== null && module !== void 0 ? module : null);
};
var collectedBy = {
  merge: function merge(existing, incoming) {
    // workaround: try to retain the information even if the publication is updated in
    // cache as part of another query that does not have the collectedBy field
    return existing !== null && existing !== void 0 ? existing : incoming;
  }
};
var collectPolicy = function collectPolicy(existing, _ref2) {
  var readField = _ref2.readField;
  if (existing) return existing;
  var profile = readField('profile');
  var collectModule = readField('collectModule');
  var isAuthorFollowedByMe = readField('isFollowedByMe', profile);
  var publicationStats = readField('stats');
  var collectNftAddress = readField('collectNftAddress') || null;
  return resolveCollectPolicy({
    collectModule: collectModule,
    isAuthorFollowedByMe: isAuthorFollowedByMe,
    publicationStats: publicationStats,
    collectNftAddress: collectNftAddress
  });
};
var hasCollectedByMe = function hasCollectedByMe(existing, _ref3) {
  var readField = _ref3.readField;
  // if collected already then just return, it can't be undone
  if (existing === true) return existing;
  var session = getSession();
  if (!session || session.type !== SessionType.WithProfile) return false;
  var publicationId = readField('id');
  var isCollectTransactionForThisPublication = isCollectTransactionFor({
    publicationId: publicationId,
    profileId: session.profile.id
  });
  var collectPendingTx = getAllPendingTransactions().find(function (transaction) {
    return isCollectTransactionForThisPublication(transaction);
  });
  return collectPendingTx !== undefined;
};

// TODO: Make sure the typing is correct and force to return the correct type without shallowing the `undefined` which means that the field is missing and breaks the cache
var isMirroredByMe = function isMirroredByMe(existing, _ref4) {
  var readField = _ref4.readField;
  if (existing === true) return existing;
  var session = getSession();
  var publicationId = readField('id');
  var mirrors = readField('mirrors');
  if (!session || session.type !== SessionType.WithProfile) return false;
  if (mirrors.length > 0) return true;
  var isMirrorTransactionForThisPublication = isMirrorTransactionFor({
    publicationId: publicationId,
    profileId: session.profile.id
  });
  var mirrorPendingTxs = getAllPendingTransactions().filter(function (transaction) {
    return isMirrorTransactionForThisPublication(transaction);
  });
  return mirrorPendingTxs.length > 0;
};

/**
 * @deprecated use `hasCollectedByMe` instead
 */
var hasOptimisticCollectedByMe = function hasOptimisticCollectedByMe(existing) {
  return existing !== null && existing !== void 0 ? existing : false;
};

/**
 * @deprecated use `isMirroredByMe` instead
 */
var isOptimisticMirroredByMe = function isOptimisticMirroredByMe(existing) {
  return existing !== null && existing !== void 0 ? existing : false;
};
var createContentInsightFieldPolicy = function createContentInsightFieldPolicy(_ref5) {
  var contentMatchers = _ref5.contentMatchers;
  return function (_, _ref6) {
    var readField = _ref6.readField;
    var metadata = readField('metadata');
    if (metadata.content) {
      var urls = extractUrls(metadata.content);
      var match = firstMatch(urls, contentMatchers);
      if (match) {
        return match;
      }
    }
    return {
      type: ContentInsightType.UNDETERMINED
    };
  };
};
var publicationTypename = 'Publication';
function createPublicationTypePolicy() {
  return {
    keyFields: function keyFields(_ref7) {
      var id = _ref7.id;
      return "".concat(publicationTypename, ":").concat(String(id));
    }
  };
}
function createContentPublicationTypePolicy(config) {
  return {
    fields: {
      canComment: noCachedField(),
      canDecrypt: noCachedField(),
      canMirror: noCachedField(),
      collectedBy: collectedBy,
      collectPolicy: collectPolicy,
      contentInsight: createContentInsightFieldPolicy(config),
      decryptionCriteria: decryptionCriteria,
      hasCollectedByMe: hasCollectedByMe,
      hasOptimisticCollectedByMe: hasOptimisticCollectedByMe,
      isMirroredByMe: isMirroredByMe,
      isOptimisticMirroredByMe: isOptimisticMirroredByMe,
      mirrors: noCachedField(),
      notInterested: noCachedField(),
      bookmarked: noCachedField(),
      reaction: noCachedField(),
      referencePolicy: referencePolicy,
      stats: noCachedField(),
      observedBy: observedBy
    }
  };
}
var createCommentTypePolicy = createContentPublicationTypePolicy;
var createPostTypePolicy = createContentPublicationTypePolicy;
function createPublicationFieldPolicy() {
  return {
    read: function read(_, _ref8) {
      var args = _ref8.args,
        toReference = _ref8.toReference;
      return toReference({
        __typename: publicationTypename,
        id: args === null || args === void 0 ? void 0 : args.request.publicationId
      });
    }
  };
}

/**
 * Use this to declare a type policy for an object that should not be normalized.
 * Non-normalized objects are embedded within their parent object in the cache.
 *
 * See https://www.apollographql.com/docs/react/caching/cache-configuration/#disabling-normalization
 *
 * @returns a TypePolicy that does not cache the result of the field
 */
function notNormalizedType(others) {
  return _objectSpread2({
    keyFields: false
  }, others);
}

function createTypePolicies(_ref) {
  var _ref$contentMatchers = _ref.contentMatchers,
    contentMatchers = _ref$contentMatchers === void 0 ? [] : _ref$contentMatchers;
  return {
    Profile: createProfileTypePolicy(),
    // Comment, Mirror, and Post type policies inherit from Publication type policy
    Publication: createPublicationTypePolicy(),
    Comment: createCommentTypePolicy({
      contentMatchers: contentMatchers
    }),
    Post: createPostTypePolicy({
      contentMatchers: contentMatchers
    }),
    FeedItem: notNormalizedType(),
    MetadataOutput: notNormalizedType(),
    PublicationStats: notNormalizedType({
      fields: {
        commentsTotal: noCachedField()
      }
    }),
    ProfileStats: notNormalizedType({
      fields: {
        commentsTotal: noCachedField(),
        postsTotal: noCachedField(),
        mirrorsTotal: noCachedField()
      }
    }),
    AccessConditionOutput: notNormalizedType(),
    EncryptionParamsOutput: notNormalizedType(),
    Attribute: createAttributeTypePolicy(),
    MediaSet: createMediaSetTypePolicy(),
    NftImage: createNftImageTypePolicy(),
    Media: createMediaTypePolicy(),
    RevenueAggregate: createRevenueAggregateTypePolicy(),
    // ensures that no matter what fields we add to it in the future, it will NOT be normalized
    PaginatedResultInfo: notNormalizedType(),
    Query: {
      fields: {
        feed: createFeedFieldPolicy(),
        exploreProfiles: createExploreProfilesFieldPolicy(),
        explorePublications: createExplorePublicationsFieldPolicy(),
        notifications: createNotificationsFieldPolicy(),
        profile: createProfileFieldPolicy(),
        profiles: createProfilesFieldPolicy(),
        profilePublicationsForSale: createProfilePublicationsForSaleFieldPolicy(),
        publications: createPublicationsFieldPolicy(),
        publication: createPublicationFieldPolicy(),
        search: createSearchFieldPolicy(),
        whoReactedPublication: createWhoReactedPublicationFieldPolicy(),
        followers: createProfileFollowersFieldPolicy(),
        following: createProfileFollowingFieldPolicy(),
        profilePublicationRevenue: createProfilePublicationRevenueFieldPolicy(),
        publicationsProfileBookmarks: createPublicationsProfileBookmarks()
      }
    }
  };
}
function createDiGiCache() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new InMemoryCache({
    possibleTypes: result.possibleTypes,
    typePolicies: createTypePolicies(args)
  });
}

function createSnapshotCache() {
  return new InMemoryCache();
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

var OrderDirection;
(function (OrderDirection) {
  OrderDirection["Asc"] = "asc";
  OrderDirection["Desc"] = "desc";
})(OrderDirection || (OrderDirection = {}));
var FragmentSnapshotProposal = /*#__PURE__*/gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment SnapshotProposal on Proposal {\n    __typename\n    id\n    author\n    state\n    title\n    choices\n    scores\n    scores_total\n    snapshot\n    symbol\n    network\n    type\n    privacy\n    start\n    end\n    quorum\n    space {\n      id\n      name\n    }\n    strategies {\n      network\n      name\n      params\n    }\n    flagged\n  }\n"])));
var FragmentSnapshotVote = /*#__PURE__*/gql(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  fragment SnapshotVote on Vote {\n    __typename\n    choice\n  }\n"])));
var FragmentSnapshotVotePower = /*#__PURE__*/gql(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  fragment SnapshotVotePower on Vp {\n    __typename\n    value: vp\n  }\n"])));
var GetSnapshotProposalDocument = /*#__PURE__*/gql(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  query GetSnapshotProposal(\n    $spaceId: String!\n    $proposalId: String!\n    $voterAddress: String!\n    $includeVotes: Boolean!\n  ) {\n    proposal(id: $proposalId) {\n      ...SnapshotProposal\n    }\n    votes(where: { proposal: $proposalId, voter: $voterAddress }) @include(if: $includeVotes) {\n      ...SnapshotVote\n    }\n    vp(voter: $voterAddress, space: $spaceId, proposal: $proposalId) @include(if: $includeVotes) {\n      ...SnapshotVotePower\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), FragmentSnapshotProposal, FragmentSnapshotVote, FragmentSnapshotVotePower);

/**
 * __useGetSnapshotProposal__
 *
 * To run a query within a React component, call `useGetSnapshotProposal` and pass it any options that fit your needs.
 * When your component renders, `useGetSnapshotProposal` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSnapshotProposal({
 *   variables: {
 *      spaceId: // value for 'spaceId'
 *      proposalId: // value for 'proposalId'
 *      voterAddress: // value for 'voterAddress'
 *      includeVotes: // value for 'includeVotes'
 *   },
 * });
 */
function useGetSnapshotProposal(baseOptions) {
  var options = _objectSpread2(_objectSpread2({}, defaultOptions), baseOptions);
  return Apollo.useQuery(GetSnapshotProposalDocument, options);
}

export { PublicationContentWarning as $, useSessionVar as A, resetSession as B, ContentInsightType as C, updateSession as D, CollectState as E, isCursor as F, GetPublicationsDocument as G, ClaimStatus as H, CollectModules as I, CommentOrderingTypes as J, CommentRankingFilter as K, ContractType as L, CustomFiltersTypes as M, DecryptFailReason as N, EncryptionProvider as O, FeedEventItemType as P, FollowModules as Q, IdKitPhoneVerifyWebhookResultStatusType as R, SearchProfilesDocument as S, TxStatus as T, UnspecifiedError as U, ValidationError as V, MomokaValidatorError as W, NotificationTypes as X, ProfileSortCriteria as Y, ProxyActionStatusTypes as Z, _unsupportedIterableToArray as _, SearchPublicationsDocument as a, FragmentLimitedTimedFeeCollectModuleSettings as a$, PublicationMainFocus as a0, PublicationMediaSource as a1, PublicationMetadataDisplayTypes as a2, PublicationMetadataStatusType as a3, PublicationReportingFraudSubreason as a4, PublicationReportingIllegalSubreason as a5, PublicationReportingReason as a6, PublicationReportingSensitiveSubreason as a7, PublicationReportingSpamSubreason as a8, PublicationSortCriteria as a9, FragmentAnyConditionOutput as aA, FragmentRootConditionOutput as aB, FragmentEncryptedMedia as aC, FragmentEncryptedFieldsOutput as aD, FragmentEncryptionParamsOutput as aE, FragmentMetadataOutput as aF, FragmentNftImage as aG, FragmentProfilePictureSet as aH, FragmentProfileCoverSet as aI, FragmentProfileStats as aJ, FragmentErc20Fields as aK, FragmentModuleFeeAmount as aL, FragmentFeeFollowModuleSettings as aM, FragmentProfileFollowModuleSettings as aN, FragmentRevertFollowModuleSettings as aO, FragmentUnknownFollowModuleSettings as aP, FragmentAttribute as aQ, FragmentProfileFields as aR, FragmentProfile as aS, FragmentWallet as aT, FragmentAaveFeeCollectModuleSettings as aU, FragmentErc4626FeeCollectModuleSettings as aV, FragmentMultirecipientFeeCollectModuleSettings as aW, FragmentUnknownCollectModuleSettings as aX, FragmentFreeCollectModuleSettings as aY, FragmentFeeCollectModuleSettings as aZ, FragmentLimitedFeeCollectModuleSettings as a_, PublicationTypes as aa, ReactionTypes as ab, ReferenceModules as ac, RelayErrorReasons as ad, RelayRoleKey as ae, ScalarOperator as af, SearchRequestTypes as ag, TagSortCriteria as ah, TransactionErrorReasons as ai, WorldcoinPhoneVerifyType as aj, FragmentEip712TypedDataDomain as ak, FragmentCreateCommentEip712TypedData as al, FragmentPaginatedResultInfo as am, FragmentPublicationStats as an, FragmentMedia as ao, FragmentPublicationMediaSet as ap, FragmentMetadataAttributeOutput as aq, FragmentNftOwnershipOutput as ar, FragmentErc20OwnershipOutput as as, FragmentEoaOwnershipOutput as at, FragmentProfileOwnershipOutput as au, FragmentFollowConditionOutput as av, FragmentCollectConditionOutput as aw, FragmentLeafConditionOutput as ax, FragmentOrConditionOutput as ay, FragmentAndConditionOutput as az, GetProfileBookmarksDocument as b, CreateDataAvailabilityCommentViaDispatcherDocument as b$, FragmentRevertCollectModuleSettings as b0, FragmentTimedFeeCollectModuleSettings as b1, FragmentSimpleCollectModuleSettings as b2, FragmentFollowOnlyReferenceModuleSettings as b3, FragmentDegreesOfSeparationReferenceModuleSettings as b4, FragmentUnknownReferenceModuleSettings as b5, FragmentCommentBase as b6, FragmentPost as b7, FragmentMirrorBase as b8, FragmentComment as b9, FragmentWhoReactedResult as bA, FragmentErc20AmountFields as bB, FragmentRevenueAggregate as bC, FragmentPublicationRevenue as bD, FragmentProfileFollowRevenue as bE, FragmentRelayerResult as bF, FragmentRelayError as bG, FragmentBroadcastOnChainResult as bH, FragmentDataAvailabilityPublicationResult as bI, FragmentBroadcastOffChainResult as bJ, FragmentTransactionIndexedResult as bK, FragmentTransactionError as bL, AuthChallengeDocument as bM, useAuthChallenge as bN, useAuthChallengeLazyQuery as bO, AuthAuthenticateDocument as bP, useAuthAuthenticate as bQ, AuthRefreshDocument as bR, useAuthRefresh as bS, CreateCollectTypedDataDocument as bT, useCreateCollectTypedData as bU, CreateCommentTypedDataDocument as bV, useCreateCommentTypedData as bW, CreateCommentViaDispatcherDocument as bX, useCreateCommentViaDispatcher as bY, CreateDataAvailabilityCommentTypedDataDocument as bZ, useCreateDataAvailabilityCommentTypedData as b_, FragmentMirror as ba, FragmentPublication as bb, FragmentPendingPost as bc, FragmentElectedMirror as bd, FragmentMirrorEvent as be, FragmentCollectedEvent as bf, FragmentReactionEvent as bg, FragmentFeedItem as bh, FragmentEncryptedMediaSet as bi, FragmentCreateMirrorEip712TypedData as bj, FragmentModuleInfo as bk, FragmentEnabledModule as bl, FragmentEnabledModules as bm, FragmentNewFollowerNotification as bn, FragmentNewCollectNotification as bo, FragmentNewMirrorNotification as bp, FragmentNewCommentNotification as bq, FragmentNewMentionNotification as br, FragmentNewReactionNotification as bs, FragmentCreatePostEip712TypedData as bt, FragmentProfileGuardianResult as bu, FragmentFollower as bv, FragmentFollowing as bw, FragmentProxyActionStatusResult as bx, FragmentProxyActionError as by, FragmentProxyActionQueued as bz, _asyncToGenerator as c, useCreateSetProfileMetadataTypedData as c$, useCreateDataAvailabilityCommentViaDispatcher as c0, EnabledModuleCurrenciesDocument as c1, useEnabledModuleCurrencies as c2, useEnabledModuleCurrenciesLazyQuery as c3, FeedDocument as c4, useFeed as c5, useFeedLazyQuery as c6, ExploreProfilesDocument as c7, useExploreProfiles as c8, useExploreProfilesLazyQuery as c9, useCreateDataAvailabilityPostViaDispatcher as cA, CreateSetDispatcherTypedDataDocument as cB, useCreateSetDispatcherTypedData as cC, ProfileGuardianDocument as cD, useProfileGuardian as cE, useProfileGuardianLazyQuery as cF, ProfilesToFollowDocument as cG, useProfilesToFollow as cH, useProfilesToFollowLazyQuery as cI, GetProfileDocument as cJ, useGetProfile as cK, useGetProfileLazyQuery as cL, GetAllProfilesDocument as cM, useGetAllProfiles as cN, useGetAllProfilesLazyQuery as cO, CreateProfileDocument as cP, useCreateProfile as cQ, MutualFollowersProfilesDocument as cR, useMutualFollowersProfiles as cS, useMutualFollowersProfilesLazyQuery as cT, CreateSetFollowModuleTypedDataDocument as cU, useCreateSetFollowModuleTypedData as cV, CreateSetProfileImageUriTypedDataDocument as cW, useCreateSetProfileImageUriTypedData as cX, CreateSetProfileImageUriViaDispatcherDocument as cY, useCreateSetProfileImageUriViaDispatcher as cZ, CreateSetProfileMetadataTypedDataDocument as c_, CreateFollowTypedDataDocument as ca, useCreateFollowTypedData as cb, CreateMirrorTypedDataDocument as cc, useCreateMirrorTypedData as cd, CreateMirrorViaDispatcherDocument as ce, useCreateMirrorViaDispatcher as cf, CreateDataAvailabilityMirrorTypedDataDocument as cg, useCreateDataAvailabilityMirrorTypedData as ch, CreateDataAvailabilityMirrorViaDispatcherDocument as ci, useCreateDataAvailabilityMirrorViaDispatcher as cj, EnabledModulesDocument as ck, useEnabledModules as cl, useEnabledModulesLazyQuery as cm, NotificationsDocument as cn, useNotifications as co, useNotificationsLazyQuery as cp, UnreadNotificationCountDocument as cq, useUnreadNotificationCount as cr, useUnreadNotificationCountLazyQuery as cs, CreatePostTypedDataDocument as ct, useCreatePostTypedData as cu, CreatePostViaDispatcherDocument as cv, useCreatePostViaDispatcher as cw, CreateDataAvailabilityPostTypedDataDocument as cx, useCreateDataAvailabilityPostTypedData as cy, CreateDataAvailabilityPostViaDispatcherDocument as cz, _regeneratorRuntime as d, useBroadcastOnChain as d$, CreateSetProfileMetadataViaDispatcherDocument as d0, useCreateSetProfileMetadataViaDispatcher as d1, ProfileFollowersDocument as d2, useProfileFollowers as d3, useProfileFollowersLazyQuery as d4, ProfileFollowingDocument as d5, useProfileFollowing as d6, useProfileFollowingLazyQuery as d7, ProxyActionStatusDocument as d8, useProxyActionStatus as d9, useProfilePublicationsForSale as dA, useProfilePublicationsForSaleLazyQuery as dB, useGetProfileBookmarksLazyQuery as dC, AddReactionDocument as dD, useAddReaction as dE, RemoveReactionDocument as dF, useRemoveReaction as dG, WhoReactedPublicationDocument as dH, useWhoReactedPublication as dI, useWhoReactedPublicationLazyQuery as dJ, ReportPublicationDocument as dK, useReportPublication as dL, GetPublicationRevenueDocument as dM, useGetPublicationRevenue as dN, useGetPublicationRevenueLazyQuery as dO, GetProfilePublicationRevenueDocument as dP, useGetProfilePublicationRevenue as dQ, useGetProfilePublicationRevenueLazyQuery as dR, ProfileFollowRevenueDocument as dS, useProfileFollowRevenue as dT, useProfileFollowRevenueLazyQuery as dU, useSearchPublicationsLazyQuery as dV, useSearchProfilesLazyQuery as dW, HasTxHashBeenIndexedDocument as dX, useHasTxHashBeenIndexed as dY, useHasTxHashBeenIndexedLazyQuery as dZ, BroadcastOnChainDocument as d_, useProxyActionStatusLazyQuery as da, ProxyActionDocument as db, useProxyAction as dc, GetPublicationDocument as dd, useGetPublication as de, useGetPublicationLazyQuery as df, HidePublicationDocument as dg, useHidePublication as dh, AddNotInterestedDocument as di, useAddNotInterested as dj, RemoveNotInterestedDocument as dk, useRemoveNotInterested as dl, AddToMyBookmarksDocument as dm, useAddToMyBookmarks as dn, RemoveFromMyBookmarksDocument as dp, useRemoveFromMyBookmarks as dq, useGetPublications as dr, useGetPublicationsLazyQuery as ds, ExplorePublicationsDocument as dt, useExplorePublications as du, useExplorePublicationsLazyQuery as dv, WhoCollectedPublicationDocument as dw, useWhoCollectedPublication as dx, useWhoCollectedPublicationLazyQuery as dy, ProfilePublicationsForSaleDocument as dz, SafeApolloClient as e, BroadcastOffChainDocument as e0, useBroadcastOffChain as e1, CreateUnfollowTypedDataDocument as e2, useCreateUnfollowTypedData as e3, ProfileAttributeReader as e4, erc20Amount$1 as e5, moduleFeeAmountParams as e6, isProfileOwnedByMe as e7, isPostPublication as e8, isCommentPublication as e9, isMirrorPublication as ea, isDataAvailabilityPublicationId as eb, isGatedPublication as ec, isPollPublication as ed, isContentPublication as ee, isPublicationOwnedByMe as ef, createCollectRequest as eg, resolveCollectPolicy as eh, _objectSpread2 as ei, _arrayLikeToArray as ej, ApolloServerErrorCode as ek, _taggedTemplateLiteral as el, createDiGiCache as f, createSnapshotCache as g, GetSnapshotProposalDocument as h, hasPendingTransactionWith as i, hasSettledTransactionWith as j, getAllPendingTransactions as k, useRecentTransactionsVar as l, useHasPendingTransaction as m, useWaitUntilTransactionSettled as n, isFollowTransactionFor as o, isUnfollowTransactionFor as p, isCollectTransactionFor as q, recentTransactionsVar as r, isMirrorTransactionFor as s, SessionType as t, useGetSnapshotProposal as u, notAuthenticated as v, authenticatedWallet as w, authenticatedProfile as x, authenticatedWith as y, getSession as z };
