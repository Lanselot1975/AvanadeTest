Feature: Acceptance testing to validate career page

  Opens our website (https://www.avanade.com/) in a web Browser
  Navigate to the “CAREERS” and open “ROLES AND LOCATIONS” to check actual job offers
  Validates that:
  1. There is only 1 page of results for Location: “Canada”
  2. There is at least 1 result for Location “Denmark”


  Background:
    Given I am open "https://www.avanade.com/" website in a web Browser
    When I accept cookies if exist

  Scenario: Validate there is only 1 page of results for Location: “Canada”
    Given I Navigate to the menu "CAREERS"
    When I click on “ROLES AND LOCATIONS” to check actual job offers
    Then I select country "Canada"
    And I check only 1 page of results for Location "Canada"

  Scenario: Validate there is at least 1 result for Location “Denmark”
    Given I Navigate to the menu "CAREERS"
    When I click on “ROLES AND LOCATIONS” to check actual job offers
    Then I select country "Denmark"
    And I check is at least 1 result for Location “Denmark”