Feature: Carrinho de compras

  Scenario: Adicionar produto ao carrinho e validar na tela de pagamento
    Given que estou na página do produto
    When adiciono o produto ao carrinho
    Then o produto deve aparecer na tela de pagamento
