const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

app.engine('.hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.get('/dashboard', (req, res) => {
  const user = {
    name: 'Rúbem',
    surname: 'Vieira',
    age: 21
  }
  const auth = false

  const approved = false
  
  const aboutUs = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

  res.render('dashboard', { user , aboutUs, auth, approved})
})

app.get('/', (req, res) => {

  res.render('home')
})

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`)
})