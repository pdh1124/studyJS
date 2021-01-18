//배열
//이전에 배운 객체는 한변수 또는 상수안에 여러가지 정보를 담기 위함이였다면
//배열은 여러개의 항목을 담는 리스트와 같음 [0, 1, 2, 3]

const array = [1, 'blabla', {}, 4];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);



const objects = [
    { name: '멍멍이' }, 
    { name: '야옹이' }
];

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);
//length : 갯수를 알아보려는 범
console.log(objects.length);

//새로운 항목 추가
objects.push({
    name: '멍뭉이'
  });
  
  console.log(objects);
  console.log(objects.length);