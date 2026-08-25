/*
>     Greater than
<     Less than
>=    Greater than or equal to
<=    Less than or equal to
==    Loose equality
!=    Loose inequality
===   Strict equality
!==   Strict inequality
*/

//string+number comparison
//Numeric comparison mein "10" number mein convert ho sakta h
console.log("10" > 5);

//string+string comparison
//dono operands strings ho, to <, >, <=, >= lexicographical comparison kar sakte h
//String comparison character-by-character hota h
console.log("20" > "10"); //true
console.log("2" > "10"); //true, bcz 2>1
console.log("apple" > "banana"); //false, bcz a<b

//null Comparisons
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null == 0); //false
//Note:->Relational comparison me null *numeric conversion* mein 0 behave karta h
console.log(null >= 0); //true
console.log(null < 1);  //true
console.log(null > 0); //false

//undefined Comparisons
//*numeric conversion* gives NaN, and comparisons with NaN are false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
console.log(undefined == 0); //false

//Boolean Comparisons
console.log(true == 1); //true
console.log(false == 0); //true
console.log(true === 1); //false
console.log(false === 0); //false
console.log(true > 0); //true
console.log(false < 1); //true

//NaN Comparisons
//Note: NaN khud ke equal bhi nahi h
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false

Number.isNaN(NaN); //true

console.log(NaN > 5); //false
console.log(NaN < 5); //false
console.log(NaN >= 5); //false
console.log(NaN <= 5); //false

//!= and !==
console.log(5 != "5");
console.log(5 !== "5");

//Objects & Arrays 
console.log([] == []); //false, bcz dono different array objs h

let arr = [];
console.log(arr == arr); //true, bcz same obj reference h

console.log({} == {}); //false, bcz dono different objects h

let obj = {};
console.log(obj == obj); //true, bcz same reference 

console.log([] == false); //true
console.log([] === false); //false

console.log("" == false); //true
console.log("" === false); //false

console.log(0 == false); //true
console.log(0 === false); //false
console.log("0" == false); //true
console.log("0" === false); //false

console.log(null == false); //false
console.log(undefined == false); //false

console.log(1 < 2 < 3); //true(1<2-->true, true numeric comparison me 1 behave krta h 1<3-->true)
