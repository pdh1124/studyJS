//연습


function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);


//연습2
const numberss = [1, 2, 3, 4, 5, 6, 7];

function biggerThanThree(numberss) {
    console.log(numberss.length);
    let Arrays = [];
    for (let j = 0; j < numberss.length; j++) {
        if (numberss[j] > 3) {
            Arrays.push(numberss[j]);
        }
    }
    return Arrays;
  }
  

  console.log(biggerThanThree(numberss)); // [4, 5, 6, 7]

