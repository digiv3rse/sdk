'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-wagmi.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-wagmi.cjs.dev.js");
}
