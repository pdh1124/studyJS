//클래스

class Animal {
    constructor(type, name, sound) {
    //constructor : 객체생성자 함수와 비슷한 함수(생성자라는 의미)
    this.type = type;
    this.name = name;
    this.sound = sound;
    }
    
    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
//extends는 특정 클래스를 상속 받는다.
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
            super('고양이', name, sound);
        }
    }

const dog = new Dog('멍멍이', '멍멍');
const dog2 = new Dog('왈왈이', '왈왈');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('냐옹이', '냐옹');

dog.say();
cat.say();
dog2.say();
cat2.say();