import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.navigateTo('/login'); // Use BasePage's navigateTo method
    loginPage.verifyUrlContains('/login'); // Verify URL contains '/login'

    // Load fixture data before each test and make it available in the test scope
    cy.fixture('login').as('loginData');
  });

  it('Should log in with valid credentials', function () {
    // Access data from the fixture
    const { emailaddress, password } = this.loginData.validUser;

    // Use POM method with fixture data
    loginPage.login(emailaddress, password);

    // Add assertions
    loginPage.verifyLoginSuccess();
  });

  it('should display error with invalid credentials', function () {
    // Access data from the fixture
    const { emailaddress, password } = this.loginData.invalidUser;

    // Use POM method with fixture data
    loginPage.login(emailaddress, password);

    // Add assertions
    loginPage.verifyLoginFailure();
  });
});
