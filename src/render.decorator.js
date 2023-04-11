/**
 * @param { <T>(data: T) => string } template A function that returns the rendered template as a string
 * @returns {MethodDecorator}
 */
const Render = (template) => {
  return (target, key, descriptor) => {
    Reflect.defineMetadata("__renderTemplate__", template, descriptor.value);
    return descriptor;
  };
};
module.exports = { Render };
