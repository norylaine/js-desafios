/* DESAFIO 13

Crie um sistema de empréstimo.

O usuário precisa ter entre 18 e 65 anos.
O salário deve ser maior ou igual a R$ 1.500.
O valor do empréstimo deverá ser até cinco vezes o salário. */

// MEU

let idade = Number(prompt("Digite sua idade"))

if(idade < 18 || idade > 65){
    alert("Sua idade não permite a solitação de empréstimo")
}else{
    salario = Number(prompt("Digite seu salario"))
    if(salario < 1500){
        alert("Seu salário não permite a solicitação de empréstimo")
    }else{
        valor = Number(prompt("Digite o valor do empréstimo"))
        if(valor > salario * 5){
            alert("O valor é superior ao disponível")
        }else{
            alert("Empréstimo aprovado!")
        }
    }
}
