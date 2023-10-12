// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('uploadFile', (fileName, fileType, selector) => {
    cy.fixture(fileName, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileBlob) => {
        const testFile = new File([fileBlob], fileName, { type: fileType });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(new File([fileBlob], fileName));
        selector[0].files = dataTransfer.files;
        cy.wrap(selector).trigger('change', { force: true });
      });
  });
  // Cypress.Commands.add('openIncognitoTab', (url) => {
  //   cy.task('openIncognitoTab', url);
  // });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  