/**
 * Middleware that uses lite-jsx to render JSX templates in an Express application.
 *
 * @param {import("express").Request} req - The Express request object.
 * @param {import("express").Response} res - The Express response object.
 * @param {import("express").NextFunction} next - The Express next function.
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
