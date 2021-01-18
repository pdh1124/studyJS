//변수
let value = 1;
// let value = 2; value를 한번 선언 했으면 똑같은 이름으로 중복 선언 할 수 없다.
console.log(value);

value = 2;
console.log(value);

//상수
//한번 값을 설정하고 나면 바꿀수 없다. 값이 고정적임.
const a = 1; 
// a = 2; 한번 a를 선언하고 나서 다른 값을로 수정하면 에러가 남
// const a =2; 도 안됨

// var라는 키워드는 예전에 사용했는데 
// var와 같은 느낌은 let이 있음.
// 익스플로어 9,10 등 에서는 let과 const는 사용할 수 없지만
// 바벨이라는 도구를 사용해서 우리가 작성한 최신 문법이 구형문법으로 변환작업을 해서 한다.



//데이터 타입
let date_value_number = 1;
let date_value_string = 'ABCD'; //따옴표 사용
let adta_value_boolean = ture; //ture와 false
let adta_value_Null = null; //없다. 
let adta_value_undefined = undefined; //아직 정해지지 않았다.
