const express = require('express')
const app = express()
const hello = require('./hello')

const port = 3000

app.listen(port)
console.log("App is running on port: " + port)


app.get('/hello', hello.sendHello)