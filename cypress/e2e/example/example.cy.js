describe('First test', () => {
    it ('Check logo', () => {
        const logoSelector = '[href="#"].logo'
        cy.visit('/pages/dashboard')

        cy.get(logoSelector).should('have.text', 'ngx-admin')
    })
})