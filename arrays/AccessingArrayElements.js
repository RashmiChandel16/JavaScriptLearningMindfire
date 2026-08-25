let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); //Apple
console.log(fruits[fruits.length - 1]); //Mango
console.log(fruits[5]); //undefined
console.log(fruits[-1]); //undefined


//at()
let arr = [10, 20, 30];
console.log(arr.at(-1)); //last element
console.log(arr.at(-2)); //2nd last elemnt


//using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}

//using for...of loop
for (let value of arr) {
    console.log(value);
}
//accessing index and value both: use arr.entries()
for (let [ind, val] of arr.entries()) {
    console.log(ind, val);
}
//accessing index only: use arr.keys()
for (let index of arr.keys()){
    console.log(index);
}


//using forEach()-> a built in function
const array = [1, 2, 3];
array.forEach((num) => {   
    console.log(num);
});
//or
//array.forEach(function(num) {
//   console.log(num);
//});

//you can also get value & index both:
array.forEach(function(val, ind) {  //here 1st parmater, it takes as value and 2nd as index 
    console.log(ind, val);
});


//nested array elements:
let Arr = [
    [
        [10, 20],
        [30, 40]
    ]
];
console.log(Arr[0][0][1]);  //20


//array inside an object:
let student = {
    name: "Rashmi",
    marks: [70, 80, 90]  
}
console.log(student.marks); //[ 70, 80, 90 ]
console.log(student.marks[0]); //70

//object inside an array:
let students = [
    { name: "Rashmi", age: 28 },
    { name: "Riya", age: 29 }
];
console.log(students);
console.log(students[0]);
console.log(students[0].name); //or console.log(students[0]["name"]);


//sparse array: An array that contains empty slots
//empty slot means: bilkul khali index tk exist ni krta
let arr7 = [];
arr7[2] = "Hello";
console.log(arr7); //[ <2 empty items>, 'Hello' ]


//array destructuring: array ke elements ko alag-2 variable me store krna
let arr = [10, 20, 30];
let [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);

//how to skip an elemenet in destructuring: , lga ke
let arr = [10, 20, 30];
let [a, , c] = arr;
console.log(a);
console.log(c);