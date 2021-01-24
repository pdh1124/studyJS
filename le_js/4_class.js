'use strict';

//class와 objact
/*
class는 붕어빵을 만드는 틀과 같은 느낌
청사진 혹은 템플릿이라고 불림
클래스 자체에는 데이터가 들어있지 않고
틀만 템플릿만 정의해 놓는다.
이런 클래스에는 이러이러한 데이터가 들어올 수 있어.라고 
정의해 놓고 한번만 선언 합니다.
*/

/*
이 클래스를 이용해서 실제로 데이터를 넣어서 만드는것이 바로 오브젝트이다.
그래서 클래스를 이용해서 새로운 인스턴스를 생성하면 오브젝트가 되는것
class가 붕어빵 틀이라면 object는 붕어빵 틀로 만든 붕어빵이다.
*/

//1-1. class 선언하기
class Person {
    //constructor(생성자)
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }

}

//1-2. class를 이용해서 Object 생성
//새로운 오브젝트를 만들때는 new라는 키워드 사용
const class_ellie = new Person('ellie', 20);
console.log(class_ellie);
console.log(class_ellie.name);
console.log(class_ellie.age);

class_ellie.speak();


//1-3. getter와 setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //age가 -라는것이 말이 안되기 때문에
    //get이라는 키워드를 이용해서 값을 리턴하고
    get age() {
        return this._age;
    }
    //set이라는 키워드를 이용해서 값을 설정할 수 있다.
    //대신 set은 값을 설정하기 때문에 value를 받아 와야 함
    set age(value) {
        /*
        age값을 0미만으로 넣으면 에러로 age can not be negative를 뜨게 한다.
        if (value < 0) {
            throw Error('age can not be negative');
        }
        */
        //this._age = value;
        this._age = value < 0 ? 0 : value;
    }
    //get과 set을 이용할때 age를 그대로 쓰면 무한루트에 걸려 에러가 나기 때문에
    //보통 _를 이용해 age를 _age로 선언해 작업한다.

}

//실수로 -1이라고 나이를 넣어다고 가정하면
//객체지향적 프로그래밍에서 맞지 않는다.
const user_1 = new User('steve', 'job', -1)
console.log(user_1.age);

//그래서 다른사람이 잘못 프로그래밍 해도 방어적으로 프로그래밍 하는것이
//getter와 setter이다.


//1-4 Public과 Private (정말 최근에 추가된 기능이기 때문에 아직 사용하지 무리다. 사파리에서도 지원이 안됨[바벨을 사용해야 함])
class Experiment {
    publicField = 2;
    #privateField = 0; 
    /*
    #을 붙여주게 되면 클래스 내부에서만 값이 보여지고 
    접근되고 값이 변경이 가능하지만 클래스 외부에서는 
    값을 읽을수도 변경할 수도 없다. 
    */
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined



// 1-5. static (정말 최근에 추가된 기능이기 때문에 아직 사용하지 무리다. 사파리에서도 지원이 안됨[바벨을 사용해야 함])
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
//article1.publisher는 값이 지정되지 않았다.
console.log(Article.publisher);
Article.printPublisher();



//상속과 다양성
class Shape { //Shape = 도형
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height;
    }
}

const shape = new Shape(20, 20, 'red');
shape.draw();

//Rectangle이라는 클래스를 만들고 싶다면 extends라는 키워드를 이용해 Shape클래스를 연장한다.
class Rectangle extends Shape {} //직사각형
//이렇게만 정의해도 Rectangle 안에 Shape에 정의했던 필드와 메소드가 자동적으로 포함됨
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {//Triangle = 삼각형 
    //오버라이딩 : 필요한 메소드만 꺼내어 바꿀수 있음
    //대신 오버라이딩을 했을때 기존에 정의했던 메소드는 지워짐
    getArea() {
        return this.width * this.height / 2;
    }
    //오버라이딩한 기존 정의했던 메소드까지 불러오고 싶다면
    draw() {
        super.draw(); //super(부모의).draw를 실행시켜라
        console.log('삼각형');
    }

} 
const triangle = new Triangle(20, 20, 'yellow');
triangle.draw();
console.log(triangle.getArea());




//instanceOf 오퍼레이터
//왼쪽에 있는 오브젝트가 오른쪽에 있는 class를 이용해서 만들어진지 아닌지 확인할때.
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);