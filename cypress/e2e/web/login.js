import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estou na página de login', () => {
  cy.visit('http://automationpractice.com/index.php?controller=authentication');
});

When('insiro o email {string} e senha {string}', (email, senha) => {
  cy.get('#email').type(email);
  cy.get('#passwd').type(senha);
  cy.get('#SubmitLogin').click();
});

Then('devo acessar a página inicial com sucesso', () => {
  cy.url().should('include', 'controller=my-account');
});
