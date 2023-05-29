import express from "express"

const app = express()
const port = 3000 // variavel ambiente

app.get('/', (req, res) => {
  res.send("Olá, mundo!")
})

app.listen(port, ()=> {
  console.log(`Server is running on port: ${port}`)
})