const { h } = require("./h");
const { expressMiddleware } = require("./express.middleware");

module.exports = {
  h,
  __express: expressMiddleware,
};
