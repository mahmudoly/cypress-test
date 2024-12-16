# How to use

//to setup the project
install node js and npm
1. install new node js in project directory: npm init -y
2. install cypress: npm install cypress --save-dev


//Open and use cypress:
npx cypress open //For Debugging
npx cypress run //For Reports // --headed to see the browser // --spec to run specific specs if needed.

//So the new run commend is:
npm run cy:open

//To open terminal shortcut: Ctrl+`

//close the cypress test runner: Ctrl + C

//install mochawesome:
Install mochawesome and related plugins: npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
Install cypress-mochawesome-reporter for Cypress: npm install --save-dev cypress-mochawesome-reporter
//Add the reporter configuration to cypress.config.js:
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports", // Directory to store reports
      overwrite: false,
      html: true,
      json: true
    }
  }
});

//Add the reporter to cypress/support/e2e.js: import 'cypress-mochawesome-reporter/register';


//Generate mochawesome report 

npx cypress run //it will run all spec in headless mode

npx cypress run --spec "cypress/e2e/my-test.cy.js" //it will run only specific spec in headless

npx cypress run --headed //it will run all spec in head mode

npx cypress run --spec "cypress/e2e/my-test.cy.js" --headed //it will run only specific spec


//some modifications explanations:
spec pattern defined in config file as: specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Default pattern
open command shortcut written at package.json: "cy:open": "cypress open"
Set Base URL in cypress.config.js:  baseUrl: "https://example.com", // Replace with your targeted base URL