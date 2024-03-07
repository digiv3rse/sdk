'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-domain-mocks.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-domain-mocks.cjs.dev.js");
}
