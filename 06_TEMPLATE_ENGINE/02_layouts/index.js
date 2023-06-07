const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

app.engine('.hbs', exphbs.engine({extname: '.hbs'}))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, ()=>{
  console.log(`The server is running on port: ${port}`)
})