# Introdução

Este projeto visa implementar testes e2e automatizados utilizando a ferramenta Cypress na aplicação Walkdog [https://walkdog.vercel.app/]

# Objetivo

Automatizar os principais cenários de testes na aplicação para prática de conhecimentos adquiridos sobre a ferramenta

# Escopo

O escopo do projeto de automação abrange as seguintes áreas:

- Testes de Interface de Usuário (UI)
- Testes de Funcionalidade
- Testes exploratórios

# Ferramentas

- Cypress: Para automação de testes end-to-end.
- MindMeister: Para criação de mind maps com os cenários e casos de testes que foram automatizados servindo de planejamento

# Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

cypress/: Contém todos os arquivos relacionados aos testes Cypress.
fixtures/: Arquivos de dados estáticos utilizados nos testes.
e2e/: Suítes de testes organizadas por funcionalidade
support/: Arquivos de suporte utilizados nos testes, como comandos personalizados e configurações globais.

# Casos de Teste

<p align="center">
  <img src="https://github.com/tatarv/walkdog-cypress/blob/main/Mind%20Map%20-%20Walkdog.jpg">
</p>

# Pré-requisitos

- Node.js
- npm (Ao instalar o Node.js o npm é instalado junto)
- Google Chrome
- Visual Studio Code

# Configuração do Projeto

- Clone o repositório para o seu ambiente local.
- Instale as dependências do projeto utilizando o comando npm install.
- Configure as variáveis de ambiente necessárias, como URLs de teste e credenciais de acesso, no arquivo cypress.json.

# Executando os Testes

Para executar os testes, utilize o seguinte comando (modo headless):

npm run cy:run

Para executar os testes no modo interativo (com interface gráfica do Cypress), utilize o seguinte comando:

npm run cy:open

