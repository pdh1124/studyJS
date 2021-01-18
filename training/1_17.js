//반복문
//특정 작업을 반복적으로 사용할때 사용할 수 있는 구문
//대부분 프로그래밍에 반복문이 있음

//                  ┌------ture-------┐
//                  ↓                 │
// 시작 --------→  조건  ---------→ 구문실행
//                  │
//                false
//                  ↓
//                  끝


//기존적이고 쉬운 for문
for (let i = 0; i < 10; i++) {
    console.log('i는'+i+'이다.');
}

for (let j = 10; j >= 0; j-=2) {
    console.log('j는'+j+'이다.');
}


//for문과 배열 사용
const names = ['park', 'kim', 'lee'];

for (let k = 0; k < names.length; k++) {
    console.log(names[k]);
}