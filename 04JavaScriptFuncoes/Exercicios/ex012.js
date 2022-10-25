/*
12)​ Faça um algoritmo que calcule o fatorial de um número. 
*/

function fatorial(valor) {
    let resultado = 1
    for (let i = valor ; i > 1 ; i--) {
        resultado *= i
    }

    console.log(`O fatorial de ${valor} é ${resultado}`)
}

fatorial(5)