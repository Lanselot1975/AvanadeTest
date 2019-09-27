package stepdefs;

import cucumber.api.java.en.Then;
import pages.action.AvanadeCareerPageAction;
import utils.SeleniumDriver;

public class VerifyResult {

    AvanadeCareerPageAction avanadeCareerPageActions = new AvanadeCareerPageAction();


    @Then("^I check only (\\d+) page of results for Location \"([^\"]*)\"$")
    public void i_check_only_page_of_results_for_Location(int arg1, String arg2) throws Throwable {
        avanadeCareerPageActions.canadaJobPageCountVerification();
        SeleniumDriver.closePage();
    }

    @Then("^I check is at least (\\d+) result for Location “Denmark”$")
    public void i_check_is_at_least_result_for_Location_Denmark(int arg1) throws Throwable {

        avanadeCareerPageActions.denmarkJobListVerification();
    }
}
