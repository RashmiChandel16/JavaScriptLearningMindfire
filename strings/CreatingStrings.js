let str1 = "Rashmi"; //string literals
let str2 = 'Riya';   //string literals
let str3 = `Rishu`; //using back tick(template literals)
/*let str4 = "Rashmi 
Chandel"; this will give syntax error*/  
let str4 = `Rashmi
Chandel`;  //this will work

let str5 = 'He said "Hello"'; //He said "Hello"  (same same type ke commas ni hone chahiye)
console.log(str5);            //let str6 = "He said "Hello"";  //this will give syntax error

//using escape character: \
let str7 = "\"Hi\"";
console.log(str7); //"Hi"
let str6 = "He said \"Hello\"";  
console.log(str6); //He said "Hello"

console.log("Hello\nWorld"); //new line
console.log("Hello\tWorld"); //tab //Hello	World
console.log("Hello World");        //Hello World
console.log("Hello \"sir\""); // \" — Double Quote: string ke andar double quote print krane k liye
console.log("It\'s a dog"); // \' — Single Quote: string ke andar single quote print krane ke liye
console.log("c\\user");  // \\ — Backslash: actual single backslash print krane ke liye


//String() ka use krke:
//This converts a value into a string.
let str = String(123);  //let str = String("Rashmi")
console.log(str); //123
console.log(typeof str);  //string

//new String() ka use krke:
let str8 = new String("Rashmi");
console.log(str8);  //[String: 'Rashmi']
console.log(typeof(str8));  //object

//Note: String() Creates a primitive string while new String() creates a String object

