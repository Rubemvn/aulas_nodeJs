const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([{
    name: 'name',
    message: 'Qual seu nome? '
}, {
    name: 'age',
    message: 'Quantos anos você tem? '
}])
    .then((answers) => {
        if (!answers.name || !answers.age) {
            const messageError = ('O nome e a idade são obrigatórios!')
            throw new Error(chalk.red.bold.italic(messageError))
        }
        if (!parseInt(answers.age)){
            const messageError2 = ('Idade Inválida')
            throw new Error(chalk.red.bold.italic(messageError2))
        }

        const response = (` Seu nome é ${answers.name} e você tem ${answers.age} anos. `)
        console.log(chalk.bgYellow.black.bold.italic(response))
    })
    .catch((err) => console.log(err))


