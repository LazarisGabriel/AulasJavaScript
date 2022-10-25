/*
30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function menorMaior(vetor) {
    let maior = vetor[1]
    let menor = vetor[1]

    for (let i in vetor){
        vetor[i] > maior ? maior = vetor[i] : maior = maior
        vetor[i] < menor ? menor = vetor[i] : menor = menor
    }

    console.log(`Maior valor: ${maior}`)
    console.log(`Menor valor: ${menor}`)
}

menorMaior([10, 20, 40, 1, 4, -5, 234, 736, 1347, 2, 6])