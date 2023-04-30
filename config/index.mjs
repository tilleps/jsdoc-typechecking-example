
/**
 * @typedef {object} Config
 * @property {number} port
 */

export const port = (typeof process.env.PORT === "string") ? parseInt(process.env.PORT) : 4000;


/**
 * @type Config
 */
export default {
  port
};