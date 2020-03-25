
console.log('url sample')

// url parameter
var url = require('url')    // require : Node.js에서 import와 동일 (java.lang.util.* ...)
// url관련 함수들 import

var address = 'http://localhost:9000/default.html?year=2020&month=3'
var q = url.parse(address, true);   // url data parsing 
console.log(q.host);        // host address
console.log(q.pathname);    // path    
console.log(q.search);      // parameter

// parameter data parsing
var qData = q.query;    // parameter -> Json
console.log(qData)          // Json Object
console.log(qData.year)     // Json Object value        
console.log(qData.month)    // Json Object value


