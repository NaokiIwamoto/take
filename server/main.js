'use strict';
const express = require('express')
const app = express()
app.use(express.static('../public'))

app.get('/get', (req, res) => {
  // ここでAmazon API呼び出せばいい感じになりそう
  res.send('Simple REST API')
})

app.listen(8001, ()=> {
  console.log('Express Server 01')
})
