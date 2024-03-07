'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-api-bindings-mocks.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-api-bindings-mocks.cjs.dev.js");
}
