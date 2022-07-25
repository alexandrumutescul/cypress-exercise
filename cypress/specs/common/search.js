const getIframeDom = iframeCssSelector =>
  cy
    .get(iframeCssSelector, { timeout: 10000 })
    .should($iframe => {
      expect($iframe).to.have.lengthOf(1);
      expect($iframe[0].contentDocument.body).to.not.be.empty;
    })
    .its('0.contentDocument.body')
    .then(cy.wrap);

When("I select check in date {string}", (checkInDate) => {
      getIframeDom('iframe[title="Wix Hotels"]')
        .find('#check-in')
        .click();
      cy.wait(2000)
  getIframeDom('iframe[title*="tpapopup"]').find(`button[aria-label="${checkInDate}"]`)
    .click()
});

And("I select check out date {string}", (checkOutDate) => {
  getIframeDom('iframe[title="Wix Hotels"]')
    .find('#check-out')
    .click();
  cy.wait(2000)

  getIframeDom('iframe[title*="tpapopup"]').find('button[aria-label="29, Monday August 2022"]')
    .click()
  cy.wait(2000)
})

And("I select 2 adults per room", () => {
  getIframeDom('iframe[title="Wix Hotels"]')
    .find('a[aria-label="Increment"]').eq(0)
    .click();
  cy.wait(2000)
})

And("I search for corresponding rooms", () => {
  getIframeDom('iframe[title="Wix Hotels"]')
    .find('button[wix-bi="SEARCH"]')
    .click();
  cy.wait(2000)
})

let checkThatRoomTypeIsDisplayed = (index, roomType) => {
  getIframeDom('iframe[title="Book a Room"]')
    .find('li[ng-repeat*="room in rooms"]')
    .eq(index)
    .find('[wix-bi="ROOM_DETAILS"]')
    .find("span")
    .then($text => {
      expect($text.text()).to.contain(roomType)
    })
}

Then("I check that search results for available rooms is shown", () => {
  checkThatRoomTypeIsDisplayed(0, "Standard Suite")
  checkThatRoomTypeIsDisplayed(1, "Cottage")
  checkThatRoomTypeIsDisplayed(2, "Classic App")
})