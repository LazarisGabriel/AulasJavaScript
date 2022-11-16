const moduloA = require('../../01ModuloA')
console.log(moduloA.ola)

const c = require('./03PastaC/index')
console.log(c.ola2)

// O código abaixo roda no navegador pelo localhost:8080 (somente quando o código está rodando aqui)
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)