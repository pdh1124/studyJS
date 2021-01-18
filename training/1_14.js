//객체안에 함수넣기
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function say() {
      console.log(this.sound);
      //log에 나온 this는 맨위에 dog를 나타냄
    }
  };
  
  dog.say();

  const cat = {
      name: '야옹이',
      sound: '야옹'
  }


cat.say = dog.say;
dog.say();
cat.say();

//밖에서 꺼내는 순간 this와의 함수와 상관 없어짐
//위에 this를 dog로 수정하면 사용 가능
const dogSay = dog.say;
dogSay();