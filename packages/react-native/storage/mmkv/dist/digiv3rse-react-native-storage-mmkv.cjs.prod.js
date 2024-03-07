'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNativeMmkv = require('react-native-mmkv');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

var MmkvStorageProvider = /*#__PURE__*/function () {
  function MmkvStorageProvider() {
    _classCallCheck(this, MmkvStorageProvider);
    this.storage = new reactNativeMmkv.MMKV({
      id: 'digi-sdk-storage'
    });
  }
  _createClass(MmkvStorageProvider, [{
    key: "getItem",
    value: function getItem(key) {
      var _this$storage$getStri;
      return (_this$storage$getStri = this.storage.getString(key)) !== null && _this$storage$getStri !== void 0 ? _this$storage$getStri : null;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this.storage.set(key, value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this.storage["delete"](key);
    }
  }]);
  return MmkvStorageProvider;
}();
function storage() {
  return new MmkvStorageProvider();
}

exports.storage = storage;
