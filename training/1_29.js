// 이제 지금까지 배운 것들을 활용하여 퀴즈를 풀어봅시다!
// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.

//1
// function countBiggerThanTen(numbers) {
//         let count = 0;
//         numbers.forEach(n => {
//             if(n > 10) {
//                 count++;
//             }
//         });
//         return count;
//     }



//2
// function countBiggerThanTen(numbers) {
//     return numbers.filter(n => n > 10).length;
//   }
  


//3
function countBiggerThanTen(numbers) {
    return numbers.reduce(function(acc, current) {
      if (current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }



const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5