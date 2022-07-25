Feature: Home page

  Scenario: Search
    Given I open home page
    When I select check in date "29, Friday July 2022"
    And I select check out date "29, Monday August 2022"
    And I select 2 adults per room
    And I search for corresponding rooms
    Then I check that search results for available rooms is shown