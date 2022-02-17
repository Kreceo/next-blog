describe('Core Page Checks', () => {
    afterEach(() => {
        Cypress.Cookies.preserveOnce('cookieConsent', 'true');
    });
  
    it('Load the homepage', () => {
      cy.visit(Cypress.env('stag_host'));
      
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

    it('Load the article pages', () => {

        // Find the first news article and click it
        cy.get('.card').first().click();

        cy.get('.news-article').contains('Logged out article');

        // Check Meta Title
        cy.title().should(
            'include',
            '| Global Franchise'
        );
    });

    it('Load the reports page', () => {
        cy.visit(Cypress.env('stag_host') + '/reports');

        // Check Meta Title
        cy.title().should(
            'include',
            'Global Franchise Reports'
        );
    });

    it('Load the master franchise directory page', () => {
        cy.visit(Cypress.env('stag_host') + '/master-franchises');

        // Check h1 Heading
        cy.get('h1').contains('Discover the World’s Best Master Franchise Opportunities');
      
        // Check Meta Title
        cy.title().should(
            'include',
            'Master Franchises'
        );
    });

    it('Load the videos page', () => {
        cy.visit(Cypress.env('stag_host') + '/videos');

          // Check h1 Heading
        cy.get('h1').contains('Master Franchise Videos');

        // Check Meta Title
        cy.title().should(
            'include',
            'Franchise Videos'
        );
    });

    it('Load the podcasts page', () => {
      cy.visit(Cypress.env('stag_host') + '/podcast');

         // Check h1 Heading
        cy.get('h1').contains('Intimate conversations with the most inspiring leaders in franchising.');

        // Check Meta Title
        cy.title().should(
            'include',
            'Listen to the Global Franchise Podcast'
        );
    });
});