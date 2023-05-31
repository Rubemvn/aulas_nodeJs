const express = require('express')
const path = require('path')
const port = 3000
const app = express()
const basePath = path.join(__dirname, 'templates')


app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.get('/users/create', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
  // console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos de idade.`)

  res.sendFile(`${basePath}/userform.html`)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id

  console.log(`Estamos buscando pelo usuário com o id: ${id}`)

  res.sendFile(`${basePath}/users.html`)
})





app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})
app.listen(port, () => {
  console.log(`The server is runing on port: ${port}`)
})