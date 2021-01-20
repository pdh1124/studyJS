//배열 내장함수 - reduce 문자도 사용가능

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {})

console.log(counts); //{ a: 3, b: 1, c: 2, d: 1, e: 1 }
