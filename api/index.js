const express = require('express')
const app = express()

app.get('/', function (_, res) {
  res.send('HelloWorld')
})

module.exports = {
  path: '/api/',
  handler: app,
}
