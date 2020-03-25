
var a = 10;
var str = '타이거즈';

// console.log('%d',a);
// console.log('%s',str);
// console.log('hello ' + str + "node.js") ;


// var Person = {}
// // json 방식으로 배열만들기
// Person['age'] = 24;
// Person['name'] = '홍길동';
// Person.mobile = '010-1111-2222';

// console.log('나이: %d', Person.age)
// console.log('번호: %s', Person.mobile)
// console.log('이름: %s', Person.name)

function multi(a, b) {
    return a * b;
}

var c = multi(255, 35);
console.log('%d * %d = %d', 255, 355, c);

var human = {
    age: 25,
    name: '홍길동',
    multi: function(a, b){
        return a * b;
    }
}

console.log(human.multi(30,50))
console.log('%s', human.name)



// json
var Users = [
    { name: '홍길동', age:24 },
    { name: '일지매', age:27 }
]

// json 배열 접근
console.log(Users[1].name)

// json 데이터 추가
Users.push({
    name:'zz',
    age:'22',
    key:'value'
})

console.log(JSON.stringify(Users[2]))

// json 길이값
console.log('User length:' + Users.length)

// json 관련 함수들
/*
    push(obj)    : 맨 끝에 요소를 추가
    pop()        : 맨 끝 배열 뽑아서 삭제
    unshift(obj) : 맨 앞에 요소를 추가 
    shift()      : 맨 앞의 요소를 추가
    splice()     : 여러 요소를 추가/삭제
    slice()      : 여러 요소를 취득하여 새로운 배열 생성
*/

