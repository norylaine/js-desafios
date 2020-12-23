
// DESAFIO 6

// Faça um sistema que define se o usuário pode ou não dirigir.
// Lembrando que a idade mínima para dirigir é 18 anos ;)


// ENTRADA
// Perguntar a idade

let idade = Number(prompt("Qual a sua idade? "))

// PROCESSAMENTO
// SE idade for >= 18, ele pode dirigir
// CASO CONTRÁRIO, ele não pode dirigir

if(idade >= 18){
    alert("Parabéns! Você já pode dirigir!")
}else if(idade >= 16){
    alert("Você pode dirigir se for emancipado.")
}else {
    alert("Você ainda não pode dirigir.")
}

// SAÍDA
// Retornar se o usuário pode ou não dirigir.