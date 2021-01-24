'use strict';
console.clear();
//연산·반복문

//1. String concatenation (문자열 덧셈)
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//행 바꿈 가능
console.log(`string literals: 
1 + 2 = 
${1 + 2}`);
//보통 ''의 경우 \n을 해줘야 함(\t는 탭)
console.log('hello \nworld');



//2. Numeric operators(숫자의 연산)
console.log(1 + 1); //add 덧셈
console.log(1 - 1); //substract 뺄셈
console.log(1 / 1); //divide 나누셈
console.log(1 * 1); //multiply 곱셈
console.log(5 % 2); //remainder 나머지 === 1
console.log(2 ** 3); //exponentiation  === 2의 3승



//3. Increment and decrement operators ()
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; 
// preIncrement = counter;  === 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// --도 동일하게 적용되서 -1을 함



//4. Assignment operators(할당하는 연산자)
let x_2 = 3;
let y_2 = 6;
x_2 += y_2; //x = x + y
x_2 -= y_2; //x = x - y
x_2 *= y_2; //x = x * y
x_2 /= y_2; //x = x / y



//5. Comparison operators(비교하는 연산자)
console.log(10 < 6); //크다
console.log(10 <= 6); //크거나 같다 
console.log(10 > 6); //작다
console.log(10 >= 6); //작거나 같다



//6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2; //false

// || (or): or 연산자는 처음 앞부분이 true가 나오면 뒤에 있는 연산을 멈춤
// 왜냐하면 하나만 true가 되면 값이 true가 되기 때문이다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and): and연산자는 처음 앞부분이 false가 나오면 뒤에 있는 연산을 멈춤
// 왜냐하면 하나라도 false가 되면 값이 false가 되기 때문이다.
console.log(`or: ${value1 && value2 && check()}`);

// and연산자는 간편하게 null체크할때도 사용 
//ex) nullableObject && nullableObject.something
// 이 오브젝트가 null이 아닐때만 뒤에 null.something을 가져오게 된다.
// if (nullableObject != null) {
//     nullableObject.something;
// };

// || 와 &&든 앞부분에 반대 값이 나오면 뒤에 연산을 하지 않기 때문에
// 불필요한 연산을 방지하기 위해서 무거운 연산일수록 뒤로 보내야 한다.

// !(not) true를 false로, false을 true로 변경
console.log(!value1);

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('ㅠㅠ');
    }
    return true;
}



//7. Equality (==, ===)

const stringFive = '5'; //문자열 5
const numberFive = 5; //숫자열 5

// == 일때는, 타입을 보지 않고 값만 비교
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// ===일때는, 값이 같더라도 타입이 다르면 안됨(대부분 이걸 사용)
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// note!
// object를 신경써서 공부해야함
// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1

console.log(ellie1 == ellie2); //false 
//1과 2는 똑같은 데이터가 들어있는 오브젝트지만 
//실제로 메모리에는 각각 다른 레퍼런스가 들어있고 
//그 다른 레퍼런스는 서로 다른 오브젝트를 가르키고 있음
console.log(ellie1 === ellie2); //false
console.log(ellie3 === ellie3); //true




//8. Conditional operators: if문
// if, else if, else
const name_2 = 'coder';
if (name_2 === 'ellie') {
    console.log('welcome, ellie!');
} else if(name_2 === 'coder') {
    console.log('you are amazing coder');
} else {
    console.log('unkwnon');
}


//9. Ternary operators: ?
//condition ? valie1 : value2;
//if문을 간단하게 만드는 연산자
console.log(name_2 === 'ellie' ? 'yes' : 'no');



//10. Switch statement
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'chrome':
    case 'Firefox':
        console.log('i love you');
        break;
    default:
        console.log('same all!');
        break;
}



//11. Loop (반복문)
let i = 3;

//while반복문
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do 반복문
//do 반복문은 while반복문과 다르게 출력을 먼저한후에 조건을 검사한다.
do {
    console.log(`do while: ${i}`); 
    i--;
} while (i > 0);


//for 반복문
//for (begin; condition; step)
//begin은 1번만 실행되고 condition과 step을 반복하여 살행
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
    //for문 안에 let이라는 지역변수를 넣어서 사용해도 가능
    console.log(`inline variable for: ${i}`);
}

//nested loops for문 안에 for문 사용 가능
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


//break(루프를 완전히 끝내라), continue(지금것만 스킵하고 다시 다음스탭으로 넘어가라)

//continue 사용법 : 2의 배수만 띄워라
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    } console.log(`i: ${i}`);    
    
    // if (i % 2 === 0) {
    //     console.log(`i: ${i}`);    
    // } else {
    //     continue;
    // }  
}

//break 사용법: 0~10까지중 8일때 멈춰라
for (let j = 0; j <= 10; j++) {
    if (j === 8) {
        break;
    }
    console.log(`j: ${j}`);
}