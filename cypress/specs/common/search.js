When("I select check in date {string}", (checkInDate) => {

    cy.get('iframe[title="Wix Hotels"]')
        .then(($iframe) => {
            const $body = $iframe.contents().find('body')

            cy.wrap($body)
                .find('button[aria-label="29, Friday July 2022"]')
                .click()
        })
})