# cypress-test

project-root/
├── cypress/
│   ├── e2e/                      # Contains test files
│   │   ├── login.cy.js           # Example Login test
│   │   ├── dashboard.cy.js       # Example Dashboard test
│   │   └── common.cy.js          # Tests that span multiple pages
│   ├── pages/                    # Page Object Models
│   │   ├── LoginPage.js          # POM for the login page
│   │   ├── DashboardPage.js      # POM for the dashboard page
│   │   └── BasePage.js           # Base page for shared methods
│   ├── fixtures/                 # Test data or mock responses
│   │   ├── login.json            # Example mock data for login
│   │   └── userProfiles.json     # Example mock data for users
│   ├── support/                  # Support files and helpers
│   │   ├── commands.js           # Custom Cypress commands
│   │   ├── e2e.js                # Runs before tests; hooks and reporters
│   │   └── utils/                # Utility helpers (e.g., for API calls)
│   │       ├── apiUtils.js       # Helpers for interacting with APIs
│   │       └── fileUtils.js      # Helpers for file uploads/downloads
│   ├── reports/                  # Test reports (auto-generated)
│   │   ├── mochawesome-report/   # Folder for Mochawesome reports
│   │   └── screenshots/          # Screenshots on test failures
│   └── videos/                   # Test execution videos
├── node_modules/                 # Node.js dependencies (auto-generated)
├── .gitignore                    # Ignore unnecessary files in Git
├── cypress.config.js             # Cypress configuration
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Dependency lock file
├── README.md                     # Project documentation
└── test-output/                  # Merged reports or archives
    └── merged-report.html        # Merged report (for CI/CD)
