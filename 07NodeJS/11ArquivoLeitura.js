const fs = require('fs')

const caminho = __dirname + '/11Arquivo.json'

// Sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assíncrona...
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.porta}`)
})

const config = require('./11Arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})