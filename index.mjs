import config from "./config/index.mjs";


/**
 * @typedef {import("./config/index.mjs").default} Config
 */


/**
 *
 * @param {Config} config
 */
function doSomethingWithConfig(config) {
  console.log(config.port);
}

