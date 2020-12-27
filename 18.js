/* DESAFIO 18

Crie um programa que receba:
a) o valor da conta em um restaurante (valor total do consumo)
b) O número de amigos que vão dividir o valor

Depois disso calcule e mostre no console:
a) O valor dos 10% (cota do garçom)
b) O valor final da conta (consumo + 10%)
c) O valor que cada cliente deve pagar */


let valor = Number(prompt("Digite o valor total da conta"))
let amigos = Number(prompt("Digite o número de amigos"))
let dezPorcento =  (valor * 0.1)

console.log("Os 10% do garçom é " + dezPorcento + " Reais.")
console.log("O valor total da conta é " + valor + " Reais.")
console.log("O valor para cada um é " + valor / amigos + " Reais.")