const { stringify } = require("querystring");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual linguagem eu uso? ', (linguagem) => {
    switch(linguagem){
        case 'JS': console.log("acertou miseravi")
        case 'Js':console.lof("acertou miseravi")
        case 'js': console.log("acertou miseravi")
        case 'Javascript':console.lof("acertou miseravi")
        case 'javascript':console.lof("acertou miseravi")
        case 'JavaScript':console.lof("acertou miseravi")
        case 'java script': console.lof("acertou miseravi")
        case 'Java Script':  console.lof("acertou miseravi")
        case 'Java script':console.lof("acertou miseravi")
        case 'python': console.log("Isso nem é linguagem kkkkkk")
        case 'Python': console.log("Isso nem é linguagem kkkkkk")
        case 'Py': console.log("Isso nem é linguagem kkkkkk")
        case 'py': console.log("Isso nem é linguagem kkkkkk")
        default: console.log("Erroooouuuuu")
    }
    readline.close()
})




