function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    // let valor = await retornarValor()
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Await/Async ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Await/Async ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Await/Async ${valor + 2}...`)

    return valor + 3
}

executar().then(console.log)

// async function executarDeVerdade() {
//     // Quando a funcao e chamada de dentro de outra funcao assincrona e possivel utilizar o await
//     const valor = await executar()
//     console.log(valor)
// }

// Usar o await fora de uma funcao assincrona nao funciona
// const valor = await executar()
// console.log(await)
// executarDeVerdade()