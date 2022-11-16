const contadorA = require('./07InstanciaUnica')
const contadorB = require('./07InstanciaUnica')

const contadorC = require('./07InstanciaNova')()
const contadorD = require('./07InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)