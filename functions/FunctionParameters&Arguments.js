//Function declare/define karte time parentheses () ke andar jo variables likhte h, unhe parameters kehte h. Parameter is like placeholder
//Function ko call karte time jo *actual value pass karte* h, use argument kehte h.
//parameter->placeholder   argument->actual value jo pass krte h
//
function greet(name){   
    console.log("Hello " + name);
}
greet("Rashmi");


function add(a, b){
    console.log("addition function")
    return a + b;
}
console.log(add(10,20));
          //or
let result = add(10, 20);
console.log(result);

//if an argument is missing:-
function mul(a,b){
    console.log(a,b);
}
(mul(10)); //10 undefined

//if we pass extra arguments:-
function addition(a,b){
    console.log(a, b); //10 20
    console.log(arguments); //[Arguments] { '0': 10, '1': 20, '2': 30 }
    //bcz arguments array like object h js me
    console.log(arguments[0]);  //10
    console.log(arguments[1]);  //20
    console.log(arguments[2]);  //30
}
addition(10,20,30);


/*situation: what happens, If a function is defined with one parameter, but you call it without passing any argument: 
then the parameter gets the value undefined. To ignore this case, that's why default parameter concept came. */
function add(a) {
    console.log(a + 10);  //NaN(bcz undefined+10)
}
add();


//default parameter: A parameter can have a default value if the caller doesn't provide a value.
function defpFunc(name = "guest"){
    console.log(name);
}
defpFunc(); //guest bcz agar koi arg pass ni kiya to default param value le lega
defpFunc("rashmi"); //agar pass kiya h to vo vala lega      


//Rest Parameters: Ye multiple arguments ko ek array mein collect karne ke liye use hota hai
// here numbers is a real array
function Add(...numbers) {
    console.log(numbers);
}
Add(10, 20, 30); //[10, 20, 30]
//example:
function test(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest); //ye rest(bache hue) arguments ko ek array me collect krke print krega
}
test(10, 20, 30, 40, 50); 
/*output
10
20
[30, 40, 50]*/


//Callback Functions: we can pass a Function Declaration as an argument
function greeet() {
    console.log("Hello");}

function execute(callback) { 
    callback();
}
execute(greeet); //here greet is passed as a callback function


//Higher-Order Functions: A function that accepts another function as an argument or returns a function.
function calculate(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
console.log(calculate(10, 20, add));


//Recursion: a Function Declaration call itself
function countdown(n) {
    if (n === 0) {  //base condition: agar ye ni di to func keeps calling itslef n it will result in stack overflow
        return;
    }
    console.log(n);
    countdown(n - 1);
}
countdown(5);
/*output
5
4*/


//this cncept in function:??


