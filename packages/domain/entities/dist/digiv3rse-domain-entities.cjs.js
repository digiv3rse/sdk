'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-domain-entities.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-domain-entities.cjs.dev.js");
}
