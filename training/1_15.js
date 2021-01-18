//Getter함수와 Setter함수
//객체안에 Getter함수와 Setter함수를 쓸수 있다.

const numbers = {
    a: 1,
    b: 2,
    //Getter함수
    get sum() {
        console.log('sum 함수가 실행됩니다.');
        //get함수에서는 어떤값을 무조건 반환해야한다.
        return this.a + this.b;
    }  
  };
  
  console.log(numbers.sum);
  numbers.b = 5;
  console.log(numbers.sum);

  console.log(numbers.a);

  numbers.a = 5; //a값이 1에서 5로 수정되어 나온다.
  console.log(numbers.a);
  console.log(numbers);


const dog = {
    _name: '멍멍이',
    //setter함수
    //파라미터 값은 무조건 받아줘야 함
    set name(value) {
        console.log('이름이 바뀝니다.' + value);
        this._name = value;

    }
}

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);




//예시
const numbers_ex = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    //getter함수는 조회할때마다 어떤 함수를 호출
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    //setter함수는 특정값을 호출말때마다 파라미터(value)로 받아와서 어떤 값을설정할수 있고 추가적으로 어떤 함수를 실행할 수 있다.
    set a(value) {
      console.log('a가 바뀝니다.');
      this._a = value;
      this.calculate();
    },
    set b(value) {
      console.log('b가 바뀝니다.');
      this._b = value;
      this.calculate();
    }
  };
  
  console.log(numbers_ex.sum);
  numbers_ex.a = 5;
  numbers_ex.b = 7;
  console.log(numbers_ex.sum);
  numbers_ex.a = 9;
  console.log(numbers_ex.sum);
  console.log(numbers_ex.sum);
