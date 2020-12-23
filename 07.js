
// DESAFIO 7:

// Crie sistema que recebe três notas de um aluno, tire a média e define se ele passou ou não de ano.

// - Nota mínima de aprovação: 7
// - Entre 5 e 6.9, o aluno ganha o direito de fazer uma recuperação.
// - Caso contrário, o aluno será reprovado.

// ENTRADAS
// Receber nota 1, nota 2 e nota 3.

let nota1 = Number(prompt("Digite sua primeira nota"))
let nota2 = Number(prompt("Digite sua segunda nota"))
let nota3 = Number(prompt("Digite sua terceira nota"))

// PROCESSAMENTO
// Somar as notas e tirar a média do aluno.

let media = (nota1 + nota2 + nota3) / 3
console.log("A sua média é " + media + ".")

// SE media >= 7: aprovado

if(media >= 7){
    console.log("Parabéns! Você está aprovado!")
}

// SE NÃO, SE media >= 5 e <= 6.9: recuperação

else if(media >= 5 && media <= 6.9){
    console.log("Você está de recuperação.")
}

// CASO CONTRÁRIO, o aluno será reprovado.

else{
    console.log("Você está reprovado.")
}

// SAÍDA
// Retornar se o aluno foi aprovado, ficou de recuperação ou foi reprovado.