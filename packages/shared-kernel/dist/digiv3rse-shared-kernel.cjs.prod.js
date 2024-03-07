'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObject = require('lodash/isObject');
var Amount = require('./Amount-54ec2160.cjs.prod.js');
var defaultTo = require('lodash/defaultTo.js');
var isObject$1 = require('lodash/isObject.js');
var lodashGet = require('lodash/get.js');
var isObjectLike = require('lodash/isObjectLike.js');
require('decimal.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isObject__default = /*#__PURE__*/_interopDefault(isObject);
var defaultTo__default = /*#__PURE__*/_interopDefault(defaultTo);
var isObject__default$1 = /*#__PURE__*/_interopDefault(isObject$1);
var lodashGet__default = /*#__PURE__*/_interopDefault(lodashGet);
var isObjectLike__default = /*#__PURE__*/_interopDefault(isObjectLike);

/**
 * This subclass of Error supports chaining.
 * If available, it uses the built-in support for property `.cause`.
 * Otherwise, it sets it up itself.
 *
 * @see https://github.com/tc39/proposal-error-cause
 * @internal
 */
var CausedError = /*#__PURE__*/function (_Error) {
  Amount._inherits(CausedError, _Error);
  function CausedError(message, options) {
    var _this;
    Amount._classCallCheck(this, CausedError);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Error not yet properly typed
    _this = Amount._callSuper(this, CausedError, [message, options]);
    if (isObject__default$1["default"](options) && options.cause && !('cause' in Amount._assertThisInitialized(_this))) {
      var cause = options.cause;
      _this.cause = cause;
      if (typeof cause.stack === 'string') {
        _this.stack = defaultTo__default["default"](_this.stack, '') + '\nCAUSE: ' + cause.stack;
      }
    }
    return _this;
  }
  return Amount._createClass(CausedError);
}( /*#__PURE__*/Amount._wrapNativeSuper(Error));

/**
 * Represent number of milliseconds since the Unix Epoch
 */

var DateUtils = /*#__PURE__*/function () {
  function DateUtils() {
    Amount._classCallCheck(this, DateUtils);
  }
  Amount._createClass(DateUtils, null, [{
    key: "toUnix",
    value: function toUnix(date) {
      if (date instanceof Date) {
        return date.getTime();
      }
      if (typeof date === 'string') {
        return new Date(date).getTime();
      }
      return date;
    }
  }, {
    key: "toISOString",
    value: function toISOString(date) {
      if (typeof date === 'string' || typeof date === 'number') {
        return new Date(date).toISOString();
      }
      return date.toISOString();
    }
  }, {
    key: "unix",
    value: function unix() {
      return Date.now();
    }
  }, {
    key: "unixInSeconds",
    value: function unixInSeconds() {
      return this.unix() / 1000;
    }
  }, {
    key: "hoursToMs",
    value: function hoursToMs(hours) {
      return this.minutesToMs(hours * 60);
    }
  }, {
    key: "minutesToMs",
    value: function minutesToMs(minutes) {
      return minutes * 6 * 10 * 1000;
    }
  }, {
    key: "secondsToMs",
    value: function secondsToMs(seconds) {
      return seconds * 1000;
    }
  }]);
  return DateUtils;
}();

/**
 * Unwraps the promise to allow resolving/rejecting outside the Promise constructor
 */
var Deferred = /*#__PURE__*/Amount._createClass(function Deferred() {
  var _this = this;
  Amount._classCallCheck(this, Deferred);
  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
});

/**
 * A `Success<T, E>` represents a successful computation that returns a value of type `T`.
 *
 * `E` in `Success<T, E>` is the type of the error that would have been returned in case of failure.
 * It's present only to allow type safety of the `isFailure` method.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 * @typeParam T - the success value type
 */
var Success = /*#__PURE__*/function () {
  /** @internal */
  function Success(value) {
    Amount._classCallCheck(this, Success);
    this.value = value;
  }
  Amount._createClass(Success, [{
    key: "isSuccess",
    value: function isSuccess() {
      return true;
    }
  }, {
    key: "isFailure",
    value: function isFailure() {
      return false;
    }
  }, {
    key: "unwrap",
    value: function unwrap() {
      return this.value;
    }
  }]);
  return Success;
}();
/**
 * A `Success<T, E>` represents a successful computation that returns a value of type `T`.
 *
 * `T` in `Failure<T, E>` is the type of the value that would have been returned in case of success.
 * It's present only to allow type safety of the `isSuccess` method.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 * @typeParam E - the failure error type
 */
var Failure = /*#__PURE__*/function () {
  /** @internal */
  function Failure(error) {
    Amount._classCallCheck(this, Failure);
    this.error = error;
  }
  Amount._createClass(Failure, [{
    key: "isSuccess",
    value: function isSuccess() {
      return false;
    }
  }, {
    key: "isFailure",
    value: function isFailure() {
      return true;
    }
  }, {
    key: "unwrap",
    value: function unwrap() {
      throw this.error;
    }
  }]);
  return Failure;
}();
/**
 * An `IEquatableError` is an error that can be compared by name.
 *
 */
/**
 * A `Result` type represents either `Success` or `Failure`.
 *
 * **TL;DR**
 *
 * `Result` is a minimalist implementation of a value that can be a "success" or a "failure".
 * It borrows from what done in other modern languages (i.e. Rust, Kotlin, Swift, etc.).
 *
 * The DiGi SDK adopts this pattern in order to:
 * - be explicit about the known failure scenarios of a task,
 * - provide a way for consumers to perform exhaustive error handling,
 * - makes control flow easier to reason about.
 *
 * @remarks
 *
 * You might be familiar with the `Either` type from functional programming. The `Result` type
 * could be seen as a more specific version of `Either` where the left side is reserved for
 * success scenarios and the right side is reserved for known failure scenarios.
 *
 * Think of failure scenarios as alternative outcomes of a given task that although not the "happy path",
 * are still legitimate results for the task within the boundary of a correct usage of the SDK.
 *
 * In promoting exhaustive error handling, the DiGi SDK makes it easier to evolve your code
 * when a new error case is added or a case is removed.
 * For example after a DiGi SDK upgrade you can simply run the TS compiler to figure out where you
 * need to handle the new error cases, or even better, it guides you to remove obsolescent code
 * where an error case is no longer possible. This is virtually impossible with a `try/catch` approach.
 *
 * Thrown exceptions are historically difficult to trace. They require implicit knowledge
 * of the implementation details of the code that might throw exceptions. This might go several
 * layers down and leads to tight coupling between modules.
 *
 * The DiGi SDK still throws exceptions where the error is not a "normal execution scenario".
 * These are considered real "exceptional circumstances" and not alternative outcomes and it's up to the consumer to `try/catch` them.
 *
 * An example of errors that are thrown by the SDK is {@link InvariantError}. They are often thrown as result of a misuse of the SDK.
 * By throwing them we want to fail fast so the consumer can fix the issue as soon as possible.
 * Specifically for `InvariantError`, there is no need to code defensively against these errors. Just rectify the coding issue and move on.
 *
 * @example
 * Control flow
 * ```ts
 * const result: Result<number, RangeError> = doSomething();
 *
 * if (result.isFailure()) {
 *   // because of the `isFailure` check above, TS knows that `result` is a `Failure<RangeError>` here
 *   console.log(result.error); // result.error gets narrowed to `RangeError`
 *
 *   return; // early return
 * }
 *
 * // because of the `isFailure` check above and the early return, TS knows that `result` is a `Success<number>` here
 * console.log(result.value); // result.value gets narrowed to `number`
 * ```
 *
 * @example
 * Exhaustive error handling
 *
 * Given a result type like the following:
 *
 * ```ts
 * const result: Result<number, PendingSigningError | WalletConnectionError> = doSomething();
 * ```
 * You can use a function with a `switch` statement to perform exhaustive error handling:
 * ```ts
 * function format(failure: Failure<PendingSigningError | WalletConnectionError>): string {
 *   switch (failure.error.name) {
 *     case 'PendingSigningError':
 *       return 'Please sign the transaction';
 *       break;
 *     case 'WalletConnectionError':
 *       return 'Please connect your wallet and try again';
 *       break;
 *   }
 *   // any code after the switch statement is unreachable
 * }
 * ```
 * The example above assumes `allowUnreachableCode: false` in your `tsconfig.json`.
 *
 * An even more robust way to perform exhaustive error handling with a `switch` is to use the `never` type: see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking | exhaustiveness checking}.
 *
 * @see https://wiki.c2.com/?AvoidExceptionsWheneverPossible
 * @see https://developer.apple.com/documentation/swift/result
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/
 * @see https://the-guild.dev/blog/graphql-error-handling-with-fp#monads-to-the-rescue
 *
 * @typeParam T - the success value type
 * @typeParam E - the failure error type
 */
/**
 * A `PromiseResult` is a convenience type alias that represents either a {@link Result} in the context of asynchronous tasks.
 *
 * @typeParam T - the success value type
 * @typeParam E - the failure error type
 */
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function success() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return new Success(value);
}

/**
 * @internal
 */
var failure = function failure(error) {
  return new Failure(error);
};

/**
 * Ensures the `Result<T, E>` is a `Success<T>`.
 */
function assertSuccess(result) {
  Amount.invariant(result.isSuccess(), 'Expected a success result');
}

/**
 * Ensures the `Result<T, E>` is a `Failure<E>`.
 */
function assertFailure(result) {
  Amount.invariant(result.isFailure(), 'Expected a failure result');
}

function hasAtLeastOne(items) {
  return items.length > 0;
}
function assertNonEmptyArray(items) {
  Amount.invariant(hasAtLeastOne(items), "Expected array of to have at least one item, but received 0 items");
}
function hasJustOne(items) {
  return items.length === 1;
}
function assertJustOne(items) {
  Amount.invariant(hasJustOne(items), 'Expected array of to have exactly one item.');
}
function removeAtIndex(items, index) {
  return items.slice(0, index).concat(items.slice(index + 1));
}
function hasTwoOrMore(items) {
  return items.length >= 2;
}

/**
 * Inspired by https://dev.to/tipsy_dev/advanced-typescript-reinventing-lodash-get-4fhe
 */
function get(data, path, defaultValue) {
  var lodashPath = path.split('.');
  return lodashGet__default["default"](data, lodashPath, defaultValue);
}

function maybe(thunk) {
  try {
    return thunk();
  } catch (_unused) {
    /* empty on purpose */
    return undefined;
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */
function isPrimitive(value) {
  return !isObjectLike__default["default"](value);
}
function omitDeep(target, omitKey) {
  if (isPrimitive(target)) {
    return target;
  }
  if (Array.isArray(target)) {
    return target.map(function (item) {
      return omitDeep(item, omitKey);
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.keys(target).reduce(function (acc, key) {
    if (key === omitKey) {
      return acc;
    }
    var value = omitDeep(target[key], omitKey);
    acc[key] = value;
    return acc;
  }, {});
}

function assertError(error) {
  // why not `error instanceof Error`? see https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1099
  // eslint-disable-next-line no-prototype-builtins
  if (!isObject__default["default"](error) || !Error.prototype.isPrototypeOf(error)) {
    throw error;
  }
}
function assertErrorWithCode(error) {
  // eslint-disable-next-line no-prototype-builtins
  if (!(error instanceof Error && error.hasOwnProperty('code'))) {
    throw error;
  }
}
function assertErrorWithReason(error) {
  // eslint-disable-next-line no-prototype-builtins
  if (!(error instanceof Error && error.hasOwnProperty('reason'))) {
    throw error;
  }
}

/**
 * Exhaustiveness checking for union and enum types
 * see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
 */
function assertNever(x) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Unexpected object: ".concat(String(x));
  throw new Amount.InvariantError(message);
}

var isInEnum = function isInEnum(enumVariables, value) {
  return Object.values(enumVariables).includes(value);
};

function never() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unexpected call to never()';
  throw new Amount.InvariantError(message);
}

/**
 *  Cast a `value` to exclude `null` and `undefined`.
 *  Throws if either `null` or `undefined` was passed
 */
function nonNullable(value, message) {
  if (value !== undefined && value !== null) {
    return value;
  }
  throw new Amount.InvariantError("Non nullable values expected, received ".concat(String(value), " with message: ").concat(message));
}
function isNonNullable(value) {
  return value !== null && value !== undefined;
}

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function () { return isObject__default["default"]; }
});
exports.Amount = Amount.Amount;
exports.BigDecimal = Amount.BigDecimal;
exports.ChainType = Amount.ChainType;
exports.Denomination = Amount.Denomination;
exports.InvariantError = Amount.InvariantError;
exports.Kind = Amount.Kind;
exports.NativeType = Amount.NativeType;
exports.WellKnownSymbols = Amount.WellKnownSymbols;
exports.erc20 = Amount.erc20;
exports.ether = Amount.ether;
exports.fiat = Amount.fiat;
exports.invariant = Amount.invariant;
exports.matic = Amount.matic;
exports.CausedError = CausedError;
exports.DateUtils = DateUtils;
exports.Deferred = Deferred;
exports.assertError = assertError;
exports.assertErrorWithCode = assertErrorWithCode;
exports.assertErrorWithReason = assertErrorWithReason;
exports.assertFailure = assertFailure;
exports.assertJustOne = assertJustOne;
exports.assertNever = assertNever;
exports.assertNonEmptyArray = assertNonEmptyArray;
exports.assertSuccess = assertSuccess;
exports.failure = failure;
exports.get = get;
exports.hasAtLeastOne = hasAtLeastOne;
exports.hasJustOne = hasJustOne;
exports.hasTwoOrMore = hasTwoOrMore;
exports.isInEnum = isInEnum;
exports.isNonNullable = isNonNullable;
exports.maybe = maybe;
exports.never = never;
exports.nonNullable = nonNullable;
exports.omitDeep = omitDeep;
exports.removeAtIndex = removeAtIndex;
exports.success = success;
