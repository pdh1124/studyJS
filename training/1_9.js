function hello(name) {
    console.log('hello ' + name + '!');
}

hello('park');

//ES6란
//ECMAScript 6를 의미하며 자바스크립트의 버전을 가르침
//= ES2015라고 도 함
//ES7, ES8, ES9, ES10, ES11까지 나옴 이후로 조금씩 업데이트 되고 있음

function hello_es6(name) {
    console.log(`Hello  ${name_es6}!`);
}
hello('park');


function hello_es6_return(name) {
    return `Hello  ${name_es6_return}!`;

    //return 이 사용되는 순간 함수가 종료됨
    //그래서 return밑으로 작업을 해도 적용이 안됨
}

const result = hello('kim');
console.log(result);
