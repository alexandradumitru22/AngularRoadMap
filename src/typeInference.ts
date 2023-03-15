let x = 5;
console.log(typeof x);

let y = [0, 1, null];
console.log(typeof y);

class Rhino {};
let r = new Rhino();
class Elephant {};
class Snake {};
let zoo = [new Rhino(), new Elephant(), new Snake()];

interface Animal {}
function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
}
console.log(typeof createZoo());