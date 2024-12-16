import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  it('Should log in with valid credentials', () => {
    cy.visit('/login'); // Navigate to the login page
    loginPage.login('instructor@wedevs.com', 'qwertyui'); // Use the POM method to log in

    // Add assertions
    cy.url().should('include', '/dashboard');
  });
});
