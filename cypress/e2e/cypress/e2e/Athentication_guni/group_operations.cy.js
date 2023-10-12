// const { defineConfig } = require("cypress");
const { signin } = require("../../../Athentication_guni/signin");
describe("group operations", () => {
  beforeEach(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath("//span[normalize-space()='Audience']").click();
    cy.xpath("//li[normalize-space()='Groups']").click();
    cy.xpath("(//i[@type='button'])[1]").click();
    cy.log("testing");
  });
  it.skip("view group", () => {
    cy.xpath("//li[normalize-space()='View Group']").click();
    cy.xpath("//button[normalize-space()='Actions']").should("be.visible");
    // check search box
    cy.xpath("//input[@placeholder='Search for Contact Name or Number']").type(
      "john"
    );
    cy.xpath("//td[@title='John']").should("be.to.visible", "John");
  });
  it.skip("SMS- run campaign through group", () => {
    cy.xpath("//li[normalize-space()='Run Campaign']").click();
    cy.xpath(
      "//div[@class='ant-col ant-col-24 ant-col-md-24']//i[@class='fas fa-check-circle text-info-color']"
    ).click();
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//textarea[@placeholder='Type a message']").type(
      "test campaign through group"
    );
    cy.xpath(
      "//button[@class='btn text-nowrap app-btn_btnLightWithBg__3UKbv']"
    ).click();
    cy.xpath("//button[normalize-space()='Send Campaign']").click();
    cy.xpath("//button[normalize-space()='Send SMS Campaign']").click();
    cy.xpath(
      "//strong[normalize-space()='SMS Campaign Sent Successfully']"
    ).should("have.text", "SMS Campaign Sent Successfully");
    cy.xpath("//button[normalize-space()='Ok']").click();
    cy.xpath("(//span[contains(text(),'Sent')])[1]").should(
      "have.text",
      "Sent"
    );
  });
  it.skip("delete group ", () => {
    cy.xpath("//td[@title='optout_template.xls']").click();
    cy.xpath("(//input[@type='checkbox'])[3]").click();
    cy.xpath("//button[normalize-space()='Actions']").click();
    cy.xpath("//span[normalize-space()='Delete Selected']").click();
    cy.xpath("//button[normalize-space()='Yes']").click();
    cy.xpath(
      "//strong[normalize-space()='Contacts deleted successfully']"
    ).should("have.text", "Contacts deleted successfully");
    cy.xpath("//button[normalize-space()='Ok']").click();
    cy.xpath("//span[normalize-space()='402599635']").should(
      "not.contain",
      402599634
    );
  });
  it("Add contact in group", () => {
    cy.xpath("//li[normalize-space()='Add Contacts']").click();
    cy.xpath("//button[normalize-space()='Add Single Contact']").click();
    cy.xpath("//input[@placeholder='Enter Number']").type("405056337");
    cy.xpath("//input[@placeholder='Enter first name']").type("vishal");
    cy.xpath("//input[@placeholder='Enter last name']").type("singh");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//strong[normalize-space()='Contact added successfully']").should(
      "have.text",
      "Contact added successfully"
    );
  });
  it.skip("Add contact into bulk", () => {
    cy.xpath("//li[normalize-space()='Add Contacts']").click();
    cy.xpath("//button[normalize-space()='Add Bulk Contact']").click();
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

    cy.xpath("(//*[name()='svg'])[5]").should("be.visible");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("(//span[contains(@unselectable,'on')])[1]").click();
    cy.xpath("//li[normalize-space()='number']").click();
    cy.xpath(
      "//body[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]"
    ).click();
    cy.xpath(
      "//li[@class='ant-select-dropdown-menu-item text-capitalize ant-select-dropdown-menu-item-active']"
    ).click();
    cy.xpath("//button[normalize-space()='Finalize Import']").click();
    cy.xpath("//span[@class='ant-typography m-0']").should(
      "have.text",
      "Contacts have been successfully added to the queue. Will be added to the group shortly."
    );
    cy.xpath("//button[normalize-space()='Ok']").click();
  });
  it.skip("edit group", () => {
    cy.xpath("//li[normalize-space()='View Group']").click();
    cy.xpath("//button[normalize-space()='Actions']").should("be.visible");
    cy.xpath("//button[normalize-space()='Actions']").click();
    cy.xpath("(//input[@type='checkbox'])[2]").click();
    cy.xpath("//span[normalize-space()='Edit Contact']").click();
    cy.xpath("//input[@placeholder='Enter last name']").clear().type("paul");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath(
      "//strong[normalize-space()='Contact updated successfully']"
    ).should("have.text", "Contact updated successfully");
    cy.xpath("//td[@title='paul']").should("be.visible");
  });
});
