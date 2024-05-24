/// <reference types="Cypress" />
describe('Walkdog', () => {
  const baseURL = Cypress.env('UI_BASE_URL')
  beforeEach(function () {
    cy.visit(baseURL)
  })
  it('Verificar se é possível cadastrar dog walker corretamente do tipo cuidador', () => {
    cy.preencherDadosCuidador()

    cy.contains('Cadastrar')
      .click()

    cy.get('.swal2-popup')
      .should('be.visible')

    cy.get('#swal2-html-container')
      .should('be.visible')
      .and('contain.text', 'Recebemos o seu cadastro e em breve retornaremos o contato.')
  })

  it('Verificar se é possível cadastrar dog walker corretamente do tipo adestrador', () => {
    cy.preencherDadosAdestrador()

    cy.contains('Cadastrar')
      .click()

    cy.get('.swal2-popup')
      .should('be.visible')

    cy.get('#swal2-html-container')
      .should('be.visible')
      .and('contain.text', 'Recebemos o seu cadastro e em breve retornaremos o contato.')
  })

  it('Verificar se campos Rua, Bairro e Cidade estão desabilitados', () => {
    cy.get('input[type="text"][name="addressStreet"]').should('be.disabled')
    cy.get('input[type="text"][name="addressDistrict"]').should('be.disabled')
    cy.get('input[type="text"][name="addressCityUf"]').should('be.disabled')
  })

  it('Verificar se campos Rua, Bairro e cidade são preenchidos automaticamente após informar um CEP válido', () => {
    cy.get('input[type="text"][name="cep"]').type('69082000')

    cy.get('input[type="button"][value="Buscar CEP"]')
      .click()

    cy.get('input[type="text"][name="addressStreet"]').should('contain.value', 'Rua Cristo Rei')
    cy.get('input[type="text"][name="addressDistrict"]').should('contain.value', 'Coroado')
    cy.get('input[type="text"][name="addressCityUf"]').should('contain.value', 'Manaus/AM')

  })

  it('Verificar se é possível retornar a home', () => {
    cy.contains('Voltar para home')
      .click()

    cy.url().should('eq', 'https://walkdog.vercel.app/');
  })

  it('Verificar se não é possível cadastrar dog walker corretamente após não informar campos obrigatórios', () => {
    cy.contains('Cadastrar')
      .click()

    cy.get('.alert-error').should('be.visible')
      .should('contain.text', 'Informe o seu nome completo')
      .and('contain.text', 'Informe o seu melhor email')
      .and('contain.text', 'Informe o seu CPF')
      .and('contain.text', 'Informe o seu CEP')
      .and('contain.text', 'Informe um número maior que zero')
      .and('contain.text', 'Adcione um documento com foto (RG ou CHN)')
  })

  it('Verificar se não é possível cadastrar dog walker corretamente após informar um e-mail no formato inválido', () => {
    cy.get('input[type="text"][name="email"]').type('ana.souza@example,com')

    cy.contains('Cadastrar')
      .click()

    cy.get('.alert-error').should('be.visible')
      .should('contain.text', 'Informe um email válido')
  })

  it('Verificar se não é possível cadastrar dog walker corretamente após informar um CPF inválido', () => {
    cy.get('input[type="text"][name="cpf"]').type('0000000')

    cy.contains('Cadastrar')
      .click()

    cy.get('.alert-error').should('be.visible')
      .should('contain.text', 'CPF inválido')
  })

  it('Verificar se não é possível preencher os campos de endereço após informar um CEP inválido', () => {
    cy.get('input[type="text"][name="cep"]').type('0000000')

    cy.get('input[type="button"][value="Buscar CEP"]')
      .click()

    cy.get('.alert-error').should('be.visible')
      .should('contain.text', 'Informe um CEP válido')
  })
  it('Verificar se não é possível cadastrar dog walker corretamente após informar 0 no campo número na seção de endereço', () => {
    cy.get('input[type="text"][name="cpf"]').type('0000000')

    cy.contains('Cadastrar')
      .click()

    cy.get('.alert-error').should('be.visible')
      .should('contain.text', 'Informe um número maior que zero')
  })
})