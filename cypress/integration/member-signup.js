describe('Join Pro Signup Check', () => {

    // Manually clear all cookies before running any tests
    before(() => {
      cy.clearCookies();
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
    });
    
    // Save the local storage & cookie after each test
    afterEach(() => {
      cy.saveLocalStorage();
      Cypress.Cookies.preserveOnce('cookieConsent', 'true');
    });

    it('Load the homepage', () => {
      cy.visit(Cypress.env('prod_host'));
      
      // Check h1 Heading
      cy.get('h1').contains('Global Franchise');
  
      // Check Meta Title
      cy.title().should(
        'include',
        'Global Franchise | The source for master franchising'
      );
    });

    it('Accepts cookie policy', () => {
      cy.get('#cookiePolicyButton').click();
    });

    it('Load the join pro page', () => {
      
      // Click the join pro button in the header menu
      cy.get('.btn--join-pro').first().click();

      // Check Page Heading
      cy.get('h1').contains('Join Global Franchise Pro.');
  
      // Check Meta Title
      cy.title().should(
        'include',
        'Join Global Franchise Pro'
      );
    });
    
    it('Sign up form check', () => {

      cy.get('#cookiePolicyButton').click();

      // Input for work email
      cy.get('#sign-up-form #email').type('global-testing@aceville.co.uk').should('have.value', 'global-testing@aceville.co.uk');

      // Input for first name
      cy.get('#sign-up-form #first-name').type('Global').should('have.value', 'Global');

      // Input for last name
      cy.get('#sign-up-form #surname').type('Franchise').should('have.value', 'Franchise');

      // Input for company name
      cy.get('#sign-up-form #company').type('Aceville').should('have.value', 'Aceville');

      // Input for job title
      cy.get('#sign-up-form #job-title').type('Global Franchise Admin').should('have.value', 'Global Franchise Admin');

      // Input for password // Put the password into dotenv
      cy.get('#sign-up-form #password').type(Cypress.env('pass')).should('have.value', Cypress.env('pass'));

      // Check the T&C Box
      cy.get('#sign-up-form input[type="checkbox"]').check({force: true});
      
      // Click the sign up button
      cy.get('#sign-up-button').click();
      
      // This cookie checks if signed in
      cy.getCookie('blaize_prev_anon_session');
      
    });

    it('Form success check', () => {

      // Check h1 Heading
      cy.get('h1').contains('Global Franchise');
  
      // Check Meta Title -- As you will be returned to the homepage
      cy.title().should(
        'include',
        'Global Franchise | The source for master franchising'
      );
    });
});