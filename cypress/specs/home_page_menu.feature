Feature: Home page menu

  Scenario: Open explore page
    Given I open home page
    When I open the "EXPLORE" page
    Then I check the explore page
  Scenario: Open rooms page
    Given I open home page
    When I open the "ROOMS" page
    Then I check the rooms page
  Scenario: Open contact page
    Given I open home page
    When I open the "CONTACT" page
    Then I check the contact page
  Scenario: Open book now page
    Given I open home page
    When I open the "BOOK NOW" page
    Then I check the book now page