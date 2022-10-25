/*
32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function media(vetor) {
    let media = 0

    for (let i in vetor)
        media += vetor[i]

    console.log(`A média aritmética do vetor informado é ${media/vetor.length}`)
}

media([5, 6, 39, 42, 7])