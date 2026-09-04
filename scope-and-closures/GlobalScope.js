//scope: the area of your code where a variable/function is accessible.

//main scopes in js: global scope, local scope: function & block scope, module scope, Lexical scope

//Global scope: (outermost scope of a JS program) a variable declared outdise all functions and blcoks is generally in the global scope.
/*let x = 10;
  const y= 20;
  var z = 30;
  function test(){
 
  } 
  these all can be in global scope */

let a = 10;
function test(){
    console.log(a);
}
test();


let b1 = 10;
function outer(){
    let b2 = 20;
    function inner(){
        let b3 = 30;
        console.log(b1);
        console.log(b2);
        console.log(b3);
    }
    inner();
}
outer();


//Global Scope + Block Scope:
let a1 = 10;
if(true){
    let a2 = 20;
    const a3 = 30;
    var a4 =40;
}
console.log(a1); //10
console.log(a2); //ReferenceError
console.log(a3); //ReferenceError
console.log(a4); //40 (NOTE: BCZ var IS FUNCTION SCOPED NOT BLOCK SCOPED THATS WHY WE CAN ACCESS IT OUT OF A BLOCK)


function demo(){
    let a =10;
}
console.log(a); //ReferenceError