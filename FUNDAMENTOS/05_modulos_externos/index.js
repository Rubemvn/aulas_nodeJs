const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args)

const nome = args['nome'];
const profissao = args['profissao']

console.log(nome, profissao)

console.log(`O meu nome é ${nome} e eu sou ${profissao}`)
