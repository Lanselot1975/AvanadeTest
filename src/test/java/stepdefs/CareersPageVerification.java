package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.action.AvanadeHomePageActions;
import pages.action.AvanadeCareerPageAction;
import utils.SeleniumDriver;

import java.util.List;


public class CareersPageVerification {
    AvanadeHomePageActions avanadeHomePageActions =  new AvanadeHomePageActions();
    AvanadeCareerPageAction avanadeCareerPageActions = new AvanadeCareerPageAction();

    @Given("^I am open \"([^\"]*)\" website in a web Browser$")
    public void i_am_open_website_in_a_web_Browser(String url) throws Throwable {

        SeleniumDriver.openPage(url);
    }

    @When("^I Navigate to the menu \"([^\"]*)\"$")
    public void i_Navigate_to_the_menu(String text) throws Throwable {
        avanadeHomePageActions.moveToCareersMenu();
    }

    @Then("^I click on “ROLES AND LOCATIONS” to check actual job offers$")
    public void i_click_on_ROLES_AND_LOCATIONS_to_check_actual_job_offers() throws Throwable {

        avanadeHomePageActions.clickOnRolesAndLocations();
    }

    @Given("^I select country \"([^\"]*)\"$")
    public void i_select_country(String country) throws Throwable {
        if(country.equals("Canada")){
            avanadeCareerPageActions.selectCanada();
        }else{
            avanadeCareerPageActions.selectDenmark();
        }
    }


    @When("^I accept cookies if exist$")
    public void iAcceptCookiesIfExist() {

        avanadeHomePageActions.clickOnCoockeies();
    }
}
