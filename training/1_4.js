//논리연산자
let value = ture;
value = false;

// 논리연산자는 boolean을 처리하는 연산자
// 총 3가지가 있다.

// NOT !

const a = !ture;
console.log(a);
// = false

// AND &&

const b = ture && ture;
console.log(b);
// = ture
const c = ture && false;
console.log(c);
// = false
// 양쪽의 값 중 둘다 ture가 되어야 ture 하나가 false거나 둘다 false면 false


// OR || (백슬래쉬)
const d = ture || ture;
console.log(d);
// = ture
const e = ture || false;
console.log(e);
// = ture
const f = false || false;
console.log(f);
// = false
// 양쪽 값 중 하나만 true가 되어도 ture이다. 

//순서는 NOT > AND > OR
//사칙연산을 할 때 곱셈 나눗셈이 먼저고 그 다음이 덧셈 뺄셈인 것 처럼, 논리 연산자도 순서가 있습니다. 순서는 NOT -> AND -> OR 입니다. 예를 들어 다음과 같은 코드가 있다고 가정해봅시다.

//const value = !(true && false || true && false || !false);
//괄호로 감싸져있을 때에는 가장 마지막에 처리를 하니까 맨 앞 NOT 은 나중에 처리하겠습니다.
//우선 NOT 을 처리합니다.

//!(true && false || true && false || true);
//그 다음엔 AND 를 처리합니다.

//!(false || false || true);
//OR 연산자를 좌측에서 우측 방향으로 처리를 하게 되면서 다음과 같이 처리됩니다.

//!true;

//false;

//순서로 된다.









