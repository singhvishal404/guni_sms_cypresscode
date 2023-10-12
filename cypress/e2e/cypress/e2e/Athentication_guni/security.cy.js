const { signin } = require("../../../Athentication_guni/signin");

describe("security", () => {
  it("security", () => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.get("li:nth-child(5) div:nth-child(1) div:nth-child(1)")
      .trigger("Security")
      .click();
    cy.xpath(
      "/html/body/div[2]/div/div/div/div[2]/div/div/div/ul/a[3]/li/span"
    ).click();
    cy.xpath("//input[@placeholder='Enter Old password']").type("vishal@12");
    cy.xpath("//input[@placeholder='Password']").type("vishal@123");
    cy.xpath("//input[@placeholder='Confirm Password']").type("vishal@123");
    cy.xpath("//button[normalize-space()='Submit']").click();
    cy.xpath(
      "//strong[normalize-space()='Password created successfully']"
    ).should("be.visible");
  });
});
