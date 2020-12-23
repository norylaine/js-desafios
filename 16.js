/* DESAFIO 16

Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal e condição de pagamento:

- À vista dinheiro / cheque: 10% de desconto
- À vista no cartão: 5% de desconto
- Em até 2x no cartão: preço normal
- 3x ou mais no cartão: 20% de juros */

let valor = Number(prompt("Digite o valor do produto"))

console.log("O valor do produto a vista no dinheiro ou cheque é " + (valor * 0.9) + ". A vista no cartão é " + (valor * 0.95) + ". Em 2x é " + valor + ". E em 3x ou mais é " + (valor * 1.2) + ".") 