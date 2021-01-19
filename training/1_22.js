//배열 내장함수 - forEach
//배열안에있는 원소들을 가지고 어떤 작업을 일괄적으로 하고 싶다면 forEach문을 사용

const superheroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
]

for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i]);
}

// 위 코드를 특정함수를 사용해서 똑같이 작업
//1
function print(hero) {
    console.log(hero);
}

superheroes.forEach(print);

//2
superheroes.forEach(function(hero) {
    console.log(hero);
});