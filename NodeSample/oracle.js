var oracledb = require('oracledb');
var util = require('./util.js') // util 함수들 불러오기 ( db connection 세팅하기4)

oracledb.autoCommit = true;

oracledb.getConnection({
    user: 'hr', password: 'hr',
    host: 'localhost',
    database: 'xe'
}, (err, conn) => {
    if(err) console.log('DB connect fail', err)
    console.log('DB connect success')
    util.setConn(conn);
})
