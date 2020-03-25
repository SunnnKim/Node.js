// 기본 모듈 세팅
var http = require('http');
var fileSystem = require('fs');
var express = require('express');

var app = express();

var server = http.createServer(app);

// views 폴더 경로 설정
app.set('views', __dirname + '/views');

// css
var myCss = {
    // 지원되는 함수 : 
    style: fileSystem.readFileSync(__dirname + '/css/style.css', 'utf-8')
}

app.get('/', (request, response) => {
    // rendering ejs file
    // ejs 파일 : 
    response.render('index.ejs', 
    {
        title: '제목입니다',
        mycss: myCss
    })

})

server.listen(8000, () => console.log('웹서버 동작중'))



