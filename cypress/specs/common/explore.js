Then("I check the explore page", () => {
    cy.url().should("include", `wixsite.com/intern/explore`)
    cy.contains("EXPLORE THE HOTEL").should("be.visible")
    cy.contains("EXPLORE THE CITY").should("be.visible")
})