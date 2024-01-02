/// <reference types="cypress" />
require("cypress-xpath")

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe("Test suite reto", () => {

    beforeEach(() => {
        cy.visit('/');
        cy.wait(4000)
    });

    it("Test title home page", () => {
        cy.title().should('eql', 'Compra online en Colombia | carulla.com')
    });

    it("Test search bar", () => {
        cy.xpath("//input[@placeholder='Buscar productos']").type('manzana{enter}')
        cy.wait(5000)
        cy.xpath("//*[contains(text(), '¿Cómo quieres recibir tu pedido?')]").should('be.visible')
    });

})