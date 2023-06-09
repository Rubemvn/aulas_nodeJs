const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

app.engine('.hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.get('/dashboard', (req, res) => {

  const items = [
    {
      id: "h8s1d1fhj2",
      item: "Banana"
    },
    {
      id: "k5j6h7gh34",
      item: "Maçã"
    },
    {
      id: "ghj3g0g5s4",
      item: "Tangerina"
    },
  ]

  const frase = "Esses são os itens de sua frutaria"

  res.render('dashboard', {items, frase})
})

app.get('/', (req, res) => {

  res.render('home')
})

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`)
})