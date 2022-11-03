const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

const produtosCaros = p => p.preco >= 500
const produtosFrageis = p => p.fragil

console.log(produtos.filter(produtosCaros).filter(produtosFrageis))