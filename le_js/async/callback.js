'use strict';
console.clear();

//콜백 함수라는 것은 '우리가 전달해준 함수를 나중에 니가 불러줘'라는 개념
//1. 동기와 비동기
//Javascript is synchronous. 자바스크립트는 동기적이다.
// 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서
// 하나하나씩 동기적으로 실행된다는 말

//호이스팅 : var, function declaration 등이 자동적으로 제일 위로 올라가는 것

console.log('1');
setTimeout(function () {
    console.log('2');
}, 1000);
console.log('3');

//즉각적인 콜백 함수 (Synchronous callback)
function printImmediately(print) {
    print();
}
//함수를 맨위로 올린다.

printImmediately(() => console.log('hello'));

//나중에 언제 작동할지 예측할수 없는 콜백 함수 (Asynchronous callback)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
//함수를 맨위로 올린다.

printWithDelay(() => console.log('async callback'), 2000);


//callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'kim123' && password === '12345679') ||
                (id === 'park123' && password === 'aasdasd')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('Sorry, not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'kim123') {
                onSuccess({
                    name: 'kim bab',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }
)