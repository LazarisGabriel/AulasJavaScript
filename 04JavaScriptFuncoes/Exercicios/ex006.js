/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    console.log(`Montante com juros simples: ${capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)}`)
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    console.log(`Montante com juros compostos: ${capitalInicial * Math.pow((1 + taxaJuros), tempoAplicacao).toFixed(2)}`)

}

jurosSimples(100, 0.1, 5)
jurosCompostos(100, 0.1, 5)