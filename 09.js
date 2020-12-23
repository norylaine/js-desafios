/* DESAFIO 09

Escreva um programa que leia a velocidade de um carro. Se ele ultrapassar 80 Km/h, mostre uma mensagem dizendo que ele foi multado.

A multa vai custar R$ 7,00 por cada Km acima do limite. */


let velocidade = Number(prompt("Qual a velocidade do carro em Km/h?"))

if(velocidade > 80){
    alert("Você ultrapassou o limite de velocidade. O valor da multa é de " + (velocidade - 80) * 7 + " Reais.")
} else{
    alert("Você está dentro do limite de velocidade")
}
