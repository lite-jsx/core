import { sanitize } from "./sanitize.js";
import { stringify } from "./stringify.js";

/**
 * Formats a props object as a string of HTML attributes.
 * @param {Record<string, unknown>} props - The props object.
 * @returns {string} A string of HTML attributes.
 */
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
