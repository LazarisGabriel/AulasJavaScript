/*
01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.
*/

function operacoes(valorA, valorB) {
    console.log(`Soma: ${valorA + valorB}`)
    console.log(`Subtração: ${valorA - valorB}`)
    console.log(`Multiplicação: ${valorA * valorB}`)

    if (valorB != 0)
        console.log(`Divisão: ${valorA / valorB}`)
    else
        console.log('A divisão não é possível com o dividendo zerado')
}

operacoes(4, 3)
console.log('--------')
operacoes(4, 0)