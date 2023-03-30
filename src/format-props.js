import { sanitize } from "./sanitize.js";
import { stringify } from "./stringify.js";

export const formatProps = (props) => {
  return (
    props &&
    Object.entries(props)
      .map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}="${stringify(value)}"`;
        }
        return `${key}="${sanitize(stringify(value))}"`;
      })
      .join(" ")
  );
};
