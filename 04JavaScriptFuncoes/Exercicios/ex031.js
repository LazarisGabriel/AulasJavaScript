/*
31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console. 
*/

function contaNegativos(vetor) {
    let contador = 0
    
    for (let i in vetor)
        vetor[i] < 0 ? contador++ : ''
    
    console.log(`Existe(m) ${contador} número(s) negativo(s) no vetor informado`)
}

contaNegativos([10, -8, -2, 36, 128, -737])