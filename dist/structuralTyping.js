"use strict";
console.log('hello');
class Dog {
    constructor() { }
}
let pet;
pet = new Dog();
pet.name = 'GRIVEI';
console.log(pet);
let dog = {
    name: "Lassie",
    owner: "Rudd Weatherwax"
};
pet = dog;
console.log(pet);
function greet(pet) {
    console.log("Hello, " + pet.name);
}
greet(dog);
let myLocation = (city) => city;
let myAdress = (city, street) => street + ' from ' + city;
console.log(myLocation('Popesti'));
console.log(myAdress('Popesti', 'Eclipsei'));
myAdress = myLocation;
let firstName = () => ({ firstName: "Alex" });
let fullName = () => ({ firstName: "Alice", lastName: "Dumitru" });
firstName = fullName;
function invokeLater(args, callback) {
    console.log(args);
    console.log(callback);
}
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
let m = [0, 1, null];
console.log(typeof m);
let n;
function printMyAge(id) {
    console.log(`I'm: ` + id + ' years old.');
}
printMyAge(25);
printMyAge("25");
//# sourceMappingURL=structuralTyping.js.map