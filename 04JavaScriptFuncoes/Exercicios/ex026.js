/*
26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function encontraPares() {
    for (let i = 1; i <= 100; i++)
        console.log((i % 2 == 0) ? i : '')
}

encontraPares()