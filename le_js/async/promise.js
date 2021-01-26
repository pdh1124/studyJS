'use strict';
console.clear();
//promise (약속)
//자바스크립트에서 제공하는 비동기를 간편하게 처리하게 할수 있도록 도와주는 오브젝트이다.
//promise는 정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행이 이뤄졌다면
//성공의 메세지와 처리된 결과값을 전달해주고, 기능을 수행하다가 예상치 못한 문제가 발생했다면
//에러를 전달해준다.

//promise는 자바스크립트안에 내장되어있는 오브젝트
//비동기적인 것을 수행할때 콜백함수 대신에 유용하게 쓸수있는 오브젝트

//1. state(상태)에 대해 이해하기
//state: promise가 만들어져서 우리가 지정한 오퍼레이션이 수행중일때는 pending상태가 된다.
//-> 이 오퍼레이션을 성공적으로 끝내게 되면 fulfilled상태가 된다.
//-> 이 오퍼레이션을 파일을 찾을수 없거나 네트워크에 문제가 생긴다면 rejected상태가 됨


//2. producer프로듀싱(제공자), consumer컨슈머(사용자)의 차이를 알기


//producer파트
//promise를 만드는 순간 바로 실행되기 때문에 불필요한 네트워크 통신을 하게 됨
//새로운 promise가 만들어 질때는, 우리가 전달한 executor라는 함수가 바로 실행이 됨
const promise = new Promise((resolve, reject) => {
    //promise안에서 조금 무거운 일들을 함 (네트워크 통신, 파일을 읽어오는것은 비동기적으로 처리하는게 좋음)
    //네트워크에서 데이터를 받아오거나 파일에서 무언가 큰 데이터를 읽어오는 과정은
    //시간이 꽤 걸린다.
    //그런것을 동기적으로 처리하게 되면 위가 파일을 읽어오고 네트워크 데이터를 받아오는 동안
    //그 다음라인의 코드가 실행되지 않기 때문에
    //시간이 조금 걸리는 일들을 이렇게 promise를 만들어서 비동기적으로 처리하는것이 좋다.
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
});

// 2.Consumers: then, catch, finally로 값을 받아올 수 있음
// then이라는 것은 promise가 정상적으로 잘 작동되어서 마지막에 최종적으로 resolve라는 콜백한 값이
// then의 value의 파라미터로 전달되어져서 들어오는걸 볼 수 있음
promise.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
//finally는 성공이나 실패와 상관없이 무조건 마지막에 호출한다.
.finally(() => {
    console.log('finally');
});

//3.promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


//4. 오류 처리법
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('암탉'), 1000);
    });
//정상적일때
// const getEgg = hen =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${hen} => 계란`), 1000);
//     });
//문제가 생겼을때    
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 계란`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log);