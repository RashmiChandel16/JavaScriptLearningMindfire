//Normal function calling:
function greet(){
    console.log("hello");
}
greet();                 //here we are saying run greet now.
console.log("Bye");

//But what if we want to run a function later:
console.log("Start");
setTimeout(function () {      //Here this anonymous function is given to setTimeout function so that it can be run later(after 2secs), here this anonymous function is called callback function
    console.log("hello");     //setTimeout ne callback ko 2 seconds baad chalane ke liye schedule kiya.
}, 2000);
console.log("End");
//outpot: first it will print Start, then End, then printing hello after 2secs(bcz we told js that run this function after 2secs)


//A callback function is a function that is passed as an argument to another function and is called later by that function.
//A callback is a function that we give to another function, so that it can be called later by that function.
function greet(){
    console.log("hello");
}
function execute(callback){
    callback();
}
execute(greet);  //here we passed greet as an argument.

/*Why didn't we simply write 
function greet(){
    console.log("hello");
}
function execute(){
    greet();          //this will execute only greet
}
execute();

But using callback function concept:
bcz what if we want more functions like greet:
function sayHi(){
console.log("hi");
}
function sayBye(){
console.log("Bye");
}
now if we write like:
function execute(callback){
   callback();
}
so by using callback:
execute(greet); 
execute(sayHi);
execute(sayBye); 
we can execute different functions & execute, doesn't care which function it receives */

//Think of callback like a job instruction:
//(Do this work, and when you're finished, call this function):
function doWork(callback){
    console.log("doing work");
    callback();
}
function finished(){
    console.log("work finished");
}
doWork(finished);
//So callback is basically: "What should I do after this?"


//Real Example: Suppose you ask a server for data, the server might take time so by using callback js says, continue doing other woork, when data arrives call this function.
getUserData(function (data){
    console.log(data);
});
/*Request data
     ↓
Continue other work
     ↓
Server responds
     ↓
Callback executes
     ↓
Process data */



/*But the problem starts when we have MANY async operations:
getUser
   ↓
  getOrders
      ↓
     getPayment
          ↓
         sendEmail
              ↓
             Done   */
getUser(function (user) {

    getOrders(user, function (orders) {

        getPayment(orders, function (payment) {

            sendEmail(payment, function () {

                console.log("Everything done");

            });

        });

    });

});

//more simple example:
function step1(callback) {
    console.log("Step 1");
    callback();
}

function step2(callback) {
    console.log("Step 2");
    callback();
}

function step3() {
    console.log("Step 3");
}

step1(function() {
    step2(function() {
        step3();
    });
});
//This becomes deeply nested. This is called: Callback Hell. 
//(Too many nested callbacks become difficult to read, maintain, and handle errors in.)
//Callbacks are still useful, but excessive nesting of callbacks can lead to callback hell.
/*
setTimeout(() => {}, 1000);
array.forEach(() => {});
array.map(() => {});
button.addEventListener("click", () => {});
All of these use functions as callbacks. */


//Function vs Function Call: if we write execute(greet()); then this line will first call greet function and whatever this function returns it is passed as an argument.
function greet(){
    console.log("hello");
    return function greet2(){
        console.log("hi");
    };
}
function execute(callback){
    callback();
}
execute(greet()); 
/*output: hello
          hi     (bcz in 21 line, greet() is called first so hello is printed and it is returning greet2 function which is passed as an argument execute(greet2); so callback=greet2)*/



//1. Callback using an anonymous function:
//We don't always need to create a named function.
//We can directly pass a function:
function execute(callback){
    callback();
}
execute(function () {         //here we have passed anonymous function as an argument.
    console.log("hello");
});


//2. Callback with arrow function:
function execute(callback){        
    callback();
}
execute(() => {
    console.log("hello");
});


//3. Callback with parameters:
//Callbacks can receive arguments too->
function execute(a, b, callback){
    let result = a + b;
    callback(result);
}
function displayResult(result){
    console.log(result);
}
execute(10, 20, displayResult);        