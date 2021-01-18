//객체
//우리가 어떠한 값을 선언하게 될때 하나의 이름에 여러종류의 값을 넣을 수 있게 함

const dog = {
    //키: 원하는 값
    //키와 원하는 값에 빈공간(띄어쓰기)가 없어야 한다. 필요하면 ''로 감싸면 된다.
    name: '멍멍이',
    age: 2,
    cute: true,
    sample: {
        a: 1,
        b: 2
    }
  }
  
  console.log(dog);
  console.log(dog.name);
  console.log(dog.age);
  console.log(dog.cute);
  console.log(dog.sample);


  
  const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
  };
  
  function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
      hero.actor
    } 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);