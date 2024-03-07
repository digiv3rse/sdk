import DecimalJS from 'decimal.js';

function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
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

function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}

function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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

/**
 * An error that occurs when a task violates a logical condition that is assumed to be true at all times.
 */
var InvariantError = /*#__PURE__*/function (_Error) {
  _inherits(InvariantError, _Error);
  function InvariantError() {
    var _this;
    _classCallCheck(this, InvariantError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, InvariantError, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "name", 'InvariantError');
    return _this;
  }
  return _createClass(InvariantError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Asserts that the given condition is truthy
 *
 * @param condition - Either truthy or falsy value
 * @param message - An error message
 */
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}

/**
 * BigDecimal is a value object representing an high precision decimal number.
 *
 * @sealed
 */
var BigDecimal = /*#__PURE__*/function (_DecimalJS$clone) {
  _inherits(BigDecimal, _DecimalJS$clone);
  function BigDecimal() {
    _classCallCheck(this, BigDecimal);
    return _callSuper(this, BigDecimal, arguments);
  }
  _createClass(BigDecimal, null, [{
    key: "from",
    value:
    /**
     * Syntactic sugar over new BigDecimal
     *
     * @internal
     */
    function from(value) {
      return new BigDecimal(value);
    }

    /**
     * Computes the mean of the given values
     *
     * @internal
     */
  }, {
    key: "mean",
    value: function mean(values) {
      invariant(values.length > 1, '2+ values must be provided');
      return values.reduce(function (total, value) {
        return total.add(value);
      }).div(values.length);
    }

    /**
     * Rescales the given value by the given power of 10
     *
     * @internal
     */
  }, {
    key: "rescale",
    value: function rescale(value, powerOfTen) {
      return value.mul(BigDecimal.pow(10, powerOfTen));
    }
  }]);
  return BigDecimal;
}(DecimalJS.clone({
  precision: 32,
  toExpPos: 18,
  // use fixed-point notation up to 10^+18 (included)
  toExpNeg: -19,
  // use fixed-point notation up to 10^-18 (included)
  rounding: DecimalJS.ROUND_HALF_CEIL
}));

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/**
 * ChainType is an enum that represents the different types of chains that we support.
 *
 * Rather than couple the chain type to the chain id, we use a separate enum to represent the chain type.
 * At runtime, depending on the consumer application, the same chain type may be mapped to different chain ids.
 * For example ChainType.POLYGON may be mapped to chain id 137 (Polygon Mainnet) or 80001 (Polygon Mumbai Testnet).
 *
 * This allows consumers to express logic that is bound to the nature of the chain but not to a specific chain id, so that
 * the same logic can be deployed into a testing, staging or production environment without having to change the code or
 * account for the different chain ids associated with each environment.
 */
var ChainType = /*#__PURE__*/function (ChainType) {
  ChainType["ETHEREUM"] = "ethereum";
  ChainType["POLYGON"] = "polygon";
  return ChainType;
}({});

/** @internal */
var Kind = /*#__PURE__*/function (Kind) {
  Kind[Kind["NATIVE"] = 0] = "NATIVE";
  Kind[Kind["ERC20"] = 1] = "ERC20";
  Kind[Kind["FIAT"] = 2] = "FIAT";
  return Kind;
}({});

/**
 * WellKnownSymbols is a convenience enum for well known asset symbols.
 *
 */
var WellKnownSymbols = /*#__PURE__*/function (WellKnownSymbols) {
  WellKnownSymbols["ETH"] = "ETH";
  WellKnownSymbols["MATIC"] = "MATIC";
  return WellKnownSymbols;
}({});

/** @internal */
var NativeType = /*#__PURE__*/function (NativeType) {
  NativeType[NativeType["ETHER"] = 0] = "ETHER";
  NativeType[NativeType["MATIC"] = 1] = "MATIC";
  return NativeType;
}({});

/**
 * Fiat is a value object representing a fiat currency.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 */
var Fiat = /*#__PURE__*/function () {
  function Fiat(name, symbol) {
    _classCallCheck(this, Fiat);
    /** @internal */
    _defineProperty(this, "kind", Kind.FIAT);
    _defineProperty(this, "decimals", 2);
    this.name = name;
    this.symbol = symbol;
  }

  /** @internal */
  _createClass(Fiat, [{
    key: "hash",
    get: function get() {
      return this.symbol;
    }
  }, {
    key: "isErc20",
    value: function isErc20() {
      return false;
    }
  }, {
    key: "isFiat",
    value: function isFiat() {
      return true;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.symbol;
    }
  }]);
  return Fiat;
}();
/**
 * Ether is a value object representing the Ether token.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 */
var Ether = /*#__PURE__*/function () {
  function Ether() {
    _classCallCheck(this, Ether);
    /** @internal */
    _defineProperty(this, "kind", Kind.NATIVE);
    /** @internal */
    _defineProperty(this, "type", NativeType.ETHER);
    _defineProperty(this, "name", 'Ethereum');
    _defineProperty(this, "decimals", 18);
    _defineProperty(this, "symbol", WellKnownSymbols.ETH);
    _defineProperty(this, "chainType", ChainType.ETHEREUM);
  }
  _createClass(Ether, [{
    key: "hash",
    get: /** @internal */
    function get() {
      return this.type.toString();
    }
  }, {
    key: "isErc20",
    value: function isErc20() {
      return false;
    }
  }, {
    key: "isNativeToken",
    value: function isNativeToken() {
      return true;
    }
  }, {
    key: "isFiat",
    value: function isFiat() {
      return false;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.symbol;
    }
  }]);
  return Ether;
}();
/**
 * Matic is a value object representing the Matic token.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 */
var Matic = /*#__PURE__*/function () {
  function Matic() {
    _classCallCheck(this, Matic);
    /** @internal */
    _defineProperty(this, "kind", Kind.NATIVE);
    /** @internal */
    _defineProperty(this, "type", NativeType.MATIC);
    _defineProperty(this, "name", 'Matic');
    _defineProperty(this, "decimals", 18);
    _defineProperty(this, "symbol", WellKnownSymbols.MATIC);
    _defineProperty(this, "chainType", ChainType.POLYGON);
  }
  _createClass(Matic, [{
    key: "hash",
    get: /** @internal */
    function get() {
      return this.type.toString();
    }
  }, {
    key: "isErc20",
    value: function isErc20() {
      return false;
    }
  }, {
    key: "isNativeToken",
    value: function isNativeToken() {
      return true;
    }
  }, {
    key: "isFiat",
    value: function isFiat() {
      return false;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.symbol;
    }
  }]);
  return Matic;
}();
/**
 * Erc20 is a value object representing an ERC20 token.
 *
 * @sealed
 * @privateRemarks DO NOT EXPORT, see type export later on
 */
var Erc20 = /*#__PURE__*/function () {
  function Erc20(name, decimals, symbol, address, chainType) {
    _classCallCheck(this, Erc20);
    /** @internal */
    _defineProperty(this, "kind", Kind.ERC20);
    this.name = name;
    this.decimals = decimals;
    this.symbol = symbol;
    this.address = address;
    this.chainType = chainType;
  }

  /** @internal */
  _createClass(Erc20, [{
    key: "hash",
    get: function get() {
      return "".concat(this.chainType, ":").concat(this.address);
    }
  }, {
    key: "isErc20",
    value: function isErc20() {
      return true;
    }
  }, {
    key: "isNativeToken",
    value: function isNativeToken() {
      return false;
    }
  }, {
    key: "isFiat",
    value: function isFiat() {
      return false;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.symbol, "[chain: ").concat(this.chainType, "]");
    }
  }]);
  return Erc20;
}(); // Exporting of type only is intentional
/**
 * Asset is a convenience union of value objects representing currency or token.
 *
 * Asset instances are immutable and can be compared using reference equality (`===`).
 *
 */
/**
 * CryptoAsset is a convenience union representing tokens that are native to the supported blockchains.
 *
 * @remarks
 *
 * The reason we make a distinction between CryptoAsset and {@link Asset} is that CryptoAsset are
 * kind of "special" in that they are the only assets that do not have a canonical contract address
 * and they are used to pay for gas fees.
 */
/**
 * CryptoAsset is a convenience union representing currencies that are blockchain tokens.
 *
 */
var instances = new Map();
function immutable(key, asset) {
  if (instances.has(key)) {
    return instances.get(key); // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }
  instances.set(key, asset);
  return asset;
}

/**
 * Initialization object for `erc20` factory function
 *
 */

/**
 * Erc20 asset factory function.
 *
 * Erc20 instances, like all {@link Asset} instances, are immutable and can be compared using reference equality (`===`).
 *
 * @param info - {@link Erc20Info} details
 * @returns An Erc20 asset instance.
 */
function erc20(_ref) {
  var name = _ref.name,
    decimals = _ref.decimals,
    symbol = _ref.symbol,
    address = _ref.address,
    chainType = _ref.chainType;
  var asset = new Erc20(name, decimals, symbol, address, chainType);
  return immutable(asset.hash, asset);
}

/**
 * Matic asset provider function.
 *
 * There is only one Matic token, so this function returns the same instance every time.
 *
 * @returns The Matic instance.
 */
function matic() {
  var asset = new Matic();
  return immutable(asset.hash, asset);
}

/**
 * Ether asset provider function.
 *
 * There is only one Ether token, so this function returns the same instance every time.
 *
 * @returns The Ether instance.
 */
function ether() {
  var asset = new Ether();
  return immutable(asset.hash, asset);
}

/**
 * Initialization object for `fiat` factory function
 */

/**
 * Fiat asset factory function.
 *
 * Fiat instances, like all {@link Asset} instances, are immutable and can be compared using reference equality (`===`).
 *
 * @param info - {@link FiatInfo} details
 * @returns An Fiat asset instance.
 */
function fiat(_ref2) {
  var name = _ref2.name,
    symbol = _ref2.symbol;
  var asset = new Fiat(name, symbol);
  return immutable(asset.hash, asset);
}

var _Symbol$toStringTag;

/**
 * A type alias for a value that can be used to construct an {@link Amount}
 *
 */

/**
 * A set of convenience helpers useful to specify amount values in common denominations.
 *
 */
var Denomination = {
  /**
   * Creates an amount value in gwei (10^-9)
   *
   * @example
   * Define an Ethers {@link Amount} in gwei:
   *
   * ```ts
   * const etherAmount = Amount.ether(
   *   Denomination.gwei(1)
   * )
   * ```
   * @returns a {@link BigDecimal} instance
   */
  gwei: function gwei(value) {
    return BigDecimal.from(value).mul(BigDecimal.pow(10, -9));
  },
  /**
   * Creates an amount value in gwei (10^-18)
   *
   * @example
   * Define an Ethers {@link Amount} in wei:
   *
   * ```ts
   * const etherAmount = Amount.ether(
   *   Denomination.wei(42)
   * )
   * ```
   * @returns a {@link BigDecimal} instance
   */
  wei: function wei(value) {
    return BigDecimal.from(value).mul(BigDecimal.pow(10, -18));
  }
};

/**
 * Amount is a value object representing an amount of given {@link Asset}.
 *
 * @sealed
 * @typeParam T - The {@link Asset} type of the amount.
 * @remarks
 *
 * Amount hides all the complexity of dealing with the specific precision constraints of different assets.
 * It offers a consistent interface to perform arithmetic operations on amounts.
 *
 * Amount is immutable. All arithmetic operations return a new Amount instance.
 */
_Symbol$toStringTag = Symbol.toStringTag;
var Amount = /*#__PURE__*/function () {
  function Amount(asset, value) {
    _classCallCheck(this, Amount);
    this.asset = asset;
    this.value = value;
  }

  /**
   * Creates a new Amount using the `rate: Amount<C>` as conversion factor.
   *
   * The new Amount will have the {@link Asset} of the `rate` parameter.
   *
   * @typeParam C - The {@link Asset} type to convert to.
   * @example
   * Create the Fiat equivalent of an Ether Amount given the ETH-FIAT rate:
   *
   * ```ts
   * const etherAmount = Amount.ether('1'); // Amount<Ether>
   *
   * const fiatAsset = fiat({ name: 'US Dollar', symbol: 'USD' }); // Fiat
   *
   * const rate = Amount.fiat(fiatAsset, '0.0006'); // Amount<Fiat>
   *
   * const fiatAmount = etherAmount.convert(rate); // Amount<Fiat>
   * ```
   */
  _createClass(Amount, [{
    key: "convert",
    value: function convert(rate) {
      return new Amount(rate.asset, this.value.mul(rate.value));
    }

    /**
     * Equality check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is equal to the `amount` parameter.
     */
  }, {
    key: "eq",
    value: function eq(amount) {
      return amount.asset === this.asset && amount.value.eq(this.value);
    }

    /**
     * Greater than check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is greater than the `amount` parameter.
     */
  }, {
    key: "gt",
    value: function gt(amount) {
      invariant(this.asset === amount.asset, "Cannot compare ".concat(this.asset.symbol, " Amount with ").concat(amount.asset.symbol, " Amount"));
      return this.value.gt(amount.value);
    }

    /**
     * Greater than or equal check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is greater than or equal to the `amount` parameter.
     */
  }, {
    key: "gte",
    value: function gte(amount) {
      invariant(this.asset === amount.asset, "Cannot compare ".concat(this.asset.symbol, " Amount with ").concat(amount.asset.symbol, " Amount"));
      return this.value.gte(amount.value);
    }

    /**
     * Less than check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is less than the `amount` parameter.
     */
  }, {
    key: "lt",
    value: function lt(amount) {
      return !this.gte(amount);
    }

    /**
     * Less than or equal check for Amounts of the same {@link Asset}.
     *
     * @returns `true` if this Amount is less than or equal to the `amount` parameter.
     */
  }, {
    key: "lte",
    value: function lte(amount) {
      return !this.gt(amount);
    }

    /**
     * Sum of two Amounts of the same {@link Asset}.
     *
     * @returns a new Amount that is the sum of this Amount and the `amount` parameter.
     */
  }, {
    key: "add",
    value: function add(amount) {
      invariant(this.asset === amount.asset, "Cannot add ".concat(this.asset.symbol, " Amount with ").concat(amount.asset.symbol, " Amount"));
      return new Amount(this.asset, this.value.add(amount.value));
    }

    /**
     * Difference of two Amounts of the same {@link Asset}.
     *
     * @returns a new Amount that is the difference of this Amount and the `amount` parameter.
     */
  }, {
    key: "sub",
    value: function sub(amount) {
      invariant(this.asset === amount.asset, "Cannot subtract ".concat(this.asset.symbol, " Amount with ").concat(amount.asset.symbol, " Amount"));
      return new Amount(this.asset, this.value.sub(amount.value));
    }

    /**
     * Product of an Amount and a scalar factor.
     *
     * @returns a new Amount that is the product of this Amount and the `factor` parameter.
     */
  }, {
    key: "mul",
    value: function mul(factor) {
      return new Amount(this.asset, this.value.mul(factor));
    }

    /**
     * Quotient of an Amount and a scalar divisor.
     *
     * @returns a new Amount that is the quotient of this Amount and the `divisor` parameter.
     */
  }, {
    key: "div",
    value: function div(divisor) {
      return new Amount(this.asset, this.value.div(divisor));
    }

    /**
     * Converts the internal value as {@link BigDecimal} truncated at the {@link Asset} max precision.
     *
     * Use this as your last resource, you should favour the use of Amount arithmetic methods to have a guarantee maximum precision.
     *
     * **Use at your own risk.**
     *
     * @experimental
     */
  }, {
    key: "toBigDecimal",
    value: function toBigDecimal() {
      return this.value.toDecimalPlaces(this.asset.decimals, BigDecimal.ROUND_FLOOR);
    }

    /**
     * Formats the Amount value using fixed-point notation.
     *
     * Optionally you can specify the number of decimals to return.
     *
     * @returns the internal value as `string` truncated at this Amount {@link Asset} max precision.
     */
  }, {
    key: "toFixed",
    value: function toFixed() {
      var decimals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.asset.decimals;
      return this.value.toFixed(decimals);
    }

    /**
     * Formats the Amount value to its maximum precision using a fixed-point notation.
     *
     * Optionally you can specify the number of significant digits to approximate the value to.
     *
     * @returns the internal value as `string` truncated at this Amount {@link Asset} max precision.
     */
  }, {
    key: "toSignificantDigits",
    value: function toSignificantDigits() {
      var significantDigits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.asset.decimals;
      return this.value.toSignificantDigits(significantDigits).toString();
    }

    /**
     * Converts the Amount value as less safe JS `number`.
     *
     * **Use at your own risk.**
     *
     * Type coercion with, for example, JavaScript's unary plus operator will also work.
     *
     * @returns the internal value as `number` that has the potential to lose precision.
     */
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.value.toNumber();
    }

    /**
     * Convenience method to check if the Amount value is zero.
     *
     * @returns `true` if the Amount value is zero.
     */
  }, {
    key: "isZero",
    value: function isZero() {
      return this.value.isZero();
    }

    /**
     * Diagnostic method to inspect the internal value.
     *
     * @returns a string representation of the Amount value and {@link Asset} symbol.
     */
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.toSignificantDigits(6), " ").concat(this.asset.symbol);
    }

    /**
     * Creates an Amount of the same {@link Asset} with the new specified `value`.
     *
     * @returns a new Amount with the same {@link Asset} and the new `value`.
     */
  }, {
    key: "clone",
    value: function clone(value) {
      return Amount.from(this.asset, value);
    }
  }], [{
    key: "from",
    value: function from(asset, value) {
      switch (_typeof(value)) {
        case 'string':
        case 'number':
          return new Amount(asset, new BigDecimal(value));
        default:
          return new Amount(asset, value);
      }
    }

    /**
     *
     *
     * @internal
     */
  }, {
    key: "erc20",
    value:
    /**
     * Creates an Amount of the specified {@link Erc20} with the specified `value`.
     */
    function erc20(asset, value) {
      return this.from(asset, value);
    }

    /**
     * Creates an {@link Ether} Amount with the specified `value`.
     */
  }, {
    key: "ether",
    value: function ether$1(value) {
      return this.from(ether(), value);
    }

    /**
     * Creates an Amount of the specified {@link Fiat} with the specified `value`.
     */
  }, {
    key: "fiat",
    value: function fiat(asset, value) {
      return this.from(asset, value);
    }

    /**
     * Creates an {@link Matic} Amount with the specified `value`.
     */
  }, {
    key: "matic",
    value: function matic$1(value) {
      return this.from(matic(), value);
    }
  }]);
  return Amount;
}();

/**
 * A convenience type to specify a crypto amount.
 *
 */
_defineProperty(Amount, _Symbol$toStringTag, 'Amount');
/**
 * A convenience type to specify a native crypto amount.
 *
 */
/**
 * A convenience type to specify an ERC20 crypto amount.
 *
 */
/**
 * A convenience type to specify a fiat amount.
 *
 */

export { Amount as A, BigDecimal as B, ChainType as C, Denomination as D, InvariantError as I, Kind as K, NativeType as N, WellKnownSymbols as W, _inherits as _, _classCallCheck as a, _callSuper as b, _assertThisInitialized as c, _createClass as d, _wrapNativeSuper as e, erc20 as f, ether as g, fiat as h, invariant as i, matic as m };
