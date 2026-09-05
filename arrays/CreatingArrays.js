//used to store multiple values in a single variable.

//1stMethod: creating array using[] (array literal)
//empty array
let arr = [];
console.log(arr); //[]

let fruits = ["Apple", "Banana", "Mango"]; //array literal: creating array using[]
console.log(fruits);

//an array can contain String, Number, Boolean, null, undefined, Object, Another array, Function
let marr = [
    "Rashmi",
    25,
    true,
    null,
    undefined
];
console.log(marr);

//objs inside array:
let students = [
    { name: "Rashmi", age: 28 },
    { name: "Riya", age: 29 }
];
console.log(students);

//function inside array:
let arr6 = [
    function funcArr(){
        console.log("hello");
    }
];
console.log(arr6);  //[ [Function: funcArr] ]
arr6[0]();  //hello


//2nd Method: creating array using Array() constructor:
let Numbers = new Array(10, 20, 30); //OR let numbers = Array(10, 20, 30);
console.log(Numbers);  //[ 10, 20, 30 ]

//special case when we create array using Array() constructor and pass only one numeric value
//Note: this shows the difference b/w creating array using both methods
let arr1 = new Array(5);
console.log(arr1); //[ <5 empty items> ] //Note: agar Array constructor ke andar single numeric value rkhenge to vo utni length ka empty array dega
console.log(arr1.length); //5
let arr2 = new Array(2,3);
console.log(arr2);  //[ 2, 3 ]
let arr3 = new Array(5,6).fill(0); //fill()-> iske andar jo b value denge it will replace all array values with this value
console.log(arr3); //[ 0, 0 ]

//Array.of() creates an array from the arguments passed to it.
let arry = Array.of(10, 20, 30);
console.log(arry);

//Array.from() creates a new array from an iterable or array-like object.
let arr3 = Array.from("Hello");
console.log(arr3); //[ 'H', 'e', 'l', 'l', 'o' ]


//creating array dynamically:
let arr5 = [];
arr5.push(10);
arr5.push(20);
arr5.push(30);
console.log(arr5);

//Extra area: can skip it
//shallow copy create krna: shallow means: new array create hoga: console.log(a === b); false but console.log(a[0] === b[0]); true
//(i)using slice():
let a1 = [1, 2, 3];
let b1 = a1.slice();
console.log(b1);

//(ii) using spread:
let a2 = [1,2,3];
let b2 = [...a2];
console.log(b2);

//(iii) using Array.from():
let a3 = [1,2,3];
let b3 = Array.from(a3);
console.log(b3);

