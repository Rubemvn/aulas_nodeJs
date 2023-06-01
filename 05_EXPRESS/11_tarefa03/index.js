const express = require('express')
const path = require('path')
const app = express()
const loginRoutes = require('./users')

const port = 5000


app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', loginRoutes)

app.get('/', (req, res)=> {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, (req, res)=> {
  console.log(`The server is running on port: ${port}`)
})