'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var asyncToGenerator = require('../../../dist/asyncToGenerator-3551d940.cjs.prod.js');
var createClass = require('../../../dist/createClass-a52f56fd.cjs.prod.js');

var SignArbitraryMessage = /*#__PURE__*/function () {
  function SignArbitraryMessage(activeWallet, presenter) {
    createClass._classCallCheck(this, SignArbitraryMessage);
    this.activeWallet = activeWallet;
    this.presenter = presenter;
  }
  createClass._createClass(SignArbitraryMessage, [{
    key: "execute",
    value: function () {
      var _execute = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        var wallet, result;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.activeWallet.requireActiveWallet();
            case 2:
              wallet = _context.sent;
              _context.next = 5;
              return wallet.signMessage(request);
            case 5:
              result = _context.sent;
              this.presenter.present(result);
            case 7:
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
  return SignArbitraryMessage;
}();

exports.SignArbitraryMessage = SignArbitraryMessage;
