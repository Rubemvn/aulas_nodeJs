import inquirer from 'inquirer'

inquirer.prompt([{
    name: "nota1",
    message: "Qual a primeira nota? "
},
{
    name: "nota2",
    message: "Qual a segunda nota? "
}]).then((answers) => {
    let media = ((parseFloat(answers.nota1)+parseFloat(answers.nota2))/2);
    if(media >= 7) console.log(`Sua média é ${media} e você está aprovado`)
    else console.log(`Sua média é ${media} e você está reprovado`)
}
).catch((err) => console.log(err))