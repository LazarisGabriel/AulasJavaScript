/*
16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.
*/

function calculadora(valor1, valor2, operacao) {
    switch (operacao) {
        case "+":
            return valor1 + valor2
            break
        case "-":
            return valor1 - valor2
            break
        case "*":
            return valor1 * valor2
            break
        case "/":
            if (valor2 == 0)
                return "Não é possível fazer uma divisão com 0 de base"
            else
                return valor1 / valor2
            break
        default:
            return "Operação inválida"
    }
}

console.log(calculadora(3, 4, "+"))
console.log(calculadora(57, 23, "-"))
console.log(calculadora(3, 7, "*"))
console.log(calculadora(24, 6, "/"))
console.log(calculadora(3, 0, "/"))
console.log(calculadora(1, 1, "s"))