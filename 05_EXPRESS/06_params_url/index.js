const express = require('express')
const path = require('path')
const port = 3000
const app = express()
const basePath = path.join(__dirname, 'templates')


app.get('/users/:id', (req, res)=> {
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