'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var asyncToGenerator = require('../../dist/asyncToGenerator-ba66657c.cjs.dev.js');

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function mockStorageProvider() {
  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var internalStorage = initial;
  return {
    getItem: jest.fn( /*#__PURE__*/asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee() {
      return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", internalStorage);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))),
    setItem: jest.fn( /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee2(data) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              internalStorage = data;
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()),
    removeItem: jest.fn( /*#__PURE__*/asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee3() {
      return asyncToGenerator._regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            internalStorage = null;
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))),
    subscribe: jest.fn(function () {
      return {
        unsubscribe: function unsubscribe() {}
      };
    })
  };
}

// Simulates actual serialization/deserialization.
// Otherwise it might keep references to the actual original objects and it might trick
// consumer tests to think they are deserializing correctly (i.e. it might let them thing they
// are recreating the correct object with appropriate prototype chains while they don't).
function mockStorageRoundTrip(data) {
  return JSON.parse(JSON.stringify(data));
}
function mockStorage() {
  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var internalStorage = mockStorageRoundTrip(initial);
  return {
    get: jest.fn( /*#__PURE__*/asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee4() {
      return asyncToGenerator._regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", internalStorage);
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))),
    set: jest.fn( /*#__PURE__*/function () {
      var _ref5 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee5(data) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              internalStorage = JSON.parse(JSON.stringify(data));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }()),
    reset: jest.fn( /*#__PURE__*/asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee6() {
      return asyncToGenerator._regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            internalStorage = null;
          case 1:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))),
    subscribe: jest.fn(function () {
      return {
        unsubscribe: function unsubscribe() {}
      };
    }),
    simulateUpdate: function simulateUpdate(newData, oldData) {
      jest.mocked(this.subscribe).mock.calls.forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
          subscriber = _ref8[0];
        return subscriber(newData, oldData);
      });
    }
  };
}

exports.mockStorage = mockStorage;
exports.mockStorageProvider = mockStorageProvider;
