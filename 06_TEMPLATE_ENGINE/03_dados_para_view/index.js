const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

app.engine('.hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
  const user = {
    name: 'Rúbem',
    surname: 'Vieira',
    age: 21
  }

  const aboutUs = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  res.render('home', { user: user , aboutUs})
})

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`)
})