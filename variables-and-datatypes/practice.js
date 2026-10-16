let str = "MadaM";
let revStr="";
for(let i=str.length-1; i>=0; i--){
   revStr=revStr+str[i];
}
console.log(revStr);
if(str===revStr){
    console.log("string is palindrome");
}


let str2= "Ram";
let revStr2=str2.split("").reverse().join("");
console.log(revStr2);

let str3 = "NaMaN";
let str4 = str3.split("").reverse().join("");
if(str3 === str4){
    console.log("string is palindrome");
} else {
    console.log("string is not palindrome");
}

let str5="rashmIiii";
let count = 0;
for(let ch of str5.toLowerCase()){
    if(ch==="a" || ch==="e" || ch==="i"  || ch==="o" || ch==="u"){
      count++;
    }
}
console.log(count);

let str6 = "hellort";
let countt = 0;
for(let ch of str6){
    if(!"aeiou".includes(ch)){
      countt++;
    }
}
console.log(countt);