$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchForCareer.feature");
formatter.feature({
  "line": 1,
  "name": "Acceptance testing to validate career page",
  "description": "\nOpens our website (https://www.avanade.com/) in a web Browser\nNavigate to the “CAREERS” and open “ROLES AND LOCATIONS” to check actual job offers\nValidates that:\n1. There is only 1 page of results for Location: “Canada”\n2. There is at least 1 result for Location “Denmark”",
  "id": "acceptance-testing-to-validate-career-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1521730388,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "I am open \"https://www.avanade.com/\" website in a web Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I accept cookies if exist",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.avanade.com/",
      "offset": 11
    }
  ],
  "location": "CareersPageVerification.i_am_open_website_in_a_web_Browser(String)"
});
formatter.result({
  "duration": 3782222219,
  "status": "passed"
});
formatter.match({
  "location": "CareersPageVerification.iAcceptCookiesIfExist()"
});
formatter.result({
  "duration": 222631932,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate there is only 1 page of results for Location: “Canada”",
  "description": "",
  "id": "acceptance-testing-to-validate-career-page;validate-there-is-only-1-page-of-results-for-location:-“canada”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I Navigate to the menu \"CAREERS\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on “ROLES AND LOCATIONS” to check actual job offers",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select country \"Canada\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I check only 1 page of results for Location \"Canada\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CAREERS",
      "offset": 24
    }
  ],
  "location": "CareersPageVerification.i_Navigate_to_the_menu(String)"
});
formatter.result({
  "duration": 201197004,
  "status": "passed"
});
formatter.match({
  "location": "CareersPageVerification.i_click_on_ROLES_AND_LOCATIONS_to_check_actual_job_offers()"
});
formatter.result({
  "duration": 189160322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canada",
      "offset": 18
    }
  ],
  "location": "CareersPageVerification.i_select_country(String)"
});
formatter.result({
  "duration": 10334124563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    },
    {
      "val": "Canada",
      "offset": 45
    }
  ],
  "location": "VerifyResult.i_check_only_page_of_results_for_Location(int,String)"
});
formatter.result({
  "duration": 18231844,
  "error_message": "java.lang.AssertionError: Canada job board has more then one page expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertTrue(Assert.java:42)\n\tat pages.action.AvanadeCareerPageAction.canadaJobPageCountVerification(AvanadeCareerPageAction.java:40)\n\tat stepdefs.VerifyResult.i_check_only_page_of_results_for_Location(VerifyResult.java:14)\n\tat ✽.And I check only 1 page of results for Location \"Canada\"(SearchForCareer.feature:18)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 732706237,
  "status": "passed"
});
formatter.before({
  "duration": 996924472,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "I am open \"https://www.avanade.com/\" website in a web Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I accept cookies if exist",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.avanade.com/",
      "offset": 11
    }
  ],
  "location": "CareersPageVerification.i_am_open_website_in_a_web_Browser(String)"
});
formatter.result({
  "duration": 4102494441,
  "status": "passed"
});
formatter.match({
  "location": "CareersPageVerification.iAcceptCookiesIfExist()"
});
formatter.result({
  "duration": 176895898,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate there is at least 1 result for Location “Denmark”",
  "description": "",
  "id": "acceptance-testing-to-validate-career-page;validate-there-is-at-least-1-result-for-location-“denmark”",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I Navigate to the menu \"CAREERS\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on “ROLES AND LOCATIONS” to check actual job offers",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select country \"Denmark\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I check is at least 1 result for Location “Denmark”",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CAREERS",
      "offset": 24
    }
  ],
  "location": "CareersPageVerification.i_Navigate_to_the_menu(String)"
});
formatter.result({
  "duration": 186544605,
  "status": "passed"
});
formatter.match({
  "location": "CareersPageVerification.i_click_on_ROLES_AND_LOCATIONS_to_check_actual_job_offers()"
});
formatter.result({
  "duration": 191180710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Denmark",
      "offset": 18
    }
  ],
  "location": "CareersPageVerification.i_select_country(String)"
});
formatter.result({
  "duration": 11269576948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "VerifyResult.i_check_is_at_least_result_for_Location_Denmark(int)"
});
formatter.result({
  "duration": 14608526,
  "status": "passed"
});
formatter.after({
  "duration": 123839695,
  "status": "passed"
});
});