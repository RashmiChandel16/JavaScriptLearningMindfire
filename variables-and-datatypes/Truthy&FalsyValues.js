/*falsy values
false
0
-0
0n
""
null
undefined
NaN
Boolean-->doubt??
*/

//Boolean js ka built in function/obj h and function itself truthy hota h
//ye upar j falsy h inke alaca baki sb truthy
if(Boolean)
{
    console.log("print hoga")
}

//"Hello" is truthy value
if("Hello") 
{        
    console.log("Yes");
}

//empty string is falsy value
if("") 
{              
    console.log("Yes");
} 
else
{
    console.log("No");
}

//space
if(" ") 
{              
    console.log("space truthy value h");
} 

//non empty string
if("0") //non empty string so its a truthy value
{
    console.log("will run");
}

//Infinity
if(Infinity) //truthy value
{
    console.log("will run");
}

//Empty array
if([]) //truthy value
{
    console.log("will run");
}

//Empty object
if({}) //truthy value
{
    console.log("will run");
}

//function
if(function(){}) //truthy value
{
    console.log("will run");
}

//Boolean()--> Kisi value ko explicitly Boolean mein convert karta hai
console.log(Boolean(10));     // true
console.log(Boolean(0));      // false
console.log(Boolean("Hello"));// true
console.log(Boolean(""));     // false

// !!-->short way to convert any value to Boolean
console.log(!!"Hello"); //true
console.log(!!0); //false

// !-->this gives opposite of boolean
console.log(!true); //false
console.log(!0);    //true

// || first truthy value return karta hai(or operator)
console.log(0 || 10); //10
console.log(10 || 20); //10
console.log(null || undefined || 0 || "JavaScript"); //JavaScript

// && first falsy value return karta hai. (and operator)
// Agar koi falsy nahi mila, toh last value return karta hai.
console.log(10 && 20); //20
console.log(0 && 20);  //0
console.log("Hello" && "World"); //World
console.log("" && "Hello");  //""
console.log(10 && 20 && 0 && 30); //0