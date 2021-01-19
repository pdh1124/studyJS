// 배열 내장함수 - shift, pop, unshift, push

//shift는 첫번째 원소를 배열에서 추출해줌
const numbers_1 = [10, 20, 30, 40, 50];

const value_1 = numbers_1.shift();
console.log(value_1);
console.log(numbers_1); //shift는 배열에서 추출함 === [20, 30, 40, 50]

numbers_1.shift();
numbers_1.shift();
console.log(numbers_1); //shift 계속하면 계속 빠짐 === [40, 50]



//pop : shift와 비슷하지만 마지막 부터 추출해줌
const numbers_2 = [10, 20, 30, 40, 50];

const value_2 = numbers_2.pop();
console.log(value_2);
console.log(numbers_2); //pop는 배열에서 추출함 === [ 30, 40, 50]

numbers_2.pop();
numbers_2.pop();
console.log(numbers_2);



//unshift

const numbers_3 = [10, 20, 30, 40, 50];

numbers_3.unshift(5); //unshift는 맨 앞부분에 5를 추가한다는 뜻
console.log(numbers_3);

numbers_3.push(7); //push는 맨 뒤부분에 7을 추가한다.
console.log(numbers_3);

const value_3 = numbers_3.pop();
console.log(value_3); // 7
console.log(numbers_3); // [5, 10, 20 ,30 ,40, 50] 7이 삭제됨




//concat : 서로의 배열을 합쳐줄때 사용
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2); //arr1에다가 arr2를 삽입해준다.

//concat은 기존의 배열을 수정하지 않는다. 새로운 concated이란 배열에다가 담는다.
console.log(arr1);
console.log(arr2); 
console.log(concated);




// join 배열안에 있는 값들을 문자형태로 합쳐줄때 사용

const array = [1, 2, 3, 4, 5];

console.log(array.join());

//파라미터를 넣을수 있는데 그 파라미터는 세퍼레이터 이다.
console.log(array.join(' '));
console.log(array.join(', '));