'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-gated-content-web.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-gated-content-web.cjs.dev.js");
}
