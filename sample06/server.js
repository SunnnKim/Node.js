var http = require('http')

// web server create

var server = http.createServer();     // 서버를 만들어 줌

// port number setting ( port number binding)
var port = 8000;

server.listen(port, () => {
    console.log('server start: %d', port)
});  // start server

// client connect
server.on('connection', socket => {
    var addr = socket.address();
    console.log('client connect: %s %d', addr.address, addr.port)
})

// 
server.on('request', (request, response) => {
    console.log('client 요청이 들어왔습니다')
    response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
    response.write('<!DOCTYPE html>')
    response.write('<html>')
    response.write('<head>')
    response.write('<title>응답페이지')
    response.write('</title>')
    response.write('<body>')
    response.write('<h1>Server로부터 응답입니다.')
    response.write('</h1>')
    response.write('</body>')
    response.write('</body>')
    response.write('</html>')
    response.end();

});