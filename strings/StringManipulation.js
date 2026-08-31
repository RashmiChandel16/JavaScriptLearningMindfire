//"use strict";
//String ke saath koi operation karna — jaise usko uppercase karna, lowercase karna, usme se kuch part nikalna, replace karna, join karna,....ise string manipulation kehte h
let str = "hello";
str.toUpperCase();
console.log(str) //hello (bcz string is immutable in js)

str = str.toUpperCase();
console.log(str); //ab HELLO dega
//ya console.log(str.toLowerCase()); kro directly



let str1 = "Hello JS World";
console.log(str1.replaceAll(" ",""));       //HelloJSWorld
// OR console.log(str1.replace(/ /g, ""));    //HelloJSWorld

let Str1 = "Hello   JS   World";  //AGAR MULTIPLE SPACES KO SINGLE SPACE SE REPLACE KRNA HO TO
console.log(Str1.replace(/\s+/g," ")) //Hello JS World



let str2 = "Hello World";
let newStr = str2.replace("World", "Rashmi");
console.log(newStr);

let str3 = "JavaScript";
let result = str3.slice(0, 4); //0 se 3 tk
console.log(result); //Java

let str4 = "JavaScript";
console.log(str4.substring(0, 4)); //0 se 3 tk //Java

//String ko array me convert krna:
let str5 = "apple,banana,mango";
let resultt = str5.split(",");
console.log(resultt); [ 'apple', 'banana', 'mango' ]



//concat()
let firstName = "Rashmi";
let lastName = "Chandel";
let Result = firstName.concat(" ", lastName);
//OR let Result = firstName + " " + lastName;
//OR let Result = `${firstName} ${lastName}`;
console.log(Result); //Rashmi Chandel

//concatation with numbers and other data types:
//concept: When + operator is used with a string, JS performs string concatenation and converts the other operand to a string.
//dtring with boolean
console.log("Result" + true);  //Resulttrue
//string with null
console.log("Value" + null);   //Valuenull
//string with undefined
console.log("Value" + undefined); //Valueundefined
//string with NaN
console.log("Result" + NaN); //ResultNaN
//string with array
let arr = [1, 2, 3];
console.log("Array" + arr); //Array1,2,3   (bcz array string me convert ho gya "1,2,3")
console.log("Value" + []); //Value  (bcz empty array ko jb string me convert krega to "")
//string with objexct
let obj = {
    name: "Rashmi"
};
console.log("Student" + obj); //Student[object Object] //bcz normal object ka default string representation [object Object] hota h.
//agar actual object ki information chahiye:-
console.log("Student: " + JSON.stringify(obj));  //Student: {"name":"Rashmi"}

//string with function:
function hello() {
    return "Hello";
}
console.log("Function" + hello);  //Functionfunction hello() {
                                  //           return "Hello";
                                 //           }

//console.log(10 + 100n); //this will give type error
let num = 100n;
console.log("Number" + num); //Number100

console.log(10 + null); //calculations me null is treated as 0
console.log(10 + undefined); //NaN (jha b undefined ke sath concatanation to NaN)
console.log(typeof(10+undefined)); //number {yad rkho type of NaN is number}
console.log(true + true); //2
console.log(true/null);  //Infinity
console.log(null/null); //NaN (bcz 0/0)




//normal mode me:
let strr = "Hello";
strr[0] = "Y";  //normal mode me this will not give error but change ni hoga
console.log("----------------------------------------------------------");
console.log(strr);
strr = strr[0] + strr.slice(1);
console.log(strr); //this will still give Hello
//agar Yellow krna h to:->
strr = "Y" + strr.slice(1);
console.log(strr); //Yello

//'strict mode' me: doubt?? --> ise program ke sbse starting me lgane pr ye reference error dega

let sttr = "hello";
sttr[0] = "Y"; //aisa krne pr strict mode me TypeError: Cannot assign to read only property '0' of string 'hello' dena chahiye pr mere end pe ni arhi
console.log(sttr);

//Example:
let name = " rashmi chandel ";
/* name = name.trim();
name = name.toUpperCase(); */ 
console.log(name.trim().toUpperCase()); //in one line //RASHMI CHANDEL
