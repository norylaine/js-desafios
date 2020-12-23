/* DESAFIO 12

 Crie um sistema que recebe uma idade e retorna se o usuário é criança, adolescente, adulto ou idoso. */
 
 let idade = Number(prompt("Digite a idade do usuário?"))

 if(idade >= 18 && idade < 65){
     alert("Este usuário é adulto")
 } else if (idade < 18 && idade >= 12){
     alert("Este usuário é adolescente")
 } else{
     alert("Este usuário é idoso")
 }