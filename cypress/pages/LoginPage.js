class LoginPage {
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
  }
  
  export default LoginPage;
  