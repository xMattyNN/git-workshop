const express = require('express')
const app = express()
const hello = require('./hello')

app.listen(3000)

app.get('/hello', hello.sendHello)