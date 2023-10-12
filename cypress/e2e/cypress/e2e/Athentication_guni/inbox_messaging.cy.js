// const { defineConfig } = require("cypress");
// const { beforeEach } = require("mocha");
const { signin } = require("../../../Athentication_guni/signin");
// const { eq } = require("cypress/types/lodash");
describe("messaging", () => {
  beforeEach(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath("//span[normalize-space()='Messaging']").click();
    cy.xpath("//li[normalize-space()='Inbox Messaging']").click();
    cy.xpath("//div[@class='ant-col text-end pe-5']").click();
  });
  it.skip("send normal inbox message by using template", () => {
    cy.xpath("//span[normalize-space()='Use Template']").click();
    cy.wait(3000);
    cy.xpath("//div[normalize-space()='Pre-Made']").click();
    cy.xpath(
      "(//td[contains(@title,'testing')][normalize-space()='testing'])[2]"
    ).click();
    cy.xpath("//textarea[@placeholder='Type a message']").type(
      " send normal inbox message"
    );
    cy.xpath("//button[@type='submit']").click();
    // cy.xpath("(//div[@class='chat_userTextCover__IRum_'])[11]").should('contains','test msg send normal inbox message')
  });

  it("send message by add short url", () => {
    cy.xpath("//span[normalize-space()='Add Short URL']").click();
    cy.xpath("//input[@placeholder='Enter URL']").type(
      "https://meet.google.com/?authuser=0"
    );
    cy.xpath("//button[normalize-space()='Add']").click();
    cy.xpath("(//button[normalize-space()='Send'])[1]").click();
  
    
  });
});
