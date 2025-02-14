describe('Homepage', () => {
    it("should have a heading", () => {
        cy.visit("https://beta.gouv.fr/")

        cy.findByRole('heading', { level: 1 })
            .should('be.visible')
    })
    it("should redirect to the search page", () => {
        cy.visit("https://beta.gouv.fr/")

        cy.findByRole('searchbox')
            .type('foo');
        cy.findByRole('button', { name: "Rechercher" })
            .click()

        cy.findByRole('heading', { level: 1 })
            .should('be.visible')
            .should('have.text', 'Résultats')
        cy.findByText(/Aucun résultat pour/)
            .should('be.visible')
            .should('have.text', "Aucun résultat pour « foo »")
    })
});
