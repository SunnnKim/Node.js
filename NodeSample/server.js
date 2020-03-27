// SERVER

var express = require('express')
var app = express();

// controller와 연결
var member = require('./router/member.js')      // member.js와 연결 (인스턴스로 만듦)
var bbs = require('./router/bbs.js')         // bbs.js와 연결 (인스턴스로 만듦)
app.use(member) // express와 연결함
app.use(bbs) // express와 연결함

// resource
var resource = require('./router/resource.js')
app.use(resource);  // 이미지 등 리소스 


// views 폴더와 연결
app.set('views', __dirname + '/views');     // 폴더 설정 및 경로 연결

// respond통해서 render메소드 사용할 때 *.ejs 확장자명을 생략할 수 있도록 설정
app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile)
 
// 서버 켜기
var server = app.listen(8000, ()=>{
    console.log('Web Server Start...')
})

