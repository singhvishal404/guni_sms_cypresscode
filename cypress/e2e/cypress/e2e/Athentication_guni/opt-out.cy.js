const { signin } = require("../../../Athentication_guni/signin");
describe("OPT-OUT", () => {
  beforeEach(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath("//span[normalize-space()='Audience']").click();
    cy.xpath("//li[normalize-space()='Opt-Out']").click();
  });

  it.skip("opt-out= Add single contact", () => {
    cy.xpath("//button[normalize-space()='Block Contacts']").click();
    cy.xpath("//button[normalize-space()='Add Single Contact']").click();
    cy.xpath("//input[@placeholder='Enter Number']").type("405650337");
    cy.xpath("//input[@placeholder='Enter Name']").type("kapil");
    cy.xpath("//button[normalize-space()='Block Number']").click();
    cy.xpath("//strong[normalize-space()='Contact Blocked']").should(
      "have.text",
      "Contact Blocked"
    );
  });
  it("opt-out=Add bulk contacts", () => {
    cy.xpath("//button[normalize-space()='Block Contacts']").click();
    cy.xpath("//button[normalize-space()='Add Bulk Contact']").click();
    cy.xpath("//button[normalize-space()='Next']").click();
    cy.fixture("data.xls", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.xpath("//input[@type='file']").then((el) => {
          const testFile = new File([fileContent], "data.xls", {
            type: "application/vnd.ms-excel",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          el[0].files = dataTransfer.files;
          cy.wrap(el).trigger("change", { force: true });
        });
      });
    cy.xpath("//span[@aria-label='delete']//*[name()='svg']").should(
      "be.visible"
    );
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//button[normalize-space()='Ok']").click();
  });
});
