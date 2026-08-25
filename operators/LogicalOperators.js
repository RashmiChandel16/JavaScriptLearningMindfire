//logical AND
//&& gives true jb dono operands truthy ho
let age = 25;
if (age >= 18 && age <= 60) {
    console.log("Eligible");
}

//&& and || operands ki actual value return kar sakte h
//&&-->first falsy value, otherwise returns last value
console.log(10 && 20); //20, 
console.log("" && "Hello"); //""
console.log(true && true && false); //false

//||-->first truthy value, otherwise returns last value
console.log(0 || 20); //20
console.log(false || false || true); //true

let day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
}

//! gives the opposite of boolean value
console.log(!0); //true

let iisLoggedIn = false;
if (!iisLoggedIn) {
    console.log("Please login");
}

//logical operator precedence: !>&&>|| 
console.log(true || false && false);
console.log(!true && false);

console.log(false && console.log("Hello")); //will not print hello bcz phle hi false mil gya
let isLoggedIn = true;
isLoggedIn && console.log("Welcome"); //will print welcome

//let isLoggedIn = false;
//isLoggedIn && console.log("Welcome"); //welcome print ni hoga, bcz phle hi false mil gya && ke case me

console.log(true || console.log("Hello")); //will not print hello bcz phle hi true mil gya

let usernamee = "";
let namee = usernamee || "Riya";
console.log(namee); //this will print Riya, bcz || ke case me false mil gya to age check krenge ki true na ho

let username = "Rashmi";
let name = username || "Priya";
console.log(name); //Rashmi, bcz true mil gya phle hi to ab age kuch b ho || ke case me true hi


//!! cnverts value into boolean
console.log(!!"Hello"); //true

console.log(1 && 2 && 3); //3
console.log(1 || 2 || 3); //1

console.log(0 || 5 && 10); //bcz 5 && 10 → 10 then 0 || 10 → 10

console.log("" || 0 || "Hello"); //Hello

console.log("Hello" && 0 && "Rashmi"); //0

let userrname = "rashmi";
let password = "ww";
if (userrname === "rashmi" && password === "ww") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}