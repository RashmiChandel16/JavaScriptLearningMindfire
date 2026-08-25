//length
let str1 = "Hi Rashmi";
console.log(str1.length);

//str[index]
console.log(str1[1]);

//charAt()
console.log(str1.charAt(0));
console.log(str1.charAt(-2)); //dooesn't support -ve index, actual value empty string"" dega so cnsole me blank dikhega

//at(): -ve index support krta h
console.log(str1.at(-1));

//str[index] vs charAt()
console.log(str1[10]); //undefined
console.log(str1.charAt(10)); //"" empty string //blank

//toUpperCase()
console.log(str1.toUpperCase());

//toLowerCase()
console.log(str1.toLowerCase());

//all above methods do not change original string


//trim()
//Beginning aur end ke spaces remove karta h.
let str2 = " Hi Rashmi ";
console.log(str2.trim());
console.log(str2); 

//trimStart()
//Sirf beginning ke spaces remove krta h
console.log(str2.trimStart());

//trimEnd()
//Sirf end ke spaces remove
console.log(str2.trimEnd());


//includes()
//check krta h string ke andar substring present h ya ni
let str3 = "hello world";
console.log(str3.includes("Hello")); //false

//startsWith()
//Check karta h string kisi particular text se start hoti h ya nahi
console.log(str3.startsWith("hello wo")); //true

//endsWith()
//Check karta h string kisi particular text par end hoti h ya nahi.
console.log(str3.endsWith("lo world"));  //true

//indexOf()
//Substring ka first index return karta h
console.log(str3.indexOf("world"));
console.log(str3.indexOf("Hi")); //agar sunstring ni mili tthen will return -1

//lastIndexOf()
//substring ke last occurance ka index deta h
let str4 = "Hello Rashmi Hello ji";
console.log(str4.lastIndexOf("Hello"));

             //Extracting Parts of String

//slice()
let str5 = "RashmiChandel";
console.log(str5.slice(0,6)); //0-5 tk vali string extract krke
console.log(str5.slice(6,2)); //empty string
console.log(str5.slice(2)); //2 se last tk
console.log(str5.slice(-2)) //-2 se last tk(piche se -1 se index start)
console.log(str5.slice(-6,-2)); //-6 se -3 tk

//subString()
console.log(str5.substring(0,6)); //0-5
console.log(str5.substring(6,2)); //wiil convert it into 2,6
console.log(str5.substring(-2)); //Note: subString doesn't support -ve index, convert it into 0

console.log("********************");
//substr()
//str.substr(start, length)-> length means kitne character chahiye
//it supports -ve index
console.log(str5.substr(0, 4));
console.log(str5.substr(-2, 4)); //-2 se right side



//replace(): First matching occurrence replace karta h
let str6 = "Hello World";
console.log(str6.replace("World", "Rashmi"));

//replaceAll(): Saari matching occurrences replace karta h
let str7 = "hi hello hi";
console.log(str7.replaceAll("hi", "hey"));


//split(): string ko split krke array me convert krta h
let str8 = "Apple,Banana,Mango";
let result = str8.split(",");
console.log(result); //[ 'Apple', 'Banana', 'Mango' ]

//concat(): strings ko combine krta h
let a = "Hello";
let b = "World";
console.log(a.concat(" ", b));

//repeat()
let str9 = "Hi ";
console.log(str9.repeat(3));

//charCodeAt()
//Character ka UTF-16 code unit return karta h
let str01 = "ABC";
console.log(str01.charCodeAt(0)); //65