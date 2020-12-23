/* DESAFIO 11

Desenvolva um programa que pergunte a distância de uma viagem em Km.

Calcule o preço da passagem, cobrando 0,50 por Km para viagens de até 200Km e 0,45 por viagens mais longas. */

let distancia = Number(prompt("Qual a distância da viagem em Km?"))

if(distancia <= 200){
    console.log("O valor da passagem para uma viagem de " + distancia + " Km é de " + distancia * 0.50 + " Reais.")
} else{
    console.log("O valor da passagem para uma viagem de " + distancia + " Km é de " + distancia * 0.45 + " Reais.")
}