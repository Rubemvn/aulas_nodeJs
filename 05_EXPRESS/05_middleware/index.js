const express = require("express")
const path = require("path")
const port = 3000
const app = express()
const basePath = path.join(__dirname, "templates")

const checkAuth = (req, res, next) => {
  req.authStatus = true

  if (req.authStatus) {
    console.log("Está logado, pode continuar")
    next()
  } else {
    console.log("Não está logado. faça o login para continuar")
    next()
  }
}

app.use(checkAuth)


app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`)
  console.log("ola")
})


app.listen(port, () => {
  console.log(`The server is runing on port: ${port}`)
})