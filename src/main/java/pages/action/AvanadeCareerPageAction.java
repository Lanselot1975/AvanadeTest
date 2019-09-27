package pages.action;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import pages.locators.AvanadeCareerPageLocators;
import pages.locators.AvanadeHomePageLocators;
import utils.SeleniumDriver;

public class AvanadeCareerPageAction {

    AvanadeCareerPageLocators avanadeCareerPageLocators = null;


    public AvanadeCareerPageAction(){
        this.avanadeCareerPageLocators = new AvanadeCareerPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(), avanadeCareerPageLocators);
    }


    public void selectCanada() throws InterruptedException {

       avanadeCareerPageLocators.selectCanadaPage.click();
       avanadeCareerPageLocators.selectButton.click();

       Thread.sleep(5000);
    }

    public void selectDenmark() throws InterruptedException {

        avanadeCareerPageLocators.selectDenmarkPage.click();
        avanadeCareerPageLocators.selectButton.click();

        Thread.sleep(5000);
    }


    public void canadaJobPageCountVerification(){
        int pageCount = avanadeCareerPageLocators.paginationCount.size();
        System.out.println(pageCount);
        Assert.assertTrue(pageCount <= 1, "Canada job board has more then one page");
    }

    public void denmarkJobListVerification(){
        int listJobsCount = avanadeCareerPageLocators.listTitleCountCount.size();
        System.out.println(listJobsCount);
        Assert.assertTrue(listJobsCount > 1, "Denmark job board has 1 or less open jobs,");
    }

}
