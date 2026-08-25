//condition ke basis par different code execute karne k liye
/*if
  if...else
  else if
  Nested if
  switch
  Ternary operator ? :
*/

//if 
let total = 400
if(total >= 399)
{
    console.log("coupan can be applied");
}

//if...else
let AGE = 28;
if(AGE > 18){
    console.log("you can vote")
} else {
    console.log("you cannot vote")
}

let num = 0;
if (num) {
    console.log("True");
} else {
    console.log("False");  //False, bc 0 is falsy value
}

//else if
//when we have to check multiple conditions
let marks = 76;
if(marks >= 90){
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("fail")
}

let Num = null;
if (Num >= 0) {
    console.log("Positive");  //Positive, bcz while relational comparison, in numeric conversion null behave like 0
} else if (Num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Nested if
let age = 20;
let hasID = true;
if (age >= 20){
    if(hasID){
        console.log("Entry allowed");
    }
}

let username = "Rashmi";
let password = "1234";
if (username === "Rashmi") {
    if (password === "1234") {
        console.log("Login successful");
    }
}

//switch statement
//Jab kisi ek value ke multiple possible cases ho, tab switch useful hota h
let buttonNumber = 2;
switch(buttonNumber) {
    case 1:
        console.log("tubelight will be turned on");
        break;
    case 2:
        console.log("Fan will be turned on");
        break;
    case 3:
        console.log("tv will be truned on");
        break;
    default:
        console.log("chimney will be turned on");      
}

//Note: this will print case 2 as well as 3 and default's output bcz case 2 ke bad break ni h
//Note: this situation is called *fall-through*
let x = 2;
switch (x) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
    default:
        console.log("default");
}

//Ternary Operator(short form of if else)
let Age = 20;
let result = Age >= 18 ? "Adult" : "Minor";
console.log(result);