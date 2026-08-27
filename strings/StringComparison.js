//using ===
console.log("Hello" === "hello"); //false

let str1 = "Hello";
let str2 = "hello";
console.log(str1.toLowerCase() === str2.toLowerCase()); //true

//eg:
function compareStrings(str1, str2){
    return str1.toUpperCase() === str2.toUpperCase() ;
}
console.log(compareStrings("hello","Hello")); //true


//localeCompare()
//ye 2 strings ko compare karke batata h ki unka alphabetical order kya h
//str1.localeCompare(str2)
//agar str1 alphabetically str2 se pehle aati h to result +ve, agar bad me to result -ve agar equal to result 0
console.log("apple".localeCompare("banana")); //-1
console.log("apple".localeCompare("Apple"));  //-1

//Example:
let result = "apple".localeCompare("banana");
if(result<0){
    console.log("apple comes before banana");
}
else if(result>0){
    console.log("apple comes after banana");
}
else{
    console.log("both are equal");
}

//for case-insensitive comparison:
//Note: localeCompare() me hm options de skte h for ignoring case
console.log("apple".localeCompare("Apple", undefined, {sensitivity: "base"}));  //0


//Real use (IMPORTANT):

//(1) Sorting names:
let studentNames = ["Riya", "Ankita", "Dipti"];
studentNames.sort((a, b) => a.localeCompare(b)); //used sort() array method and function inside it
//Note: agar descending order me sorting krni ho to line no 44
//studentNames.sort((a, b) => b.localeCompare(a));  //
console.log(studentNames);  //[ 'Ankita', 'Dipti', 'riya' ]

//same number array sorting case me ye sort method aise use kr skte h
let numberArr = [20, 10, 50, 30, 40];
numberArr.sort((a,b) => a-b);   //agar descending order me sort krna ho to b-a krdo bs
console.log(numberArr);


//(2) Alphabetical comparison:
let resultt = "Delhi".localeCompare("Mumbai");
if(resultt<0){
    console.log("Delhi comes first");
}

//(3) Case-insensitive comparison:
let a = "Rashmi";
let b = "rashmi";
console.log(a.localeCompare(b, undefined, {sensitivity: "base"}) === 0);  //true


//Note: JS strings ko < aur > se compare krte waqt alphabet ke basis pr nahi, Unicode values ke basis par compare karta h.
//A = 65,.................Z=90,   a=97......z=122 (unicode values)
console.log("A" < "a"); // true
console.log("Z" < "a"); // true
console.log("Z" > "a"); // false
console.log("cat" > "car"); //true