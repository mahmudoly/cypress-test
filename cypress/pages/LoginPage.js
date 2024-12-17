import BasePage from "./BasePage";

class LoginPage extends BasePage{
    // Locators
    getEmailAddressField() {
      return cy.get('#email'); //locate by id
    }
  
    getPasswordField() {
      return cy.get('#password'); //locate by id
    }
  
    getLoginButton() {
      return cy.get('[type="submit"]'); //locate by element type or attribute
    }
  
    // Methods
    enterEmail(email) {
      this.getEmailAddressField().type(email);
    }
  
    enterPassword(password) {
      this.getPasswordField().type(password);
    }
  
    clickLogin() {
      this.getLoginButton().click();
    }
  
    login(email, password) {
      this.enterEmail(email);
      this.enterPassword(password);
      this.clickLogin();
    }

    verifyLoginSuccess() {
      cy.url().should('include', '/dashboard');
    }
  
    verifyLoginFailure() {
      cy.get('.text-sm.text-red-600.mt-2') // Target the element using the class selector
        .should('be.visible') // Check if the error message is visible
        .and('contain.text', 'These credentials do not match our records.'); // Validate the text content
    }
    
  }
  
  export default LoginPage;
  