//+ - or 0
let n1 = 0;
if(n1>0){
    console.log("+")
} else if(n1<0){
    console.log("-");
} else {
    console.log("zero")
}

//even odd
let n2 = -2;
if(n2%2===0){
    console.log("even");
} else {
    console.log("odd");
}

//leap year
let year = 2026;
if(year%400 === 0 || (year%4 === 0 && year%100 !== 0) ){
    console.log(year, " is leap year");
} else {
    console.log(year, " is not a leap year");
}
               //or
/*let year = 2024;
if (year % 400 === 0) {
    console.log("Leap Year");
} else if (year % 100 === 0) {
    console.log("Not a Leap Year");
} else if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}*/


//const or var
let char = "A";
let lowerchar = char.toLowerCase();
if(lowerchar === "a" || lowerchar === "e" || lowerchar === "i" || lowerchar === "o" || lowerchar === "u"){
    console.log(char, " is vowel");
} else {
    console.log(char, " is not a vowel");
}

//Find discount based on price
//₹5000 ya usse zyada → 20% discount
//₹3000 ya usse zyada → 10% discount
//₹1000 ya usse zyada → 5% discount
//Otherwise → No discount
let price = 5000;
let discount;
if (price >= 5000) {
    discount = price * 20 / 100;
} else if (price >= 3000) {
    discount = price * 10 / 100;
} else if (price >= 1000) {
    discount = price * 5 / 100;
} else {
    discount = 0;
}
let finalPrice = price - discount;
console.log("Original Price:", price);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);

//Electricity Bill based on Units
//First 100 units → ₹5/unit
//Next 100 units → ₹7/unit
//Above 200 units → ₹10/unit
let units = 250;
let bill;
if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}
console.log("Electricity Bill:", bill);

//calculator
let a = 5, b = 10;
let operator = "-";
switch(operator){
    case "+": 
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break; 
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    default:
        console.log("Invalid operator")    
}

//print day using switch
let day = 1;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Not a valid day");
}

//check traffic signal using switch
let signal = "green";
switch(signal){
    case "red":
        console.log("stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("wait");
        break;
    default:
        console.log("not a valid signal");

}

//Check odd/even using ternary
let num = 3;
num%2 === 0 ? console.log("even number") : console.log("odd number");
            //or
let NUM = 3;
let result = NUM % 2 === 0 ? "Even" : "Odd";
console.log(result);

//check adult/minor using ternary
let AGE = 28;
AGE>18 ? console.log("adult") : console.log("minor");
            //or
let Age = 28;
let category = Age>18 ? "adult" : "minor" ;  
console.log(category);       