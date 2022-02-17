describe('Franchise Enquiry Check', () => {
    
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

    it('Find franchise and enquire', () => {

      // Find the first franchise and click it
      cy.visit(Cypress.env('stag_host') + Cypress.env('franchise'));

      // Check page has company bio
      cy.contains('Company Bio');

      // Input for work email
      cy.get('.enquiry-form .email-address').first().type('global-testing@aceville.co.uk').should('have.value', 'global-testing@aceville.co.uk');

      // Input for phone number
      cy.get('.enquiry-form .number').first().type('012345678910').should('have.value', '012345678910');

      // Input for work address input
      cy.get('.enquiry-form .first-name').first().type('Global').should('have.value', 'Global');

      // Input for last name
      cy.get('.enquiry-form .last-name').first().type('Franchise').should('have.value', 'Franchise');

      // Input for franchise location
      cy.get('.enquiry-form .franchise-location').first().type('Colchester').should('have.value', 'Colchester');

      // Check the T&C Box
      cy.get('.enquiry-form input[type="checkbox"]').first().check({force: true});
      
      // Click submit enquiry
      cy.get('.enquiry-submit').first().click();
      
      // Confirm success based of innerHTML
      cy.get('.success-message').first().contains("Thank you for your enquiry");
    }); 
});