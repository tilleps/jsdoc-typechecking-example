import config from "./config/index.mjs";

import { fullName } from "jsdoc-typescript-example/name";

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


let name = fullName("John", "Doe");

console.log(name);
