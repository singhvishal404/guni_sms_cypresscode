const { signin } = require("../../../Athentication_guni/signin");
describe("messaging", () => {
  beforeEach(() => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath("//span[normalize-space()='Messaging']").click();
    cy.xpath("//a[contains(@href,'/quick-message')]").click();
    
  }) 
  it.skip("send message", () => {
    cy.visit("https://appt.gunisms.com.au/");
    cy = signin(cy);
    cy.xpath("//span[normalize-space()='Messaging']").click();
    cy.xpath("//a[contains(@href,'/quick-message')]").click();
    cy.xpath("//div[normalize-space()='Enter mobile numbers']").type(
      "405650337{enter}"
    );
    // cy.xpath("//input[@class='ant-select-search__field']").type(
    //   "405650338{enter}"
    // );
    // cy.xpath("//input[@class='ant-select-search__field']").type(
    //   "405060703{enter}"
    // );
    cy.xpath("//div[@class='ant-card-body']").click();
    cy.xpath("//div[@title='#SharedNum#']").click();
    cy.xpath("//li[normalize-space()='#SharedNum#']").click();
    // check text area message of sending message
    cy.xpath("//textarea[@placeholder='Type a message']").type(
      " vishal testing "
    );
    cy.xpath("//span[normalize-space()='2 SMS']").should('have.text','1 SMS')
    // check unicode testing
    cy.xpath("//textarea[@placeholder='Type a message']").clear().type("😃😃")
    cy.xpath("//span[normalize-space()='2 SMS']").should('have.text','1 SMS')

    cy.xpath("//button[@type='submit']").click();
    cy.wait(4000);
    cy.xpath("//tbody/tr[1]/td[6]/span[1]").should(($status) => {
      expect($status).to.contain.text("SENT");
    });
  });
  it.skip('send MMS', () => {
    cy.xpath("//input[@value='MMS']").click()
    cy.xpath("//div[normalize-space()='Enter mobile numbers']").type("405650337")
    cy.xpath("//input[@placeholder='Enter Subject']").type("staging")
    cy.xpath("//span[normalize-space()='Use Template']").click()
    cy.xpath("//td[@title='hii']").click()
    cy.xpath("//textarea[@placeholder='Type a message']").type("hlo")
    cy.xpath("//button[normalize-space()='Add Attachment']").click()
    cy.fixture("screenshot.png", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.xpath("//input[@type='file']").then((el) => {
          const testFile = new File([fileContent], "screenshot.png", {
            type: "image/png",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          el[0].files = dataTransfer.files;
          cy.wrap(el).trigger("change", { force: true });
        })
      })
    cy.xpath("//button[contains(@type,'submit')][normalize-space()='Crop']").click()
    cy.xpath("//i[@class='fas fa-crop']").click()
    // cy.xpath("//span[@class='btn border rounded border-dark mx-2 py-2 px-1 text-info-color border-info-color']").click()
    cy.xpath("//button[normalize-space()='Crop']").click()
    cy.xpath("//button[normalize-space()='Next']").click()
    cy.get('.app-btn_btnDarkWithoutBg__oLtKn.text-info-color').should('include','screenshot')


  })
  it.skip('send message through schedule',() =>{
    cy.xpath("//input[@value='MMS']").click()
    cy.xpath("//div[normalize-space()='Enter mobile numbers']").type("405650337")
    cy.xpath("//input[@placeholder='Enter Subject']").type("staging")
    cy.xpath("//span[normalize-space()='Use Template']").click()
    cy.xpath("//td[@title='hii']").click()
    cy.xpath("//textarea[@placeholder='Type a message']").type("hlo")
    cy.xpath("//button[normalize-space()='Add Attachment']").click()
    cy.fixture("screenshot.png", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.xpath("//input[@type='file']").then((el) => {
          const testFile = new File([fileContent], "screenshot.png", {
            type: "image/png",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          el[0].files = dataTransfer.files;
          cy.wrap(el).trigger("change", { force: true });
        })
      })
    cy.xpath("//button[contains(@type,'submit')][normalize-space()='Crop']").click()
    cy.xpath("//i[@class='fas fa-crop']").click()
    // cy.xpath("//span[@class='btn border rounded border-dark mx-2 py-2 px-1 text-info-color border-info-color']").click()
    cy.xpath("//button[normalize-space()='Crop']").click()
    cy.xpath("//button[normalize-space()='Next']").click()
    cy.get("cy.get('.app-btn_btnDarkWithoutBg__oLtKn.text-info-color')").contains('screenshot')
    cy.xpath("//i[@class='far fa-circle text-info-color']").click()
    cy.xpath("//input[@placeholder='Select Time']").click()
    cy.xpath("//input[contains(@class,'ant-calendar-input')]").clear().type("11/07/2023 11:48 AM")
    cy.xpath("//a[normalize-space()='Ok']").click()
    cy.xpath("//button[@type='submit']").click()

  })

});
