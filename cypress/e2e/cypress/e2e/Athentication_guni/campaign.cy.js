const { signin } = require("../../../Athentication_guni/signin");
describe("campaign", () => {
  beforeEach(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
  });

  it("sms_by_campaign", () => {
    cy.xpath("//span[normalize-space()='Campaign']").click();
    cy.xpath("//button[normalize-space()='Run Campaign']").click();
    cy.log("hello world");
    // cy.xpath("//button[normalize-space()='Create New']").click()
    cy.xpath("//i[@type='button']").click();
    cy.xpath("//input[@placeholder='Campaign Name']").type("testing");
    cy.wait(4000);
    cy.xpath("(//i[@aria-hidden='true'])[23]").click();
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//td[@title='My Group']").click();
    // check personalise
    // cy.xpath("//span[normalize-space()='Personalize']").click()
    // cy.xpath("//span[normalize-space()='first name']").click()
    // cy.xpath("//span[normalize-space()='last name']").click()
    // cy.xpath("//textarea[@placeholder='Type a message']").should('have.value','{{[first name]}} {{[last name]}} ')
    // // check use of template
    cy.xpath("//span[normalize-space()='Use Template']").click();
    cy.xpath("//td[@title='hii']").click();
    cy.xpath("//textarea[@placeholder='Type a message']").should(
      "have.value",
      "hlo"
    );
    // add short url
    cy.xpath("//span[normalize-space()='Add Short URL']").click();
    cy.xpath("//input[@placeholder='Enter URL']").type(
      "https://www.livechat.com/typing-speed-test/#/"
    );
    cy.xpath("//button[normalize-space()='Add']").click();

    cy.xpath("(//button[@type='submit'][normalize-space()='Next'])[3]").click();
    cy.xpath("//button[normalize-space()='Send Campaign']").click();
    cy.xpath("//button[normalize-space()='Send SMS Campaign']").click();
    cy.xpath(
      "//strong[normalize-space()='SMS Campaign Sent Successfully']"
    ).should("have.text", "SMS Campaign Sent Successfully");
    cy.xpath("//button[normalize-space()='Ok']").click();
    cy.xpath(
      "//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[1]"
    ).should("have.text", "testing");
    cy.xpath("//a[normalize-space()='1']").click();
    cy.wait(3000);
    cy.xpath("//div[@class='ant-table-body']//table[@class='ant-table-fixed']")
      .find("tr").eq(1)
      .first()
      .click();
    cy.xpath(
      "//div[@class='ant-typography text-break ant-typography-ellipsis']"
    ).then(($body) => {
      const message = $body.text();
      function extractShorturl(str) {
        const regex = /t\.tnly\.cc\/\w+/;
        const match = str.match(regex);
        return match ? match[0] : '';
      }
      const url = extractShorturl(message)
      
      cy.visit(url);
    });
  });
  it.skip("add follow up through campaign sms", () => {
    cy.xpath("(//button[@type='submit'][normalize-space()='Next'])[3]").click();
    cy.xpath("//span[normalize-space()='Add Follow Up']").click();
    cy.xpath("//input[@placeholder='Select Time']").click();
    cy.xpath(
      "//div[@class='ant-time-picker-panel-select ant-time-picker-panel-select-active']//li[@role='button'][normalize-space()='09']"
    ).click();
    cy.xpath("//button[normalize-space()='Ok']").click();
    cy.xpath("//button[normalize-space()='Next Step']");
    cy.xpath("//textarea[@name='followUpMessage']").type(
      "testing follow up message"
    );
    cy.xpath("//button[normalize-space()='Add Follow-Up']").click();
    cy.xpath("//strong[normalize-space()='11/07/2023 09:14 AM']").should(
      "be.visible"
    );
    // remove add follow up
    // cy.xpath("//span[normalize-space()='Edit/Remove Follow Up']").click()
    // cy.xpath("//button[normalize-space()='Remove Follow-Up']").click()
    // cy.xpath("//span[normalize-space()='Add Follow Up']").should('be.visible')
  });
  it.skip("time schedule in sms ", () => {
    cy.xpath(
      "//label[@class='border rounded-xl ant-radio-button-wrapper']//div[@class='ant-col ant-col-20']"
    ).click();
    cy.xpath("//input[contains(@placeholder,'Select Time')]").click();
    cy.xpath("//input[contains(@class,'ant-calendar-input')]")
      .clear()
      .type("11/07/2023 12:16 AM");
    cy.xpath(
      "//div[contains(@class,'text-start d-flex flex-wrap gap-2')]//button[contains(@type,'submit')][normalize-space()='Next']"
    ).click();
    cy.xpath("//button[normalize-space()='Send Campaign']").click();
    cy.xpath("//button[normalize-space()='Send SMS Campaign']").click();
    cy.xpath("//strong[normalize-space()='SMS Campaign Schduled']").should(
      "have.text",
      "SMS Campaign Schduled"
    );
    cy.xpath("//button[normalize-space()='Ok']").click();
    cy.xpath("//td[@title='11/07/2023 11:18 AM']").should("be.visible");
  });
 
  });

