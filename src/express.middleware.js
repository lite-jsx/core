/**
 * Middleware that uses lite-jsx to render JSX templates in an Express application.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express next function.
 *
 * @example
 *
 * const express = require("express");
 * const app = express();
 * const liteJsx = require("lite-jsx");
 * const ShowMessage = require("./show-message");
 *
 * // Use the middleware to enable lite-jsx rendering in the Express app.
 * app.use(liteJsx.__express);
 *
 * app.get("/", (req, res) => {
 *   const data = { message: "Hello, World!" };
 *   res.render(ShowMessage, data);
 * });
 *
 * app.listen(3000, () => {
 *   console.log("Example app listening on port 3000!");
 * });
 *
 * @returns {void}
 */
const expressMiddleware = (req, res, next) => {
  // Bind the original render function to a variable.
  const oldRender = res.render.bind(res);

  // Override the render function to add support for JSX templates.
  res.render = function (template, data) {
    // If the template is a string, call the original render function.
    if (typeof template === "string") {
      return oldRender(template, data);
    }
    try {
      // Otherwise, render the JSX template using lite-jsx.
      const html = "<!DOCTYPE html>" + template(data);
      return res.send(html);
    } catch (err) {
      // If there is an error, pass it to the Express error handler.
      this.req.next(err);
    }
  }.bind(res);

  // Call the next middleware in the chain.
  next();
};

module.exports = { expressMiddleware };
