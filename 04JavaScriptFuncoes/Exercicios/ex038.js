/*
38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números 
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente 
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function imprimeImpares(valor1 = 0, valor2 = 100) {
    if (valor2 < valor1) {
        let aux = valor2
        valor2 = valor1
        valor1 = aux
    }

    for (let i = valor1; i < valor2; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }

}

imprimeImpares()
console.log('----')
imprimeImpares(10, 27)