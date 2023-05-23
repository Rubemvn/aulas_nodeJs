const chalk = require("chalk")

const nota = 0.9

if(nota >=7){
    console.log(chalk.bgGreen.bold.italic("Parabéns você está aprovado"));
}else{
    console.log(chalk.bgRed.bold.italic("Você ficou de recuperação! terá que fazer a prova final."))
}

