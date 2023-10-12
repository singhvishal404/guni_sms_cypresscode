export function signin(cy) {
  cy.xpath("//input[@name='contact']").type("vishalsinghtanver@gmail.com");
  cy.xpath("//button[@type='submit']").click();
  cy.xpath("//input[@name='password']").type("vishal@1234");
  cy.xpath("//button[@type='submit']").click();
  cy.xpath(
    "//input[@aria-label='Please enter verification code. Digit 1']"
  ).type("5");
  cy.xpath("//input[@aria-label='Digit 2']").type("6");
  cy.xpath("//input[@aria-label='Digit 3']").type("1");
  cy.xpath("//input[@aria-label='Digit 4']").type("4");
  cy.xpath("//input[@aria-label='Digit 5']").type("6");
  cy.xpath("//input[@aria-label='Digit 6']").type("7");
  cy.wait(3000);
  return cy;
}
