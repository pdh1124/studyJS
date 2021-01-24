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
{
const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
}

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
{
}

// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}