// Export

// 변수
var item = 'apple';
exports.item  = item;

// 함수
var getname = function() {
    console.log(item + '입니다')

}
exports.getName = getName;

// Object
var obj = {
    name: '바나나',
    price: 2500,
    store: 'myMarket'
}
exports.obj = obj;