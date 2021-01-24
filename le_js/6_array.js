'use strict';
console.clear();
/*
배열이란?
비슷한 종류의 데이터들을 묶어서 한데다가 보관해 두는것을 자료구조라고 한다.
배열은 칸칸이 모여있는 자료구조를 말함
한 배열에서는 동일한 타입의 데이터를 넣는것이 중요함
*/

//Array 

//1. Declaration 배열을 선언할 수 있는 방법
const arr1 = new Array();
const arr2 = [1, 2];

// Index를 기준으로 저장되기 때문에 
//2. Index position
const fruits = ['apple', 'banana', 'orange', 'cherry'];
console.log(fruits); //["apple", "banana"]
console.log(fruits.length); //2
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[fruits.length-1]) 
//배열의 마지막을 찾을때
console.log(fruits[4]); 
//배열 밖에를 찾을때 undefned


//3. looping over an array 배열을 나열해서 찾을떄

//3-1 for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//3-2 for of
for(let fruit of fruits) {
    console.log(fruit);
}

//3-3 forEach 콜백함수를 바로 받아온다.
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index);
});

//3-4 addtion, deletion, copy (넣고 빼고 복사하고)
//push : 제일 뒤에다가 넣는 것
fruits.push('kim','park');
console.log(fruits);

//pop : 제일 뒤에있는것을 빼오는 것
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

//unshift : 앞에서 넣는것
fruits.unshift('lee');
console.log(fruits);

//shift : 앞에서 데이터를 빼는것
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);


//!중요!
//shift와 unshift는 pop과 push보다 느리다.
//그래서 pop과 push을 쓰는것이 좋다.


//splice : 지정된 부분의 넣고 뺄수 있다.
fruits.push('kim', 'park', 'lee', 'choi');
console.log(fruits);

fruits.splice(1,3); 
//1위치에 있는 데이터부터 3개를 지운다.(3을 안썻을 경우 1위치부터 싹다 지우게 된다.)
console.log(fruits);

fruits.splice(1, 2, 'kil', 'no'); 
//1위치에서 2개를 지운후 그 위치에 'kil'과 'no'를 추가한다.
console.log(fruits);

//concat : 새로운 배열을 추가할때
const fruits2 = ['ya', 'ho'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


//5. indexOf :  검색하는 api
console.log(fruits);
console.log(fruits.indexOf('no'));

//6. includes : 있는지 없는지 true와 false로 표현
console.log(fruits.includes('choi'));


//7. lastindexOf : 같은 데이터들 중 마지막에 있는 데이터를 검색할 때
fruits.push('banana');
console.log(fruits);
console.log(fruits.indexOf('banana'));
console.log(fruits.lastIndexOf('banana'));