'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-domain-use-cases-transactions.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-domain-use-cases-transactions.cjs.dev.js");
}
