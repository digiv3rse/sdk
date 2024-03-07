'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-blockchain-bindings.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-blockchain-bindings.cjs.dev.js");
}
