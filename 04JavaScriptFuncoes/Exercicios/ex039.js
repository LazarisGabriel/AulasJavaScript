/*
39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
Faça a troca sem utilizar uma variável auxiliar.
*/

function trocaVetores(vetor1, vetor2) {
    if (vetor1.length == vetor2.length) {
        for(let i in vetor1) {
            vetor1[i] += vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }

        console.log(`Vetor 1: ${vetor1}`)
        console.log(`Vetor 2: ${vetor2}`)
    } else
        console.log('Tamanho dos vetores é diferente')
}

trocaVetores([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])