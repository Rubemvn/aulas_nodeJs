import { constants } from 'buffer'
import path from 'path'


console.log(path.resolve('teste.txt'))

const caminho = "Downloads/Torrents/Vingadores_04"
const legenda = 'legenda.srt'
const disco = 'D:'

const finalPath = path.join(disco,caminho, legenda)

console.log(finalPath)