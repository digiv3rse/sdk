import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../../../dist/asyncToGenerator-0859ab5c.esm.js';
import { a as _createClass, _ as _classCallCheck } from '../../../dist/createClass-ec354b47.esm.js';

var SignArbitraryMessage = /*#__PURE__*/function () {
  function SignArbitraryMessage(activeWallet, presenter) {
    _classCallCheck(this, SignArbitraryMessage);
    this.activeWallet = activeWallet;
    this.presenter = presenter;
  }
  _createClass(SignArbitraryMessage, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var wallet, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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

export { SignArbitraryMessage };
