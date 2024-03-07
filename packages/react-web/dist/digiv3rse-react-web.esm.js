'use client';
import { BaseProvider } from '@digiv3rse/react';
export * from '@digiv3rse/react';
import { _ as _createClass, a as _classCallCheck, b as _defineProperty, c as _objectSpread2, d as _slicedToArray } from './createClass-2e838422.esm.js';
import { useState } from 'react';
import { maybe, never } from '@digiv3rse/shared-kernel';
import { jsx } from 'react/jsx-runtime';

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

var _ref, _ref2, _ref3, _maybe, _maybe2;
var safeGlobal = (_ref = (_ref2 = (_ref3 = (_maybe = maybe(function () {
  return globalThis;
})) !== null && _maybe !== void 0 ? _maybe : maybe(function () {
  return window;
})) !== null && _ref3 !== void 0 ? _ref3 : maybe(function () {
  return self;
})) !== null && _ref2 !== void 0 ? _ref2 : maybe(function () {
  return global;
})) !== null && _ref !== void 0 ? _ref : never('Cannot resolve a global object.');
var window = (_maybe2 = maybe(function () {
  return safeGlobal.window;
})) !== null && _maybe2 !== void 0 ? _maybe2 : null;

var LocalStorageProvider = /*#__PURE__*/function () {
  function LocalStorageProvider() {
    var _this = this;
    _classCallCheck(this, LocalStorageProvider);
    _defineProperty(this, "subscribers", new Map());
    _defineProperty(this, "onStorageEvent", function (event) {
      if (event.storageArea !== (window === null || window === void 0 ? void 0 : window.localStorage)) {
        return;
      }
      if (event.key && _this.subscribers.has(event.key)) {
        var _this$subscribers$get;
        var subscribers = (_this$subscribers$get = _this.subscribers.get(event.key)) !== null && _this$subscribers$get !== void 0 ? _this$subscribers$get : [];
        subscribers.forEach(function (subscriber) {
          return subscriber(event.newValue, event.oldValue);
        });
      }
    });
  }
  _createClass(LocalStorageProvider, [{
    key: "getItem",
    value: function getItem(key) {
      var _window$localStorage$;
      return (_window$localStorage$ = window === null || window === void 0 ? void 0 : window.localStorage.getItem(key)) !== null && _window$localStorage$ !== void 0 ? _window$localStorage$ : null;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      window === null || window === void 0 || window.localStorage.setItem(key, value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      window === null || window === void 0 || window.localStorage.removeItem(key);
    }
  }, {
    key: "subscribe",
    value: function subscribe(key, subscriber) {
      var _this2 = this;
      if (this.subscribers.has(key)) {
        var _this$subscribers$get2;
        (_this$subscribers$get2 = this.subscribers.get(key)) === null || _this$subscribers$get2 === void 0 || _this$subscribers$get2.push(subscriber);
      } else {
        this.subscribers.set(key, [subscriber]);
      }
      if (this.subscribers.size === 1) {
        this.listenToStorageEvent();
      }
      return {
        unsubscribe: function unsubscribe() {
          var _this2$subscribers$ge;
          var subscribers = (_this2$subscribers$ge = _this2.subscribers.get(key)) !== null && _this2$subscribers$ge !== void 0 ? _this2$subscribers$ge : [];
          var index = subscribers.indexOf(subscriber);
          if (index > -1) {
            subscribers.splice(index, 1);
          }
          if (subscribers.length === 0) {
            _this2.subscribers["delete"](key);
          }
          if (_this2.subscribers.size === 0) {
            _this2.stopListeningToStorageEvent();
          }
        }
      };
    }
  }, {
    key: "listenToStorageEvent",
    value: function listenToStorageEvent() {
      window === null || window === void 0 || window.addEventListener('storage', this.onStorageEvent);
    }
  }, {
    key: "stopListeningToStorageEvent",
    value: function stopListeningToStorageEvent() {
      window === null || window === void 0 || window.removeEventListener('storage', this.onStorageEvent);
    }
  }]);
  return LocalStorageProvider;
}();
function localStorage() {
  return new LocalStorageProvider();
}

var _excluded = ["config"];
var storage = localStorage();

/**
 * Manages the lifecycle and internal state of the DiGi SDK
 *
 * @group Components
 * @param props - {@link DiGiProviderProps}
 *
 * @example
 * ```tsx
 * import { DiGiProvider, staging } from '@digiv3rse/react-web';
 * import { bindings as wagmiBindings } from '@digiv3rse/wagmi';
 *
 * const lensConfig: DiGiConfig = {
 *   bindings: wagmiBindings(),
 *   environment: staging,
 * };
 *
 * function App() {
 *   return (
 *     <DiGiProvider config={lensConfig}>
 *        // ...
 *     </DiGiProvider>
 *   );
 * }
 * ```
 */
function DiGiProvider(_ref) {
  var config = _ref.config,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(function () {
      var _config$storage;
      return _objectSpread2(_objectSpread2({}, config), {}, {
        storage: (_config$storage = config.storage) !== null && _config$storage !== void 0 ? _config$storage : storage
      });
    }),
    _useState2 = _slicedToArray(_useState, 1),
    resolvedConfig = _useState2[0];
  return /*#__PURE__*/jsx(BaseProvider, _objectSpread2({
    config: resolvedConfig
  }, props));
}

export { DiGiProvider, localStorage };
