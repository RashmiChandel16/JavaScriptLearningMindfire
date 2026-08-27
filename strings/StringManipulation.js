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
newStr = str2.replace("World", "Rashmi");
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



//normal mode me:
let strr = "Hello";
strr[0] = "Y";  //normal mode me this will not give error but change ni hoga
strr = strr[0] + strr.slice(1);
console.log(strr); //this will still give Hello
//agar Yellow krna h to:->
strr = "Y" + strr.slice(1);
console.log(strr); //Yello

//'strict mode' me: doubt??
"use strict";
let sttr = "hello";
sttr[0] = "Y"; //aisa krne pr strict mode me TypeError: Cannot assign to read only property '0' of string 'hello' dena chahiye pr mere end pe ni arhi


//Example:
let name = " rashmi chandel ";
/* name = name.trim();
name = name.toUpperCase(); */ 
console.log(name.trim().toUpperCase()); //in one line //RASHMI CHANDEL
