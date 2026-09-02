//Hoisting is a JS behavior, where declarations are processed before the code is executed.
//Before running the code, JS engine registers the declaration in the memory. (1st memoory creation phase then execution phase)
//ReferenceError = JS ko jis variable/function ka reference chahiye, woh available nahi hai ya abhi access karna allowed nahi hai.

//1. var               --> var hoist hota h and undefined se initialize ho jata h memory creation phase me
console.log(a);        //undefined  (bcz declaration is hoisted so, var a is already there but initialization is not hoisted, and var get undefined in the starting(in memory phase before execution)
var a = 10;            //roughly it is treated like:  var a; console.log(a); a=10;

console.log(b);        //undefined
var b;   

                  
//2. let                --> let hoist to hota h but initialize ni hota memory phase me(jaise var undefined se initialize ho jata tha) balki tdz me chla jata h  
//                      --> Matlab memory me a ka existence h, but usko value access karne ki permission nahi hai jab tak declaration/initialization line execute nahi ho jati. Is period ko TDZ khte h
console.log(c);         //ReferenceError: Cannot access 'c' before initialization
let c;             /*  let c; --> memory mein binding to create hai
                            Lekin x ko initialize nahi kiya gaya.
                            Jab tak ye line nahi aati: let c = 20; tab tak x ko access nahi kar sakte.
                            Program start
                            ↓
                            Memory creation
                            ↓
                            a registered
                            ↓
                            TDZ
                            ↓
                            console.log(a)  ❌ ReferenceError
                            ↓
                            let a = 10
                            ↓
                            TDZ ends
                            ↓
                            a = 10  */
//Note: JS ko a ke baare me pata to tha ki a exist karta h, but initialization se pehle access allowed ni h, isliye reference error.


//3. const
console.log(d);               
const d = 10;               /* same behavior as let:  const → hoisted
                                                            ↓
                                                      uninitialized
                                                            ↓
                                                           TDZ
                                                            ↓
                                                 access → ReferenceError     */     
                                                 
                                                 
//4. function declaration:  hoisted + complete function available
hello();
function hello(){
    console.log("Helloji")
};   
//Output: Helloji
//bcz Function declaration ki poori definition memory me available ho jati h, isliye declaration se phle call kr skte h


//4(ii) function expression
greet();
var greet = function(){
    console.log("hello");
};
//Output: TypeError: greet is not a function  (Reason: bcz var greet; ye hoist ho jata h to undefined se initialize ho jaega memory creation phase me, to greet(); means undefined ko function ki tarah call kr rhe jo valid ni h isliye TypeError dega)


//4(iii) Arrow function
//same bahavior with arrow function: TypeError
greet();
var greet = () => {
    console.log("hello");
};

greet();                        //ReferenceError: Cannot access 'greet' before initialization
let greet = () => {
    console.log("hello");
};


//Eg: scope+hoisting
var a = 10;              //global a alag variable
function test() {
    console.log(a);      //local a(bcz var is function scoped) is alag variable
    var a = 20;
}
test();                 //undefined


//Eg: Hoisting inside nested/block scopes:
var a = 10; 
function test() {
    console.log(a);
    if (true) {
        var a = 20;
    }
}
test();                //undefined   (Note: if inside if block, there is let a = 20 then output will be 10 bcz it will take global scope a)