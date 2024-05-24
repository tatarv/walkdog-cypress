Cypress.Commands.add('preencherDadosCuidador', () => {
  cy.get('input[type="text"][name="name"]').type('Ana Souza')
  cy.get('input[type="text"][name="email"]').type('ana.souza@example.com')
  cy.get('input[type="text"][name="cpf"]').type('01446379280')
  cy.get('input[type="text"][name="cep"]').type('69082000')

  cy.get('input[type="button"][value="Buscar CEP"]')
    .click()

  cy.get('input[type="text"][name="addressStreet"]').should('contain.value', 'Rua Cristo Rei')
  cy.get('input[type="text"][name="addressDistrict"]').should('contain.value', 'Coroado')
  cy.get('input[type="text"][name="addressCityUf"]').should('contain.value', 'Manaus/AM')

  cy.get('input[type="number"][name="addressNumber"]').type('170')

  cy.get('img[alt="Cuidar"]')
    .click()

  cy.get('input[type="file"]').selectFile('cypress/fixtures/id.jpg', { force: true });

})

Cypress.Commands.add('preencherDadosAdestrador', () => {
  cy.get('input[type="text"][name="name"]').type('Ana Souza')
  cy.get('input[type="text"][name="email"]').type('ana.souza@example.com')
  cy.get('input[type="text"][name="cpf"]').type('01446379280')
  cy.get('input[type="text"][name="cep"]').type('69082000')

  cy.get('input[type="button"][value="Buscar CEP"]')
    .click()

  cy.get('input[type="text"][name="addressStreet"]').should('contain.value', 'Rua Cristo Rei')
  cy.get('input[type="text"][name="addressDistrict"]').should('contain.value', 'Coroado')
  cy.get('input[type="text"][name="addressCityUf"]').should('contain.value', 'Manaus/AM')

  cy.get('input[type="number"][name="addressNumber"]').type('170')

  cy.get('img[alt="Adestrar"]')
    .click()

  cy.get('input[type="file"]').selectFile('cypress/fixtures/id.jpg', { force: true });

})


