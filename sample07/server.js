
var http = require('http');
var fileSystem = require('fs');

http.createServer( (request, response) => {
    
    // file read (html)
    // __dirname : 현재경로를 불러옴
    fileSystem.readFile( __dirname + '/demo.html', (err, data) => {
        
        if(err) console.log(err)
        else console.log('read file success')

        if( request.method == 'GET' ){  // get 으로 접근
            response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
            response.write( data )
            response.end()
        }

    }) 

}).listen(8000);

