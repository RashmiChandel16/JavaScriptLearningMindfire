//print every character of a string:
let str = "helol";
for(let i=0; i<str.length; i++){
    console.log(str[i]);
} 
//using built-in function/loop:
let str = "helloo";
for(let ch of str){
    console.log(ch);
}
//if we dont want to print the repeated character:
let str = "banana"   //b a n hi print ho bs
let empStr = "";
for(let i=0; i<str.length; i++){
    if(!empStr.includes(str[i])){   //agar empStr me str[i ni h tbi andar jao
       empStr = empStr + str[i];
       console.log(str[i]);
    }
}



//reverse a string:
let str = "ram";
let revStr = "";
for(let i=str.length-1; i>=0; i--){
    revStr = revStr + str[i];
}
console.log(revStr);
//using built-in function:
let str = "ram";
console.log(str.split("").reverse().join(""));


//count vowels:
let str = "Rashmi";
str = str.toLowerCase();
let count = 0;
for(let i=0; i<str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count++;
    }
}
console.log(count);
console.log(str.length-count);  //this will give consonant count but will fail in case any number is there in string
//using built-in loop/property/function:
let str = "Rashmi";
let count = 0;
for(let ch of str){
    if("aeiou".includes(ch.toLowerCase())){
        count++;
    }
}
console.log(count);


//count consonants:
let str = "Rashmi123";
str = str.toLowerCase();
let count = 0;
for(let i=0; i<str.length; i++){
    if(str[i]>'a' && str[i]<'z' && str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u'){
        count++;
    }
}
console.log(count);
//using built-in loop/property/function:
let str = "Rashmi123";
let count = 0;
for(let ch of str.toLowerCase()){
    if(ch>'a' && ch<'z' && !"aeiou".includes(ch)){
        count++;
    }
}
console.log(count);


//Count spaces in a sentence:
let str = "how are you";
let count = 0;
for(let i=0; i<str.length; i++){        //or for(let ch of str){ if(ch === " "){count++}}
    if(str[i] === " "){
        count++;
    }
}
console.log(count);


//Count a particular character:
let str = "Aarati";
let count = 0;
for(let ch of str.toLowerCase()){
    if(ch === 'a'){
        count++;
    }
}
console.log(`'a' count in word Aarati is: ${count}`);

//Find first occurrence of a character:
str = str.toLowerCase();
console.log(str.indexOf('a'));           //0

//Find last occurrence of a character:
console.log(str.lastIndexOf("a"));       //3

//Replace a character:
let str = "TATA";
console.log(str.replace("T","B"));       //BATA

//Replace all occurences:
console.log(str.replaceAll('T','B'));    //BABA

//Remove spaces:
let str = "Hello Rashmi Chandel";
console.log(str.replaceAll(" ",""));

//

