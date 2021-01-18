//객체 - 비구조화 할당(객체 구조분해라고도 함)
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
  
  function print(hero/*hero를 빼고 {alias, name, actor}로 해도 됨 */) {
    //추가한 부분
    //중복되는 부분의 hero.alias, hero.name, .hero.actor에서 객체 내분에서 값들을 밖으로 빼옴으로써 쉽게 함
    const {alias, name, actor} = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);