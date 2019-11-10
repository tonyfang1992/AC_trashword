const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const trashWord = require('./trashword')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const Word = trashWord(req.body)
  res.render('index', { options: options, Word: Word })
})
//starts the express server and listen for connections
app.listen(port, () => {
  console.log(`this web is listening on http://localhost:${port}`)
})