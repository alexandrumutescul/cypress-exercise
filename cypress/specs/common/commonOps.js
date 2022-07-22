Given("I open home page", () => {
    cy.visit("/")
})

When("I open the {string} page", (pageName) => {
    cy.contains(pageName).click()
})