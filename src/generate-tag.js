import { sanitize } from "./sanitize.js";

export const generateTag = (tagName, props, children) => {
  const result = `<${sanitize(tagName)}${
    props ? " " + props : ""
  }>${children}</${sanitize(tagName)}>`;

  if (tagName === "html") {
    return `<!DOCTYPE html>\n${result}`;
  }

  return result;
};
