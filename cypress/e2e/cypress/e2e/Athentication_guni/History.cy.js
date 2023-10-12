const { signin } = require("../../../Athentication_guni/signin");
describe("HISTORY", () => {
  before(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
  });

  it("history SMS", () => {
    cy.xpath("//span[normalize-space()='History']").click();
    cy.xpath("//h4[normalize-space()='SMS']").click();
  });
});
