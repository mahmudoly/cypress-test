const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.klasio.dev", // Set the base URL
    specPattern: "cypress/e2e/**/*.cy.{js,jsx}", // Test files pattern
    setupNodeEvents(on, config) {
      // @ts-ignore
      require("cypress-mochawesome-reporter/plugin")(on); // Ignore TypeScript type checking
    },
    reporter: "cypress-mochawesome-reporter", // Use Mochawesome for reports
    reporterOptions: {
      reportDir: "cypress/reports", // Directory for reports
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
