console.log(soma(3, 4))
//console.log(sub(3, 4)) function expression não pode ser chamada antes de sua declaração
//console.log(mult(3, 4)) a mesma ocorre pra named function expression

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression (a única vantagem é que ao fazer o stacktrace ela vai aparecer com o nome ao invés de função anônima)
const mult = function mult(x, y) {
    return x * y
}