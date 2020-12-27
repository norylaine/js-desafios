/* 
DESAFIO 17

Crie um programa que receba um email e uma senha.
O programa tem salvo em seu sistema o email e a senha correta.
O programa deve retornar se os dados estão ou não corretos.
*/

let email = "desafio17@elaecto.com"
let senha = "senhadesafio17"

let emailDigitado = prompt("Digite seu e-mail")
let senhaDigitada = prompt("Digite sua senha")

if (emailDigitado != email && senhaDigitada != senha){
    alert("e-mail e senha incorretos")
} else if(emailDigitado != email){
    alert("email incorreto")
} else if (senhaDigitada != senha){
    alert("senha incorreta")
} else{
    alert("login realizado")
}

