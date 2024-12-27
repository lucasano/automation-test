import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('envio um GET para a API do Trello', () => {
  cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
    .as('response');
});

Then('devo receber status code {int}', (statusCode) => {
  cy.get('@response').its('status').should('eq', statusCode);
});

Then('devo exibir o campo "name" da lista', () => {
  cy.get('@response').then((response) => {
    cy.log(response.body.data.list.name);
  });
});
