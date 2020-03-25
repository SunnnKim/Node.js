
/*

    MySql, MongoDB <=> Node.js 자주 사용
    
*/

var oracledb = require('oracledb')
var config = {
    connectString: 'localhost/xe',
    user: 'hr',
    password: 'hr'
}


oracledb.getConnection(config, (err, conn) => {
    if(err){
        console.log('접속에 실패했습니다', err);
        return;
    }

    console.log('접속 성공');

    
})