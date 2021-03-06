'use strict';
console.clear();
//function
//매일 쓰는 다양한 프로그램들은 각각 저마다 제공하는 기능들이 있다.
//프로그램 안에서도 각각 저마다의 기능들을 수행하는 함수(function)들이 있다.
//   파라미터(input x)
// ┌-\  ↓  /-------------┓
// │                     │
// │        함수         │
// │                     │
// └-------------/ ↓ \---┘
//                결과(output f(x))


// - 프로그램을 구성하는 굉장히 기본적인 빌딩 블록
// - 서브프로그램이라고도 불리며 여러번 재사용이 가능하다는 장점이 있음
// - 한가지의 테스크나 아니면 어떤 값을 개선하기위해 쓰임

// 정의하는 방법
// function name(param1, param2) {body... return;}
// 기본 구성으로 function에 함수명을 정하고 (파라미터를 나열한다음) 함수의 기본적인 비즈니스 로직을 작성한 다음 리턴을 해주면 됨

// one function === one thing 
// 중요한 포인트는 하나의 함수는 한가지 일만 하도록 만들어야 함

// naming: doSomething, command, verb
// 이름을 정할땐 무엇을 동작하는 형식이기 때문에 명령형식,동사형식으로 해야한다.

//ex) createCardAndPoint -> createCard, createPoint로 세분화 할것

//function은 object의 일종이다.


function printHello() {
    console.log('hello');
}
printHello();

//이것보다는

function consoleLog(message) {
    console.log(message);
}
consoleLog('Hi my friend');
consoleLog(2352352);


//2. Parameters
//premitive parameters: 메모리에 value가 그대로 저장되기 때문에 value가 전달이 되고
//object parameters: 메모리에 reference가 저장되어 지기 때문에 reference가 전달됨
function changeName(obj) {
    obj.name = 'coder';
    //obj에 전달된 이름을 coder로 무조건 변경하는 함수를 만듦
}
const ellie4 = { name: 'kim ellie'};
changeName(ellie4); 
//changeName라는 새로 만든 함수에 ellie4를 넣게되면 ellie4에 있는 이름 kim ellie를 coder로 변경함
console.log(ellie4);




//3. Default parameters (ES6에 추가 됨)
function showMessage(message, from) {
    //예전에는 값이 없을 경우 if문처럼 써야했는데 es6이후엔 생략 가능
    //if(from === undefined) {
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`)
}
showMessage('Hi!'); // Hi! by undefined


//4. Rest parameters (ES6에 추가 됨)
// ...을 작성하게 되면 Rest parameters라고 불리는데 이것은 바로 배열형태로 전달되게 됨
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    //이런 형식으로도 출력 가능 (for of)
    for (const arg of args) {
        console.log(arg);
    }
    //더 간단하게는 하고 싶으면 (배열의 forEach문)
    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');



//5. local scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼수 있다.
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();
// console.log(message); 밖에서 출력하게 되면 에러가 발생함



//6. Return a value
function sum(a, b) {
    return a + b;
    //return이 없는 함수는 return undefined;가 존재하는 함수
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);



//7. early return, early exit 현업에서 쓰는 팁

// bad
function upgradeUser(user) {
    //user.point가 얼마 이상일 때 이렇게 한다라고 작성하게 되면
    //가독성이 떨어진다. if와 else를 반복해서 쓰는것 보다는
    if (user.point > 10)  {
        //long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    //조건이 맞지 않을때는 빨리 return을 해서 함수를 종료하고 
    //조건이 맞을때만 필요한 로직을 실행하는 것이 더 좋다.
    if (user.point <= 10)  {
        return;
    }
    //long upgrade logic...
}




//function expression (함수 표현식)

//First-class function
//함수를 변수나 자료구조에 저장할 수 있다.
//함수의 매개변수(인자)에 다른 함수를 인수로 전달할 수 있다.
//함수의 반환 값(return 값)으로 함수를 전달할 수 있다.

//1. function expression
//print(); 이라고 먼저 호출하게 되면 에러가 뜸 (function declaration은 가능함)
const print = function () { //함수에 이름이 없는것을 anonymous function이라고 함
    console.log('print');
    //필요한 부분만 작성해서 변수에 할당할 수 있다.
}

print();
const printAgain = print;
printAgain();
const sumAgain = sum; //106번째 줄에 함수 만들어 둠
console.log(sumAgain(1, 3));



//2. callback function (콜백 함수)
//randomQuiz함수에서 answer(정답)과 
//printYes(정답의 맞을때 호출하게 될 함수)와 
//printNo(정답이 틀릴때 호출하게 될 함수) 이 함수들 두개를 전달해 주는데
//이렇게 함수를 전달해서 상황이 맞으면 이 전달된 함수를 부르게 하는것이 콜백 함수이다.
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

//anonymous function : function뒤에 print가 안붙음
const printYes = function () {
    console.log('yes!');
};
//named function : function뒤에 print가 붙음
//better debugging in debugger's stack traces 디버깅할때 스택추적에 함수의 이름이 나오게 할때 쓰임 
//recursions 함수 안에서 자신 스스로 또다른 함수를 호출할때 씀
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);




//Arrow function (화살표 함수)
//함수를 너무 간결하게 만들어 주는 함수
//화살표 함수는 항상 이름이 없는 anonymous function이다.
const simplePrint = function () {
    console.log('simplePrint!');
}
//를
const simplePrint_2 = /*function*/ () /*{*/ => console.log('simplePrint!');/*}*/
//function과 {}를 빼고 한줄로 만든다.
const simplePrint_3 = () => console.log('simplePrint!');

const addArrow = (a, b) => a + b;
//대신 여러 함수를 사용해 행을 넓힌다면 {}를 사용해야 함


//IIFE : Immediately Invoked Function Expression(즉시 호출 된 함수 표현식)
//선언 함과 동시에 호출 하려면
(function hello_Iife() {
    console.log('IIFE');
})();
//()로 함수를 감싸고 ();처럼 함수를 호출하면 됨


/*함수 기본 정렬 */
/*
어떤 언어든 2가지만 이해하면 됨
함수를 선언하는 것과 함수를 호출하는 것
*/

//함수 선언
/*
function[함수를 선언한다고 지정함] doSomething[원하는 이름의 함수를 지정함] ()[소괄호 안에는 우리가 어떤 값을 전달 받아 올껀지 전달 받는 인자를 정리하는 부분과] {
    console.log('hello'); [함수안에 작동될 코드]
}[중괄호는 실제로 함수안에서 어떤 코드가 동작하는지 코드를 작성하는 부분으로 나눠짐]
*/

//함수 호출
/*
doSomething(); [함수를 호출할때는 함수의 이름을 적고 소괄호를 넣어 함수를 실행한다.]
*/


/*
그리고 함수는 2가지 타입이 있는데 하나는 어떤 기능을 수행하고 그냥 끝나는 함수가 있고
또는 어떠한 계산을 한다음에 특정한 값을 전달하는 함수가 있다.
*/

/*
function add(a, b) [소괄호 안에는 a와 b라는 특정한 인자값들을 받아와서 코드를 수행함] {
    const sum = a + b; [그래서 a와 b의 값을 더한다음에 sum 이라는 변수에 할당한다.]
    return sum; [return을 해주지 않으면 sum을 계산하고 전달하지 않음 그래서 return을 넣어 계산한 sum값을 전달함]
}
*/
//함수 호출
/*
const result = add(1, 2); [a와 b에 1과 2라는 값을 add함수에 삽입해 넣은 값을 받은 변수를 만듦]
console.log(result); [add라는 값을 할당한 변수 result를 콘솔창에 띄우는 명령을 함]
*/


//함수를 인자로 전달
/*
function doSomethingTwo(add_inja) {
    console.log(add_inja);
    const result = add_inja(2, 3);
    console.log(result);
}

function add_inja(a, b) {
    const sum = a + b;
    return sum;
}

doSomethingTwo(add_inja());
*/

/*
264줄에 doSomethingTwo에 있는 인자 add_inja를 먼저 실행해서
259줄에 있는 함수 add_inja가 먼저 실행되는데 a와 b는 숫자값이 아니라 문자열이라서 더할수가 없다.
그리고 253의 doSomethingTwo의 add_inja라는 인자를 넣어 불러오는데
255에 있는 result에 add_inja에 인자를 2와 3을 넣어 259가 실행이 되서 5의 값을 ruturn을 하고
console.log(add_inja);라는 함수는 
function add_inja(a, b) {
    const sum = a + b;
    return sum;
}
가 실행되고
console.log(result);는 255 줄에서 받아온 값 5를 출력하게 된다.
*/
