const { signin } = require("../../../Athentication_guni/signin");
describe("campaign", () => {
  beforeEach(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);

  })
  it("sms_by_campaign", () => {
    cy.xpath("//span[normalize-space()='Campaign']").click();
    cy.xpath("//button[normalize-space()='Run Campaign']").click();
    cy.log("hello world");
    // cy.xpath("//button[normalize-space()='Create New']").click()
    cy.xpath("//i[@type='button']").click();
    cy.xpath("//input[@placeholder='Campaign Name']").type("testing");
    cy.xpath("(//i[@aria-hidden='true'])[24]").click()
    cy.xpath("//button[@type='submit']").click()
    cy.xpath("//tbody/tr[4]/td[1]").click()
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
  
  
})
})