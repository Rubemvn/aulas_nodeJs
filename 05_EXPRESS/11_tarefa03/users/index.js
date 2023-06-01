const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const basePath = path.join(__dirname, '../templates')

router.use(
  express.urlencoded({
    extended: true,
  })
)
router.use(express.json())


router.get('/sigIn', (req, res) => {
  res.sendFile(`${basePath}/login.html`)
})
router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/createuser.html`)
})

router.post('/authenticating', (req, res) => {
  const user = req.body.user
  const password = req.body.password
  const userAccount = getUser(user)

  if (authenticatingUser(user, password)) {
    res.status(200).sendFile(`${basePath}/logged.html`)
  } else {
    res.status(401).sendFile(`${basePath}/notlogged.html`)
  }
})

router.post('/creatingUser', (req, res) => {
  const user = req.body.user
  const name = req.body.name
  const surname = req.body.surname
  const email = req.body.email
  const password = req.body.password

  if (!createUser(user, name, surname, email, password)) {
    res.sendFile(`${basePath}/createuser.html`)
  } else {
    res.sendFile(`${basePath}/login.html`)
  }
})


// faz a autenticação do usuário
function authenticatingUser(user, password) {
  const account = getUser(user)

  if (fs.existsSync(`accounts/${user}.json`)) {
    if (account.password == password) {
      return true
    }
  }
  else {
    return false
  }

}

// pega o arquivo com dados do usuário
function getUser(user) {
  const accountjSON = fs.readFileSync(`accounts/${user}.json`, {
    encoding: 'utf-8',
    flag: "r"
  })

  return JSON.parse(accountjSON)
}

// cria um novo usuário
function createUser(user, name, surname, email, password) {

  if (!fs.existsSync(`accounts`)) {
    fs.mkdirSync('accounts')
  }

  if (fs.existsSync(`accounts/${user}.json`)) {
    return false
  } else {
    fs.writeFileSync(
      `accounts/${user}.json`,
      `{
        "user": "${user}",
        "name": "${name}",
        "surname": "${surname}",
        "email": "${email}",
        "password": "${password}"
      }`,
      (err) => {
        console.log(err)
      }
    )
    return true
  }
}

module.exports = router