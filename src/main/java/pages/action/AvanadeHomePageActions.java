package pages.action;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import pages.locators.AvanadeCareerPageLocators;
import pages.locators.AvanadeHomePageLocators;
import utils.SeleniumDriver;

import javax.swing.*;

public class AvanadeHomePageActions {
    AvanadeHomePageLocators avanadeHomePageLocators = null;


    public AvanadeHomePageActions(){
        this.avanadeHomePageLocators = new AvanadeHomePageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(), avanadeHomePageLocators);
    }

    public void moveToCareersMenu(){
        Actions action = new Actions(SeleniumDriver.getDriver());
        action.moveToElement(avanadeHomePageLocators.careersLink).perform();
    }

    public void clickOnRolesAndLocations(){
        avanadeHomePageLocators.roleAndLocationsLink.click();
    }
    public void clickOnCanada(){
        avanadeHomePageLocators.canadaLink.click();
    }
    public void clickOnDenmark(){avanadeHomePageLocators.denmarkLink.click();}

    public void clickOnCoockeies(){
        if(avanadeHomePageLocators.acceptCoockiesButton.isDisplayed()){
            avanadeHomePageLocators.acceptCoockiesButton.click();
        }
    }


}
