'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-domain-use-cases-wallets.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-domain-use-cases-wallets.cjs.dev.js");
}
