//반복문
//for of라는 반복문
//이 반복문의 주로 배열을 다루게 될때 사용하는 배열

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}

//같은 의미
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//for of문은 잘 사용하지는 않음


const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}

//객체의 정보를 변형체로 받아올 수 있는 3가지의 함수
console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

//for in 반복문은 객체에 대한 반복적인 작업을 처리할때 쓰임
for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}