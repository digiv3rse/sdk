'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-gated-content-environments.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-gated-content-environments.cjs.dev.js");
}
