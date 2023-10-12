const { signin } = require("../../../Athentication_guni/signin");
describe("optout link", () => {
  before(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
  });

  it("opt-out link", () => {
    cy.xpath("//span[normalize-space()='History']").click();
    cy.xpath("//h4[normalize-space()='SMS']").click();
    // cy.xpath("(//span[contains(text(),'testing st.')])[3]")
    cy.xpath("//tbody/tr[1]/td[4]/span[1]").click()
    cy.xpath("//div[@class='ant-typography text-break ant-typography-ellipsis']")
      .invoke("text")
      .then((text) => {
        const lastSixCharacters = text.slice(-6);
        cy.log("Last six characters:", lastSixCharacters);
        cy.visit(`appt.gunisms.com.au/optout/${lastSixCharacters}`).then(() => {
          cy.get("input").invoke("val", lastSixCharacters);
          cy.wait(5000);
        });
      });
      cy.xpath("//input[@name='number']").clear().type('402599635')
      cy.xpath("//input[@name='sender']").clear().type('vishal')
      cy.xpath("//input[@name='reason']").clear().type('testing')
      cy.xpath("//input[@value='this']").click()
      cy.xpath("//button[@type='submit']").click()
      cy.get(':nth-child(2) > .ant-typography').should('be.visible')

  });
});
