const fs = require('fs')

console.log('Início')

fs.writeFile('arquivo.txt', 'oi', err => {
    setTimeout(() => {
        console.log('Arquivo Criado!!')
    }, 3000)
})

console.log('Fim')