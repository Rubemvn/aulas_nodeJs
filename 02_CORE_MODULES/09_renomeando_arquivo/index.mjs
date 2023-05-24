import fs from 'fs'

const nome = 'arquivo.png'

fs.rename('arquivo.txt', nome, (err)=> {
    if(err){
        console.log(err)
        return
    }

    console.log(`Arquivo renomeado para: ${nome}`)
})