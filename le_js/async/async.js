'use strict';
console.clear();

//async과 await는 promise를 조금더 간결하고 간편하고 동기적으로 보이게 만들어주는 명령
//promise는 여러가지로 체인링을 할수 있다.

//async & await
//깔끔하게 promise를 사용하는 법


//1. async

//사용자의 데이터를 백엔드에서 받아오는 함수를 만듦

//만약 데이터를 받아오는데 10초정도 걸릴다고 가정했을때
//10초동안 이용자는 빈 페이지를 볼수 밖에 없기 때문에
//이렇게 오래걸리는 일들을 비동기적으로 처리할수 있게 해줘야 한다.
//그래서 이전에 Promise()로 만들었다.

/* 기존에 사용했던 retrun new Promise방식
function fetchUser() {
    //do network reqeust in 10 secs...
    //네트워크에서 데이터를 받아오는데 10초정도 걸리는 함수가 있다고 가정

    // return 'ellie';
    return new Promise((revolve, reject) => {
        revolve('ellie');
    });
}
*/

//async로 수정하면 function 앞에다가 async를 붙인다.
async function fetchUser() {
    //네트워크에서 데이터를 받아오는데 10초정도 걸리는 함수가 있다고 가정

    return 'ellie';
}


const asyncUser = fetchUser();
asyncUser.then(console.log);
console.log(asyncUser);




//2. await 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    //await라는 키워드는 async가 붙은 함수 안에서 쓸수 있는데
    await delay(4000);
    // throw 'error';
    return '사과';
}

async function getBanana() {
    await delay(3000);
    return '바나나';
}
/* 같은 함수
function getBanana() {
    return delay(3000)
    .then(() => 'banana');
} */


/*
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`)
    });
}
pickFruits().then(console.log);
*/

//이런식으로 async와 await를 사용해 간편하게 바꿈
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    /*
    getApple과 getBanana의 함수를 동시에 실행 시키면서 받아오면
    6초의 딜레이를 3초,3초의 따로따로 딜레이 시켜 3초의 딜레이만 있으면 된다.
    병렬구조
    */
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);




//3. useful Promise APIs (유용한 API들)
function pickAllFruits() {
    /*
    promise.all이라는 api를 쓰면 promise배열을 전달하게 되면
    모든 promise들이 병렬적으로 다 받을때까지 모아주는 것
    */
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);


//어떤것이든 상관없이 첫번째 오는 과일만 받아오고 싶다.
function pickOnlyOne() {
    /*
    Promise.race는 배열에 전달한 promise중에서 
    가장 먼저 값을 리턴하는 아이만 전달하게 된다.    
    */
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log);