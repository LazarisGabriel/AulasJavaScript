const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    if (!atual)
        return false
    else
        return acumulador
    
}, true)

console.log(resultado)

// Desafio 2: Algum aluno é bolsista?

const resultado2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    if (atual)
        return true
    else
        return acumulador
    
}, false)

console.log(resultado2)