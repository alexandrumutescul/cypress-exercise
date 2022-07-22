Then("I check the contact page", () => {
    cy.url().should("include", `wixsite.com/intern/contact`)
    cy.contains("CONTACT US").should("be.visible")
    cy.contains("TALK TO US").should("be.visible")
})