// object
const teo = { 
    name: 'Teo Nguyen',
    age: 18,
    sayHello: function() {
        console.log('Hello, I am ' + this.name);
    }
};
// console.log(teo);
// console.log(teo.name);
// teo.age = 20;
console.log(teo);
teo.sayHello();
