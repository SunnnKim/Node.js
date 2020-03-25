
// modules
var http = require('http');         // 기본모듈
var fs = require('fs');             // 기본모듈
var express = require('express');   // 터미널에서 npm install express 입력해서 모듈 다운

// module 받아오기
var app = express();

// module로 서버 동작함
var server = http.createServer(app);

server.listen(8000, () => {
    console.log('웹서버 가동중 : ')
});

// get
app.get('/', (request, response) => {
    console.log('connect success')
    fs.readFile(__dirname + '/index.html', (err, data) => {

        if(err) console.log(err)
        else console.log('read file success')

        if( request.method == 'GET' ){  // get 으로 접근
            response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
            response.write( data )
            response.end()
        }
    })

})
// get
app.get('/main', (request, response) => {
    console.log('connect success')
    fs.readFile(__dirname + '/main.html', (err, data) => {

        if(err) console.log(err)
        else console.log('read file success')

        if( request.method == 'GET' ){  // get 으로 접근
            response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
            response.write( data )
            response.end()
        }
    })

})

// post
// app.post


