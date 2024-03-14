describe('Layout section', () => {
    before(() => {
        cy.visit('/pages/layout/stepper');

    });
    it('Checking stepper functionality', () => {

        const containerSelector = 'nb-stepper[orientation="horizontal"]';
        const stepName = `${containerSelector} h3`;
        const prevButton = `${containerSelector} button:contains('prev')`;
        const nextButton = `${containerSelector} button:contains('next')`;
        const steps = ['Step content #1', 'Step content #2', 'Step content #3', 'Step content #4'];
        
        steps.forEach((step, index) => {
            cy.get(stepName).should("have.text", step);
            cy.get(prevButton).should(index === 0 ? "be.disabled" : "be.enabled");
            (index < steps.length - 1) ? cy.get(nextButton).click() : cy.get(nextButton).should("be.disabled");
            // if (index < steps.length - 1) {
            //     cy.get(nextButton).click();
            // } else {
            //     cy.get(nextButton).should("be.disabled");
            // }
        });
    });
});
