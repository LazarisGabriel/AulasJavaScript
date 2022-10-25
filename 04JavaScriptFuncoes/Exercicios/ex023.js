/*
23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function calculaMedia(codigo, nota1, nota2, nota3) {
    let maiorNota = getMaiorNota(nota1, nota2, nota3)
    let media = 0

    switch (maiorNota) {
        case 1:
            media = (((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10).toFixed(2)
            break
        case 2:
            media = (((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10).toFixed(2)
            break
        case 3:
            media = (((nota3 * 4) + (nota2 * 3) + (nota1 * 3)) / 10).toFixed(2)
            break
    }

    if (media >= 5)
        return `Código: ${codigo}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Média: ${media}, APROVADO`
    else
        return `Código: ${codigo}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Média: ${media}, REPROVADO`
}

function getMaiorNota(nota1, nota2, nota3) {
    if (nota1 > nota2 && nota1 > nota3)
        return 1
    else if (nota2 > nota1 && nota2 > nota3)
        return 2
    else
        return 3
}

console.log(calculaMedia(6000, 9.8, 6, 3.5))

/* RESPOSTA DO CURSO - JOGOU OS VALORES EM UM ARRAY E DEU UM SORT NO MESMO PARA ORDENAR O MESMO (Também não fez a parada de repitir o código até que seja negativo)
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}
*/
