'use strict';

var asyncToGenerator = require('./asyncToGenerator-ba66657c.cjs.dev.js');
var createClass = require('./createClass-ed62e2bc.cjs.dev.js');

var SponsorshipReady = /*#__PURE__*/function () {
  function SponsorshipReady() {
    createClass._classCallCheck(this, SponsorshipReady);
  }
  createClass._createClass(SponsorshipReady, [{
    key: "execute",
    value: function () {
      var _execute = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(request) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
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

exports.SponsorshipReady = SponsorshipReady;
