//프로토타입과 클래스

//객체 생성자 : 함수를 통해서 새로운 객체를 만들고 그리고 그 안에 넣고싶은값 또는 함수를 구현할 수 있게 해줌

//객체생성자를 사용할때는 보통 대문자로 시작함
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
}

//new라는 키워드를 사용한다는 것
const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

//상속받는다 = 예를 들어서 우리가 Cat 과 Dog 라는 새로운 객체 생성자를 만든다고 가정해봅시다. 그리고, 해당 객체 생성자들에서 Animal 의 기능을 재사용한다고 가정해봅시다. 그렇다면, 이렇게 구현 할 수 있습니다.