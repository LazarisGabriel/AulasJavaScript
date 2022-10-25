/*
27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function crescimentoAnual(altura1, taxa1, altura2, taxa2) {
    if (taxa1 == taxa2) {
        if (altura1 > altura2)
            return 'Como as duas crianças possuem a mesma taxa de crescimento e a primeira é maior, ela continuará sendo a maior'
        else if (altura2 > altura1)
            return 'Como as duas crianças possuem a mesma taxa de crescimento e a segunda é maior, ela continuará sendo a maior'
        else
            return 'Como as duas crianças possuem a mesma taxa de crescimento e a taxa é igual, as duas continuarão da mesma altura'
    }
    if (altura1 == altura2) {
        if (taxa1 > taxa2)
            return 'As duas crianças possuem a mesma altura, porém em 1 ano a primeira criança irá ultrapassar a segunda'
        else if (taxa2 > taxa1)
            return 'As duas crianças possuem a mesma altura, porém em 1 ano a segunda criança irá ultrapassar a primeira'
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2)
                return 'A primeira criança é maior que a segunda e não será ultrapassada'
            else
                return `A segunda criança irá ficar maior que a primeira em ${calculaTempo(altura1, taxa1, altura2, taxa2)} anos`
        } else {
            if (altura2 > altura1) {
                if (taxa2 >= taxa1)
                    return 'A segunda criança é maior que a primeira e não será ultrapassada'
                else
                    return `A primeira criança irá ficar maior que a segunda em ${calculaTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        }
    }
}

function calculaTempo(alturaMaior, taxaMaior, alturaMenor, taxaMenor) {
    let tempo = 0
    while (alturaMaior > alturaMenor) {
        alturaMaior += taxaMaior
        alturaMenor += taxaMenor
        tempo++
    }

    return tempo
}

console.log(crescimentoAnual(150, 4, 130, 4))