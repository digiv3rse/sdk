'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-blockchain-bindings-mocks.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-blockchain-bindings-mocks.cjs.dev.js");
}
