/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A      10% 
B      15% 
C      20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

function novoSalario(plano, salarioAtual) {
    switch(plano) {
        case "A":
            return `O novo salário é de R$${salarioAtual * 1.1}`
            break
        case "B":
            return `O novo salário é de R$${salarioAtual * 1.15}`
            break
        case "C":
            return `O novo salário é de R$${salarioAtual * 1.2}`
            break
        default:
            return "O plano informado é inválido"
    }
}

console.log(novoSalario("A", 1000))
console.log(novoSalario("B", 1000))
console.log(novoSalario("C", 1000))
console.log(novoSalario("D", 1000))