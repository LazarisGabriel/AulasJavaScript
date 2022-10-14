// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

/*
Não funciona pois não temos o atributo conta na pessoa, portanto ele não consegue buscar nada nessa conta
const { conta: { ag, num } } = pessoa;
console.log(ag, num);
*/