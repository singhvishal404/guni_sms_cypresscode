const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporters: ["mochawesome"],

  mochawesome: {
    outputDir: "cypress/reports/html",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require ('cypress-mochawesome-reporter/plugin')(on); // for reports
      screenshotOnRunFailure=true;
    },
  },
});
