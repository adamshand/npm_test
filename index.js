const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1>yo yo.</h1>')
})

app.listen(port, function () {
  console.log('Server listening on port:', port)
})

