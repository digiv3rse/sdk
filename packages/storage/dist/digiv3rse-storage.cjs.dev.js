'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var asyncToGenerator = require('./asyncToGenerator-ba66657c.cjs.dev.js');
var sharedKernel = require('@digiv3rse/shared-kernel');
var zod = require('zod');

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
 * Error thrown when the storage item does not match the validation schema
 */
var SchemaMismatchError = /*#__PURE__*/function (_Error) {
  _inherits(SchemaMismatchError, _Error);
  function SchemaMismatchError(schemaId, errors) {
    var _this;
    _classCallCheck(this, SchemaMismatchError);
    _this = _callSuper(this, SchemaMismatchError, ["Schema mismatch for ".concat(schemaId, " with errors: ").concat(errors)]);
    _defineProperty(_assertThisInitialized(_this), "name", 'SchemaMismatchError');
    return _this;
  }
  return _createClass(SchemaMismatchError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Error thrown when no migration path is found between two versions
 */
var NoMigrationPathError = /*#__PURE__*/function (_Error2) {
  _inherits(NoMigrationPathError, _Error2);
  function NoMigrationPathError(schemaId, fromVersion, toVersion) {
    var _this2;
    _classCallCheck(this, NoMigrationPathError);
    _this2 = _callSuper(this, NoMigrationPathError, ["No migration path for schema ".concat(schemaId, " from version ").concat(fromVersion, " to ").concat(toVersion)]);
    _defineProperty(_assertThisInitialized(_this2), "name", 'NoMigrationPathError');
    return _this2;
  }
  return _createClass(NoMigrationPathError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var storageMetadata = zod.z.object({
  version: zod.z.number()["int"]().positive(),
  createdAt: zod.z.number()["int"]().positive(),
  updatedAt: zod.z.number()["int"]().positive()
}).strict();

/**
 * A storage schema that can be used to migrate data between versions
 */

/**
 * A basic storage schema implementation without migration strategy.
 *
 * Use it directly of as the base class for specific schemas when migrations are required.
 */
var BaseStorageSchema = /*#__PURE__*/function () {
  function BaseStorageSchema(key, schema) {
    _classCallCheck(this, BaseStorageSchema);
    _defineProperty(this, "version", 1);
    this.key = key;
    this.schema = schema;
  }
  _createClass(BaseStorageSchema, [{
    key: "process",
    value: function () {
      var _process = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(storageItemUnknown) {
        var storageItem, data;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              storageItem = this.parseStorageItem(storageItemUnknown);
              data = this.migrate(storageItem);
              return _context.abrupt("return", Promise.resolve({
                data: data,
                metadata: storageItem.metadata
              }));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function process(_x) {
        return _process.apply(this, arguments);
      }
      return process;
    }()
  }, {
    key: "migrate",
    value: function migrate(storageItem) {
      var storageVersion = storageItem.metadata.version;
      if (this.version !== storageVersion) {
        throw new NoMigrationPathError(this.key, storageVersion, this.version);
      }

      // make sure we received correct shape from external storage
      return this.parseData(storageItem.data);
    }
  }, {
    key: "parseStorageItem",
    value: function parseStorageItem(storageItem) {
      try {
        return zod.z.object({
          data: zod.z.unknown(),
          metadata: storageMetadata
        }).strict()
        // force casting required due to the bug in zod
        // https://github.com/colinhacks/zod/issues/493
        .parse(storageItem);
      } catch (error) {
        sharedKernel.assertError(error);
        throw new SchemaMismatchError(this.key, error.message);
      }
    }
  }, {
    key: "parseData",
    value: function parseData(data) {
      try {
        var t = this.schema.parse(data);
        return t;
      } catch (error) {
        sharedKernel.assertError(error);
        throw new SchemaMismatchError(this.key, error.message);
      }
    }
  }]);
  return BaseStorageSchema;
}();

var PersistedCredentialsSchema = zod.z.object({
  refreshToken: zod.z.string()
});
var CredentialsStorageSchema = /*#__PURE__*/function (_BaseStorageSchema) {
  _inherits(CredentialsStorageSchema, _BaseStorageSchema);
  function CredentialsStorageSchema(key) {
    var _this;
    _classCallCheck(this, CredentialsStorageSchema);
    _this = _callSuper(this, CredentialsStorageSchema, [key, PersistedCredentialsSchema]);
    _defineProperty(_assertThisInitialized(_this), "version", 2);
    return _this;
  }
  _createClass(CredentialsStorageSchema, [{
    key: "migrate",
    value: function migrate(storageItem) {
      return this.parseData(storageItem.data);
    }
  }]);
  return CredentialsStorageSchema;
}(BaseStorageSchema);

/**
 * An implementation of `IStorage` with support for migration strategies
 */
var Storage = /*#__PURE__*/function () {
  function Storage(schema, provider) {
    _classCallCheck(this, Storage);
    this.schema = schema;
    this.provider = provider;
  }
  _createClass(Storage, [{
    key: "get",
    value: function () {
      var _get = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee() {
        var _storageItem$data;
        var storageItem;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getWithMetadata();
            case 2:
              storageItem = _context.sent;
              return _context.abrupt("return", (_storageItem$data = storageItem === null || storageItem === void 0 ? void 0 : storageItem.data) !== null && _storageItem$data !== void 0 ? _storageItem$data : null);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function get() {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "reset",
    value: function () {
      var _reset = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee2() {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.provider.removeItem(this.getStorageKey());
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee3(data) {
        var _lastStorageItem$meta;
        var lastStorageItem, metadata, storageItem, json;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.getWithMetadata();
            case 2:
              lastStorageItem = _context3.sent;
              metadata = {
                createdAt: (_lastStorageItem$meta = lastStorageItem === null || lastStorageItem === void 0 ? void 0 : lastStorageItem.metadata.createdAt) !== null && _lastStorageItem$meta !== void 0 ? _lastStorageItem$meta : Date.now(),
                updatedAt: Date.now(),
                version: this.schema.version
              };
              storageItem = {
                data: data,
                metadata: metadata
              };
              json = JSON.stringify(storageItem);
              _context3.next = 8;
              return this.provider.setItem(this.getStorageKey(), json);
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function set(_x) {
        return _set.apply(this, arguments);
      }
      return set;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(subscriber) {
      var _this = this;
      // not all implementations needs to support an observable storage
      if (!('subscribe' in this.provider)) {
        return {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          unsubscribe: function unsubscribe() {}
        };
      }
      return this.provider.subscribe(this.getStorageKey(), /*#__PURE__*/function () {
        var _ref = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee4(newValue, oldValue) {
          var newItem, oldItem;
          return asyncToGenerator._regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!newValue) {
                  _context4.next = 6;
                  break;
                }
                _context4.next = 3;
                return _this.parse(newValue);
              case 3:
                _context4.t0 = _context4.sent;
                _context4.next = 7;
                break;
              case 6:
                _context4.t0 = {
                  data: null
                };
              case 7:
                newItem = _context4.t0;
                if (!oldValue) {
                  _context4.next = 14;
                  break;
                }
                _context4.next = 11;
                return _this.parse(oldValue);
              case 11:
                _context4.t1 = _context4.sent;
                _context4.next = 15;
                break;
              case 14:
                _context4.t1 = {
                  data: null
                };
              case 15:
                oldItem = _context4.t1;
                subscriber(newItem.data, oldItem.data);
              case 17:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "getWithMetadata",
    value: function () {
      var _getWithMetadata = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee5() {
        var json;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.provider.getItem(this.getStorageKey());
            case 2:
              json = _context5.sent;
              if (json) {
                _context5.next = 5;
                break;
              }
              return _context5.abrupt("return", null);
            case 5:
              return _context5.abrupt("return", this.parse(json));
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getWithMetadata() {
        return _getWithMetadata.apply(this, arguments);
      }
      return getWithMetadata;
    }()
  }, {
    key: "parse",
    value: function () {
      var _parse = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee6(json) {
        var item;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              item = JSON.parse(json);
              return _context6.abrupt("return", this.schema.process(item));
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function parse(_x4) {
        return _parse.apply(this, arguments);
      }
      return parse;
    }()
  }, {
    key: "getStorageKey",
    value: function getStorageKey() {
      return this.schema.key;
    }
  }], [{
    key: "createForSchema",
    value: function createForSchema(schema, provider) {
      return new Storage(schema, provider);
    }
  }]);
  return Storage;
}();

var InMemoryStorageProvider = /*#__PURE__*/function () {
  function InMemoryStorageProvider() {
    _classCallCheck(this, InMemoryStorageProvider);
    this.store = new Map();
  }
  _createClass(InMemoryStorageProvider, [{
    key: "getItem",
    value: function getItem(key) {
      var _this$store$get;
      return (_this$store$get = this.store.get(key)) !== null && _this$store$get !== void 0 ? _this$store$get : null;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this.store.set(key, value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this.store["delete"](key);
    }
  }]);
  return InMemoryStorageProvider;
}();

exports.BaseStorageSchema = BaseStorageSchema;
exports.CredentialsStorageSchema = CredentialsStorageSchema;
exports.InMemoryStorageProvider = InMemoryStorageProvider;
exports.NoMigrationPathError = NoMigrationPathError;
exports.SchemaMismatchError = SchemaMismatchError;
exports.Storage = Storage;
