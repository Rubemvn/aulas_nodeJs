const express = require("express")
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.use(
  express.urlencoded({
    extended: true,
  })
)
router.use(express.json())
app.use(express.static('./public'))



router.post('/save', (req, res) => {
  console.log(req.body)
  
  const name = req.body.name
  const age = req.body.age
  
  console.log(`O nome do usuário é ${name} e ele tem ${age} anos de idade.`)
  
  res.sendFile(`${basePath}/userform.html`)
})


router.get('/create', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  console.log(`Estamos buscando pelo usuário com o id: ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

module.exports = router


