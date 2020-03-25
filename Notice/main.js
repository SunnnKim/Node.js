// Server

var http = require('http')
var fs = require('fs')
var express = require('express')
var oracledb = require('oracledb')
var ejs = require('ejs')

var app = express();

// auto-commit 설정
oracledb.autoCommit = true;
// db connection
var dbconn;
// Parameter 설정
var bodyParser = require('body-parser');
// parameter 사용하기 위한 설정
app.use( bodyParser.urlencoded({extended:true}))    
//
oracledb.getConnection({
    user: 'hr', password: 'hr',
    host: 'localhost',
    database: 'xe'
}, (err, conn) => {
    if(err) console.log('DB connect fail', err)
    console.log('DB connect success')
    dbconn = conn;
})
// server
var server = http.createServer(app);
server.listen(8000, ()=> {
    console.log('web Server 실행...')
});


//
app.get('/', (request, response) => {
    fs.readFile(__dirname + '/write.html', (err, data) => {
        console.log('write.html connect succeed')
        response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
        response.write( data )
        response.end()
    })
})

app.post('/register', (request, response) => {
    console.log('/register connect succeed')


    // parameter --> data 수집
    // post => body로 받기
    // get  => params로 받기
    var writer = request.body.writer // == requset.getParameter 과 비슷한 역할
    var title = request.body.title;
    var content = request.body.content; 
    
    // get 일때
    // var getParameter = request.params.writer;  이런식으로 받음
    
    console.log(writer);
    console.log(title);
    console.log(content);

    // sql 쿼리문 넣고 실행
    dbconn.execute("insert into notice(writer, title, content) values('" + writer + "', '" + title + "', '" + content + "')",
        (err, result) => {
            if(err) {
                console.log('등록중 에러발생:' + err)
            }else{
                console.log('등록성공')
                // list로 이동함
                response.redirect('list')   // == sendRedirect

            }
        });   
})

app.get('/list', (request, response) => {
    console.log('/list connect success')

    // db에서 리스트목록 가져오기
    dbconn.execute('select * from notice',{},{outFormat:oracledb.OBJECT}, (err, result)=>{
        if(err){
            console.log('에러발생:' + err)
        }else{
            console.log(result)
            console.log('rows:'+result.rows)

            //Stringn 변경 
            var json = JSON.stringify(result.rows);

            // Json으로 변경
            var arr = JSON.parse(json);
            console.log(arr);   // 사용하기 쉬운 상태의 데이터들

            fs.readFile(__dirname + '/list.ejs', 'utf-8', (err, data)=>{
                if(err){
                    console.log('읽기실패:' + err)
                }else{
                    response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
                    response.end( ejs.render(data, { arrlist:arr }) ) 
                }
            })


        }
    })
})


