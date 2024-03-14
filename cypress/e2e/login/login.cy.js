const { loginData } = require("../helpers/fakeData.js");


describe('Login into an app', () => {
    before(() => {
        cy.visit('/auth/login')
    });
    it('Fill data and login', () => {
        cy.fillLoginData(loginData().userEmail, loginData().userEmail);
        cy.get('[name="rememberMe"] .custom-checkbox').click()
        cy.get('button.appearance-filled').should('not.be.disabled').click()
        cy.url().should('include', '/pages/dashboard');
    });
});