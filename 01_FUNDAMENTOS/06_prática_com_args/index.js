const minimist = require("minimist");
const calc = require("./calc")

// modulo externo
const args = minimist(process.argv.slice(2));

// modulo interno
const soma = calc.soma
const div = calc.div
const mult = calc.mult
const sub = calc.sub

const a = parseInt(args['a'])
const b = parseInt(args['b'])

console.log(`a: ${a}, b${b}`)

console.log("a soma de a+b=", soma(a, b))
console.log("a divisão de a/b=", div(a, b))
console.log("a multiplicação de a*b=", mult(a, b))
console.log("a subtração de a-b=", sub(a, b))