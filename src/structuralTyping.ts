console.log('hello');

interface Pet {
    name: string | undefined;
}

class Dog {
    name: string | undefined;
    constructor () {}
}

let pet: Pet;
pet = new Dog();
pet.name = 'GRIVEI'
console.log(pet);

let dog = {
    name: "Lassie",
    owner: "Rudd Weatherwax"
};
pet = dog;
console.log(pet);

function greet(pet: Pet) {
    console.log("Hello, " + pet.name);
}
greet(dog);

//compararea a doua functii

let myLocation = (city: string) => city;
let myAdress = (city: string, street: string) => street + ' from ' + city;
console.log(myLocation('Popesti'));
console.log(myAdress('Popesti', 'Eclipsei'));
myAdress = myLocation; 
//myLocation = myAdress; - nu functioneaza pt ca nu toti parametrii din adresa au echivalent in locatie

let firstName = () => ({ firstName: "Alex" });
let fullName = () => ({ firstName: "Alice", lastName: "Dumitru" });
//fullName = firstName; - lipseste o proprietate ce trebuie returnata
firstName = fullName;

//parametrii obligatorii si optionali

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    console.log(args);
    console.log(callback);
}
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));

// type inference

let m = [0, 1, null];
console.log(typeof m);
let n: (number | null)[];
//console.log(typeof n);

//union types

function printMyAge(id: number | string) {
    console.log(`I'm: ` + id + ' years old.');
}
printMyAge(25);
printMyAge("25");