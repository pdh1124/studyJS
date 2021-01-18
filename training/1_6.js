//조건문
// 가장 기본적인 조건문은 if 문이다..
// if문은, "~~하다면 ~~를 해라" 를 의미한다.

const a = 1;
if (a + 1 === 2) {
  console.log('a + 1 이 2 입니다.');
}


// *const의 사용법
const b = 1;
if (true) {
  const b = 2;
  console.log('if문 안의 a 값은 ' + b); // 2
}
console.log('if문 밖의 a 값은 ' + b); // 1

//const가 다른블록에 있으니 값이 다르다. 만약 var로 하면 둘다 2가 되기 때문에 실수 하기 쉽다.


//if-else 문
const c = 10;
if (c > 15) {
  console.log('a 가 15 큽니다.');
} else {
  console.log('a 가 15보다 크지 않습니다.');
}


//if-else if 문
const d = 10;
if (d === 5) {
  console.log('5입니다!');
} else if (d === 10) {
  console.log('10입니다!');
} else if (d === 7) {
    console.log('7입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}



//switch/case 문
//switch/case 문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용합니다.
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}
