/*
+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Modulus
**   Exponentiation
++   Increment
--   Decrement
*/

//addition
console.log(10 + 20);
console.log(10.5 + 2.7); //13.2 if 2.5 hta then 13
console.log(10 + 20 + "30" + 10 + 20);
console.log(10n + 20n); //30n
//console.log(10n + 20); //Type Errr

//subtraction
console.log(20 - 10);
console.log("20" - 5 + "5");

//multiplication
console.log(5 * 4);
console.log("5" * 4);
console.log("Hello" * 5); //NaN
console.log(10 * null)     //0
console.log(10 * undefined)  //NaN
//Note: Because null converts to 0, while undefined converts to NaN

//division
console.log(20 / 5);
console.log("20" / 5);
console.log(10 / 0); //Infinity
console.log(-10 / 0); //-Infinity
console.log(0 / 0); //Nan

//modulus
console.log(10 % 3);
console.log(-10 % 3);
console.log("10" % 3);

//exponentiation--> calculates power
console.log(2 ** 3);
console.log(2 ** 3 ** 2); //2 ** (3 ** 2)Exponentiation right to left associate hota hai

//increment
let x = 10;
x++;
console.log(x); //11

let y = 10;
console.log(y++); //10
console.log(y);   //11

let z = 10;
console.log(++z); //11
console.log(y);   //11

let a = 5;
let b = a++;
console.log(a); //6
console.log(b); //5

let c = 5;
let d = ++c;
console.log(c); //6
console.log(d); //6

//decrement
let e = 10;
e--;
console.log(e); //9

let f = 10;
console.log(--f); //9

let g = 10;
console.log(g--); //10

//BODMAS/PEMDAS-->(),**,* / %,+ -
//Same priority operators generally left to right evaluate hote h
//Number + Number → Addition
//String + anything → Concatenation
//-, *, /, % usually numeric conversion try karte h



