import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator-0859ab5c.esm.js';
import { a as _createClass, _ as _classCallCheck } from './createClass-ec354b47.esm.js';

var SponsorshipReady = /*#__PURE__*/function () {
  function SponsorshipReady() {
    _classCallCheck(this, SponsorshipReady);
  }
  _createClass(SponsorshipReady, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!request.sponsored) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", this.sponsored(request));
            case 2:
              return _context.abrupt("return", this.charged(request));
            case 3:
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
  return SponsorshipReady;
}();

export { SponsorshipReady as S };
