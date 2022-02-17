describe('Newsletter Signup Check', () => {

    // Manually clear all cookies before running any tests
    before(() => {
      cy.clearCookies();
    });
    
    // Manually clear all cookies before running any tests
    beforeEach(() => {
      cy.restoreLocalStorage();
    });
    
    // Save the local storage & cookie after each test
    afterEach(() => {
      cy.saveLocalStorage();
      Cypress.Cookies.preserveOnce('cookieConsent', 'true');
    });

    it('Load the homepage', () => {
      cy.visit(Cypress.env('stag_host'));
      
      // Check Page Heading
      cy.get('h1').contains('Global Franchise');
  
      // Check Meta Title
      cy.title().should(
        'include',
        'Global Franchise | The source for master franchising'
      );
    });
    
    it('Accepts cookie policy', () => {
      // Click the cookie policy
      cy.get('#cookiePolicyButton').click();

    });

    it('Load the first franchise', () => {
      // Find the first franchise and click it
      cy.get('.company').first().click();

      // Check page content
      cy.contains('Company Bio');

      // Input email address
      cy.get('.newsletter .email').first().type('global-testing@aceville.co.uk', {force: true}).should('have.value', 'global-testing@aceville.co.uk');
      
      // Check the T&C Box
      cy.get('.newsletter input[type="checkbox"]').first().check({force: true});

      // Click the newsletter submit button
      cy.get('.newsletter button').first().click({force: true});

      // Wait 3 seconds to ensure the JS has run
      cy.wait(3000);

      // Confirm success based of innerHTML
      cy.get('.newsletter').contains('Thank you for signing up!');
    });
});