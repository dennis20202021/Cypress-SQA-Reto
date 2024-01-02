/// <reference types="cypress" />
require("cypress-xpath")

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe("Form data", () => {
    beforeEach(() => {
        cy.visit('https://www.carulla.com/manzana?_q=manzana&map=ft');
        cy.wait(4000)
    });

    it("Test form data input", () => {
        cy.get('input[aria-autocomplete="list"]').first().click();
        cy.wait(5000)
        cy.xpath("//*[contains(text(), 'Bogotá')]").click();
        cy.wait(5000)
    });
})