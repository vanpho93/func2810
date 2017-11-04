// function Person(ten, tuoi) {
//     this.name = ten;
//     this.age = tuoi;
//     this.sayHello = function() {
//         console.log('Hello, I am ' + this.name);
//     }
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello, I am ' + this.name);
    }
}

const ti = new Person('Ti', 18);
const teo = new Person('Teo', 18);
const tun = new Person('Tun', 18);
// console.log(ti);
teo.sayHello();
