/*
40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
conceito B e de 9,0 a 10,0 o conceito A.
*/

function mostraConceitos(vetor) {
    for (let i in vetor) {
        if ((vetor[i] >= 0) && (vetor[i] <= 4.9))
            console.log(`Nota ${parseInt(i) + 1}: Conceito D`)
        else if ((vetor[i] >= 5.0) && (vetor[i] <= 6.9))
            console.log(`Nota ${parseInt(i) + 1}: Conceito C`)
        else if ((vetor[i] >= 7.0) && (vetor[i] <= 8.9))
            console.log(`Nota ${parseInt(i) + 1}: Conceito B`)
        else if ((vetor[i] >= 9.0) && (vetor[i] <=10.0))
            console.log(`Nota ${parseInt(i) + 1}: Conceito A`)
        else 
            console.log(`Nota ${parseInt(i) + 1} inválida`)
    }
}

mostraConceitos([1, 5.5, 7.5, 9.7, 19])
