'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-domain-use-cases-profile.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-domain-use-cases-profile.cjs.dev.js");
}
