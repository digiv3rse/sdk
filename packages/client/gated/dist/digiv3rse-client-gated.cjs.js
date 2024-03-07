'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-client-gated.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-client-gated.cjs.dev.js");
}
