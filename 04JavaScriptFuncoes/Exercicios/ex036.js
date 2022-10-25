/*
36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5.
*/

function multiplica(vetor, valor) {
    let vetorResultado = []

    for (let i in vetor)
        vetorResultado.push(vetor[i] * valor)

    return vetorResultado
}

function multiplica5(vetor, valor) {
    let vetorResultado = []

    for (let i in vetor) {
        if (vetor[i] % 5 == 0)
            vetorResultado.push(vetor[i] * valor)
    }
    
    return vetorResultado
}

console.log(multiplica([5, 6, 7, 8, 9, 10], 3))
console.log(multiplica5([5, 6, 7, 8, 9, 10], 3))
console.log(multiplica5([6, 7, 8, 9], 3))