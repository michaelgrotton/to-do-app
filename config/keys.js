if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  console.log("hello");
  module.exports = require("./dev");
}
