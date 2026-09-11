//basic example
function greet(){
    console.log("hello");
}
function execute(callback){
    callback();
}
execute(greet);

//Callback with parameter:
//Eg1:
function greet(name){
    console.log("Hello ", name);
}
function execute(name, callback){
    callback(name);
}
execute("Rashmi", greet);

//Eg2:
function sum(a, b){
    let result = a+b;
    console.log(result);
    //or directly console.log(a+b);
    
}
function calculator(a, b, callback){
    callback(a, b);
}
calculator(2, 3, sum);

//Eg2 with arrow function:
function calculator(a,b, callback){
    callback(a,b);
}
calculator(2, 3, (a,b)=>{
    let result = a+b;
    console.log(result);
});
//Note: till now callback is getting called immidiately and workigng as synchronous function bcz there is no setTimeout, Promise, API call etc.

//setTimeout(   function,   delay   )  --> kya krna h, kitne time bad

//callback can be asynchronous:(yad rkho ise)
//Yes. Callbacks can be asynchronous. For example, they can be used with timers, API requests, file operations, and other asynchronous tasks.
function getData(callback){

    setTimeout(() => {
        console.log("hello");
        callback("data received");
        console.log("hi");
    }, 2000);
    
}
getData((data) => {
    console.log(data);
});   
console.log("done");
/*output: 
done
hello
data received
hi
*/


//callback hell?
//Callback Hell means having callbacks nested inside other callbacks, making the code difficult to read and maintain.
//Callback hell occurs when multiple callbacks are deeply nested, making asynchronous code difficult to read, debug, and maintain.
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

step1(function (){
    step2(function () {
        step3();
    })
});

