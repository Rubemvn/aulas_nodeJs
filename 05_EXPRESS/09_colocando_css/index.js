const express = require('express')
const port = 3000
const app = express()

const path = require('path')

const usersRoutes = require('./users')

app.use(
  express.urlencoded({
    extended: true,
  })
)

function teste(abc, def){
  let jurema = abc
}

app.use(express.json())

app.use(express.static('./public'))

const basePath = path.join(__dirname, 'templates')

app.use("/users", usersRoutes)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})
app.listen(port, () => {
  console.log(`The server is runing on port: ${port}`)
})