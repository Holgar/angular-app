/// <reference types="cypress" />
const { createRandomUser, loginData } = require("../e2e/helpers/fakeData.js");

const userTableSelectors = {
    Id: 'input-editor [placeholder="ID"]',
    firstName: 'input-editor [placeholder="First Name"]',
    lastName: 'input-editor [placeholder="Last Name"]',
    userName: 'input-editor [placeholder="Username"]',
    eMail: 'input-editor [placeholder="E-mail"]',
    age: 'input-editor [placeholder="Age"]'
};

function typeUserData(user) {
    for (const key in userTableSelectors) {
        cy.get(userTableSelectors[key]).type(user[key]);
    }
}

function clearAndTypeUserData(user) {
    for (const key in userTableSelectors) {
        cy.get(userTableSelectors[key]).clear().type(user[key]);
    }
}

Cypress.Commands.add('createNewUser', () => {
    let randomUser = createRandomUser();
    cy.get('.ng2-smart-filters .ng2-smart-action-add-add').click();
    typeUserData(randomUser);
    cy.get('.nb-checkmark').click();
    randomUser = Object.values(randomUser).join('');
    return cy.wrap(randomUser);

});

Cypress.Commands.add('editCreatedUser', () => {
    let newRandowUser = createRandomUser();
    cy.get('tbody tr:first-child .nb-edit').click();
    clearAndTypeUserData(newRandowUser);
    cy.get('.nb-checkmark').click();
    newRandowUser = Object.values(newRandowUser).join('');
    return cy.wrap(newRandowUser);
});

Cypress.Commands.add('getSelectorValue', (selector) => {
    cy.get(selector).invoke('text').then((text) => {
        const selectorValue = text;
        return cy.wrap(selectorValue);
    });
});

Cypress.Commands.add('fillLoginData', (username, password) => {
    cy.get('input[name="email"]').type(username)
    cy.get('input[name="password"]').type(password)
  })
 