/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const browserify = require("@cypress/browserify-preprocessor");
const wp = require("@cypress/webpack-preprocessor");
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../webpack.config.js")
  };
  require("@cypress/code-coverage/task")(on, config);
  on(
    "file:preprocessor",
    wp(options),
    browserify({
      typescript: require.resolve("typescript"),
      browserifyOptions: {
        extensions: [".js", ".ts"],
        plugin: [["tsify"]]
      }
    }),
    require("@cypress/code-coverage/use-browserify-istanbul")
  );
  return config;
};
