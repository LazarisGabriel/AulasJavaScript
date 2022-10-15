/*
02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). 
*/

function tipoTriangulo(ladoA, ladoB, ladoC) {
    if((ladoA == ladoB) && (ladoA == ladoC))
        console.log('O triângulo é equilátero')
    else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoA == ladoC))
        console.log('O triângulo é isósceles')
    else
        console.log('O triângulo é escaleno')
        
}

tipoTriangulo(1, 1, 1)
tipoTriangulo(1, 1, 2)
tipoTriangulo(1, 2, 3)