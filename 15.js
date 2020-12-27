/* DESAFIO 15

A confederação Nacional de Natação precisa de um programa que leia o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade:

- Até 9 anos: MIRIM
- Até 14 anos: INFANTIL
- Até 19 anos: JUNIOR
- Até 24 anos: SÊNIOR
- Acima: MASTER */

let idade = Number(prompt("Digite sua idade"))


if(idade <= 9){
    alert("Este atleta é MIRIM")
} else if(idade > 9 && idade <= 14){
    alert("Este atleta é INFANTIL")
} else if(idade > 14 && idade <= 19){
    alert("Este atleta é JUNIOR")
} else if(idade > 19 && idade <= 24){
    alert("Este atleta é SÊNIOR")
} else if(idade > 24){
    alert("Este atleta é MASTER")
}
    