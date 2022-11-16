console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

// Isso aqui não leva para fora
exports = { 
    nome: 'Teste'
}

console.log(module.exports)

// Isso aqui leva para fora
module.exports = { publico: true }