/* DESAFIO 10

Crie um programa que leia um número inteiro e mostre na tela se ele é PAR ou ÍMPAR. */


let numero = Number(prompt("Digite um número inteiro"))
let resto = numero % 2

if(resto == 0){
    alert("Este número é par")
} else{
    alert("Este número é ímpar")
}
