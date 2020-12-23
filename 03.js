// DESAFIO 3:

// Crie um programa que receba um valor em dólares
// e o converta para reais.

// Taxa de câmbio: 5.30

// ENTRADA
// Receber valor em dólares

let valorDolares = Number(prompt("Digite o valor em dólares"))
let taxaCambio = Number(prompt("Digite o valor do câmbio"))

// PROCESSAMENTO
// Fazer operação matemática

let valorReais = valorDolares * taxaCambio

//SAÍDA
// Exibir na tela o resultado

console.log("O valor "+  valorDolares + " em dolares equivale ao valor " + valorReais + " em reais." ) 