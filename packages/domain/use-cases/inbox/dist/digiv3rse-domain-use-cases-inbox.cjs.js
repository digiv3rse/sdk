'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-domain-use-cases-inbox.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-domain-use-cases-inbox.cjs.dev.js");
}
