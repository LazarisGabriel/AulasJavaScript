/*
20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function quantidadeNotas(valor) {
    if (valor >= 100) {
        console.log(Math.trunc(valor / 100), " nota(s) de R$ 100.")
        valor = valor % 100
    }
    if (valor >= 50) {
        console.log(Math.trunc(valor / 50), " nota(s) de R$ 50.")
        valor = valor % 50
    }
    if (valor >= 10) {
        console.log(Math.trunc(valor / 10), " nota(s) de R$ 10.")
        valor = valor % 10
    }
    if (valor >= 5) {
        console.log(Math.trunc(valor / 5), " nota(s) de R$ 5.")
        valor = valor % 5
    }
    if (valor >= 1) {
        console.log(Math.trunc(valor / 1), " nota(s) de R$ 1.")
        valor = valor % 1
    }
}

quantidadeNotas(289)
