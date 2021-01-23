'use strict';

//1. Variable 변수 
//rw(read/wirte) : 변수의 경우 읽기와 쓰기가 가능함으로 변수를 지정하고 변경할 수 있는것이 이때문
//변경될 수 있는 값
//let (added in ES6에 추가 됨)

let name = 'park';
console.log(name);

name = 'hello';
console.log(name);

//{}스콥은 {}안에 변수를 선언할 경우 {}밖에서는 출력이 안된다.
{
    console.log(name);
    //출력 됨

    let name2 = 'park';
    console.log(name2);

    name2 = 'hello';
    console.log(name2);
}

console.log(name);
//console.log(name2);출력 안됨


//var 는 현재 사용하면 안됨
//이유는 보통
//변수를 선언하고나서 값을 할당하는게 정상적인데.
//var age;
//age = 4;

//자바스크립트에서는 이상하게 적용될 수 있다.
//변수를 선언하고 나서 할당하는게 정상적인데 선언도 하기 전에 값을 할당할 수 있고,
//할당하기 전에 출력을 할 수도 있음
//이것을 var hoisting(바 호이스팅)이라고 한다.
//console.log(age);
//age = 4;
//var age;

//호이스팅이란 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어 올려주는것



//var를 쓰면 안되는 또다른 이유는
//var는 {}스콥이 없어서 블록안에 선언을 해도 밖에서 출력해도 값이 나온다.





//2. constansts(상수) 
//r(raed only) : 읽기만 가능하고 쓰기가 불가능 그래서 변경 불가능
//한번 선언하면 절대 변하지 않는 값, 자바스크립트에 변수값이 변경해야할 이유가 없다면 const를 이용하는게 바람직함
// - 좋은이유
//  (1) 보안상으로 좋다.
//  (2) 다양한 쓰레드들이 접근할때 변할수도 있는 것을 막아줌
//  (3) 나중에 코드를 변경할때나 다른 개발자가 수정할때 실수를 줄일 수 있다.
const daysInWeek = 7;
// daysInWeek = 8;라고 변경이 불가능

const eilie = {name: '엘리', age: 21};
eilie.name = '알리';
console.log(eilie.name);
//상수의 name과 age 등 변경이 가능함


// note!!!
// Immutable data types: 데이터 자체를 변경하지 못함
// Mutable date types: 변경이 가능한 데이터 =




//3. Variable types (변수 타입)
//어떤 프로그래밍 타입은 primitive 타입과 object 타입으로 나뉜다.
//primitive 타입은 더이상 작은 단위로 나눠질수 없는 한가지 아이템
//primitive은 값 자체가 메모리에 저장됨
//number, string, boolean, null, undefiedn, symbol


//primitive - 1.number
const count = 17; //integer(정수)
const size = 17.1; //decimal number(소수점)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
//number - 특별한 경우: infinity, -infinity, NoN;
const infinity = 1 / 0; //1을 0으로 나뉘게 되면 무한대를 가르킴
const negativeInfinity = -1 / 0; //1을 0으로 나뉘게 되면 무한대를 가르킴
const nAn = 'not a number' / 2; //숫자가 아닌것으로 나뉘게 되면 NaN으로 나오게 됨
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); //NaN


//primitive - 2.string
const char = 'c'; //한가지 글자
const brendan = 'brendan'; //여러개 글자
const greeting = 'hello ' + brendan; //글자와 변수
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//아래식과 같음
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);



//primitive - 3.boolean
// false: 0, null. indefined, NaN, ''
// true: any other value, 어떤 값들
const canRead = true;
const test = 3 < 1; //false
console.log(`value ${canRead}, type: ${typeof canRead}`);
console.log(`value ${test}, type: ${typeof test}`);



//primitive - 4.null
//null이 라는 경우는 너는 아무것도 아니라고 지정한다는 값을 할당 받음
let nothing = null;
console.log(`value ${nothing}, type: ${typeof nothing}`);



//primitive - 5.undefined
//선언은 되어있지만 아무 값도 지정되어 있지 않은 상태
let x;
let y = undefined;
console.log(`value ${x}, type: ${typeof x}`);
console.log(`value ${y}, type: ${typeof y}`);



//symbol 
// 맵이나 자료구조에서 고유한 식별자가 필요하거나 아니면 
// 동시에 다발적으로 일어날수 있는 코드에서 우선순위를 주고 싶을때 
// 정말 고유한 식별자가 쓰고 싶을 때 쓰여짐
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false



//object타입은 싱글 아이템들을 여러개 묶여서 한단위로 한 박스로 관리할수 있게 해주는것
//
const ellie = {name: 'ellie', age: 20};
//ellie 는 다른 오브젝트로 할당이 불가능 하지만
//오브젝트 안에는 name과 age라는 변수가 존재해 name과 age는 다른값으로 할당이 가능함
ellie.age = 21;
//수정 가능


//fubction도 데이터 타입중에 하나인데요. 
//first-class function 다른 데이터 타입처럼 변수 




//5.Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value ${text}, type: ${typeof text}`); //type: string
text = 1;
console.log(`value ${y}, type: ${typeof y}`); //type: number
text = '7' + 5;
console.log(`value ${y}, type: ${typeof y}`); //type: string
text = '8' / '2';
console.log(`value ${y}, type: ${typeof y}`); //type: number 