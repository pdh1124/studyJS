//배열내장함수 - map
//배열안에 원소를 변환할때 사용함

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);    
}

console.log(squared);


//1
array.forEach(n => {
    squared.push(n * n);
});
console.log(squared);

//2
const squareeds = array.map(n => n * n);
console.log(squareeds);

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);


//배열에서 원하는 항목이 어디에 있는지 알려주는 함수
//indexOf

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');

console.log(index);

//findIndex 
//findIndex 안에 넣어야할 파라미터는 함수이다. 특정 조건을 확인해서 일치하면 그 원소가 몇번째 원소인지 확인시켜줌
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열과 내장함수 배우기',
        done: false,
    }
]


const indexs = todos.findIndex(todo => todo.id === 3);
const todo = todos.find(todo => todo.done === true);


console.log(indexs);
console.log(todo);


