//Function-->reusable block of code hota h which is designed to perform a specific task.
//every function in js is a function object
//function declaratin-->
function greet(){
    console.log("Hello");
}
greet();
console.log(greet()); //hello
                      //undefined  


//function expression--> means a function is assigned to a variable
//Note: function expression can be anonymous as well
let myFunc = function greet(){
    console.log("Hello");
    return 30;
};
myFunc(); //this will print console part only
console.log(myFunc()); //this will print console part + return part
          //or
let funcReturn = myFunc();
console.log(funcReturn);


//anonymous function: function without name
let myFunct = function(){
    console.log("Hello");
};
myFunct();


//arrow function
let arrFunc = () => {
    console.log("this is arrow function");
};
arrFunc();

//single statement arrow func ko aise b likh skte h
let myAddress = () => console.log("Noida");
myAddress();


//Function Declarations is hoisted: we can call function before declaration
greetings();
function greetings(){
    console.log("hey");  //hey
}

//Note: Function Expression ke case me: agar let and const ko assigned h func to hoisted ni hoga
/*greets(); //reference error
const greets = function() {
    console.log("Hello");
};*/


//function with same name:
function greet() {
    console.log("Hello");
}
function greet() {
    console.log("Hi");
}
greet();  //Hi, bcz function will be overwrite


//lexical scope: agar function ko variable func ke andar ni milta to vo outside vala variable le leta h
let name = "Rashmi";
function meet() {
    console.log(name);
}
meet();


//Nested Function Declaration
function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    inner();
}
outer(); //10