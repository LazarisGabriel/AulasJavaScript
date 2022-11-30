const primeiroElemento = (arrayOuString) => arrayOuString[0]

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento) // Aqui ele vai pegar o primeiro elemento do array
    .then(primeiroElemento) // Aqui ele vai pegar a primeira letra do elemento
    .then(letraMinuscula)
    .then(console.log)