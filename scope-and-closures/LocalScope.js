/*Local scope-> 1. block scope(let/const)
                2. Function scope(var)   */

//Local scope means a variable declared inside a function or block is accessible only within that particular function/block.

//var is function scoped, let & const are block scoped:
function test(){
    var x = 10;
    let y = 20;
    {
        var m = 30;
        let n = 40;
    }
    console.log(x, y);  //10 20  (bcz var x and let y are in function scope)
    console.log(m);     //30 (bcz var is function scoped so can be accessed outside of a block)
    console.log(n);     //ReferenceError (bcz let&const are block scoped)
} 
test();

//Note: block kya-kya ho skte h:
//1. if
/*2. for(let i = 0; i<3; i++){
       console.log(i);
     } ----> i is not available outside of loop bcz let is block scoped 
*/
/*3. while(condition){
     let x=10;
     } 
*/
/*4. Standalone block: 
     {
         let x=20;
     }
*/



//Nested Scope:
let a = 10;
function outer(){
    let b = 20;
    function inner(){
        let c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();
}
outer();


//Local scope + Hoisting:
let a = 10;
function test() {
    console.log(a);   //NOTE: first it will search a in his own scope
    var a = 20;
}
test();


//Local Scope + TDZ:
let a = 10;
function test() {
    console.log(a);   
    let a = 20;  
}
test();   //ReferenceError


//Note: Function Parameters are Local scooped.
function add(a, b){
    console.log(a);
    console.log(b);
}
add(10,20); 
console.log(a);  //ReferenceError (bcz Function parameters are local variables of that function)


//function returning object
function test(name, age){
    return { 
            n1: name,
            a1: age
           };
}
console.log(test("Rashmi", 28));


function demo(){
    return {
            age: 28,
            f1: function(){
                console.log("rashmi");
            }
    };
}
let result = demo();
console.log(result);  //{ age: 28, f1: [Function: f1] }
console.log(result.age);
console.log(result.f1); //[Function: f1]
console.log(result.f1()); //rashmi
                          //undefined


//block and outside of block and hoisting