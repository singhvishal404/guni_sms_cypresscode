const { signin } = require("../../../Athentication_guni/signin");

describe("logout", () => {
  it("go to homepage", () => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath("//img[@alt='menu']")
      .trigger("Logout")
      .click();
    cy.xpath(
      "//body/div/div/div/div/div[@role='tooltip']/div/div/div/ul/li[1]/span[1]"
    ).click();
    cy.xpath("//button[normalize-space()='Log Out']").click();
    cy.title().should("contain", "Sign-In | Guni Online and Bulk SMS Gateway");
  });
});
