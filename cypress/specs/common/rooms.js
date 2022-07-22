Then("I check the rooms page", () => {
    cy.url().should("include", `wixsite.com/intern/rooms`)
    cy.contains("STAY IN THE CITY").should("be.visible")
})