// const { defineConfig } = require("cypress");
describe("Signup", () => {
  it("signup.cy", () => {
    cy.visit("https://appt.gunisms.com.au/");
    cy.xpath("//span[@role='button']").click();
    cy.xpath("//input[@name='firstName']").type("vishal");
    cy.xpath("//input[@name='lastName']").type("jain");
    cy.xpath("//input[@name='contact']").type("vishaljainy@gmail.com");
    cy.xpath("//input[@name='password']").type("jain@123");
    cy.xpath("//input[@name='cpassword']").type("jain@123");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//input[@name='mobile']").type('481606116')
    cy.xpath("//button[@type='submit']").click()
    cy.xpath("//input[@name='otp']").type("561467")
    cy.xpath("//button[@type='submit']").click()
  });
});
