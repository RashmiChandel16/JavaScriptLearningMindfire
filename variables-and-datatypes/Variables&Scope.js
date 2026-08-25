var x = 10;
var x = 20; 
console.log(x); //20 bcz var can be redeclared and reassigned

let y = 30;
let y = 40; 
console.log(x) //syntax error bcz let cannot be redeclared in the same scope

const z = 50;
const z = 60;
console.log(z); //syntax error bcz const cannot be redeclared & reassigned in the same scope

//global scope
let x = 10;
function test(){
    console.log(x);
}
test();

//function scope
function test(){
    var x = 20;
}
console.log(x); //Reference error

//Block Scope
if(true){
const y = 40;
} 
console.log(y); //Reference error


//x which is out of the block has global scope and inner x has block scope
let x = 10;
{
    let x = 20;
    console.log(x); //20
}
console.log(x); //10


//x is reassigned but not redeclared
let x = 10;
{
    x = 20; //new x variable is not created here, x is not redeclared only reassign hua h to outer vale x ki value hi 20 ho jaegi bcz new x ni bna inner vale ke liye
    console.log(x); //20
}
console.log(x); //20

//TypeError: Assignment to constant variable.
//Bcz const ke case me 'reassign' ni kr skte bcz fir inner vala b same x hoga is case me and const ki value change ni kr skte
const x = 10;
{
    x = 20;
    console.log(x);
}

//global scope vala name and function scope vala name both are different variable bcz redeclare b hua h
let name = "Rashmi";
function test() {
    let name = "Riya";
    console.log(name); 
}
test(); //Riya
console.log(name); //Rashmi


for (var i=0; i<3; i++) {
    console.log(i); //0 1 2
}
console.log(i); //3

for (let j=0; j<3; j++) {
    console.log(j); //0 1 2 
}
console.log(j); //ReferenceError: j is not defined, bcz let has block scope

for (const k=0; k<3; k++) {
    console.log(k); //0 1 2 
}
console.log(k); //ReferenceError: k is not defined, bcz const has block scope


{
    const obj = { value: 20 };
    console.log(obj.value); //20
}
console.log(obj); //ReferenceError: obj is not defined

