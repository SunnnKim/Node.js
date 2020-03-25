
// export
const foo = require('./foo.js');    // import

console.log( foo.aa );  // 외부에서 export 한 변수 또는 함수를 import 해서 사용

// cal import
var _cal = require('./cal.js');

num1 = 3;
num2 = 4;
console.log( _cal.add(num1, num2) )


