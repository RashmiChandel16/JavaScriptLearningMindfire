//Generator is a function that can pause at yield and continue later with next()
/*Instead of manually writing:
next() {
   // complicated logic
}
JavaScript gives us Generator Functions:
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}
let gen = numbers();  //here gen is a generator object
gen.next() gives { value: 10, done: false }

Generator
   ↓
automatically creates an Iterator-like object
   ↓
next()
   ↓
yield
   ↓
value + done
*/
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let gen = numbers();

console.log(gen.next());  //{ value: 10, done: false }
console.log(gen.next());  //{ value: 20, done: false }
console.log(gen.next());  //{ value: 30, done: false }
console.log(gen.next());  //{ value: undefined, done: true }
/*function*
    ↓
yield 10
    ↓
PAUSE
    ↓
next()
    ↓
yield 20
    ↓
PAUSE
    ↓
next()
    ↓
yield 30
    ↓
PAUSE
    ↓
next()
    ↓
DONE 

Note: 
yield = give value + pause the function
next() = resume the function and bring next value
*/

function* fruits() {
    yield "Apple";
    yield "Mango";
    yield "Banana";
}

let fruit = fruits();

console.log(fruit.next().value); // Apple
console.log(fruit.next().value); // Mango
console.log(fruit.next().value); // Banana