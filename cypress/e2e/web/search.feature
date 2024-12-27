Feature: Busca de produtos

  Scenario: Realizar busca por produtos
    Given que estou na página inicial
    When realizo uma busca por "t-shirt"
    Then devo visualizar os resultados relacionados
