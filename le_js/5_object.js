'use strict';
console.clear(); //이전에 있는 console.log값이 클리어됨
//오브젝트
//프리미티 타입은 변수 하나당 값을 하나만 담을 수 있다.

//오브젝트를 만드는 방법
const obj1 = {}; //첫번째 방법 {}블록을 이용해 만듦
const obj2 = new Object(); //두번째 방법 (class를 이용해 new라는 키워드를 활용)


function print_ob(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie_ob = {name: 'ellie', age: 4};
print_ob(ellie_ob);


//object = {key : value} 오브젝트는 키와 밸류의 집합체이다.

//2. Computed properties : object['key'] 계산된 속성
console.log(ellie_ob.name);
console.log(ellie_ob['name']); //이런 방법도 가능함(주의점은 string타입으로 해야함)

function printValue(obj, key) {
 console.log(obj[key]);
}

printValue(ellie_ob,'name');
printValue(ellie_ob,'age');

//3. Property value shorthand(lovely shorthand)
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
//계속 추가하게 되면 일일이 써야 하기 때문에
//makePerson이라는 함수를 만들어 retrun해주게 되면
//간단히 추가 할 수 있다.
function makePerson(name, age) {
    return {
        name: name,
        age: age,
    };
}
const person4 = makePerson('park', 30);
console.log(person4);

//4. key 확인하는 방법
console.log('name' in ellie_ob); //true
console.log('age' in ellie_ob); //true
console.log('random' in ellie_ob); //false
console.log(ellie_ob.random) //undefined


//5. for..in vs for..of (중요!)
//5-1. for (key in obj)
for (let key in ellie_ob) {
    console.log(key);
} 

//5-2. for(value of iterable)
const array = [1,2,3,4,5];
// for(let i = 0; i<array.length; i++) {
//     console.log(array[i]);
// }

for(let value of array) {
    console.log(value);
}

// 6. fun cloning
const user = {name: 'ellie', age: '20'};
const user2 = user;
//user와 user2의 레퍼런스의 오브젝트가 같다고 지정했을때
//user2의 이름을 바꾸게 되면 user의 이름도 바뀌게 된다.
user2.name = 'coder';
console.log(user);

//old way
//새로운 user3의 빈배열을 만들고 for..in을 사용해 user키값을 받아온다.
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

//new way
//Object.assign을 이용해서
const user4 = {};
Object.assign(user4, user);
console.log(user4);

//또 다른 예시
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = {};
Object.assign(mixed, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);