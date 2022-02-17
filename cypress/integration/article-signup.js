describe('Article Signup Check', () => {

    // Manually clear all cookies before running any tests
    before(() => {
      cy.clearCookies();
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
      Cypress.Cookies.preserveOnce('cookieConsent', 'true');
      Cypress.Cookies.preserveOnce("blaize_prev_anon_session")
    });
    
    // Save the local storage & cookie after each test
    afterEach(() => {
      cy.saveLocalStorage();
      Cypress.Cookies.preserveOnce('cookieConsent', 'true');
      Cypress.Cookies.preserveOnce("blaize_prev_anon_session")
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
      
      // Find the first news article and click it
      cy.get('#cookiePolicyButton').click();
    });

    it('Load the article page', () => {
      
      cy.visit(Cypress.env('prod_host') + '/news/duffs-cakemix-lays-plans-for-widespread-north-american-expansion');

      cy.get('#cookiePolicyButton').click();
      
      // Check the tag has logged out article text inside
      cy.get('.news-article').contains('Logged out article');

      // Scroll to activate popup
      cy.scrollTo(0, 700);
      cy.get('#modal-join-small .btn-close').click();

      // Set the local storage value for popup
      cy.setLocalStorage('popup', 'yes');

      // Check Meta Title for article
      cy.title().should(
          'include',
          '| Global Franchise'
      );
    });
    
    it('Fill in and complete join pro signup form', () => {

      // Click the modal trigger
      cy.get('#non-member-article .modal-trigger').click();
      
      // Input for work address
      cy.get('#sign-up-form #email').type('global-testing@aceville.co.uk').should('have.value', 'global-testing@aceville.co.uk');

      // Input for first name
      cy.get('#sign-up-form #first-name').type('Global').should('have.value', 'Global');

      // Input for last name
      cy.get('#sign-up-form #surname').type('Franchise').should('have.value', 'Franchise');

      // Input for company name
      cy.get('#sign-up-form #company').type('Aceville').should('have.value', 'Aceville');

      // Input for job title
      cy.get('#sign-up-form #job-title').type('Global Franchise Admin').should('have.value', 'Global Franchise Admin');

      // Input for password // Pass through dotenv
      cy.get('#sign-up-form #password').type(Cypress.env('pass')).should('have.value', Cypress.env('pass'));

      // Check the T&C Box
      cy.get('#sign-up-form input[type="checkbox"]').check({force: true});
      
      // Click sign up button
      cy.get('#sign-up-button').click();
    });

    it('Form success check', () => {

      cy.wait(3000);

      Cypress.on('uncaught:exception', () => {
          return false
      })

      cy.reload();

      cy.get('#cookiePolicyButton').click();

      // Check the tag for logged in article to confirm your signed in
      cy.get('.news-article').contains('Logged in article');

    });
});