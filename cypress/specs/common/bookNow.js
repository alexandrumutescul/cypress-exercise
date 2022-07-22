Then("I check the book now page", () => {
    cy.url().should("include", `wixsite.com/intern/booknow`)
    // // TODO: open bug ticket, after issue is fixed test need to be completed
})