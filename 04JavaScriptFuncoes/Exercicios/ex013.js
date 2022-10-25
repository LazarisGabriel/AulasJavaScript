/*
13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
*/

function ehDiaUtil(dia) {
    switch(dia % 7) {
        case 0:
        case 1:
            return true
            break
        default:
            return false
    }
}

console.log(ehDiaUtil(8))
