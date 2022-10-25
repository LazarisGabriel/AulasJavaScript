/*
28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function paresImpares(vetor) {
    let contaPares = 0
    let contaImpares = 0

    for (let i in vetor) {
        vetor[i] % 2 == 0 ? contaPares++ : contaImpares++
    }

    console.log(`${contaPares} pares e ${contaImpares} ímpares`)
}

paresImpares([1, 63, 19, 3, 4, 6, 37, 98, 143])