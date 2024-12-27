Feature: Login no site Automation Practice

  Scenario: Login válido
    Given que estou na página de login
    When insiro o email "teste2021@teste.com.br" e senha "teste"
    Then devo acessar a página inicial com sucesso
