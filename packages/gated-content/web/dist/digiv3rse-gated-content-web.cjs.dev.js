'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var asyncToGenerator = require('../../dist/asyncToGenerator-0615195f.cjs.dev.js');
var constants = require('@lit-protocol/constants');
var crypto$1 = require('@lit-protocol/crypto');
var nodeClient = require('@lit-protocol/node-client');

var WebCryptoCipher = /*#__PURE__*/function () {
  function WebCryptoCipher(cryptoKey) {
    asyncToGenerator._classCallCheck(this, WebCryptoCipher);
    asyncToGenerator._defineProperty(this, "encoder", new TextEncoder());
    asyncToGenerator._defineProperty(this, "decoder", new TextDecoder());
    this.cryptoKey = cryptoKey;
  }
  asyncToGenerator._createClass(WebCryptoCipher, [{
    key: "encrypt",
    value: function () {
      var _encrypt = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(data) {
        var buffer, blob;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              buffer = this.encoder.encode(data);
              _context.next = 3;
              return crypto$1.encryptWithSymmetricKey(this.cryptoKey, buffer);
            case 3:
              blob = _context.sent;
              return _context.abrupt("return", nodeClient.blobToBase64String(blob));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function encrypt(_x) {
        return _encrypt.apply(this, arguments);
      }
      return encrypt;
    }()
  }, {
    key: "decrypt",
    value: function () {
      var _decrypt = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee2(data) {
        var encryptedBlob, decryptedArrayBuffer;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              encryptedBlob = nodeClient.base64StringToBlob(data);
              _context2.next = 3;
              return crypto$1.decryptWithSymmetricKey(encryptedBlob, this.cryptoKey);
            case 3:
              decryptedArrayBuffer = _context2.sent;
              return _context2.abrupt("return", this.decoder.decode(decryptedArrayBuffer));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function decrypt(_x2) {
        return _decrypt.apply(this, arguments);
      }
      return decrypt;
    }()
  }, {
    key: "exportKey",
    value: function () {
      var _exportKey = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee3() {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = Uint8Array;
              _context3.next = 3;
              return crypto.subtle.exportKey('raw', this.cryptoKey);
            case 3:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", new _context3.t0(_context3.t1));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function exportKey() {
        return _exportKey.apply(this, arguments);
      }
      return exportKey;
    }()
  }]);
  return WebCryptoCipher;
}();
var WebCryptoEncryptionProvider = /*#__PURE__*/function () {
  function WebCryptoEncryptionProvider() {
    asyncToGenerator._classCallCheck(this, WebCryptoEncryptionProvider);
  }
  asyncToGenerator._createClass(WebCryptoEncryptionProvider, [{
    key: "createCipher",
    value: function () {
      var _createCipher = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee4() {
        var cryptoKey;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return crypto.subtle.generateKey(constants.SYMM_KEY_ALGO_PARAMS, true, ['encrypt', 'decrypt']);
            case 2:
              cryptoKey = _context4.sent;
              return _context4.abrupt("return", new WebCryptoCipher(cryptoKey));
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function createCipher() {
        return _createCipher.apply(this, arguments);
      }
      return createCipher;
    }()
  }, {
    key: "importCipher",
    value: function () {
      var _importCipher = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee5(key) {
        var cryptoKey;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return crypto.subtle.importKey('raw', key, constants.SYMM_KEY_ALGO_PARAMS, true, ['encrypt', 'decrypt']);
            case 2:
              cryptoKey = _context5.sent;
              return _context5.abrupt("return", new WebCryptoCipher(cryptoKey));
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function importCipher(_x3) {
        return _importCipher.apply(this, arguments);
      }
      return importCipher;
    }()
  }]);
  return WebCryptoEncryptionProvider;
}();

/**
 * Creates a new {@link IEncryptionProvider} instance that uses the Web Crypto API.
 *
 * @see https://nodejs.org/docs/latest-v18.x/api/webcrypto.html
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
 */
function webCryptoProvider() {
  return new WebCryptoEncryptionProvider();
}

exports.webCryptoProvider = webCryptoProvider;
