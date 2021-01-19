//배열 내장함수 - splice와 slice
//splice는 배열에서 특정 항목을 제거할때 사용
//제거를 하게되는 과정에서 해당 원소가 몇번째인지 명시를 해줘야 한다.
const numbers = [10, 20, 30, 40, 50];

//30을 지우고 싶으면, 30의 위치를 알아보기 위해
const index = numbers.indexOf(30);
console.log(index); //2

//splice = 제거하기
// numbers.splice(index, 2);
console.log(numbers); //splice는 index로부터 2개를 지우겠다. === [10, 20, 50]

const spliced = numbers.splice(index, 2); //spliced에 index에서 30부터 2개를 지운값을 넣어둔것을
console.log(spliced); //콘솔창에 띄우니까 === [30, 40]



//slice 자른다.
//slice는 splice와 다르게 기존 배열건들이지 않는거고 파라미터에 넣는 값도 다르다.
const numberss = [10, 20, 30, 40, 50];

const sliced = numberss.slice(1, 3); //slice(a, b)a에서부터 b전까지 자른다.
console.log(sliced); // === [20, 30]
console.log(numberss); //slice는 기존의 배열을 건들이지 않는다.