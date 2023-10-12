const { login, signin } = require("../../../Athentication_guni/signin");
describe("template", () => {
  it("Add template", () => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath(
      "//a[contains(@href,'/template')]//li//div[contains(@class,'mx-auto p-1 position-relative')]"
    ).click();
    cy.xpath("//button[normalize-space()='Add Template']").click();
    cy.xpath("//input[@placeholder='Enter Template Name']").type(
      "kapil sharma"
    );
    cy.xpath("//textarea[@placeholder='Type a message']").type(
      "hii this is a for sample testing message. "
    );
    cy.xpath("//button[normalize-space()='Add Template']").click();
    cy.get(".ant-typography.m-0").should(
      "have.text",
      "New template have been added successfully"
    );
    cy.xpath("//button[normalize-space()='Ok']").click();
    cy.xpath("//td[@title='kapil sharma']").should("be.visible")
  });
  it.skip("edit template", () => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath(
      "//a[contains(@href,'/template')]//li//div[contains(@class,'mx-auto p-1 position-relative')]"
    ).click();
    cy.xpath("//button[normalize-space()='Add Template']").click();
    cy.xpath("//input[@placeholder='Enter Template Name']").type(
      "kapil sharma"
    );
    cy.xpath("//textarea[@placeholder='Type a message']").type(
      "hii this is a for sample testing message. "
    );
    cy.xpath("//button[normalize-space()='Add Template']").click();
    cy.get(".ant-typography.m-0").should(
      "have.text",
      "New template have been added successfully"
    );
    cy.xpath("//button[normalize-space()='Ok']").click();
    cy.xpath("(//button[contains(@type,'button')])[4]")
      .trigger("Edit Template")
      .click();
    cy.xpath(
      "(//li[contains(@role,'menuitem')][normalize-space()='Edit Template'])[1]"
    ).click();
    cy.xpath("//textarea[@placeholder='Type a message']")
      .clear()
      .type("this is for updation of template. ");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("(//span)[26]").should(
      "have.text",
      "Template details have been updated successfully!"
    );
    cy.xpath("(//button[contains(@type,'button')])[6]").click();
  });
  it.skip("delete template", () => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath(
      "//a[contains(@href,'/template')]//li//div[contains(@class,'mx-auto p-1 position-relative')]"
    ).click();
    cy.xpath("(//button[contains(@type,'button')])[4]")
      .trigger("Delete Template")
      .click();
    cy.xpath("(//li[contains(@role,'menuitem')])[3]").click();
    cy.xpath("//span[@class='ant-typography m-0']").should(
      "have.text",
      "Are you sure you want to delete this template?"
    );
    cy.xpath("//button[normalize-space()='Continue']").click();
    cy.xpath("//strong[normalize-space()='Template Deleted!']").should(
      "have.text",
      "Template Deleted!"
    );
    cy.xpath("//button[normalize-space()='Ok']").click();
  });
});
