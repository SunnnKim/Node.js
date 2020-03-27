var express = require('express')
var app = express.Router();
var fs = require('fs')

app.get('/arrow', (request, response)=>{
    fs.readFile(__dirname + '/../image/arrow.png', (err, data)=>{
        response.end(data)
    })
})

module.exports = app;