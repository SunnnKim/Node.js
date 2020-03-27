
// 외부에서 사용할 유틸함수
// dbconnect setter
module.exports.setConn = (conn)=>{
    this.conn = conn;
}
// dbconnect getter
module.exports.getConn = () => this.conn;
