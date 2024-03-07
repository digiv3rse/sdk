'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./digiv3rse-react-native.cjs.prod.js");
} else {
  module.exports = require("./digiv3rse-react-native.cjs.dev.js");
}
