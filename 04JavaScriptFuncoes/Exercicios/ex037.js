/*
37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , 
bem como a soma dos elementos.
*/

function progressaoAritmetica(n, a1, r) {
    console.log(a1)
    let ultimoTermo = a1
    for (let i = 1; i < n; i++) {
        ultimoTermo += r
        console.log(ultimoTermo)
    }

    console.log(`Soma dos termos: ${((a1 + ultimoTermo) * n)/2}`)
}

function progressaoGeometrica(n, a1, r) {
    console.log(a1)
    let ultimoTermo = a1
    for (let i = 1; i < n; i++) {
        ultimoTermo *= r
        console.log(ultimoTermo)
    }

    console.log(`Soma dos termos: ${(a1 * (Math.pow(r, n) - 1))/(r - 1)}`)
}

progressaoAritmetica(5, 2, 2)
progressaoGeometrica(5, 2, 2)