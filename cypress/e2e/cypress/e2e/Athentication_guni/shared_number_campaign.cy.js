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
  })
})