//배열 내장함수 - reduce (잘 사용하면 진짜 유용한 함수)
//배열이 주어졌을때 배열안에 있는 모든 값들을 사용하여 어떤값들을 연산해야 할때 사용

const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// numbers.forEach(n => {
//     sum += n;
// })

// console.log(sum);
// 이것을

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
//이 식에서 0은 초기 accumulator가 됩니다.
//accumulator은 누적된 값을 의미
//current는 다음 값을 의미
//0에서 1을 더하면 1 => 1에서 2를 더하면 3 => 3에서 3을 더하면 6 => 6에서 4를 더하면 10 => 10에서 5를 더하면 15
console.log(sum); //15 가 나옴

const Average = numbers.reduce((accumulator, current, index, array) => {
    //index는 각 원소에 대해 실행이 될텐데, 각 원소가 몇번째 아이템인지 알려줌
    //array는 우리가 이 함수가 실행하고 있는 자기 자신을 의미
    if(index === array.length - 1) { //현재 처리하고 있는 배열 원소가 맨 마지막 꺼라면 if문을 실행한다. index = 0~4니까 4, array.length는 5니까 -1을 해줌 
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);

console.log(Average);
