/*
21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80;
2) conveniados com idade entre 10 e 30 anos pagam R$50;
3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$130
*/

function planoDeSaude(idade){
    if (idade > 0) {
        if (idade < 10)
            console.log('O total do plano será R$180')
        else if (idade <= 30)
            console.log('O total do plano será R$150')
        else if (idade <= 60)
            console.log('O total do plano será R$19')
        else
            console.log('O total do plano será R$230')
    } else {
        console.log("Idade inválida")
    }
}

planoDeSaude(5)
planoDeSaude(15)
planoDeSaude(43)
planoDeSaude(87)
planoDeSaude(-34)