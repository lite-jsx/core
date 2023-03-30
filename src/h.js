import { stringify } from "./stringify.js";

const sanitize = (str) => {
  const characters = {
    "&": "amp",
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "apos",
  };
  return String(str).replace(/[&<>"']/g, (s) => `&${characters[s]};`);
};

export const h = (tagName, props, ...children) => {
  if (!tagName || tagName === null) {
    return children.join("\n");
  }

  if (typeof tagName === "function") {
    return tagName({ ...props, children });
  }

  const stringifiedChildren = children.map(stringify).join("\n");
  let stringifiedProps = "";
  if (props) {
    stringifiedProps = Object.entries(props)
      .map(([key, value]) => {
        if (value && typeof value === "function") {
          return `${key}="${value.toString()}"`;
        }
        return `${key}="${sanitize(value)}"`;
      })
      .join(" ");
  }

  const result = `<${sanitize(tagName)}${
    stringifiedProps ? " " + stringifiedProps : ""
  }>${stringifiedChildren}</${sanitize(tagName)}>`;

  if (tagName === "html") {
    return `<!DOCTYPE html>${result}`;
  }

  return result;
};
