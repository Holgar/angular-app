describe('Modal windows', () => {
    before(() => {
        cy.visit('/pages/modal-overlays/dialog')
    });

    it('Check prompt elements', () => {
        const buttonSelector = '.result-from-dialog button'
        const promptContainer= 'ngx-dialog-name-prompt'
        cy.get(buttonSelector).contains('Enter Name').click()
        cy.get(`${promptContainer} nb-card-header`).should('have.text', 'Enter your name')
        cy.get(`${promptContainer} nb-card-body`).find('input[placeholder="Name"]').should('be.visible')
        cy.get(`${promptContainer} nb-card-footer`).find('.cancel').should('be.enabled').and('have.text', 'Cancel')
        cy.get(`${promptContainer} nb-card-footer`).find('.status-success').should('be.enabled').and('have.text', 'Submit')
    });
});