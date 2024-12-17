class BasePage {
    navigateTo(url) {
      cy.visit(url);
    }
    verifyUrlContains(path) {
      cy.url().should('include', path);
    }
  }
  
  export default BasePage;
  