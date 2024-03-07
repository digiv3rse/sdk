'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-storage.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-storage.cjs.dev.js");
}
