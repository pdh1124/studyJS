//화살표 함수
const add = (a, b) => {
    return a + b;
}

const num = add(1, 2);
console.log(num);

//아래형식으로 간단히 할수도 있다. ES6의 문법
const add_simple = (a, b) => a + b;
const num_simple = add_simple(1, 2);
console.log(num_simple);


//예시
const hello = (name) => {
    console.log(`hello, ${name}!`);
}

hello('park');