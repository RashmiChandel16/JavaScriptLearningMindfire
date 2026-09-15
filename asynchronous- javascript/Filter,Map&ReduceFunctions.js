/*These three are very important JavaScript array methods
map    → change every element
filter → select some elements
reduce → combine everything into one result */

//map()
//it goes through every element of an array and creates a new array.
//it does not modify the original array.
let numbers = [1, 2, 3, 4];
let newArr = numbers.map((num) => {
    return num*2
});
//short version: let newArr = numbers.map(num => num*2);
console.log(newArr);  //[ 2, 4, 6, 8 ]

//map() with objects
let users = [
    {name: "Rashmi", age: 28},
    {name: "Riya", age: 26},
    {name: "Rohan", age: 30}
];
let names = users.map((user) => {
    return user.name;
});
console.log(names);  //[ 'Rashmi', 'Riya', 'Rohan' ]


//filter()
//it is used when you want to select only elements that satisfy a condition.
//it returns a new array
let numbers = [1, 2, 4, 5];
let newArr = numbers.filter(num => num>3);
console.log(newArr);  //[ 4, 5 ]

//filter() with objects
let users = [
    {name: "Rashmi", age: 19},
    {name: "Riya", age: 16},
    {name: "Rohan", age: 30}
];
let adultUsers = users.filter(user => user.age>=18);  
console.log(adultUsers);  //[ { name: 'Rashmi', age: 19 }, { name: 'Rohan', age: 30 } ]


//reduce()
//It is used when you want to combine all elements into one final value.
let numbers = [10, 20, 30, 40];
let result = numbers.reduce((sum, num) => {
    return sum+num;
}, 0);
console.log(result);