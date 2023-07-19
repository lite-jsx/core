/**
 * Defines a template to be rendered by the controller method decorated with this decorator.
 *
 * @param { <T>(data: T) => string } template A function that returns the rendered template as a string
 * @returns {MethodDecorator}
 */
function View(template) {
  return (target, key, descriptor) => {
    Reflect.defineMetadata("__renderTemplate__", template, descriptor.value);
    return descriptor;
  };
}
module.exports = { View };
