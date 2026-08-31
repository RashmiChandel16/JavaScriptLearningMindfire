//kisi value ko String mein convert karna.
let num = 100;
let numtoString = String(num);
console.log(numtoString); //100
console.log(typeof(numtoString)); //string

//niche sb string me convert ho jaenge and sbka type string hoga typeof krne pr
console.log(String(100)); //100
console.log(String(true)); //true
console.log(String(false));  //false
console.log(String(null));  //null
console.log(String(undefined));  //undefined

let arr = [1, 2, 3];
console.log(String(arr)); //1,2,3 and typeof string hoga

let obj = {
    name: "Rashmi"
};
console.log(String(obj));  //[object Object]


//toString se b kr skte h but ye sirf valid valo ko hi string me convert krega baki me error dega
console.log("100".toString());  //100
//console.log(null.toString());  -------> isme error dega


//Converting String to Number:
let str = "100.11";
let numb = Number(str);
console.log(numb); //100.11
console.log(typeof numb); //number

console.log(Number("")); //0 (EMPTY STRING KO 0 ME CONVERT KREGA)
console.log(Number("hello"));  //NaN
console.log(Number(true)); //1
console.log(Number(false));  //0
console.log(Number(null));  //0
console.log(Number(undefined));  //NaN


//parseInt(): string ko integer me conver krne k liye
console.log(parseInt(100.99));  //100
console.log(parseInt("25px"));  //25
console.log(parseInt("px25"));  //NaN


//parseFloat(): Decimal number chahiyeto
console.log(parseFloat("199.99"));  //199.99


console.log(Number("100px"));        // NaN
console.log(parseInt("100px"));      // 100
console.log(parseFloat("100.50px")); // 100.5



//Converting String to Array:
//using split() and Array.from() ka use b kr skte h

let str1 = "Hello";
console.log(str1.split("")); //[ 'H', 'e', 'l', 'l', 'o' ]

let str2 = "apple,banana,mango";
let arr1 = str2.split(",");
console.log(arr1); //[ 'apple', 'banana', 'mango' ]

let str3 = "Hello";
let arr2 = Array.from(str3);
console.log(arr2); //[ 'H', 'e', 'l', 'l', 'o' ]

let str4 = "apple,banana,mango";
let arr3 = Array.from(str4);  /* [ 'a', 'p', 'p', 'l', 'e',
                                   ',', 'b', 'a', 'n', 'a', 
                                   'n', 'a', ',', 'm', 'a',
                                   'n', 'g', 'o'
                                  ] */
console.log(arr3);


//+ - operations with string and numbers
console.log("10" + 5 - 2);  //103
console.log("Hello"+5-3);   //NaN
console.log("Hello" + true) //Hellotrue
console.log("hello" + [1, 2, 3]); //hello1,2,3
console.log([1, 2] + [3, 4]); //1,23,4

//eg:
let price = "$199.99";
let num1 = Number(price.replace("$", ""));
console.log(num1); //199.99
