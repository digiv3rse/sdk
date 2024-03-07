'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-shared-kernel.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-shared-kernel.cjs.dev.js");
}
