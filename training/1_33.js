class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    //함수를 구현해줄껀데 주로 클래스 내부에 구현하는 함수들을 메소드라 부름
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name} 을 파는 사람들`);
        console.log(this.brands.join(', '));
    }

}


const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네 치킨');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();
