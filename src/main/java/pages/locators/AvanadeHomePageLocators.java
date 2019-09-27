package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AvanadeHomePageLocators {
    @FindBy(how= How.LINK_TEXT, using="CAREERS")
    public WebElement careersLink;

    @FindBy(how= How.LINK_TEXT, using="Roles and Locations")
    public WebElement roleAndLocationsLink;

    @FindBy(how= How.LINK_TEXT, using="Canada")
    public WebElement canadaLink;

    @FindBy(how= How.LINK_TEXT, using="Denmark")
    public WebElement denmarkLink;

    @FindBy(how= How.XPATH, using="//*[@title='Accept Cookies']")
    public WebElement acceptCoockiesButton;




}
