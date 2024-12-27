Feature: Teste da API Trello

  Scenario: Validar campo "name" da lista
    When envio um GET para a API do Trello
    Then devo receber status code 200
    And devo exibir o campo "name" da lista
