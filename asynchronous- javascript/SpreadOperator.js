//spread operator: used to unpack values from an iterable or object.
//Spread with Array:
let numbers = [10, 20, 30, 40];
console.log(...numbers);     //10 20 30 40

//Copy an Array:  spread is commonly used for creating a shallow copy.
let users = ["rashmi", "riya", "ankit"];
let newUsers = [...users];   //first spread the array then put it into new array
console.log(newUsers);  //[ 'rashmi', 'riya', 'ankit' ]
/*Note: if we do this:
let users = ["Rashmi", "Priya"];
let newUsers = users;
then it doesn't create new array, bcz both variables point to the same array
*/

//combining two arrays:
let fruits = ["Mango", "Apple", "Banana"];
let vegetables = ["Potato", "Tomato", "Parwal"];
let food = [...fruits, ...vegetables];
console.log(food);   //[ 'Mango', 'Apple', 'Banana', 'Potato', 'Tomato', 'Parwal' ]


//Spread with function arguments:
function add(a, b, c){
    return a+b+c;
}
 let numbers = [10, 20, 30];
 console.log(add(...numbers));   //60


//Spread with objects:
let user = {
    name: "Rashmi",
    age: 25
};
let newUser = {
    ...user
};
console.log(newUser);  //{ name: 'Rashmi', age: 25 }

//Add new properties:->
let user = {
    name: "Rashmi",
    age: 25
};
let newUser = {
    ...user,
    city: "Noida"
};
console.log(newUser); //{ name: 'Rashmi', age: 25, city: 'Noida' }

//Update an object's property:
let user = {
    name: "Rashmi",
    age: 25
};
let updatedUser = {
    ...user,
    age: 26
};
console.log(updatedUser);  //{ name: 'Rashmi', age: 26 }  //Because later properties overwrite earlier ones.


//Example:
let commonData = {
    browser: "chromium",
    environment: "staging"
};
let loginData = {
    ...commonData,
    username: "testuser",
    password: "Test@123"
};
console.log(loginData);
/*output:
{
  browser: 'chromium',
  environment: 'staging',
  username: 'testuser',
  password: 'Test@123'
}
*/


//rest operator: Collect multiple values into one array.
function add(...numbers){
    console.log(numbers);
}
add(10,20,30);   //[ 10, 20, 30 ]

function test(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
test(10, 20, 30, 40, 50);

//Rest with arrow function:
const add = (...numbers) => {
    return numbers;
};
console.log(add(10, 20, 30));




