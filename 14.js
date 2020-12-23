/* DESAFIO 14

Escreva um programa que leia dois números inteiros e compare-os, mostrando na tela uma mensagem:

O primeiroValor é maior. O segundoValor é maior. Não exite valor maior, os dois são iguais. */



let numero1 = Number(prompt("Digite um número inteiro"))
let numero2 = Number(prompt("Digite mais um número inteiro"))


if(numero1 > numero2){
    alert("O número " + numero1 + " é maior que o número " + numero2 + ".")
}else if (numero1 == numero2){
    alert("Os números " + numero1 + " e " + numero2 + " são iguais.")
}else{
    alert("O número " + numero2 + " é maior que o número " + numero1 + ".")
}