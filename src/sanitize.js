/**
 * Sanitizes a string by replacing special HTML characters with their entity names.
 *
 * @param {string} str - The string to be sanitized.
 * @returns {string} The sanitized string.
 */
export const sanitize = (str) => {
  const characters = {
    "&": "amp",
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "apos",
  };
  return String(str).replace(/[&<>"']/g, (s) => `&${characters[s]};`);
};
