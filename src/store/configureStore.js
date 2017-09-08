const PRODUCTION = process.env.NODE_ENV === "production";

if (PRODUCTION) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
