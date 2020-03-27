
var oracledb = require('oracledb')
var express = require('express')
var app = express.Router(); // 라우터 설정

var session = require('express-session')

// DB connection
// util함수에 접근
var db = require('../util')
var oracle = require('../oracle');

app.get('/bbslist', (request, response) => {
    console.log('/bbslist 접속성공')
    console.log('session id:' + request.session.user_id );
    
        var conn = db.getConn();
        conn.execute("SELECT SEQ, ID, REF, STEP, DEPTH, TITLE, CONTENT, WDATE, DEL, READCOUNT FROM BBS ORDER BY REF DESC, STEP ASC",
             {},{outFormat:oracledb.OBJECT},(err, result)=>{
                    if(err) console.log('err:' + err);

                    str = JSON.stringify(result.rows)
                   // console.log(str)
                    json = JSON.parse(str);
                   // console.log(json)

                   response.render('bbslist.ejs', { 
                        user:request.session.user_id,
                        datas:json });  // 경로,

                })
})


// server로 export 설정
module.exports = app;