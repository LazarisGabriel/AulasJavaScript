// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: 'Ana' } // Não é permitido alterar a pessoa inteira somente acessar e alterar os atributos dela

// .freeze faz com que as tentativas de alteração não funcionem
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa.end)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoa.nome = 'Maria'
console.log(pessoaConstante)