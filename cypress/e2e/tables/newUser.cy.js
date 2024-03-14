

describe('New User ', { testIsolation: false }, () => {
    before(() => {
        cy.visit('/pages/tables/smart-table')
    });

    it('Create a new user', () => {
        let createdUser;
        cy.createNewUser().then((user) => {
            createdUser = user;
            cy.log(JSON.stringify(user));
        });
        cy.getSelectorValue('tbody tr:first-child ').then((selectorValue)=>{
            cy.log(JSON.stringify(selectorValue));
            expect(createdUser).to.deep.equal(selectorValue);
        })
    });
    
   
    it('Edit created user', () => {
        let editedUser;
        cy.editCreatedUser().then((user) => {
            editedUser = user;
            cy.log(JSON.stringify(editedUser));
        });
        cy.getSelectorValue('tbody tr:first-child ').then((selectorValue)=>{
            cy.log(JSON.stringify(selectorValue));
            expect(editedUser).to.deep.equal(selectorValue);
        })
    });
});