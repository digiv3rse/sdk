'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@digiv3rse/react');

/**
 * `<DiGiProvider>` configuration
 */

/**
 * <DiGiProvider> props
 */

/**
 * Manages the lifecycle and internal state of the DiGi SDK
 *
 * @group Components
 * @param props - {@link DiGiProviderProps}
 */
var DiGiProvider = react.BaseProvider;

exports.DiGiProvider = DiGiProvider;
Object.keys(react).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return react[k]; }
  });
});
