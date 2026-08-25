//return sends a value back from the function.
function add(a, b){
    console.log("hey");
    return a + b;
}
add(10,20); //ye sirf consle vali chiz print krega
console.log(add(10,20)); //ye console vali chiz b print krega and return vali b
         //or
let result = add(10, 20);
console.log(result); //hey 30

//if there is no return
function greet(){
    console.log("hello rashmi");
}
let Result = greet();
console.log(Result); //hello rashmi undefined


//console.log() → displays something.
//return → sends a value back to the caller and *terminates* the function.
//Note: agar return statment ke bad kuch likha h to vo execute ni hoga
function helloFunc(){
    console.log("hi");
    return "rashmi";
    console.log("hello")
}
helloFunc(); //hi only bcz return terminates the funct
console.log(helloFunc());


//multiple return statemenets
function checkNumber(num){
    if (num > 0){
        return "Positive";
    }

    if (num < 0){
        return "Negative";
    }
    return "Zero";
}
console.log(checkNumber(10)); //Positive, iske bad function terminate h jaega bcz return terminates the function


