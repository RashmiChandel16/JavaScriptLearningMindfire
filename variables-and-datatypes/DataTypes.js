console.log(typeof "Hello");     //string
console.log(typeof 10);          //number
console.log(typeof true);        //boolean
console.log(typeof undefined);   //undefined
console.log(typeof null);        //object 
console.log(typeof 10n);         //bigint
console.log(typeof Symbol());    //symbol
console.log(typeof {});          //object
console.log(typeof []);          //object
console.log(typeof function(){});//function

//String
let name = `Rashmi`;
name[0]=`H`;
console.log(name); //Rashmi, bcz string is immutable
console.log(typeof name);
console.log(name.length); //gives string length

//Number
let age = 25;
console.log(age);
console.log(typeof age);

let z = "100";
console.log(Number(z)); //Number() converts string into number


//NaN
let x = "Hello" - 5;
console.log(x); //NaN
console.log(typeof x); //number, IMP: bcz in js typeof NaN is number

let a = "100ppx";
console.log(Number(a)); //NaN, bcz Number() couldn't convert it into number

console.log(parseInt("100px")); //100

console.log(parseFloat("99.99px")); //99.99

console.log(10/0); //Infinity
console.log(typeof Infinity); //number

//Boolean
let isActive = true;
console.log(isActive);
console.log(typeof isActive);

console.log("" == 0); //true
console.log("" === 0); //false
console.log(null == 0); //false
console.log(null === 0); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(5 == "5");  // true, checks only value
console.log(5 === "5"); // false, checks value and datatype both


//null
//intentionally empty value
let  temp = null;
console.log(temp); //null
console.log(typeof temp); //object


//undefined
//variable is declared but value is not assigned yet
let seatno;
console.log(seatno); //undefined
console.log(typeof seatno); //undefined

console.log(null == undefined);  //true
console.log(null === undefined); //false

//function is not returning anything only print kra rha
function test() {
    console.log("hello");
}
console.log(test()); /*hello           //is line me function call ho rha and jo return krega use print krane ki koshis kr rhe
                       undefined*/ 


let user = { name: "Rashmi" };
console.log(user.age);  //undefined, bcz we are trying to access non-existing prperty              


//BigInt
let bigNum = 123535376664n;
console.log(bigNum);
console.log(typeof bigNum); //bigint

console.log(10n + 5n); //15n
//console.log(10n + 5);  //TypeError

let bigNumber = 100n;
console.log(Number(bigNumber)); //100

//Date
//Date JavaScript ka object hai jo date aur time represent karta hai
//let date = new Date();
//console.log(date); //current date
//console.log(typeof date); //object
//or console.log(typeof new Date());

let specificDate = new Date("2026-08-18");
console.log(specificDate); //to print specific date

let date = new Date();
console.log(date.getDate()); //Date/day of month
console.log(date.getFullYear()); //to print year
console.log(date.getMonth()); //to print month, start from 0(jan)
console.log(date.getDay()); //returns day, starts from 0(sunday)
console.log(date.getHours()); //Hours/minutes/seconds?
console.log(date.getMinutes()); //minutes
console.log(date.getSeconds()); //seconds

let today = new Date();
let fiveDaysAgo = new Date(today);
fiveDaysAgo.setDate(today.getDate() - 5);
console.log("Today:", today.toDateString());
console.log("5 days ago:", fiveDaysAgo.toDateString());


console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());