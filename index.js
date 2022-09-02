const express = require('express')

const PORT = 3001

const HOST = '127.0.0.1'

const app = express()

// App
app.get('/', (req, res) => {
  res.send(`{"text":"Hello remote world!"}`)
})

app.listen(PORT, HOST)

console.log(`Running server on http://${HOST}:${PORT}`)
