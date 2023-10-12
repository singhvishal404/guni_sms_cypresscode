// const { defineConfig } = require("cypress");
const { signin } = require("../../../Athentication_guni/signin");

describe("SENDERID DEDICATE NUMBER", () => {
  beforeEach(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.title().should(
      "contain",
      "Dashboard | Guni Online and Bulk SMS Gateway"
    );
  });

  it.skip("passes", () => {
    cy.xpath("//span[normalize-space()='Sender IDs']").click();
    cy.xpath("//button[normalize-space()='Add Sender ID']").click();
    cy.xpath("//span[normalize-space()='Dedicated Number']").click();
    cy.xpath("//tbody/tr[1]/td[5]/button[1]").click();
    cy.xpath("//button[normalize-space()='Pay']").click();
    cy.xpath("//input[@placeholder='Card Holder Name']").type("kapil sharma");
    cy.xpath("//input[@value='card_1N41VVDKUIwxxznFg7ji1dSx']").click();
    cy.xpath("//body[1]/div[2]").type("424242424242424242424");
  });
  it("business number request", () => {
    cy.xpath("//span[normalize-space()='Sender IDs']").click();
    cy.xpath("//button[normalize-space()='Add Sender ID']").click();
    cy.xpath("//span[normalize-space()='Business Name']").click();
    cy.xpath("//input[@placeholder='Enter business name']").type("vishal");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//td[@title='vishal']").should("be.visible");
  });
  it("personal number", () => {
    cy.xpath("//span[normalize-space()='Sender IDs']").click();
    cy.xpath("//button[normalize-space()='Add Sender ID']").click();
    cy.xpath("//span[normalize-space()='Personal Number']").click();
    cy.xpath("//input[@placeholder='Enter a personal number']").type(
      "vishal singh"
    );
    cy.xpath("//button[@type='submit']").click();
  });
});
