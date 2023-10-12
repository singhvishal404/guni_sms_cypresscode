const { signin } = require("../../../Athentication_guni/signin");
describe("campaign", () => {
  it('ADD_GROUP', () => {

    cy.visit("https://appt.gunisms.com.au/")
    cy = signin(cy);
    cy.xpath("//span[normalize-space()='Audience']").click();
    cy.xpath("//li[normalize-space()='Groups']").click();
    cy.xpath("//button[normalize-space()='Add Group']").click();
    cy.fixture("data.xls", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.get('input[type="file"]').then((el) => {
          const testFile = new File([fileContent], "data.xls", {
            type: "application/vnd.ms-excel",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          el[0].files = dataTransfer.files;
          cy.wrap(el).trigger("change", { force: true });
        });
      });
      cy.xpath("//button[@type='submit']").click()
      cy.xpath("//h4[normalize-space()='Merge Labels']").should('be.visible',"Merge Labels")
      cy.xpath("//tbody/tr[1]/td[2]//span/div/div/div/div").click({multiple:true})
      cy.xpath("//li[normalize-space()='number']").click({multiple:true})
      cy.xpath("//tbody/tr[2]/td[2]//span/div/div/div/div").click()
      cy.xpath("//li[normalize-space()='name']").click()
      cy.xpath("/html/body/div[3]/div/div[2]/div/div[2]/div[2]/form/div/div[1]/div/div/div/div/div/div/table/tbody/tr[3]/td[2]/div/div/div/span/div/div/span").click()
      cy.xpath("//li[normalize-space()='countryCode']").click()
      cy.xpath("//button[normalize-space()='Finalize Import']").click()
      cy.get(".ant-typography.m-0").should('have.text', 'Contacts have been successfully added to the queue. Will be added to the group shortly.')
      cy.xpath("//button[normalize-space()='Go to Group']").click()
      cy.xpath("//h4[@class='ant-typography text-info-color mb-0 d-flex align-items-center']").should('be.visible','Group Name -')
      
    })  
  })



