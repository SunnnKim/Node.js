
var oracledb = require('oracledb')
var express = require('express')
var app = express.Router(); // 라우터 설정

var session = require('express-session')

// DB connection
// util함수에 접근
var db = require('../util')
var oracle = require('../oracle');

// Parameter 설정
var bodyParser = require('body-parser');
// parameter 사용하기 위한 설정
app.use( bodyParser.urlencoded({extended:true}))    


// session
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    })
)




// 이동할 페이지의 link (Controller + Dao의 역할)

// index.html
app.get('/',(request, response)=>{
    console.log('/ 접속성공')
    // html 파일 읽어옴
    response.render('index.html');
})

// login
app.get('/login',(request, response)=>{
    console.log('/login 접속성공')
    response.render('login.html');
})

// regi
app.get('/regi',(request, response)=>{
    console.log('/reig 접속성공')
    response.render('regi.html');
})

// idcheck
app.post('/idcheck', (request, response)=>{
    console.log('/idcheck 접속성공')
    var id = request.body.id;
    
    // db
    var conn = db.getConn();
    conn.execute("SELECT COUNT(*) FROM MEMBER WHERE ID = '" + id + "'", (err, result)=>{
        if(err) console.log('err:', err) 
        console.log('result:' + result.rows);
        if(result.rows == 0){
            response.send({result:'YES'})   // ajax일 때는 send 쓴다
        }else{
            response.send({result:'NO'})
        }
    } )

})

// regiAf
app.post('/regiAf', (request, response)=>{
    console.log('/idcheck 접속성공')

    var id = request.body.id;
    var pwd = request.body.pwd;
    var name = request.body.name;
    var email = request.body.email;

    console.log(id)
    console.log(pwd)
    console.log(name)
    console.log(email)
    
    var conn = db.getConn();

    conn.execute("INSERT INTO MEMBER VALUES( :id, :pwd, :name, :email, 3 )",[id, pwd, name, email], (err, result) =>{
    // conn.execute("INSERT INTO MEMBER VALUES( '" + id + "','" + pwd + "','" + name + "','" + email + "', 3 )", (err, result) =>{
        if(err) console.log("err:"+err);
        console.log('insert success')
        response.redirect('login');


    })
})


// 로그인 이후 작업
app.post('/loginAf', (request, response)=>{

    console.log('/loginAf 접속성공')

    var id = request.body.id;
    var pwd = request.body.pwd;

    var conn = db.getConn();

    conn.execute("SELECT ID, NAME, EMAIL, AUTH FROM MEMBER WHERE ID=:id AND PWD=:pwd",
     [id, pwd], { outFormat:oracledb.OBJECT},(err, result)=>{
        if(err) console.log('select err:'+err)
      
        console.log('result: ' + result)
        
        if(result.rows != 0){
            json = JSON.stringify(result.rows[0])
            console.log(json);
            var arr = JSON.parse(json);
            console.log(arr.ID);
            
            // session에 아이디 저장
            request.session.user_id = request.body.id;

            // 이동
            response.redirect('bbslist')


        }else{
            // 로그인이 안 된 경우
            response.redirect('login')
        }
    
    })
});
    





// server로 export 설정
module.exports = app;