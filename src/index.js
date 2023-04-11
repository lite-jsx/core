const { h } = require("./h");
const { expressMiddleware } = require("./express.middleware");
const { Render } = require("./render.decorator");

module.exports = {
  h,
  __express: expressMiddleware,
  Render,
};
