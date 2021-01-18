//함수
//특정 코드를 하나의 명령으로 실행할수 있는 기능
//   파라미터
// ┌-\  ↓  /-------------┓
// │                     │
// │        함수         │
// │                     │
// └-------------/ ↓ \---┘
//                결과

const a = 1;
const b = 2;
const sum = a + b; // 3
// 이것을 함수로 만들면

function add(a, b) {
    return a + b;
}

const sum_a = add(1, 2);
console.log(sum_a); //3

function hello(name) {
    console.log('hello' + name + '!');
}

hello('park');