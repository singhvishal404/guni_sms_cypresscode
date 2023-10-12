const { signin } = require("../../../Athentication_guni/signin");

describe("SIGNIN", () => {
  it.skip("sign in with password", () => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.title().should(
      "contain",
      "Dashboard | Guni Online and Bulk SMS Gateway"
    );
  });
  it('sign in with number', () =>{
    cy.visit("https://appt.gunisms.com.au/");
    cy.xpath("//input[@name='contact']").type("405650337");
    cy.xpath("//button[@type='submit']").click();
    cy.wait(2000);
    cy.xpath(
      "//input[@aria-label='Please enter verification code. Digit 1']"
    ).type("5");
    cy.xpath("//input[@aria-label='Digit 2']").type("6");
    cy.xpath("//input[@aria-label='Digit 3']").type("1");
    cy.xpath("//input[@aria-label='Digit 4']").type("4");
    cy.xpath("//input[@aria-label='Digit 5']").type("6");
    cy.xpath("//input[@aria-label='Digit 6']").type("7");
    cy.wait(3000);
    
    cy.title().should(
      "contain",
      "Dashboard | Guni Online and Bulk SMS Gateway"
    );

  })
});
