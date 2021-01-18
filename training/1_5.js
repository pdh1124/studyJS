//비교 연산자
//두 값을 비교할 때 사용
const a = 1;
const b = 1;

//같을때 ture가 나온다.
const equals = a === b;
console.log(equals);  //ture

// ==와 ===의 차이는 타입을 비교하는것에 차이가 있다.
// ex) ==은 1과 '1'이 같다고 나오고 0과 false 또는 1과 true가 같다고 나온다.
// null과 undefined도 같다고 나옴.

// 웬만하면 ===를 이용해서 사용.(대부분 ===를 사용)

//다를 때 ture가 나온다.
const notequals = a !== b;
console.log(notequals);  //false

const c = 10; 
const d = 15;
const e = 15;

console.log(c < d); // true
console.log(d > c); // true
console.log(d >= e); // true
console.log(c <= e); // true
console.log(b < e); // false;


//문자열 붙이기
const f = '안녕';
const g = '하세요';
console.log(f + g); // 안녕하세요
