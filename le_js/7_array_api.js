'use strict';
console.clear();

// Q1. make a string out of an array
// Q1. 주어진 배열을 string으로 변환해라.
{
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(' and '); //()안에 구분자를 넣어 쓸수 있음
console.log(result);
}
// A1. Join을 사용 : 배열에 있는 모든 데이터를 더해서 string으로 만드는데 


// Q2. make an array out of a string
// Q2. 주어진 string을 배열로 만들어라.
{
const fruits = '🍎, 🥝, 🍌, 🍒';
const result = fruits.split(',', 2); //()안에 구분자를 넣어 쓸수 있음 숫자를 넣어 리밋트를 알수 있다.
console.log(result);
}
// A2. split를 사용해 배열로 만든다.

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// Q3. 주어진 배열을 거꾸로 배열하라
{
const array = [1, 2, 3, 4, 5];
const result = array.reverse();
console.log(result);
console.log(array); //array자체도 순서가 바뀜(reverse는 배열 자체를 리버스함)
}
//Q3. reverse를 활용하라.

// Q4. make new array without the first two elements
// Q4. 주어진 배열에서 첫번째와 두번째를 제외해 새로운 배열을 만들어라.
{
const array = [1, 2, 3, 4, 5];
// const result = array.splice(0,2); splice는 기존 배열을 수정함으로 사용X
// console.log(result);
// console.log(array);
const result = array.slice(2, 5); //2~4까지라고 하면 4미만이기 때문에 5로 한다.
console.log(result);
console.log(array);
}
// A4. slice를 활용하라.
// splice는 배열 자체를 수정하는 것이고
// slice는 원하는 부분만 return해서 받아오고 싶을 때 사용한다.





class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// Q5. 90점인 학생을 찾아야 한다.
{
    const result = students.find(function(student) {
        return student.score === 90;
    });
    console.log(result);
}
// A5. find를 활용해 score값 90을 찾아낸다.

// Q6. make an array of enrolled students
// Q6. 학생들 중에서 수업에 등록한 학생들만 배열로 만들어라.
{
    const result = students.filter(function(student) {
        return student.enrolled === true;
    });
    console.log(result);
}
// A6. filter을 활용해라.

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// Q7. 배열에서 점수만 뽑아와서 점수를 배열해라.
{
    const result = students.map(function(student) {
        return student.score;
        
    });
    console.log(result);
}
// A7. map을 이용하라
// map은 배열안에 들어있는 요소 한가지 한가지를 다른것으로 변환시켜줌

// Q8. check if there is a student with the score lower than 50
// Q8. 학생들 중에 50점보다 낮은 학생이 있는지 없는지 확인해라
{
    const result = students.some(function(student) {
        return student.score < 50;
            
    })
    console.log(result);
}
{
    const result = students.every(function(student) {
        return student.score < 50;
            
    })
    console.log(result);
}

//some은 데이터중 1개라도 조건에 맞다면 true
//every는 데이터 전부가 조건에 맞다면 ture


// Q9. compute students' average score
// Q9. 학생들의 평균 점수를 구해온다.
{
    const result = students.reduce(function(prev, curr) {
        console.log('------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result/students.length);   
}
// A9. reduce는 배열 하나하나를 돌면서 무언가 값을 누적하면서 쓰는것
// reduceRight는 역순으로 배열한다.

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
//학생들의 모든 점수를 string으로 변환해서 넘거라
{
    const result = students.map(function(student) {
        return student.score;
    }).join();
    console.log(result);
}
// A10. map을 이용해 배열로 만든 후 join()으로 string으로 변환하기

// Bonus! do Q10 sorted in ascending order
// Q10문제에 낮은 점수순으로 정렬하기
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(function(student) {
        return student.score;
    }).sort().join();
    console.log(result);
}
// sort(a, b)에 a(이전값)와 b(현재값)이 전달이 되는데 a-b를 했을때 -값을 리턴하게 되면
// 첫번째가 두번째보다 작다고 인식하고 정렬이 됨