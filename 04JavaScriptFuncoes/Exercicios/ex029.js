/*
29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações.
*/

function intervalo(vetor) {
    let contDentroIntervalo = 0
    let contForaIntervalo = 0


    for (let i in vetor) {
        vetor[i] >= 10 && vetor[i] <= 20 ? contDentroIntervalo++ : contForaIntervalo++
    }

    console.log(`Existem ${contDentroIntervalo} números dentro do intervalo e ${contForaIntervalo} fora do intervalo`)
}

intervalo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])