'use strict';
console.clear();

//AJAX = Asynchronous Javascript And XML
//XHR = XMLHttpRequest

//XML은 HTML과 같은 마크업 언어중에 하나
//Client와 Server를 연결해주기 위해 XML을 썻었지만
//불필요한 태그들이 너무 많이 들어가서 사이즈만 커질 뿐만 아니라 가독성도 좋지 않기 때문에

//JSON을 사용하는 추세이다.
//JavaScript Object Notation 

//1. 데이터를 주고 받을 떄 쓸 수 있는 가장 간단한 파일 포멧이고
//2. 텍스트를 기반으로 해 가볍다.
//3. 눈으로 보기 편하다.
//4. key:value로 이루어져 있는 파일 포멧이다.
//5. 데이터를 보통은 서버와 주고 받을때 Serializtion(직렬화하다)를 씁니다.
//6. 프로그래밍 언어나 플랫폼에 상관없이 쓸수 있다.(C, C#, JAVA, python, PHP, 제플린, go 등)


//공부방법

//1. 오브젝트를 어떻게 직렬화 해서 변환할지, strubgft(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple','banana']);
console.log(json); //["apple","banana"] 배열에 ""로 나오게 됨(JSON의 규격사항)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

//2.직렬화된 json을 어떻게 다시 변환해서 오브젝트로 가져올지 중점적으로 공부하면 됨 parse(obj)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
