//Date JavaScript ka object hai jo date aur time ko create, read, modify and compare karne ke liye hota h
//let date = new Date();
//console.log(date); //current date
//console.log(typeof date); //object
//or console.log(typeof new Date());

let today = new Date();
console.log(today); //(1)local date/time acc to your system//2026-08-19T10:07:01.407Z(ISO FORMAT and UTC timezone bcz z=UTC)
console.log(today.toDateString()); //Wed Aug 19 2026
console.log(today.toTimeString()); //18:09:48 GMT+0530 (India Standard Time)
console.log(today.toISOString());//(2)UTCorGMT//2026-08-19T12:45:26.864Z(ISO format UTC vala hota h11th line vala)
console.log(today.toLocaleString("en-IN"));(3)//IST //19/8/2026, 3:49:24 pm -->(Indian standard me date)isne IST me change kr diya, z means UTC timezone(IST-->UTC/GMT+5:30)
//or console.log(today.toLocaleString()); //agar parameter me kuch ni to localized(human redable) format me deta h 20/8/2026, 4:00:00 and default date/time acc to your system leta h
console.log(today.toLocaleString("en-US")); //(4)US format
console.log(today.toLocaleDateString("en-IN")); //19/8/2026 will give only date
//or console.log(today.toLocaleDateString());
console.log(today.toLocaleDateString("en-US")); //MM/DD/YYYY(American Standard)
console.log(today.toLocaleTimeString()); //6:12:49 pm

console.log("**************");

//date ke parts nikalna
let date = new Date();
console.log(date.getDate()); //Date tarikh of month
console.log(date.getFullYear()); //to print year
console.log(date.getMonth()); //to print month, start from 0(jan)
console.log(date.getDay()); //returns day, starts from 0(sunday)
console.log(date.getHours()); //Hours/minutes/seconds?
console.log(date.getMinutes()); //minutes
console.log(date.getSeconds()); //seconds
console.log(date.getMilliseconds()); //MILIseconds

