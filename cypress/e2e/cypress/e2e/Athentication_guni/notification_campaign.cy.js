const { signin } = require("../../../Athentication_guni/signin");
describe("campaign", () => {
  before(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
  });
  it('notification campaign', () =>{
    cy.xpath("//span[normalize-space()='Campaign']").click();
    cy.xpath("//button[normalize-space()='Run Campaign']").click();
    cy.xpath("//i[@type='button']").click();
    cy.xpath("//input[@placeholder='Campaign Name']").type("testing");
    cy.xpath("//div[@class='ant-col ant-col-24 ant-col-sm-12 ant-col-md-10 ant-col-lg-10 ant-col-xl-8']//i[@class='far fa-circle text-info-color']").click()
    cy.xpath("(//i[@aria-hidden='true'])[26]").click()
    cy.xpath("(//span[@class='ant-radio'])[2]").click()
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//td[@title='My Group']").click();
    // check personalise
    // cy.xpath("//span[normalize-space()='Personalize']").click()
    // cy.xpath("//span[normalize-space()='first name']").click()
    // cy.xpath("//span[normalize-space()='last name']").click()
    // cy.xpath("//textarea[@placeholder='Type a message']").should('have.value','{{[first name]}} {{[last name]}} ')
    // // check use of template
    cy.xpath("//span[normalize-space()='Use Template']").click();
    cy.xpath("//td[@title='hii']").click();
    cy.xpath("//textarea[@placeholder='Type a message']").should(
      "have.value",
      "hlo");
    cy.xpath("//div[@class='text-start d-flex flex-wrap gap-2']//button[@type='submit'][normalize-space()='Next']").click()
    cy.xpath("//div[@class='text-start d-flex flex-wrap gap-2']//button[@type='submit'][normalize-space()='Next']").click()
    cy.xpath("//button[normalize-space()='Send SMS Campaign']") 
    cy.xpath("//strong[normalize-space()='SMS Campaign Sent Successfully']").should('be.visible')
    cy.xpath("//button[normalize-space()='Ok']").click()
    cy.xpath("//td[@title='Campaign 15/07 14:59']").should('exist') 
      
  })
})