package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class AvanadeCareerPageLocators {

//    @FindBy(how= How.XPATH, using="//option[@id='3_56_3_19760']")
    @FindBy(how= How.XPATH, using="//option[text()='Canada']")
    public WebElement selectCanadaPage;

    @FindBy(how= How.XPATH, using="//button[@value='search']")
    public WebElement selectButton;

    @FindBy(how= How.XPATH, using="//option[text()='Denmark']")
    public WebElement selectDenmarkPage;

    @FindAll({
            @FindBy(xpath = "//a[@class='paginationItem paginationLink']")
    })
    public List<WebElement> paginationCount;

    @FindAll({
            @FindBy(xpath = "//div[@class='listTitleContainer']")
    })
    public List<WebElement> listTitleCountCount;
}
