//Closure is a function + uske outer lexical scope ka connection, jiske through function outer variables ko access kar sakta hai, even after outer function finish ho chuka ho.
//means outer function ke sare variables and scopes destory hone ke bad b, inner function apne lexical environment k variables ko yad rkhta h(memory me uske reference ko store rkhta h), ise hi closure khte h

function outer() {
    let name = "Rashmi";
    function inner() {
        console.log(name);
    }
    return inner;   //outer function inner function ko return kr rha h execute ni(agar return inner(); hota to inner func run hota)  NOTE: return inner; = function ko return karna and return inner(); = function ko call karke uska result return karna
}
let fn = outer();  //outer function call hua jo return kr rha h inner function, so here inner function fn ke andar agya
fn();              // means we are exceuting inner function here bcz fn ke andar inner function h



function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
let result = outer();
result();  //1
result();  //2
result();  //3



function counter() {
    let count = 0;
    return function () {
        return ++count;
    };
}
let counter1 = counter();
let counter2 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());